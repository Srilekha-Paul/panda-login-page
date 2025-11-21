// Password Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            // Toggle password visibility
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle eye icon
            const svg = this.querySelector('svg');
            if (type === 'text') {
                svg.innerHTML = `
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                `;
            } else {
                svg.innerHTML = `
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                `;
            }
        });
    }
    
    // Form Submission Handler
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Basic validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Password length validation
            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }
            
            // Simulate login (replace with actual API call)
            console.log('Login attempt:', { email, password: '***' });
            alert('Login functionality would be implemented here!\n\nEmail: ' + email);
            
            // You can add your actual login logic here
            // Example: fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
        });
    }
    
    // Add hover effect to panda
    const panda = document.querySelector('.panda');
    if (panda) {
        panda.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        panda.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Animate panda eyes to follow cursor
    const pandaContainer = document.querySelector('.panda-container');
    if (pandaContainer) {
        document.addEventListener('mousemove', function(e) {
            const leftPupil = document.querySelector('.panda circle[cx="172"]');
            const rightPupil = document.querySelector('.panda circle[cx="228"]');
            
            if (leftPupil && rightPupil) {
                const rect = pandaContainer.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 3;
                
                const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
                const distance = Math.min(3, Math.hypot(e.clientX - centerX, e.clientY - centerY) / 100);
                
                const moveX = Math.cos(angle) * distance;
                const moveY = Math.sin(angle) * distance;
                
                leftPupil.setAttribute('cx', 172 + moveX);
                leftPupil.setAttribute('cy', 175 + moveY);
                rightPupil.setAttribute('cx', 228 + moveX);
                rightPupil.setAttribute('cy', 175 + moveY);
            }
        });
    }
    
    // Add smooth scroll animation for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Input field focus animation
    const inputs = document.querySelectorAll('.form-group input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, .btn-login, .btn-post, .btn-prime');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Console welcome message
    console.log('%cMyDearProperty Login Page', 'color: #4caf50; font-size: 20px; font-weight: bold;');
    console.log('%cConvert Dreams into Reality', 'color: #666; font-size: 14px;');
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);