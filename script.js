/* ======================
   MOBILE MENU
====================== */
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const open = mobileNav.style.display === "block";
    mobileNav.style.display = open ? "none" : "block";
    menuBtn.setAttribute("aria-expanded", String(!open));
  });
}

mobileNav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileNav.style.display = "none";
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

/* ======================
   YEAR
====================== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ======================
   SCROLL REVEAL
====================== */
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);

revealEls.forEach((el) => io.observe(el));

/* ======================
   LANGUAGE TOGGLE (EN / ML)
====================== */
const dict = {
  en: {
    subline: "3D Wheel Alignment • Emission Testing",
    nav_services: "Services",
    nav_about: "About",
    nav_reviews: "Reviews",
    nav_contact: "Contact",

    call: "Call",
    call_now: "Call now",
    directions: "Directions",
    see_services: "See services",

    location: "Ambhalangadi, Feroke",
    open: "Open • Closes 8 PM",
    quick: "Quick Service",

    hero_title: "3D Wheel Alignment<br />& Vehicle Emission Testing",
    hero_desc:
      "Accurate alignment for smooth driving and less tyre wear. Quick emission testing with clear results.",

    rating: "Rating",
    reviews: "Reviews",
    phone: "Phone",

    address: "Address",
    whatsapp: "WhatsApp",
    wa_desc: "Message us to confirm timing or ask about your vehicle issue.",
    wa_btn: "WhatsApp",

    process: "Simple process",
    process_desc: "Check → Explain → Service → Guidance. No confusion.",

    services_title: "Services",
    services_sub: "Choose what you need",

    s1_badge: "3D Wheel Alignment",
    s1_title: "Fix steering pull & tyre wear",
    s1_desc:
      "Best if your vehicle pulls to one side, vibrates, or tyres wear unevenly.",
    s1_li1: "Toe / Camber / Caster adjustment",
    s1_li2: "Handling & stability improvement",
    s1_li3: "Tyre life improvement tips",

    s2_badge: "Emission Testing",
    s2_title: "Quick smoke test with clear result",
    s2_desc:
      "Fast emission test for petrol/diesel vehicles with guidance if needed.",
    s2_li1: "Petrol & diesel testing",
    s2_li2: "Clear explanation of result",
    s2_li3: "Basic tips to improve reading",

    s3_badge: "Basic Checks",
    s3_title: "Small checks that save money",
    s3_desc: "Quick inspection to reduce repeat issues after alignment.",
    s3_li1: "Tyre wear check",
    s3_li2: "Basic suspension observation",
    s3_li3: "Maintenance suggestions",

    about_title: "About Drive Line",
    about_sub: "Feroke, Kozhikode",
    about_desc:
      "Drive Line is a local service center focused on accurate 3D wheel alignment and quick vehicle emission testing. We keep it simple: diagnose, explain, fix, and guide you.",

    reviews_title: "Customer Reviews",
    reviews_sub: "3.7/5 based on 13 reviews",
    r1_meta: "Local Guide • 3 years ago",
    r1_text:
      "After alignment tyres getting worn from one side tried once more let's see what's happening",
    r2_meta: "2 years ago",
    r2_text: "Good service",

    contact_title: "Contact & Directions",
    contact_sub: "Call / WhatsApp / Visit",
    contact_shop: "Drive Line",
    open_maps: "Open in Maps",

    form_title: "Quick Request",
    form_sub:
      "Works now with WhatsApp. Also ready for real backend (/api/contact) later.",
    f_name: "Name",
    f_phone: "Phone",
    f_service: "Service",
    f_vehicle: "Vehicle",
    f_message: "Issue / Message",
    send_request: "Send Request",
    send_whatsapp: "Send on WhatsApp",

    footer_line: "3D Wheel Alignment & Emission Testing",
  },

  ml: {
    subline: "3ഡി വിൽ അലിൻമെൻ്റ് • വാഹന പുക പരിശോധന",
    nav_services: "സേവനങ്ങൾ",
    nav_about: "വിവരം",
    nav_reviews: "അവലോകനങ്ങൾ",
    nav_contact: "ബന്ധപ്പെടുക",

    call: "വിളിക്കുക",
    call_now: "ഇപ്പോൾ വിളിക്കുക",
    directions: "ദിശകൾ",
    see_services: "സേവനങ്ങൾ കാണുക",

    location: "അമ്പലങ്ങാടി, ഫറോക്ക്",
    open: "തുറന്നിരിക്കുന്നു • രാത്രി 8-ന് അടയ്ക്കും",
    quick: "വേഗ സേവനം",

    hero_title: "3ഡി വിൽ അലിൻമെൻ്റ്<br />& വാഹന പുക പരിശോധന",
    hero_desc:
      "കൃത്യമായ അലൈന്മെൻ്റ് കൊണ്ട് സ്മൂത്ത് ഡ്രൈവിംഗും ടയർ വേറും കുറയും. വേഗത്തിൽ പുക പരിശോധനയും വ്യക്തമായ ഫലവും.",

    rating: "റേറ്റിംഗ്",
    reviews: "റിവ്യൂസ്",
    phone: "ഫോൺ",

    address: "വിലാസം",
    whatsapp: "വാട്ട്സ്ആപ്പ്",
    wa_desc:
      "ടൈമിംഗ് ഉറപ്പാക്കാൻ അല്ലെങ്കിൽ നിങ്ങളുടെ വാഹന പ്രശ്നം പറയാൻ മെസേജ് ചെയ്യാം.",
    wa_btn: "വാട്ട്സ്ആപ്പ്",

    process: "സിംപിൾ പ്രോസസ്",
    process_desc:
      "ചെക്ക് → വിശദീകരണം → സേവനം → മാർഗ്ഗനിർദേശം. കൺഫ്യൂഷൻ ഇല്ല.",

    services_title: "സേവനങ്ങൾ",
    services_sub: "താങ്കൾക്ക് വേണ്ടത് തിരഞ്ഞെടുക്കുക",

    s1_badge: "3ഡി വിൽ അലിൻമെൻ്റ്",
    s1_title: "സ്റ്റീയറിംഗ് പുള്ളും ടയർ വെയറും പരിഹരിക്കുക",
    s1_desc:
      "വാഹനം ഒരു വശത്തേക്ക് വലിക്കുകയോ വൈബ്രേഷൻ ഉണ്ടാകുകയോ ടയർ ഒരുവശം കൂടുതലായി വെരുകയോ ചെയ്താൽ മികച്ചത്.",
    s1_li1: "ടോ / ക്യാമ്പർ / കാസ്റ്റർ അഡ്ജസ്റ്റ്‌മെൻ്റ്",
    s1_li2: "ഹാൻഡ്ലിംഗ് & സ്റ്റാബിലിറ്റി മെച്ചപ്പെടുത്തൽ",
    s1_li3: "ടയർ ലൈഫ് മെച്ചപ്പെടുത്താൻ ടിപ്സ്",

    s2_badge: "വാഹന പുക പരിശോധന",
    s2_title: "വേഗത്തിൽ പുക പരിശോധന, വ്യക്തമായ ഫലം",
    s2_desc:
      "പെട്രോൾ/ഡീസൽ വാഹനങ്ങൾക്ക് വേഗത്തിൽ പുക പരിശോധന. ആവശ്യമെങ്കിൽ ഗൈഡൻസ്.",
    s2_li1: "പെട്രോൾ & ഡീസൽ ടെസ്റ്റിംഗ്",
    s2_li2: "ഫലം വ്യക്തമായി വിശദീകരിക്കുന്നു",
    s2_li3: "റീഡിംഗ് മെച്ചപ്പെടുത്താൻ അടിസ്ഥാന ടിപ്സ്",

    s3_badge: "ബേസിക് ചെക്കുകൾ",
    s3_title: "ചെറിയ ചെക്കുകൾ, വലിയ ലാഭം",
    s3_desc:
      "അലൈന്മെൻ്റിന് ശേഷം വീണ്ടും പ്രശ്നം ആവർത്തിക്കാതിരിക്കാൻ ബേസിക് ഇൻസ്പെക്ഷൻ.",
    s3_li1: "ടയർ വേർ ചെക്ക്",
    s3_li2: "ബേസിക് സസ്പെൻഷൻ നിരീക്ഷണം",
    s3_li3: "മെന്റനൻസ് നിർദ്ദേശങ്ങൾ",

    about_title: "ഡ്രൈവ് ലൈൻ കുറിച്ച്",
    about_sub: "ഫറോക്ക്, കോഴിക്കോട്",
    about_desc:
      "ഡ്രൈവ് ലൈൻ 3ഡി വിൽ അലിൻമെൻ്റും വാഹന പുക പരിശോധനയും കേന്ദ്രീകരിച്ചുള്ള ലോക്കൽ സർവീസ് സെൻ്ററാണ്. സിംപിൾ ആണ്: ഡയഗ്നോസ് → വിശദീകരണം → പരിഹാരം → ഗൈഡൻസ്.",

    reviews_title: "കസ്റ്റമർ അവലോകനങ്ങൾ",
    reviews_sub: "13 റിവ്യൂസ് അടിസ്ഥാനത്തിൽ 3.7/5",
    r1_meta: "ലോക്കൽ ഗൈഡ് • 3 വർഷം മുൻപ്",
    r1_text:
      "അലൈന്മെൻ്റ് കഴിഞ്ഞപ്പോൾ ടയർ ഒരു വശത്ത് കൂടി വെരുന്നു. വീണ്ടും ട്രൈ ചെയ്തിട്ടുണ്ട്.",
    r2_meta: "2 വർഷം മുൻപ്",
    r2_text: "നല്ല സർവീസ്",

    contact_title: "ബന്ധപ്പെടുക & ദിശകൾ",
    contact_sub: "വിളിക്കുക / വാട്ട്സ്ആപ്പ് / സന്ദർശിക്കുക",
    contact_shop: "ഡ്രൈവ് ലൈൻ",
    open_maps: "മാപ്പിൽ തുറക്കുക",

    form_title: "ക്വിക്ക് റിക്വസ്റ്റ്",
    form_sub:
      "ഇപ്പോൾ വാട്ട്സ്ആപ്പിലൂടെ പ്രവർത്തിക്കും. പിന്നീട് റിയൽ ബാക്കെൻഡ് (/api/contact) വെക്കാൻ റെഡി.",
    f_name: "പേര്",
    f_phone: "ഫോൺ",
    f_service: "സേവനം",
    f_vehicle: "വാഹനം",
    f_message: "പ്രശ്നം / മെസേജ്",
    send_request: "റിക്വസ്റ്റ് അയയ്ക്കുക",
    send_whatsapp: "വാട്ട്സ്ആപ്പിൽ അയയ്ക്കുക",

    footer_line: "3ഡി വിൽ അലിൻമെൻ്റ് & വാഹന പുക പരിശോധന",
  },
};

function setLang(lang) {
  document.documentElement.lang = lang === "ml" ? "ml" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[lang][key];
    if (!val) return;

    if (val.includes("<br")) el.innerHTML = val;
    else el.textContent = val;
  });

  document.getElementById("btnEN").classList.toggle("active", lang === "en");
  document.getElementById("btnML").classList.toggle("active", lang === "ml");

  const ph = {
    en: {
      name: "Your name",
      phone: "Your phone number",
      vehicle: "Eg: Swift / Creta / Bolero",
      message: "Eg: steering pull, tyre wear, vibration...",
    },
    ml: {
      name: "നിങ്ങളുടെ പേര്",
      phone: "നിങ്ങളുടെ ഫോൺ നമ്പർ",
      vehicle: "ഉദാ: Swift / Creta / Bolero",
      message: "ഉദാ: സ്റ്റീയറിംഗ് പുള്ള്, ടയർ വേർ, വൈബ്രേഷൻ...",
    },
  };

  document.getElementById("name").placeholder = ph[lang].name;
  document.getElementById("phone").placeholder = ph[lang].phone;
  document.getElementById("vehicle").placeholder = ph[lang].vehicle;
  document.getElementById("message").placeholder = ph[lang].message;

  localStorage.setItem("dl_lang", lang);
}

const savedLang = localStorage.getItem("dl_lang") || "en";
setLang(savedLang);

document.getElementById("btnEN").addEventListener("click", () => setLang("en"));
document.getElementById("btnML").addEventListener("click", () => setLang("ml"));

/* ======================
   FORM: backend first -> WhatsApp fallback
====================== */
const statusEl = document.getElementById("status");
const form = document.getElementById("contactForm");
const btnWA = document.getElementById("sendWA");

function buildWAMessage() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const vehicle = document.getElementById("vehicle").value.trim();
  const message = document.getElementById("message").value.trim();

  const lines = [
    "Hi Drive Line,",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Vehicle: ${vehicle}`,
  ];

  if (message) lines.push(`Issue: ${message}`);
  lines.push("When can I come?");

  return encodeURIComponent(lines.join("\n"));
}

btnWA.addEventListener("click", () => {
  const text = buildWAMessage();
  window.open(`https://wa.me/919747470828?text=${text}`, "_blank");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.textContent = "Sending...";

  const payload = {
    name: document.getElementById("name").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    service: document.getElementById("service").value,
    vehicle: document.getElementById("vehicle").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      statusEl.textContent = "✅ Request received. We will contact you soon.";
      form.reset();
      return;
    }

    throw new Error("No backend");
  } catch (err) {
    statusEl.textContent = "Opening WhatsApp… (no backend connected yet)";
    const text = buildWAMessage();
    window.open(`https://wa.me/919747470828?text=${text}`, "_blank");
  }
});
