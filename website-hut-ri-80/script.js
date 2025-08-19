// Website HUT RI ke-80 - JavaScript Functions
// Dibuat untuk merayakan 80 tahun kemerdekaan Indonesia

document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi semua fungsi
    initCountdown();
    initNavigation();
    initScrollAnimations();
    initMobileMenu();
});

// Fungsi Countdown Timer menuju 17 Agustus 2025
function initCountdown() {
    // Target tanggal: 17 Agustus 2025, 00:00:00 WIB
    const targetDate = new Date('August 17, 2025 00:00:00').getTime();
    
    // Update countdown setiap detik
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
        
        // Hitung hari, jam, menit, detik
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // Update tampilan countdown
        updateCountdownDisplay(days, hours, minutes, seconds);
        
        // Jika waktu habis, tampilkan pesan
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            showCelebrationMessage();
        }
    }, 1000);
}

// Update tampilan countdown dengan animasi
function updateCountdownDisplay(days, hours, minutes, seconds) {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Format angka dengan leading zero
    const formattedDays = days.toString().padStart(3, '0');
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    // Animasi perubahan angka
    animateNumberChange(daysElement, formattedDays);
    animateNumberChange(hoursElement, formattedHours);
    animateNumberChange(minutesElement, formattedMinutes);
    animateNumberChange(secondsElement, formattedSeconds);
}

// Animasi perubahan angka pada countdown
function animateNumberChange(element, newValue) {
    if (element.textContent !== newValue) {
        element.style.transform = 'scale(1.1)';
        element.style.color = '#FF0000';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'scale(1)';
            element.style.color = '#FF0000';
        }, 150);
    }
}

// Tampilkan pesan perayaan saat countdown selesai
function showCelebrationMessage() {
    const countdownSection = document.querySelector('.countdown-section h2');
    countdownSection.innerHTML = '🎉 Selamat HUT RI ke-80! 🎉';
    
    const countdown = document.getElementById('countdown');
    countdown.innerHTML = `
        <div class="celebration-message">
            <h3>Merdeka! 🇮🇩</h3>
            <p>Dirgahayu Republik Indonesia ke-80</p>
        </div>
    `;
    
    // Tambah efek konfetti (simulasi dengan CSS)
    createConfettiEffect();
}

// Buat efek konfetti sederhana
function createConfettiEffect() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.innerHTML = '🎊';
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.fontSize = '20px';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = 'fall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 100);
    }
    
    // Tambah CSS untuk animasi jatuh
    if (!document.querySelector('#confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Smooth scroll navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('#header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Tutup mobile menu jika terbuka
                closeMobileMenu();
            }
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('#header');
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 100) {
            header.style.background = 'linear-gradient(135deg, #FF0000 0%, rgba(255, 255, 255, 0.95) 50%, #FF0000 100%)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #FF0000 0%, #FFFFFF 50%, #FF0000 100%)';
            header.style.backdropFilter = 'none';
        }
    });
}

// Animasi fade-in saat scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animasi khusus untuk card elements
                if (entry.target.classList.contains('sejarah-card') || 
                    entry.target.classList.contains('galeri-item')) {
                    animateCard(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe semua elemen yang perlu animasi
    const elementsToAnimate = document.querySelectorAll('.sejarah-card, .galeri-item, .kontak-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Animasi khusus untuk card elements
function animateCard(card) {
    const delay = Math.random() * 200; // Random delay untuk efek staggered
    
    setTimeout(() => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.opacity = '1';
    }, delay);
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        toggleMobileMenu();
    });
    
    // Tutup menu saat klik di luar
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animasi hamburger
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (hamburger.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
}

// Tutup mobile menu
function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    
    // Reset hamburger animation
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.transform = 'none';
        bar.style.opacity = '1';
    });
}

// Hover effects untuk interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Hover effect untuk bendera
    const flag = document.querySelector('.flag');
    if (flag) {
        flag.addEventListener('mouseenter', function() {
            this.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.05)';
        });
        
        flag.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateY(-15deg) scale(1)';
        });
    }
    
    // Parallax effect sederhana untuk hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });
    
    // Easter egg: Klik bendera untuk memainkan audio nasional (simulasi)
    const flagElement = document.querySelector('.flag');
    if (flagElement) {
        flagElement.addEventListener('click', function() {
            showPatrioticMessage();
        });
    }
});

// Tampilkan pesan patriotik saat klik bendera
function showPatrioticMessage() {
    const messages = [
        "Merdeka! 🇮🇩",
        "Indonesia Raya! 🎵",
        "Bhinneka Tunggal Ika! 🤝",
        "Indonesia Jaya! ⭐",
        "Garuda Pancasila! 🦅"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Buat elemen toast notification
    const toast = document.createElement('div');
    toast.innerHTML = randomMessage;
    toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #FF0000, #FFFFFF);
        color: #333;
        padding: 1rem 2rem;
        border-radius: 25px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        animation: toastPop 2s ease forwards;
    `;
    
    document.body.appendChild(toast);
    
    // Hapus toast setelah 2 detik
    setTimeout(() => {
        toast.remove();
    }, 2000);
    
    // Tambah CSS untuk animasi toast
    if (!document.querySelector('#toast-style')) {
        const style = document.createElement('style');
        style.id = 'toast-style';
        style.textContent = `
            @keyframes toastPop {
                0% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.5);
                }
                50% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1.1);
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(1);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
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

// Apply throttling to scroll events
const throttledScrollHandler = throttle(function() {
    // Handle scroll events here if needed
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // ESC key untuk tutup mobile menu
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
    
    // Enter atau Space untuk mengaktifkan hover effects pada keyboard navigation
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('nav-link')) {
            focusedElement.click();
        }
    }
});

// Console log untuk debugging dan informasi
console.log('🇮🇩 Website HUT RI ke-80 loaded successfully!');
console.log('Dirgahayu Republik Indonesia ke-80! Merdeka!');

// Service worker registration untuk offline capability (opsional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker tidak diimplementasi dalam contoh ini
        // Bisa ditambahkan untuk functionality offline
        console.log('💡 Service Worker ready untuk implementasi offline capability');
    });
}