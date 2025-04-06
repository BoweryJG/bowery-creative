// Animations for Bowery Creative Agency Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize hover animations
    initHoverAnimations();
    
    // Initialize brand card animations
    initBrandCards();
    
    // Initialize AI model card animations
    initAIModelCards();
});

// Scroll Animations Initialization
function initScrollAnimations() {
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        // Get current scroll position
        const scrollPosition = window.scrollY;
        
        // Animate hero section based on scroll
        const hero = document.querySelector('.hero');
        if (hero) {
            const heroHeight = hero.offsetHeight;
            const heroOpacity = 1 - (scrollPosition / heroHeight * 1.5);
            
            // Apply opacity change to hero content
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent && heroOpacity > 0) {
                heroContent.style.opacity = heroOpacity;
                heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            }
        }
        
        // Animate section headers on scroll
        const sections = document.querySelectorAll('.parallax-section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            // Check if section is in viewport
            if (scrollPosition > sectionTop - window.innerHeight * 0.8 && 
                scrollPosition < sectionTop + sectionHeight) {
                
                // Add active class to section
                section.classList.add('active');
                
                // Get section ID for specific animations
                const sectionId = section.getAttribute('id');
                
                // Apply specific animations based on section ID
                if (sectionId === 'brands') {
                    animateBrandShowcase();
                } else if (sectionId === 'ai-automation') {
                    animateAIAutomation();
                }
            }
        });
    });
}

// Hover Animations Initialization
function initHoverAnimations() {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add hover effects to navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--accent');
        });
        
        link.addEventListener('mouseleave', function() {
            // Reset to original color based on navbar state
            const navbar = document.querySelector('.navbar');
            if (navbar.classList.contains('scrolled')) {
                this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--dark');
            } else {
                this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--white');
            }
        });
    });
}

// Brand Cards Animation Initialization
function initBrandCards() {
    const brandCards = document.querySelectorAll('.brand-card');
    
    brandCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            
            // Animate logo
            const logo = this.querySelector('.brand-logo');
            if (logo) {
                logo.style.transform = 'scale(1.1)';
                logo.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
            
            // Reset logo animation
            const logo = this.querySelector('.brand-logo');
            if (logo) {
                logo.style.transform = 'scale(1)';
            }
        });
    });
}

// AI Model Cards Animation Initialization
function initAIModelCards() {
    const aiModelCards = document.querySelectorAll('.ai-model-card');
    
    aiModelCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            
            // Animate icon
            const icon = this.querySelector('.ai-model-icon');
            if (icon) {
                icon.style.transform = 'rotate(10deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            
            // Reset icon animation
            const icon = this.querySelector('.ai-model-icon');
            if (icon) {
                icon.style.transform = 'rotate(0)';
            }
        });
    });
}

// Brand Showcase Animation
function animateBrandShowcase() {
    const brandCards = document.querySelectorAll('.brand-card');
    
    brandCards.forEach((card, index) => {
        // Add staggered animation
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 150);
    });
}

// AI Automation Animation
function animateAIAutomation() {
    const aiModelCards = document.querySelectorAll('.ai-model-card');
    
    aiModelCards.forEach((card, index) => {
        // Add staggered animation
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 150);
    });
}
