// Language Data
const translations = {
  en: {
    home: "Home", about: "About", services: "Services", contact: "Contact",
    "hero-title": "Compassionate Care in Agadir",
    "hero-desc": "Nursing & Wellness Center • 10+ Years Experience",
    book: "Book Appointment",
    location: "Agadir, Morocco<br>Near the beach",
    hours: "Mon–Fri: 8AM–6PM<br>Sat: 9AM–2PM",
    phone: "+212 12 34 56 789",
    "about-title": "About Us",
    "about-desc": "Soins Agadir Center is a dedicated nursing and wellness center in Agadir...",
    certified: "Certified Nurses",
    specialties: "Specialties: Home Care, Aesthetics",
    community: "Committed to Community Health",
    "services-title": "Our Services",
    nursing: "Nursing Care", "nursing-desc": "Injections, dressings, post-op",
    aesthetics: "Aesthetics & Wellness", "aesthetics-desc": "Skin care, massages",
    home: "Home Visits", "home-desc": "Mobile care in Agadir",
    vaccine: "Vaccinations", "vaccine-desc": "Routine vaccines",
    "contact-title": "Contact Us",
    name: "Your Name", email: "Your Email", phone: "Phone", message: "Your Message", send: "Send",
    thanks: "Thank you! We'll reply soon."
  },
  fr: {
    home: "Accueil", about: "À Propos", services: "Services", contact: "Contact",
    "hero-title": "Soins Bienveillants à Agadir",
    "hero-desc": "Centre de soins infirmiers • 10+ ans d'expérience",
    book: "Prendre RDV",
    location: "Agadir, Maroc<br>Près de la plage",
    hours: "Lun–Ven: 8h–18h<br>Sam: 9h–14h",
    phone: "+212 12 34 56 789",
    "about-title": "À Propos de Nous",
    "about-desc": "Soins Agadir Center est un centre dédié aux soins infirmiers et bien-être à Agadir...",
    certified: "Infirmiers certifiés",
    specialties: "Spécialités: Soins à domicile, Esthétique",
    community: "Engagés pour la santé communautaire",
    "services-title": "Nos Services",
    nursing: "Soins Infirmiers", "nursing-desc": "Injections, pansements, suivi post-op",
    aesthetics: "Esthétique & Bien-être", "aesthetics-desc": "Soins de peau, massages",
    home: "Visites à Domicile", "home-desc": "Soins mobiles à Agadir",
    vaccine: "Vaccinations", "vaccine-desc": "Vaccins de routine",
    "contact-title": "Contactez-Nous",
    name: "Votre Nom", email: "Votre Email", phone: "Téléphone", message: "Votre Message", send: "Envoyer",
    thanks: "Merci ! Nous vous répondrons bientôt."
  },
  ar: {
    home: "الرئيسية", about: "من نحن", services: "الخدمات", contact: "اتصل بنا",
    "hero-title": "رعاية شاملة في أكادير",
    "hero-desc": "مركز تمريض وعافية • أكثر من 10 سنوات خبرة",
    book: "احجز موعدًا",
    location: "أكادير، المغرب<br>قرب الشاطئ",
    hours: "الإثنين–الجمعة: 8ص–6م<br>السبت: 9ص–2م",
    phone: "+212 12 34 56 789",
    "about-title": "من نحن",
    "about-desc": "مركز سوين أكادير هو مركز متخصص في التمريض والعافية في أكادير...",
    certified: "ممرضون معتمدون",
    specialties: "التخصصات: الرعاية المنزلية، التجميل",
    community: "ملتزمون بصحة المجتمع",
    "services-title": "خدماتنا",
    nursing: "الرعاية التمريضية", "nursing-desc": "الحقن، التضميد، المتابعة بعد العمليات",
    aesthetics: "التجميل والعافية", "aesthetics-desc": "العناية بالبشرة، التدليك",
    home: "الزيارات المنزلية", "home-desc": "رعاية متنقلة في أكادير",
    vaccine: "التطعيمات", "vaccine-desc": "لقاحات روتينية",
    "contact-title": "اتصل بنا",
    name: "اسمك", email: "بريدك الإلكتروني", phone: "هاتفك", message: "رسالتك", send: "إرسال",
    thanks: "شكرًا! سنرد عليك قريبًا."
  }
};

// Set Language
function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Update text
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });

  // Update placeholders
  document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
    const key = el.getAttribute('data-lang-placeholder');
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });

  // Update title
  const titleEl = document.querySelector('title');
  if (titleEl && translations[lang]["about-title"]) {
    titleEl.innerHTML = translations[lang]["about-title"] || titleEl.innerHTML;
  }
}

// Load saved language
const savedLang = localStorage.getItem('lang') || 'en';
setLang(savedLang);

// Form success
if (window.location.search.includes('success')) {
  const msg = document.querySelector('.success');
  if (msg) msg.style.display = 'block';
}