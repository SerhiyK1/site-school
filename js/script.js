// Функція для показу модального вікна
function showContact() {
    var myModal = new bootstrap.Modal(document.getElementById('contactModal'));
    myModal.show();
}

// Плавна прокрутка при кліку на посилання
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Оновлення URL без перезавантаження сторінки
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
        }
    });
});

// Анімація елементів при скролі
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-box, .advantage-card, .news-card, .gallery-item');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Ініціалізація анімацій
document.addEventListener('DOMContentLoaded', function () {
    // Анімація елементів
    const animatedElements = document.querySelectorAll('.feature-box, .advantage-card, .news-card, .gallery-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Запуск анімації при завантаженні
    setTimeout(animateOnScroll, 100);

    // Відстеження скролу для анімації
    window.addEventListener('scroll', animateOnScroll);

    // Підсвітка активної секції в навігації
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Lightbox для галереї
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const img = this.querySelector('img');
            const caption = this.querySelector('.gallery-overlay h4').textContent;

            lightbox.classList.add('active');
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <div class="lightbox-caption">${caption}</div>
                    <button class="close-lightbox">&times;</button>
                </div>
            `;

            document.body.style.overflow = 'hidden';
        });
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target !== this && !e.target.classList.contains('close-lightbox')) return;

        this.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Зміна стилю навігації при скролі
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = 'none';
    }
});

// Lightbox для галереї
document.addEventListener('DOMContentLoaded', function () {
    // Ініціалізація lightbox для галереї
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');

    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function () {
                const imgSrc = this.querySelector('img').src;
                const caption = this.querySelector('.gallery-caption').textContent;

                lightbox.style.display = 'block';
                lightboxImg.src = imgSrc;
                lightboxCaption.textContent = caption;
            });
        });

        closeBtn.addEventListener('click', function () {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }

    // Плавна прокрутка для якорних посилань
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Функція для показу контактного модального вікна
function showContact() {
    var myModal = new bootstrap.Modal(document.getElementById('contactModal'));
    myModal.show();
}