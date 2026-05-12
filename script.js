// Translations object
const translations = {
    ru: {
        'nav-services': 'Услуги',
        'nav-process': 'Процесс',
        'nav-portfolio': 'Портфолио',
        'nav-contact': 'Контакт',
        'hero-title': 'Лаборатория реверс-инжиниринга SKB',
        'hero-subtitle': 'Преобразуйте механические детали в точные CAD модели используя передовую технологию 3D сканирования и профессиональную обработку данных',
        'hero-cta': 'Начать проект',
        'services-title': 'Наши услуги',
        'services-subtitle': 'Полные решения для обратной инженерии на основе передовых технологий',
        'service1-title': '3D сканирование',
        'service1-desc': 'Высокоточное сканирование с использованием оборудования высочайшего класса, такого как технология Shining 3D. Мы захватываем каждую деталь механических деталей с точностью до микронов.',
        'service2-title': 'Обработка данных',
        'service2-desc': 'Продвинутый анализ и обработка данных с использованием профессионального программного обеспечения, такого как Hexagon. Мы очищаем, оптимизируем и улучшаем данные сканирования для преобразования в CAD.',
        'service3-title': 'CAD моделирование',
        'service3-desc': 'Экспертное создание точных цифровых моделей из обработанных данных сканирования. Ваши детали превращаются в полнофункциональные, редактируемые CAD модели готовые к производству.',
        'process-title': 'Как это работает',
        'process-subtitle': 'Три простых этапа для преобразования физических деталей в цифровые модели',
        'step1-title': 'Сканирование детали',
        'step1-desc': 'Мы тщательно сканируем механический компонент используя высокотехнологичное оборудование 3D сканирования. Процесс захватывает миллионы точек данных для обеспечения полной точности.',
        'step2-title': 'Анализ данных',
        'step2-desc': 'Наши эксперты анализируют и обрабатывают необработанные данные сканирования с использованием профессионального программного обеспечения. Мы улучшаем данные, удаляем шум и подготавливаем их для преобразования в CAD.',
        'step3-title': 'Создание CAD модели',
        'step3-desc': 'Мы создаем точную, редактируемую CAD модель из проанализированных данных сканирования. Финальная модель готова к производству, копированию или дальнейшим модификациям.',
        'portfolio-title': 'Примеры работ',
        'portfolio-subtitle': 'Изучите некоторые из наших недавних успешных проектов по обратному инжинирингу',
        'port1-title': 'Восстановление промышленной шестерни',
        'port1-desc': 'Отсканировали сломанную устаревшую шестерню, реконструировали отсутствующие зубья в CAD и подготовили производственные чертежи для обработки на станке с ЧПУ.',
        'port2-title': 'Автомобильный впускной коллектор',
        'port2-desc': 'Полное 3D-сканирование кастомного впускного коллектора для создания параметризованной CAD модели под вычислительную гидродинамику (CFD).',
        'port3-title': 'Корпус старого насоса',
        'port3-desc': 'Провели реверс-инжиниринг 50-летнего литого корпуса насоса без документации для производства новой литейной формы.',
        'contact-title': 'Начало работы',
        'contact-subtitle': 'Отправьте нам подробности вашего проекта и мы предоставим расценки',
        'form-name': 'Полное имя',
        'form-email': 'Адрес электронной почты',
        'form-company': 'Название компании',
        'form-message': 'Описание проекта',
        'form-submit': 'Отправить запрос',
        'footer-text': '© 2026 Услуги профессиональной обратной инженерии. Все права защищены.',
        'alert-thank': 'Спасибо, {name}! Ваш запрос получен.\nМы свяжемся с вами по адресу {email} в ближайшее время.'
    },
    en: {
        'nav-services': 'Services',
        'nav-process': 'Process',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        'hero-title': 'SKB Reverse Engineering Laboratory',
        'hero-subtitle': 'Transform your mechanical parts into precision CAD models using cutting-edge 3D scanning technology and expert data processing',
        'hero-cta': 'Start Your Project',
        'services-title': 'Our Services',
        'services-subtitle': 'Complete reverse engineering solutions powered by advanced technology',
        'service1-title': '3D Scanning',
        'service1-desc': 'High-precision scanning using state-of-the-art equipment like Shining 3D technology. We capture every detail of your mechanical parts with accuracy down to microns.',
        'service2-title': 'Data Processing',
        'service2-desc': 'Advanced data analysis and processing using professional software such as Hexagon. We clean, optimize, and refine your scan data for CAD conversion.',
        'service3-title': 'CAD Modeling',
        'service3-desc': 'Expert creation of precise digital models from processed scan data. Your parts become fully parametric, editable CAD models ready for manufacturing.',
        'process-title': 'How It Works',
        'process-subtitle': 'Three simple steps to transform your physical parts into digital models',
        'step1-title': 'Scan the Part',
        'step1-desc': 'We carefully scan your mechanical component using high-end 3D scanning equipment. The process captures millions of data points to ensure complete accuracy.',
        'step2-title': 'Analyze the Data',
        'step2-desc': 'Our experts analyze and process the raw scan data using professional analysis software. We refine the data, remove noise, and prepare it for CAD conversion.',
        'step3-title': 'Create CAD Model',
        'step3-desc': 'We generate a precise, editable CAD model from the analyzed data. The final model is ready for manufacturing, replication, or further modifications.',
        'portfolio-title': 'Featured Projects',
        'portfolio-subtitle': 'Explore some of our recent reverse engineering success stories',
        'port1-title': 'Industrial Gear Restoration',
        'port1-desc': 'Scanned a broken obsolete gear, reconstructed the missing teeth in CAD, and prepared manufacturing drawings for CNC machining.',
        'port2-title': 'Automotive Intake Manifold',
        'port2-desc': 'Full 3D scan of a custom intake manifold to create a parameterized CAD model for computational fluid dynamics (CFD) analysis.',
        'port3-title': 'Legacy Pump Housing',
        'port3-desc': 'Reverse engineered a 50-year-old cast pump housing with no existing documentation to produce a new casting mold pattern.',
        'contact-title': 'Get Started',
        'contact-subtitle': 'Send us your project details and we\'ll provide a quote',
        'form-name': 'Full Name',
        'form-email': 'Email Address',
        'form-company': 'Company Name',
        'form-message': 'Project Description',
        'form-submit': 'Send Request',
        'footer-text': '© 2026 Precision Reverse Engineering Services. All rights reserved.',
        'alert-thank': 'Thank you, {name}! Your request has been received.\nWe\'ll contact you at {email} shortly.'
    }
};

let currentLanguage = localStorage.getItem('language') || 'ru';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];
        if (translation) {
            element.textContent = translation;
        }
    });

    // Update browser tab title
    const titleTranslation = lang === 'ru' ? 'Лаборатория реверс-инжиниринга SKB' : 'SKB Reverse Engineering Laboratory';
    document.title = titleTranslation;
    document.getElementById('pageTitle').textContent = titleTranslation;

    const placeholders = {
        'name': lang === 'ru' ? 'Введите ваше имя' : 'Enter your name',
        'email': lang === 'ru' ? 'example@email.com' : 'example@email.com',
        'company': lang === 'ru' ? 'Название вашей компании' : 'Your company name',
        'message': lang === 'ru' ? 'Опишите вашу деталь и требования...' : 'Describe your part and requirements...'
    };

    document.getElementById('name').placeholder = placeholders.name;
    document.getElementById('email').placeholder = placeholders.email;
    document.getElementById('company').placeholder = placeholders.company;
    document.getElementById('message').placeholder = placeholders.message;
}

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = translations[currentLanguage]['alert-thank']
        .replace('{name}', name)
        .replace('{email}', email);

    alert(message);
    event.target.reset();
}

// Add event listeners to language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update footer signature on language change
function updateFooterSignature(lang) {
    const signature = document.getElementById('footerSignature');
    if (lang === 'ru') {
        signature.innerHTML = 'Разработано Александром | <span class="skb-highlight">SKB</span> Лаборатория';
    } else {
        signature.innerHTML = 'Engineered by Alexander | <span class="skb-highlight">SKB</span> Lab';
    }
}

// Update setLanguage function to include footer signature
const originalSetLanguage = setLanguage;
setLanguage = function (lang) {
    originalSetLanguage(lang);
    updateFooterSignature(lang);
};

// Scroll Animation - Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    updateFooterSignature(currentLanguage);

    document.querySelectorAll('.service-card, .step, .contact-form, .portfolio-item').forEach(el => {
        observer.observe(el);
    });

    // 3D Tilt Effect on Service Cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 5;
            const rotateY = ((centerX - x) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-5px)';
        });
    });
});