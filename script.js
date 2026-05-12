// Translations object
const translations = {
    ru: {
        'nav-services': 'Услуги',
        'nav-process': 'Процесс',
        'nav-portfolio': 'Портфолио',
        'nav-contact': 'Контакт',
        'hero-title': 'Лаборатория реверс-инжиниринга и 3D-сканирования SKB',
        'hero-subtitle': 'Оцифровка физических объектов: создание параметрических CAD-моделей на базе высокоточного 3D-сканирования для производства и модернизации оборудования.',
        'hero-cta': 'Оставить заявку',
        'services-title': 'Компетенции лаборатории',
        'services-subtitle': 'Комплексные инженерные решения для обратного проектирования деталей и узлов',
        'service1-title': 'Метрологическое 3D-сканирование',
        'service1-desc': 'Бесконтактное измерение геометрии деталей с точностью до 10 микрон с использованием оптического и лазерного оборудования Shining 3D.',
        'service2-title': 'Контроль геометрии и обработка сеток',
        'service2-desc': 'Анализ и оптимизация облаков точек и полигональных сеток (STL) в специализированном ПО Hexagon. Извлечение базовых геометрических примитивов.',
        'service3-title': 'Твердотельное параметрическое моделирование',
        'service3-desc': 'Построение дерева операций (Feature-based CAD) с восстановлением первоначального конструкторского замысла. Подготовка КД для ЧПУ производства.',
        'process-title': 'Методология работы',
        'process-subtitle': 'Технологический процесс перевода физических изделий в конструкторскую документацию',
        'step1-title': 'Оцифровка (Сканирование)',
        'step1-desc': 'Позиционирование детали и сканирование с получением плотного облака точек. Возможен выезд на территорию заказчика для обмера крупногабаритных узлов.',
        'step2-title': 'Подготовка базовых поверхностей',
        'step2-desc': 'Обработка полученной сетки, устранение дефектов износа детали, выравнивание по глобальным осям координат для последующего моделирования.',
        'step3-title': 'Реверс-инжиниринг (CAD)',
        'step3-desc': 'Разработка редактируемой твердотельной модели с учетом допусков и посадок. Экспорт данных в стандартные промышленные форматы (STEP, IGES, Parasolid).',
        'portfolio-title': 'Реализованные проекты',
        'portfolio-subtitle': 'Примеры работ по восстановлению КД и модернизации оборудования',
        'port1-title': 'Восстановление эвольвентного зацепления',
        'port1-desc': 'Оцифровка изношенного зубчатого колеса, расчет параметров зубчатого венца, разработка CAD-модели и КД для фрезерной обработки.',
        'port2-title': 'Аэродинамика впускного коллектора',
        'port2-desc': '3D-сканирование сложной внутренней геометрии коллектора для проведения расчетов вычислительной гидродинамики (CFD) и оптимизации потока.',
        'port3-title': 'Литейная оснастка корпуса насоса',
        'port3-desc': 'Обратное проектирование литого корпуса без КД с учетом литейных уклонов и припусков на мехобработку для изготовления новой стержневой оснастки.',
        'contact-title': 'Оценка проекта',
        'contact-subtitle': 'Оставьте заявку с описанием задачи, и мы подготовим технико-коммерческое предложение',
        'form-name': 'Полное имя',
        'form-email': 'Корпоративная почта',
        'form-company': 'Организация',
        'form-message': 'Техническое задание (габариты, материал, требования)',
        'form-submit': 'Отправить ТЗ',
        'footer-text': '© 2026 Лаборатория реверс-инжиниринга SKB. Все права защищены.',
        'alert-thank': 'Уважаемый(ая) {name}, ваша заявка успешно зарегистрирована.\nНаш инженер свяжется с вами по адресу {email} для уточнения деталей.'
    },
    en: {
        'nav-services': 'Services',
        'nav-process': 'Process',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        'hero-title': 'SKB Reverse Engineering & 3D Scanning Laboratory',
        'hero-subtitle': 'Digitization of physical assets: creating parametric CAD models based on high-precision 3D scanning for manufacturing and equipment modernization.',
        'hero-cta': 'Request a Quote',
        'services-title': 'Core Competencies',
        'services-subtitle': 'Comprehensive engineering solutions for reverse engineering of parts and assemblies',
        'service1-title': 'Metrology-Grade 3D Scanning',
        'service1-desc': 'Non-contact geometric measurement with up to 10-micron accuracy using metrology-grade optical and laser Shining 3D equipment.',
        'service2-title': 'Mesh Processing & Inspection',
        'service2-desc': 'Point cloud and STL mesh optimization in specialized software (Hexagon). Flaw elimination and datum feature extraction.',
        'service3-title': 'Parametric Solid Modeling',
        'service3-desc': 'Feature-based CAD modeling to restore the original design intent. Preparation of manufacturing drawings for CNC machining.',
        'process-title': 'Engineering Workflow',
        'process-subtitle': 'Methodology for digitizing physical objects into ready-to-use manufacturing data',
        'step1-title': 'Digitization (Scanning)',
        'step1-desc': 'Optical or laser 3D scanning of the component to obtain a dense point cloud. On-site scanning is available for large-scale equipment.',
        'step2-title': 'Datum Alignment & Cleanup',
        'step2-desc': 'Processing the obtained mesh, removing wear and tear defects, and aligning the object to global coordinate axes for accurate modeling.',
        'step3-title': 'Reverse Engineering (CAD)',
        'step3-desc': 'Developing an editable solid model factoring in standard tolerances and fits. Exporting to industrial formats (STEP, IGES, Parasolid).',
        'portfolio-title': 'Implemented Projects',
        'portfolio-subtitle': 'Examples of completed work in documentation recovery and asset modernization',
        'port1-title': 'Involute Gear Restoration',
        'port1-desc': 'Digitization of a worn gear, calculation of involute profile parameters, and development of a parametric CAD model and CNC milling drawings.',
        'port2-title': 'Intake Manifold Aerodynamics',
        'port2-desc': '3D scanning of complex internal manifold geometry for Computational Fluid Dynamics (CFD) analysis and flow trajectory optimization.',
        'port3-title': 'Pump Housing Casting Pattern',
        'port3-desc': 'Reverse engineering of an undocumented cast housing, incorporating draft angles and machining allowances for core box manufacturing.',
        'contact-title': 'Project Evaluation',
        'contact-subtitle': 'Submit your technical requirements, and we will prepare a commercial proposal with timeline estimation',
        'form-name': 'Full Name',
        'form-email': 'Corporate Email',
        'form-company': 'Organization',
        'form-message': 'Technical specifications (dimensions, material, objectives)',
        'form-submit': 'Submit Request',
        'footer-text': '© 2026 SKB Reverse Engineering Laboratory. All rights reserved.',
        'alert-thank': 'Dear {name}, your request has been successfully registered.\nOur engineering team will contact you at {email} shortly to discuss the project.'
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
        'name': lang === 'ru' ? 'Иванов Иван Иванович' : 'John Doe',
        'email': lang === 'ru' ? 'corporate@email.com' : 'corporate@email.com',
        'company': lang === 'ru' ? 'ООО «ТехноПром»' : 'Engineering Corp LLC',
        'message': lang === 'ru' ? 'Необходимо отсканировать деталь: 300х200х150 мм, сталь. Требуется STEP модель...' : 'Need to scan a part: 300x200x150 mm, steel. Require STEP model...'
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