// Parallax Effects and Animations for Bowery Creative Agency Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize parallax effects
    initParallax();
    
    // Initialize animations
    initAnimations();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize floating elements
    initFloatingElements();
    
    // Initialize particles
    initParticles();
    
    // Initialize navbar scroll effect
    initNavbar();
});

// Parallax Effect Initialization
function initParallax() {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        parallaxLayers.forEach(layer => {
            const speed = layer.classList.contains('layer-1') ? 0.7 :
                          layer.classList.contains('layer-2') ? 0.5 :
                          layer.classList.contains('layer-3') ? 0.3 : 0.1;
            
            const yPos = -(scrollPosition * speed);
            layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        });
    });
    
    // Parallax mouse movement effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            
            const moveX = (mouseX - (windowWidth / 2)) * 0.01;
            const moveY = (mouseY - (windowHeight / 2)) * 0.01;
            
            const layers = hero.querySelectorAll('.parallax-layer');
            layers.forEach(layer => {
                const speed = layer.classList.contains('layer-1') ? 2 :
                              layer.classList.contains('layer-2') ? 1.5 :
                              layer.classList.contains('layer-3') ? 1 : 0.5;
                
                layer.style.transform = `translate3d(${moveX * speed}px, ${moveY * speed}px, 0px)`;
            });
        });
    }
}

// Animation Initialization
function initAnimations() {
    // Fade-in animations on scroll
    const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    // Add staggered delay to multiple elements
    const staggeredGroups = document.querySelectorAll('.brands-container, .ai-models');
    staggeredGroups.forEach(group => {
        const items = group.querySelectorAll('.fade-in');
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
}

// Custom Cursor Initialization
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) return;
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add active class on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .brand-card, .ai-model-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('active');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('active');
        });
    });
}

// Floating Elements Initialization
function initFloatingElements() {
    const floatingContainer = document.querySelector('.floating-elements');
    if (!floatingContainer) return;
    
    // Create floating elements
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        
        // Random size between 10px and 50px
        const size = Math.random() * 40 + 10;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        
        // Random position
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration and delay
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `${delay}s`;
        
        floatingContainer.appendChild(element);
    }
}

// Particles Background Initialization
function initParticles() {
    const particlesContainers = document.querySelectorAll('.particles-container');
    if (!particlesContainers.length) return;
    
    particlesContainers.forEach(container => {
        // Create particles
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random size between 2px and 6px
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random opacity
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            container.appendChild(particle);
        }
        
        // Animate particles on mousemove
        container.closest('.parallax-section').addEventListener('mousemove', function(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            
            const moveX = (mouseX - (windowWidth / 2)) * 0.01;
            const moveY = (mouseY - (windowHeight / 2)) * 0.01;
            
            const particles = container.querySelectorAll('.particle');
            particles.forEach(particle => {
                const speed = Math.random() * 2;
                particle.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
            });
        });
    });
}

// Navbar Scroll Effect Initialization
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scroll for navigation links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
}
