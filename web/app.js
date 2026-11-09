const PHONE_TEL = "tel:+917969215737";
const PHONE_RAW = "+917969215737";
const SCENE_MS = 4500;

/* ---------- Language ---------- */

const STRINGS = {
  hi: {
    callShort: "कॉल करें",
    eyebrow: "कोई ऐप नहीं। कोई भी भाषा। पूरे भारत में।",
    heroTitle: "एक फ़ोन कॉल से अपनी नागरिक समस्या दर्ज करें।",
    heroLead: "स्ट्रीटलाइट खराब, सड़क में गड्ढा, कचरा, पानी का रिसाव? बस कॉल करें और अपनी भाषा में बताइए। हम आपकी शिकायत सीधे आपके इलाके के ज़िम्मेदार अधिकारी तक पहुँचाते हैं, और समस्या ठीक होने तक WhatsApp पर अपडेट देते हैं।",
    makeComplaint: "शिकायत दर्ज करें",
    watchDemo: "देखें कैसे काम करता है",
    orDial: "या डायल करें",
    trust1: "नागरिकों के लिए मुफ़्त",
    trust2: "हिंदी, अंग्रेज़ी, मराठी और अन्य भाषाएँ",
    trust3: "किसी भी फ़ोन से",
    pause: "रोकें",
    play: "चलाएँ",
    s2: "अपनी भाषा में समस्या बताइए",
    s3: "WhatsApp पर फ़ोटो और लोकेशन भेजें",
    s4: "सीधे ज़िम्मेदार अधिकारी तक",
    s5: "आप पुष्टि करें कि काम सच में हुआ",
    howTitle: "यह कैसे काम करता है",
    h1: "कॉल करें",
    h1p: "\"शिकायत दर्ज करें\" दबाएँ या नंबर डायल करें। हमारी सहायक आपकी भाषा में बात करती है।",
    h2: "WhatsApp पर भेजें",
    h2p: "आपको टिकट नंबर और एक WhatsApp लिंक मिलेगा, जिससे आप फ़ोटो और सही लोकेशन भेज सकते हैं।",
    h3: "सही अधिकारी तक",
    h3p: "हम उस वार्ड और समस्या के ज़िम्मेदार अधिकारी को ढूँढकर शिकायत सीधे उन्हें भेजते हैं।",
    h4: "आप पुष्टि करें",
    h4p: "हर बदलाव की जानकारी WhatsApp पर मिलेगी। शिकायत तभी बंद होगी जब आप कहेंगे कि काम हो गया।",
    issuesTitle: "आप क्या शिकायत कर सकते हैं",
    i1: "स्ट्रीटलाइट",
    i2: "गड्ढे और सड़क",
    i3: "कचरा",
    i4: "पानी की सप्लाई",
    i5: "नाली और सीवर",
    i6: "बिजली के तार",
    i7: "आवारा जानवर",
    i8: "गिरे हुए पेड़",
    i9: "सार्वजनिक शौचालय",
    i10: "मच्छर और रुका पानी",
    f1: "कोई ऐप नहीं",
    f1p: "एक साधारण फ़ोन कॉल काफ़ी है। न साइन-अप, न पासवर्ड, न ट्रेनिंग।",
    f2: "पोर्टल में गुम नहीं",
    f2p: "आपकी शिकायत एक ज़िम्मेदार अधिकारी तक जाती है, किसी ऐसे इनबॉक्स में नहीं जिसे कोई नहीं देखता।",
    f3: "हर जवाब से बेहतर",
    f3p: "जब कोई अधिकारी कहता है \"यह मेरा इलाका नहीं, X का है\", तो डायरेक्टरी अपने आप अपडेट हो जाती है।",
    offTitle: "क्या आप अधिकारी हैं?",
    offP: "इसी नंबर पर कॉल करें और बताइए कि आप कौन सा इलाका और विभाग संभालते हैं। सत्यापन के बाद शिकायतें आपको ईमेल या WhatsApp पर एक-टैप बटन के साथ मिलेंगी। कोई ऐप या लॉगिन नहीं।",
    offBtn: "फ़ोन से रजिस्टर करें",
    ctaTitle: "आज कोई समस्या दिखी?",
    ctaP: "बस दो मिनट लगते हैं।",
    emTitle: "आपातकाल?",
    emP: "आग, दुर्घटना या जान के खतरे में कॉल करें",
    disclaimer: "नागरिक सेतु एक स्वतंत्र नागरिक सेवा है, कोई सरकारी संस्था नहीं। हम आपकी शिकायत ज़िम्मेदार अधिकारियों तक पहुँचाते हैं।",
    dlgTitle: "शिकायत के लिए कॉल करें",
    dlgP: "कॉल करने के लिए फ़ोन कैमरे से स्कैन करें, या नीचे दिया नंबर डायल करें।",
    copy: "नंबर कॉपी करें",
    copied: "कॉपी हो गया!",
    callDevice: "इस डिवाइस से कॉल करें",
  },
};

const i18nNodes = document.querySelectorAll("[data-i18n]");
const english = {};
i18nNodes.forEach((el) => { english[el.dataset.i18n] = el.textContent; });
english.play = "Play";
english.copied = "Copied!";

let lang = "en";

function t(key) {
  return (lang === "hi" && STRINGS.hi[key]) || english[key] || key;
}

function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  i18nNodes.forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.getElementById("langToggle").textContent = lang === "hi" ? "English" : "हिंदी";
  updatePlayLabel();
  try { localStorage.setItem("ns-lang", lang); } catch (_) {}
}

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(lang === "hi" ? "en" : "hi");
});

/* ---------- Demo: real video if present, animated story otherwise ---------- */

const player = document.getElementById("demoPlayer");
const video = document.getElementById("demoVideo");
const scenes = [...document.querySelectorAll(".scene")];
const bars = [...document.querySelectorAll(".story-progress span")];
const playToggle = document.getElementById("playToggle");

let current = 0;
let elapsed = 0;
let playing = true;
let last = performance.now();

function showScene(i) {
  current = i;
  scenes.forEach((s, n) => s.classList.toggle("active", n === i));
  bars.forEach((b, n) => b.style.setProperty("--p", n < i ? 1 : 0));
}

function tick(now) {
  const dt = Math.min(now - last, 100);
  last = now;
  if (playing && !player.classList.contains("has-video")) {
    elapsed += dt;
    if (elapsed >= SCENE_MS) {
      elapsed = 0;
      showScene((current + 1) % scenes.length);
    }
    bars[current].style.setProperty("--p", elapsed / SCENE_MS);
  }
  requestAnimationFrame(tick);
}

function updatePlayLabel() {
  playToggle.textContent = t(playing ? "pause" : "play");
  playToggle.setAttribute("aria-pressed", String(!playing));
}

function togglePlay() {
  playing = !playing;
  updatePlayLabel();
}

playToggle.addEventListener("click", togglePlay);
document.getElementById("story").addEventListener("click", togglePlay);

// Drop a file at web/assets/demo.mp4 and it replaces the animated preview.
video.addEventListener("loadedmetadata", () => {
  player.classList.add("has-video");
  video.hidden = false;
  video.controls = true;
  video.play().catch(() => {});
});

/* ---------- Call buttons ---------- */

const dialog = document.getElementById("callDialog");
const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
let qrDrawn = false;

function openCallDialog() {
  if (!qrDrawn && window.QRCode) {
    new window.QRCode(document.getElementById("qr"), { text: PHONE_TEL, width: 168, height: 168 });
    qrDrawn = true;
  }
  dialog.showModal();
}

document.querySelectorAll("[data-call]").forEach((el) => {
  el.addEventListener("click", (e) => {
    // Phones dial straight away; desktops show the number and a QR code to scan.
    if (isDesktop && typeof dialog.showModal === "function") {
      e.preventDefault();
      openCallDialog();
    }
  });
});

// Close when the backdrop (outside the dialog box) is clicked.
dialog.addEventListener("click", (e) => {
  if (e.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  if (outside) dialog.close();
});

const copyBtn = document.getElementById("copyNumber");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(PHONE_RAW);
    copyBtn.textContent = t("copied");
    setTimeout(() => { copyBtn.textContent = t("copy"); }, 1800);
  } catch (_) {
    copyBtn.textContent = PHONE_RAW;
  }
});

/* ---------- Start ---------- */

let saved = null;
try { saved = localStorage.getItem("ns-lang"); } catch (_) {}
applyLang(saved === "hi" ? "hi" : "en");
showScene(0);
requestAnimationFrame(tick);
