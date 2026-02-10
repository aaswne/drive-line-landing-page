/* ======================
   MOBILE MENU (class-based)
====================== */
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function closeMobileMenu() {
  if (!mobileNav || !menuBtn) return;
  mobileNav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn?.addEventListener("click", () => {
  const isOpen = mobileNav?.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(!!isOpen));
});

/* Close menu when an in-page anchor link is clicked */
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  closeMobileMenu();
});

/* ======================
   YEAR
====================== */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* ======================
   SCROLL REVEAL
====================== */
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("show");
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.14 },
  );

  revealEls.forEach((el) => io.observe(el));
}

/* ======================
   FORM: backend first -> WhatsApp fallback
====================== */
const statusEl = document.getElementById("status");
const form = document.getElementById("contactForm");
const btnWA = document.getElementById("sendWA");

const nameEl = document.getElementById("name");
const phoneEl = document.getElementById("phone");
const serviceEl = document.getElementById("service");
const vehicleEl = document.getElementById("vehicle");
const messageEl = document.getElementById("message");

const WA_NUMBER = "919747470828";

function buildWAMessage() {
  const name = nameEl?.value.trim() || "";
  const phone = phoneEl?.value.trim() || "";
  const service = serviceEl?.value || "";
  const vehicle = vehicleEl?.value.trim() || "";
  const message = messageEl?.value.trim() || "";

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

function openWhatsApp() {
  window.open(`https://wa.me/${WA_NUMBER}?text=${buildWAMessage()}`, "_blank");
}

btnWA?.addEventListener("click", openWhatsApp);

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (statusEl) statusEl.textContent = "Sending...";

  const payload = {
    name: nameEl?.value.trim() || "",
    phone: phoneEl?.value.trim() || "",
    service: serviceEl?.value || "",
    vehicle: vehicleEl?.value.trim() || "",
    message: messageEl?.value.trim() || "",
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      if (statusEl) statusEl.textContent = "✅ Request received. We will contact you soon.";
      form.reset();
      return;
    }

    throw new Error("Backend not available");
  } catch {
    if (statusEl) statusEl.textContent = "Opening WhatsApp… (no backend connected yet)";
    openWhatsApp();
  }
});
