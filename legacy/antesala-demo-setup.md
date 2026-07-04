# Antesala Reservations - Demo Mode Setup

This guide shows you how to convert your Antesala Reservations page into a demo page.

## 1. Add Demo Banner (HTML)

Add this HTML at the top of your `<body>` tag in `index.html`, right after the opening `<body>` tag:

```html
<!-- Demo Banner -->
<div id="demo-banner" style="background: linear-gradient(135deg, #ff6b6b, #ee5a6f); color: white; padding: 12px 20px; text-align: center; font-weight: 600; box-shadow: 0 2px 10px rgba(0,0,0,0.2); position: relative; z-index: 10000;">
    <i class="fas fa-info-circle"></i> This is a <strong>DEMO</strong> version. All data is reset on page refresh and sample reservations are provided for demonstration purposes.
</div>
```

## 2. Add Demo Mode JavaScript

Add this JavaScript code to your `script.js` file, at the very beginning (before any other code):

```javascript
// ============================================
// DEMO MODE - Clear localStorage on page load
// ============================================
(function() {
    // Clear all existing reservations on page load
    if (localStorage.getItem('reservations')) {
        localStorage.removeItem('reservations');
    }
    
    // Set demo mode flag
    localStorage.setItem('demoMode', 'true');
    
    // Sample demo reservations data
    const sampleReservations = [
        {
            id: 'demo-1',
            clientName: 'John Smith',
            clientEmail: 'john.smith@example.com',
            clientPhone: '555-0101',
            eventDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
            eventTime: '18:00',
            duration: 4,
            room: 'grand-hall',
            guestCount: 50,
            foodService: 'buffet',
            beveragePackage: 'full-bar',
            additionalServices: ['audio-visual', 'decorations'],
            totalCost: 2850,
            createdAt: new Date().toISOString()
        },
        {
            id: 'demo-2',
            clientName: 'Sarah Johnson',
            clientEmail: 'sarah.j@example.com',
            clientPhone: '555-0102',
            eventDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 14 days from now
            eventTime: '19:00',
            duration: 3,
            room: 'intimate-room',
            guestCount: 25,
            foodService: 'individual-plates',
            beveragePackage: 'beer-wine',
            additionalServices: ['decorations'],
            totalCost: 1525,
            createdAt: new Date().toISOString()
        },
        {
            id: 'demo-3',
            clientName: 'Michael Chen',
            clientEmail: 'm.chen@example.com',
            clientPhone: '555-0103',
            eventDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 21 days from now
            eventTime: '17:00',
            duration: 5,
            room: 'outdoor-terrace',
            guestCount: 80,
            foodService: 'cocktail-reception',
            beveragePackage: 'premium-bar',
            additionalServices: ['audio-visual', 'decorations', 'waitstaff'],
            totalCost: 4450,
            createdAt: new Date().toISOString()
        }
    ];
    
    // Load sample reservations if none exist
    if (!localStorage.getItem('demoReservationsLoaded')) {
        localStorage.setItem('reservations', JSON.stringify(sampleReservations));
        localStorage.setItem('demoReservationsLoaded', 'true');
    }
    
    // Optional: Add a notice when user tries to save
    const originalSaveFunction = window.saveReservation; // Adjust if your function has a different name
    if (typeof originalSaveFunction === 'function') {
        window.saveReservation = function(...args) {
            // Show demo notice
            alert('Demo Mode: Your reservation will be saved temporarily but will be cleared on page refresh.');
            return originalSaveFunction.apply(this, args);
        };
    }
})();
```

## 3. Add Demo Banner Styling (CSS)

Add this CSS to your `styles.css` file:

```css
/* Demo Banner Styles */
#demo-banner {
    background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
    color: white;
    padding: 12px 20px;
    text-align: center;
    font-weight: 600;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    position: relative;
    z-index: 10000;
    animation: slideDown 0.5s ease-out;
}

#demo-banner i {
    margin-right: 8px;
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Optional: Add a subtle indicator to the form */
.demo-mode-indicator {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(255, 107, 107, 0.9);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.85rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 9999;
}
```

## 4. Enhanced Demo Mode (Optional - More Advanced)

If you want to make it even more demo-friendly, add this enhanced version that prevents permanent saves:

```javascript
// Enhanced Demo Mode - Prevents permanent saves
(function() {
    // Override localStorage.setItem for reservations
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function(key, value) {
        if (key === 'reservations' && localStorage.getItem('demoMode') === 'true') {
            // Allow setting but mark as demo
            originalSetItem.call(this, key, value);
            originalSetItem.call(this, 'isDemoData', 'true');
        } else {
            originalSetItem.call(this, key, value);
        }
    };
    
    // Clear demo data on page unload (optional - comment out if you want data to persist during session)
    // window.addEventListener('beforeunload', function() {
    //     if (localStorage.getItem('demoMode') === 'true') {
    //         localStorage.removeItem('reservations');
    //         localStorage.removeItem('isDemoData');
    //     }
    // });
})();
```

## 5. Quick Setup Instructions

1. **Open your Antesala Reservations project** (the one hosted at antesala-reservations.vercel.app)

2. **Add the demo banner HTML** to `index.html` (right after `<body>`)

3. **Add the demo mode JavaScript** to `script.js` (at the very beginning)

4. **Add the CSS styles** to `styles.css`

5. **Test it**: 
   - Open the page
   - You should see the demo banner
   - Sample reservations should appear
   - Any new reservations you create will be cleared on refresh

6. **Deploy** your changes to Vercel

## Alternative: Simple Version

If you just want a simple demo banner without sample data, use this minimal version:

```javascript
// Simple Demo Mode - Just clear data on load
window.addEventListener('load', function() {
    if (confirm('This is a DEMO version. All data will be cleared. Continue?')) {
        localStorage.clear();
    }
});
```

---

**Note**: Make sure to adjust function names and variable names to match your actual Antesala Reservations code structure.

