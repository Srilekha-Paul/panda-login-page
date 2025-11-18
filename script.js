// Password Toggle Functionality
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');

if (togglePassword) {
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle eye icon
        this.querySelector('svg').style.opacity = type === 'password' ? '1' : '0.5';
    });
}

// Form Validation
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('#email');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const email = emailInput.value;
        const password = passwordInput.value;
        
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // If validation passes
        alert('Login successful! (This is a demo)');
        
        // In a real application, you would send this data to a server
        console.log('Login attempt:', { email, password: '***' });
    });
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add floating animation to input fields
const inputs = document.querySelectorAll('.form-group input');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.3s ease';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Interactive panda eyes follow mouse
const pupils = document.querySelectorAll('.pupil');
const pandaHead = document.querySelector('.panda-head');

if (pandaHead) {
    document.addEventListener('mousemove', function(e) {
        const rect = pandaHead.getBoundingClientRect();
        const pandaCenterX = rect.left + rect.width / 2;
        const pandaCenterY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - pandaCenterY, e.clientX - pandaCenterX);
        const distance = Math.min(5, Math.hypot(e.clientX - pandaCenterX, e.clientY - pandaCenterY) / 100);
        
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        
        pupils.forEach(pupil => {
            pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

// Add sparkle effect on button hover
const loginButton = document.querySelector('.btn-login');

if (loginButton) {
    loginButton.addEventListener('mouseenter', function() {
        createSparkles(this);
    });
}

function createSparkles(element) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = 'white';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkle 0.6s ease-out forwards';
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = Math.random() * rect.width + 'px';
    sparkle.style.top = Math.random() * rect.height + 'px';
    
    element.style.position = 'relative';
    element.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 600);
}

// Add CSS animation for sparkles
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: scale(0) translateY(0);
        }
        100% {
            opacity: 0;
            transform: scale(1) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Random flower blooming animation
const flowers = document.querySelectorAll('.flower');

function randomBloom() {
    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
    randomFlower.style.animation = 'none';
    setTimeout(() => {
        randomFlower.style.animation = 'grow 1s ease-in-out';
    }, 10);
}

setInterval(randomBloom, 3000);

// Butterfly effect (optional - adds a flying butterfly)
function createButterfly() {
    const butterfly = document.createElement('div');
    butterfly.textContent = '🦋';
    butterfly.style.position = 'absolute';
    butterfly.style.fontSize = '30px';
    butterfly.style.left = '-50px';
    butterfly.style.top = Math.random() * 60 + 20 + '%';
    butterfly.style.animation = 'fly 15s linear';
    butterfly.style.pointerEvents = 'none';
    butterfly.style.zIndex = '5';
    
    const promoSection = document.querySelector('.promo-section');
    if (promoSection) {
        promoSection.appendChild(butterfly);
        
        setTimeout(() => butterfly.remove(), 15000);
    }
}

// Add fly animation
const flyStyle = document.createElement('style');
flyStyle.textContent = `
    @keyframes fly {
        0% {
            left: -50px;
            transform: translateY(0) rotate(0deg);
        }
        25% {
            transform: translateY(-30px) rotate(10deg);
        }
        50% {
            transform: translateY(0) rotate(-10deg);
        }
        75% {
            transform: translateY(-20px) rotate(5deg);
        }
        100% {
            left: calc(100% + 50px);
            transform: translateY(0) rotate(0deg);
        }
    }
`;
document.head.appendChild(flyStyle);

// Create butterfly every 20 seconds
setInterval(createButterfly, 20000);
// Create first butterfly after 5 seconds
setTimeout(createButterfly, 5000);

// Console message
console.log('🐼 Welcome to MyDearProperty! The panda is watching... 🐼');