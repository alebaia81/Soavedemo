// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Reviews Carousel Infinite Loop
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.reviews-track');
    if (track) {
        const cards = Array.from(track.children);
        
        // Clone each card to create the infinite effect
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Map Initialization
document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        // Coordinate per Via Cittadella 48, San Nazzaro (PC)
        const lat = 45.0764;
        const lng = 9.8985;
        
        const map = L.map('map', {
            scrollWheelZoom: false // Evita lo zoom accidentale durante lo scroll della pagina
        }).setView([lat, lng], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Icona personalizzata color oro (come il brand Soave)
        const goldIcon = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        L.marker([lat, lng], {icon: goldIcon}).addTo(map)
            .bindPopup('<strong>Soave Estetica</strong><br>Via Cittadella 48, San Nazzaro (PC)')
            .openPopup();
    }
});
