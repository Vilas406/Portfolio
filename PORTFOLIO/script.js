// ============================================
// MODERN PORTFOLIO - VILAS A B
// Professional Full Stack Developer
// ============================================

// DOM Elements
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const loadingScreen = document.querySelector('.loading-screen');
const loadingProgress = document.querySelector('.loading-progress');

// State Management
let currentSection = 'home';
let isLoading = true;
let scrollProgress = 0;
let observer = null;

// Initialize Portfolio
document.addEventListener('DOMContentLoaded', function() {
    initPortfolio();
});

function initPortfolio() {
    console.log('🚀 Initializing Modern Portfolio...');

    // Start loading sequence
    simulateLoading();

    // Setup all interactions after loading
    setTimeout(() => {
        setupNavigation();
        setupScrollEffects();
        setupIntersectionObserver();
        setupTypingEffect();
        setupParticleSystem();
        setupCountAnimations(); // Initialize count animations
        setupHoverEffects();
        setupExperienceAnimations();
        setupEducationInteractions();
        setupContactMethods();

        // Handle window events
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        console.log('✅ Portfolio initialization complete');
    }, 2500);
}

// Navigation Portal System
function setupNavigationPortal() {
    navNodes.forEach((node, index) => {
        node.addEventListener('click', () => {
            const section = node.dataset.section;
            activateSection(section);
            triggerGlitchEffect();
            playSound('navigate');
        });

        // Cyberpunk hover effects
        node.addEventListener('mouseenter', () => {
            node.style.transform = `scale(1.2)`;
            node.style.boxShadow = `0 0 30px ${getNodeColor(index)}`;
            node.style.borderColor = getNodeColor(index);
            createNodeParticles(node);
        });

        node.addEventListener('mouseleave', () => {
            if (!node.classList.contains('active')) {
                node.style.transform = '';
                node.style.boxShadow = '';
                node.style.borderColor = '';
            }
        });
    });

    // Setup action buttons
    actionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            activateSection(target);
            triggerEnergyPulse(btn);
            playSound('action');
        });
    });

    // Setup resume buttons
    setupResumeButtons();
}

function getNodeColor(index) {
    const colors = ['#00ffff', '#ff00ff', '#39ff14', '#0080ff', '#ff0040'];
    return colors[index % colors.length];
}

function activateSection(sectionId) {
    // Update navigation
    navNodes.forEach(node => {
        node.classList.remove('active');
        if (node.dataset.section === sectionId) {
            node.classList.add('active');
            node.style.boxShadow = `0 0 30px ${getNodeColor(Array.from(navNodes).indexOf(node))}`;
        }
    });

    // Update current section
    currentSection = sectionId;

    // Scroll to section with cyberpunk effect
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Trigger section-specific animations
    triggerSectionAnimation(sectionId);
}

function setupResumeButtons() {
    // Download PDF button
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Simulate PDF download
            showQuantumNotification('GENERATING PDF RESUME...', 'success');
            triggerEnergyPulse(downloadBtn);

            setTimeout(() => {
                // In a real implementation, this would trigger a PDF download
                // For now, we'll show a success message
                showQuantumNotification('PDF DOWNLOAD STARTED', 'success');
            }, 2000);
        });
    }

    // Print button
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            showQuantumNotification('OPENING PRINT DIALOG...', 'success');
            triggerEnergyPulse(printBtn);

            setTimeout(() => {
                window.print();
            }, 1000);
        });
    }

    // Share button
    const shareBtn = document.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                showQuantumNotification('PROFILE LINK COPIED TO CLIPBOARD', 'success');
                triggerEnergyPulse(shareBtn);
            }).catch(() => {
                showQuantumNotification('FAILED TO COPY LINK', 'error');
            });
        });
    }
}

function createNodeParticles(element) {
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'node-particle';
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: ${getNodeColor(Math.floor(Math.random() * 5))};
            border-radius: 50%;
            pointer-events: none;
            animation: particle-explode 1s ease-out forwards;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 10;
        `;
        element.appendChild(particle);

        setTimeout(() => particle.remove(), 1000);
    }
}

// Identity Cube Interaction
function setupCubeInteraction() {
    if (!cubeElement) return;

    cubeElement.addEventListener('click', () => {
        triggerCubeRotation();
        playSound('cube');
    });

    // Mouse interaction
    document.addEventListener('mousemove', (e) => {
        if (currentSection === 'home') {
            const rect = cubeElement.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const rotateX = (e.clientY - centerY) / 10;
            const rotateY = (e.clientX - centerX) / 10;

            cubeElement.style.transform = `translateZ(150px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });
}

function triggerCubeRotation() {
    cubeElement.style.animation = 'none';
    setTimeout(() => {
        cubeElement.style.animation = 'cube-rotate 2s ease-in-out';
    }, 10);
}

// Skill Matrix Visualization
function setupSkillMatrix() {
    skillNodes.forEach((node, index) => {
        node.addEventListener('mouseenter', () => {
            activateSkillNode(node);
        });

        node.addEventListener('mouseleave', () => {
            deactivateSkillNode(node);
        });

        node.addEventListener('click', () => {
            triggerSkillAnimation(node);
            playSound('skill');
        });

        // Auto-activate skills on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && currentSection === 'skills') {
                    setTimeout(() => {
                        triggerSkillAnimation(node);
                    }, index * 200);
                }
            });
        });

        observer.observe(node);
    });
}

function activateSkillNode(node) {
    const level = node.dataset.level;
    const orb = node.querySelector('.node-orb');

    orb.style.transform = 'scale(1.2)';
    orb.style.boxShadow = `0 0 30px ${getSkillColor(level)}`;

    // Show level rings
    const rings = orb.querySelectorAll('.ring');
    rings.forEach((ring, i) => {
        setTimeout(() => {
            ring.style.opacity = '1';
            ring.style.transform = 'scale(1)';
        }, i * 100);
    });
}

function deactivateSkillNode(node) {
    const orb = node.querySelector('.node-orb');
    orb.style.transform = '';
    orb.style.boxShadow = '';

    const rings = orb.querySelectorAll('.ring');
    rings.forEach(ring => {
        ring.style.opacity = '0';
        ring.style.transform = 'scale(0.8)';
    });
}

function triggerSkillAnimation(node) {
    node.style.animation = 'none';
    setTimeout(() => {
        node.style.animation = 'skill-pulse 0.6s ease-out';
    }, 10);
}

function getSkillColor(level) {
    const colors = ['#ff0040', '#ff8000', '#ffff00', '#80ff00', '#00ff80', '#0080ff'];
    return colors[Math.floor((level / 100) * colors.length)] || colors[0];
}

// Holographic Archive
function setupHologramArchive() {
    hologramPanels.forEach((panel, index) => {
        panel.addEventListener('mouseenter', () => {
            activateHologram(panel);
        });

        panel.addEventListener('mouseleave', () => {
            deactivateHologram(panel);
        });

        // Auto-activate on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && currentSection === 'projects') {
                    setTimeout(() => {
                        activateHologram(panel);
                        setTimeout(() => deactivateHologram(panel), 2000);
                    }, index * 500);
                }
            });
        });

        observer.observe(panel);
    });
}

function activateHologram(panel) {
    panel.style.transform = 'scale(1.05) translateY(-10px)';
    panel.style.boxShadow = '0 20px 40px rgba(0, 255, 255, 0.3)';

    const rays = panel.querySelectorAll('.ray');
    rays.forEach((ray, i) => {
        setTimeout(() => {
            ray.style.opacity = '1';
            ray.style.transform = 'scaleY(1)';
        }, i * 200);
    });

    const scanlines = panel.querySelector('.holo-scanlines');
    if (scanlines) {
        scanlines.style.animation = 'scan 2s linear infinite';
    }
}

function deactivateHologram(panel) {
    panel.style.transform = '';
    panel.style.boxShadow = '';

    const rays = panel.querySelectorAll('.ray');
    rays.forEach(ray => {
        ray.style.opacity = '0';
        ray.style.transform = 'scaleY(0)';
    });
}

// Quantum Communication System
function setupQuantumCommunication() {
    if (!quantumForm) return;

    quantumForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (validateQuantumForm()) {
            await transmitQuantumMessage();
        }
    });

    // Real-time quantum validation
    const inputs = quantumForm.querySelectorAll('.quantum-input, .quantum-textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            activateQuantumField(input);
        });

        input.addEventListener('blur', () => {
            deactivateQuantumField(input);
        });

        input.addEventListener('input', () => {
            processQuantumInput(input);
        });
    });
}

function validateQuantumForm() {
    let isValid = true;
    const inputs = quantumForm.querySelectorAll('.quantum-input, .quantum-textarea');

    inputs.forEach(input => {
        if (!validateQuantumField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

function validateQuantumField(field) {
    const value = field.value.trim();
    let isValid = true;

    if (!value) {
        triggerQuantumError(field);
        isValid = false;
    }

    return isValid;
}

function activateQuantumField(field) {
    field.style.borderColor = '#00ffff';
    field.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';

    const energy = field.parentNode.querySelector('.input-energy, .textarea-energy');
    if (energy) {
        energy.style.opacity = '1';
        energy.style.animation = 'energy-pulse 1s ease-in-out infinite';
    }
}

function deactivateQuantumField(field) {
    field.style.borderColor = '';
    field.style.boxShadow = '';

    const energy = field.parentNode.querySelector('.input-energy, .textarea-energy');
    if (energy) {
        energy.style.opacity = '0';
        energy.style.animation = '';
    }
}

function processQuantumInput(field) {
    // Add typing effect
    if (field.value.length > 0) {
        field.style.textShadow = '0 0 5px #00ffff';
    } else {
        field.style.textShadow = '';
    }
}

async function transmitQuantumMessage() {
    const submitBtn = quantumForm.querySelector('.transmission-btn');
    const originalText = submitBtn.querySelector('.btn-text').textContent;

    // Activate transmission sequence
    submitBtn.querySelector('.btn-text').textContent = 'TRANSMITTING...';
    submitBtn.style.animation = 'transmission-pulse 1s ease-in-out infinite';
    triggerTransmissionEffect();

    try {
        // Simulate quantum transmission
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Success sequence
        showQuantumNotification('TRANSMISSION SUCCESSFUL', 'success');
        quantumForm.reset();

    } catch (error) {
        showQuantumNotification('TRANSMISSION FAILED', 'error');
    } finally {
        submitBtn.querySelector('.btn-text').textContent = originalText;
        submitBtn.style.animation = '';
    }
}

function triggerTransmissionEffect() {
    // Create transmission particles
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createTransmissionParticle();
        }, i * 50);
    }
}

function createTransmissionParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #00ffff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: 50%;
        top: 50%;
        animation: transmission-burst 1s ease-out forwards;
    `;

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        ${type === 'success'
            ? 'background: linear-gradient(135deg, #4ecdc4, #44a08d); border-color: rgba(78, 205, 196, 0.3);'
            : 'background: linear-gradient(135deg, #ff6b6b, #ee5a52); border-color: rgba(255, 107, 107, 0.3);'
        }
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Scroll Animations
function setupScrollAnimations() {
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.about-content, .skill-category, .project-card, .contact-content');
    animateElements.forEach(element => {
        animateOnScroll.observe(element);
    });
}

// Typing Effect for Hero Subtitle
function setupTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.borderRight = '2px solid #ffd700';

    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            subtitle.style.borderRight = 'none';
        }
    };

    // Start typing after a delay
    setTimeout(typeWriter, 1000);
}

// Scroll Progress Indicator
function setupScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #ff6b6b, #ff8e53, #ffd700, #4ecdc4, #45b7d1, #a855f7);
        background-size: 200% 100%;
        animation: rainbow-flow 3s linear infinite;
        z-index: 10000;
        transition: width 0.3s ease;
        box-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
    `;

    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Colorful Particle Effects
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        const colors = ['#ff6b6b', '#ff8e53', '#ffd700', '#4ecdc4', '#45b7d1', '#a855f7', '#f472b6'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: ${color};
            border-radius: 50%;
            top: ${Math.random() * 100}vh;
            left: ${Math.random() * 100}vw;
            opacity: ${Math.random() * 0.5 + 0.1};
            animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
            box-shadow: 0 0 ${Math.random() * 10 + 5}px ${color};
        `;

        particlesContainer.appendChild(particle);
    }

    document.body.appendChild(particlesContainer);
}

const particleStyle = document.createElement('style');
particleStyle.textContent = `
@keyframes float-particle {
    0% {
        transform: translateY(0px) translateX(0px) rotate(0deg);
        opacity: 0.1;
    }
    50% {
        opacity: 0.3;
    }
    100% {
        transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(particleStyle);

// Parallax Effect for Hero Background
function setupParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization - throttle scroll events
const throttledScrollHandler = debounce(() => {
    // Add any scroll-based optimizations here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for additional animations
const additionalStyles = `
@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

body.loaded {
    animation: fadeInUp 0.5s ease;
}
`;

// Colorful Hover Effects
function setupColorfulHoverEffects() {
    // Add colorful hover effects to various elements
    const addHoverEffect = (selector, colors) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.addEventListener('mouseenter', () => {
                element.style.boxShadow = `0 0 30px ${colors[index % colors.length]}40`;
                element.style.borderColor = colors[index % colors.length];
            });

            element.addEventListener('mouseleave', () => {
                element.style.boxShadow = '';
                element.style.borderColor = '';
            });
        });
    };

    // Apply colorful hover effects
    addHoverEffect('.project-card', ['#ff6b6b', '#ff8e53', '#ffd700', '#4ecdc4']);
    addHoverEffect('.skill-item', ['#45b7d1', '#a855f7', '#f472b6', '#ff6b6b']);
    addHoverEffect('.stat-item', ['#4ecdc4', '#45b7d1', '#a855f7']);
}

// ============================================
// PORTFOLIO FUNCTIONS
// ============================================

// Loading Sequence
function simulateLoading() {
    const progressBar = document.getElementById('loadingProgress');
    const loadingText = document.querySelector('.loading-text');
    const loadingScreen = document.querySelector('.loading-screen');

    let progress = 0;
    const messages = [
        'Initializing Portfolio...',
        'Loading assets...',
        'Setting up interactions...',
        'Almost ready...'
    ];

    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            setTimeout(() => {
                loadingScreen.classList.add('loaded');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 500);
        }

        progressBar.style.width = progress + '%';

        // Update loading message
        const messageIndex = Math.floor((progress / 100) * messages.length);
        if (messageIndex < messages.length) {
            loadingText.textContent = messages[messageIndex];
        }
    }, 200);
}

// Navigation Setup
function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Close mobile menu
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Scroll Effects
function setupScrollEffects() {
    const scrollProgress = document.querySelector('.progress-bar');

    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections and major elements
    const animateElements = document.querySelectorAll('section, .experience-card, .education-card, .info-card, .stat-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Typing Effect for Hero
function setupTypingEffect() {
    const roleText = document.getElementById('roleText');
    if (!roleText) return;

    const roles = [
        'Full Stack Developer',
        'Software Engineer',
        'Problem Solver',
        'Tech Innovator'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            roleText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            roleText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(typeWriter, typeSpeed);
    }

    setTimeout(typeWriter, 1000);
}

// Particle System
function setupParticleSystem() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;
    document.body.appendChild(particleContainer);

    // Create floating particles
    for (let i = 0; i < 20; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    const colors = ['#2563eb', '#6366f1', '#8b5cf6', '#ec4899', '#f97316'];

    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 6 + 2}px;
        height: ${Math.random() * 6 + 2}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        opacity: ${Math.random() * 0.6 + 0.2};
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        animation: float-particle ${Math.random() * 20 + 15}s linear infinite;
        box-shadow: 0 0 ${Math.random() * 10 + 5}px currentColor;
    `;

    container.appendChild(particle);

    // Remove and recreate particle after animation
    setTimeout(() => {
        particle.remove();
        createParticle(container);
    }, (Math.random() * 20 + 15) * 1000);
}

// Count Up Animation for Stats
function setupCountAnimations() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const options = {
        threshold: 0.7 // Trigger when 70% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValueText = target.textContent.replace('+', ''); // Remove '+' if present
                const endValue = parseInt(endValueText, 10);
                const duration = 2000; // 2 seconds
                let startTimestamp = null;

                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    target.textContent = Math.floor(progress * endValue) + (endValueText.includes('+') ? '+' : '');
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };

                window.requestAnimationFrame(step);
                observer.unobserve(target); // Stop observing once animated
            }
        });
    }, options);

    statNumbers.forEach(number => {
        observer.observe(number);
    });
}

// Hover Effects
function setupHoverEffects() {
    // Add hover effects to various elements
    const hoverElements = document.querySelectorAll('.btn, .info-card, .stat-card, .experience-card, .cert-item, .goal-item');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-5px)';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translateY(0)';
        });
    });
}

// Experience Section Animations
function setupExperienceAnimations() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateTimelineItem(entry.target);
            }
        });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        experienceObserver.observe(item);
    });
}

function animateTimelineItem(item) {
    const marker = item.querySelector('.timeline-marker');
    const card = item.querySelector('.experience-card');

    // Animate marker
    marker.style.animation = 'marker-pulse 0.6s ease-out';

    // Animate card with delay
    setTimeout(() => {
        card.style.animation = 'slide-in-card 0.8s ease-out';
        card.classList.add('visible');
    }, 300);
}

// Education Section Interactions
function setupEducationInteractions() {
    const certItems = document.querySelectorAll('.cert-item');
    const courseTags = document.querySelectorAll('.course-tag');

    certItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px) scale(1.02)';
            item.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.2)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0) scale(1)';
            item.style.boxShadow = 'none';
        });
    });

    courseTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.1)';
            tag.style.boxShadow = '0 5px 15px rgba(37, 99, 235, 0.3)';
        });

        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1)';
            tag.style.boxShadow = 'none';
        });
    });
}

// Contact Methods Setup
function setupContactMethods() {
    const contactMethods = document.querySelectorAll('.contact-method');

    contactMethods.forEach(method => {
        method.addEventListener('click', () => {
            const icon = method.querySelector('i');
            const text = method.querySelector('span').textContent;

            if (icon.classList.contains('fa-envelope')) {
                // Open email client
                window.location.href = `mailto:${text}`;
                showQuantumNotification('Opening email client...', 'success');
            } else if (icon.classList.contains('fa-phone')) {
                // Open phone dialer
                window.location.href = `tel:${text}`;
                showQuantumNotification('Opening phone dialer...', 'success');
            } else if (icon.classList.contains('fa-map-marker-alt')) {
                // Open Google Maps
                const locationQuery = encodeURIComponent(text);
                window.open(`https://www.google.com/maps/search/?api=1&query=${locationQuery}`, '_blank');
                showQuantumNotification('Opening location in Google Maps...', 'success');
            }

            // Add click animation
            method.style.animation = 'none';
            setTimeout(() => {
                method.style.animation = 'click-feedback 0.3s ease-out';
            }, 10);
        });
    });
}


// Scroll Handler
function handleScroll() {
    // Update active navigation link based on scroll position
    updateActiveNavLink();

    // Parallax effects for hero section
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < hero.offsetHeight) {
        const rate = scrolled * -0.5;
        const shapes = document.querySelectorAll('.hero-shapes .shape');
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${rate * speed}px)`;
        });
    }
}

// Update Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Resize Handler
function handleResize() {
    // Update any responsive calculations if needed
    if (observer) {
        // Re-observe elements if needed
    }
}

// ============================================
// ADDITIONAL FUNCTIONS
// ============================================
function createTransmissionParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #00ffff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: 50%;
        top: 50%;
        animation: transmission-burst 1s ease-out forwards;
        box-shadow: 0 0 10px #00ffff;
    `;

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}

function triggerQuantumError(field) {
    field.style.borderColor = '#ff0040';
    field.style.boxShadow = '0 0 20px rgba(255, 0, 64, 0.5)';
    field.style.animation = 'error-pulse 0.5s ease-in-out';

    setTimeout(() => {
        field.style.borderColor = '';
        field.style.boxShadow = '';
        field.style.animation = '';
    }, 1000);
}

function triggerEnergyPulse(element) {
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'energy-pulse 0.6s ease-out';
    }, 10);
}

// Enhanced Scroll Effects with Cyberpunk Features
function setupScrollEffects() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                activateSection(sectionId);
                triggerSectionAnimation(sectionId);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Enhanced parallax with cyberpunk elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        // Apply parallax to background elements
        const cosmicBg = document.querySelector('.cosmic-bg');
        if (cosmicBg) {
            cosmicBg.style.transform = `translateY(${rate * 0.1}px)`;
        }

        // Dynamic nebula movement
        const nebula = document.querySelector('.nebula');
        if (nebula) {
            nebula.style.transform = `translateY(${rate * 0.05}px) rotate(${scrolled * 0.01}deg)`;
        }
    });
}

// Cyberpunk Notification System
function showQuantumNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `quantum-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-icon">${type === 'success' ? '⚡' : '⚠️'}</div>
        <div class="notification-text">${message}</div>
        <div class="notification-energy"></div>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(0, 0, 0, 0.9);
        border: 2px solid ${type === 'success' ? '#39ff14' : '#ff0040'};
        border-radius: 8px;
        padding: 1rem 1.5rem;
        color: ${type === 'success' ? '#39ff14' : '#ff0040'};
        font-family: 'JetBrains Mono', monospace;
        z-index: 10000;
        animation: notification-slide 0.5s ease-out;
        backdrop-filter: blur(20px);
        box-shadow: 0 0 30px ${type === 'success' ? 'rgba(57, 255, 20, 0.5)' : 'rgba(255, 0, 64, 0.5)'};
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'notification-fade 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Sound Effects (visual feedback)
function playSound(type) {
    createSoundWave(type);
}

function createSoundWave(type) {
    const wave = document.createElement('div');
    const colors = {
        'navigate': '#00ffff',
        'action': '#ff00ff',
        'cube': '#39ff14',
        'skill': '#0080ff'
    };

    wave.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid ${colors[type] || '#00ffff'};
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        animation: sound-wave 1s ease-out forwards;
        pointer-events: none;
    `;

    document.body.appendChild(wave);
    setTimeout(() => wave.remove(), 1000);
}

// Enhanced Section Animations
function triggerSectionAnimation(sectionId) {
    switch(sectionId) {
        case 'home':
            triggerCubeRotation();
            break;
        case 'about':
            activateNeuralNetwork();
            break;
        case 'skills':
            activateSkillMatrix();
            break;
        case 'resume':
            activateResumeMatrix();
            break;
        case 'projects':
            activateHolograms();
            break;
        case 'contact':
            activateQuantumInterface();
            break;
    }
}

function activateResumeMatrix() {
    const resumePanels = document.querySelectorAll('.resume-panel');
    resumePanels.forEach((panel, index) => {
        setTimeout(() => {
            panel.style.animation = 'resume-panel-activate 0.8s ease-out';
            panel.classList.add('panel-active');
        }, index * 200);
    });
}

function activateNeuralNetwork() {
    const neurons = document.querySelectorAll('.stat-neuron');
    neurons.forEach((neuron, index) => {
        setTimeout(() => {
            neuron.style.animation = 'neuron-activate 1s ease-out';
        }, index * 300);
    });
}

function activateSkillMatrix() {
    skillNodes.forEach((node, index) => {
        setTimeout(() => {
            triggerSkillAnimation(node);
        }, index * 100);
    });
}

function activateHolograms() {
    hologramPanels.forEach((panel, index) => {
        setTimeout(() => {
            activateHologram(panel);
            setTimeout(() => deactivateHologram(panel), 1500);
        }, index * 200);
    });
}

function activateQuantumInterface() {
    const interface = document.querySelector('.quantum-communicator');
    if (interface) {
        interface.style.animation = 'interface-activate 1s ease-out';
    }
}

// Add CSS for additional cyberpunk animations
const cyberpunkCSS = `
@keyframes particle-explode {
    0% { transform: scale(0) rotate(0deg); opacity: 1; }
    100% { transform: scale(2) rotate(180deg); opacity: 0; }
}

@keyframes skill-pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes transmission-burst {
    0% { transform: scale(0) rotate(0deg); opacity: 1; }
    100% { transform: scale(3) rotate(720deg); opacity: 0; }
}

@keyframes particle-drift {
    0% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -20px) rotate(120deg); }
    66% { transform: translate(-20px, 40px) rotate(240deg); }
    100% { transform: translate(0, 0) rotate(360deg); }
}

@keyframes energy-stream {
    0% { opacity: 0; transform: scaleY(0); }
    50% { opacity: 1; transform: scaleY(1); }
    100% { opacity: 0; transform: scaleY(0); }
}

@keyframes body-glitch {
    0%, 100% { transform: translate(0); }
    25% { transform: translate(-2px, 2px); }
    50% { transform: translate(2px, -2px); }
    75% { transform: translate(-1px, 1px); }
}

@keyframes text-glitch {
    0%, 100% { transform: translate(0); text-shadow: none; }
    25% { transform: translate(-1px, 1px); text-shadow: 1px 0 #ff00ff, -1px 0 #00ffff; }
    50% { transform: translate(1px, -1px); text-shadow: -1px 0 #ff00ff, 1px 0 #00ffff; }
    75% { transform: translate(-0.5px, 0.5px); text-shadow: 0.5px 0 #ff00ff, -0.5px 0 #00ffff; }
}

@keyframes sound-wave {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(5); opacity: 0; }
}

@keyframes neuron-activate {
    0% { transform: scale(0.8); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
}

@keyframes interface-activate {
    0% { opacity: 0; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1.05); }
    100% { opacity: 1; transform: scale(1); }
}

@keyframes click-feedback {
    0% { transform: scale(1); }
    50% { transform: scale(0.95); }
    100% { transform: scale(1); }
}

@keyframes notification-slide {
    0% { transform: translateX(100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
}

@keyframes notification-fade {
    0% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
}

@keyframes error-pulse {
    0%, 100% { border-color: #ff0040; }
    50% { border-color: #ff4080; box-shadow: 0 0 30px rgba(255, 0, 64, 0.8); }
}

@keyframes transmission-pulse {
    0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.5); }
    50% { box-shadow: 0 0 40px rgba(0, 255, 255, 1); transform: scale(1.05); }
}
`;

const cyberpunkStyleSheet = document.createElement('style');
cyberpunkStyleSheet.textContent = cyberpunkCSS;
document.head.appendChild(cyberpunkStyleSheet);

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Dropdown functionality for info cards
function toggleInfoDropdown(cardElement) {
    const content = cardElement.querySelector('.dropdown-content');
    const arrow = cardElement.querySelector('.dropdown-arrow i');
    const isOpen = content.classList.contains('open');

    // Close all other dropdowns first
    const allCards = document.querySelectorAll('.dropdown-card');
    allCards.forEach(card => {
        const otherContent = card.querySelector('.dropdown-content');
        const otherArrow = card.querySelector('.dropdown-arrow i');
        otherContent.classList.remove('open');
        otherArrow.style.transform = 'rotate(0deg)';
    });

    if (isOpen) {
        // Close this dropdown
        content.classList.remove('open');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        // Open this dropdown
        content.classList.add('open');
        arrow.style.transform = 'rotate(180deg)';
    }
}