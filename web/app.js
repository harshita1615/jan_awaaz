const PHONE_TEL = "tel:+917969215737";
const PHONE_RAW = "+917969215737";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =============== Language =============== */

const STRINGS = {
  hi: {
    navHow: "कैसे काम करता है", navDemo: "डेमो", navFeatures: "खूबियाँ", navMap: "नक्शा", navOfficers: "अधिकारियों के लिए", navFaq: "सवाल",
    callShort: "कॉल करें",
    eyebrow: "नागरिक हेल्पलाइन · कोई ऐप नहीं",
    heroL1: "आपकी गली की समस्या,", heroL2: "सही", heroL3: "अधिकारी की मेज़ तक।",
    heroLead: "कॉल करें, अपनी भाषा में समस्या बताइए, और हम उसे उस एक अधिकारी तक भेजते हैं जो आपके इलाके का ज़िम्मेदार है। फिर जब तक काम सच में न हो जाए, WhatsApp पर आपको बताते रहते हैं।",
    makeComplaint: "शिकायत दर्ज करें", watchDemo: "डेमो देखें", orDial: "या डायल करें",
    tk1: "शिकायत दर्ज हुई", tk2: "फ़ोटो और लोकेशन मिली", tk3: "JE इलेक्ट्रिकल, K/West को भेजी गई", tk4: "अधिकारी: काम चल रहा है", tk5: "नागरिक ने पुष्टि की: ठीक हो गया",
    stamp: "ठीक", ticketFoot: "नमूना टिकट",
    probKicker: "समस्या",
    probTitle: "शिकायतें इसलिए नहीं मरतीं कि लोगों को परवाह नहीं। वे गलत इनबॉक्स में मर जाती हैं।",
    r1: "ऐप जो कोई इंस्टॉल नहीं करता", r1p: "ज़्यादातर शिकायत ऐप को स्मार्टफ़ोन, लॉगिन और धैर्य चाहिए। जो इंसान रोज़ टूटी नाली के पास से गुज़रता है, उसके पास अक्सर इनमें से कुछ नहीं होता।",
    r2: "पोर्टल जो कोई नहीं पढ़ता", r2p: "शिकायतें एक आम कतार में पड़ी रहती हैं। जो इंजीनियर एक दोपहर में इसे ठीक कर सकता है, उसे पता ही नहीं चलता।",
    r3: "\"बंद\" का मतलब \"ठीक\" नहीं", r3p: "टिकट बिना जाँचे \"हल\" मार्क कर दिए जाते हैं। शिकायत करने वाले से कोई नहीं पूछता।",
    floodQuote: "हर मानसून, वही सड़कें। वही शिकायतें। और अक्सर वही गलत पता।",
    howKicker: "कैसे काम करता है", howTitle: "एक कॉल अंदर। अपडेट बाहर। कुछ भी इंस्टॉल नहीं।",
    s1: "कॉल करें और बताइए", s1p: "\"शिकायत दर्ज करें\" दबाएँ या नंबर डायल करें। हमारी वॉइस सहायक पूछती है कि क्या खराब है और कहाँ, हिंदी, अंग्रेज़ी, मराठी या आपकी भाषा में। करीब दो मिनट।",
    s2: "WhatsApp पर फ़ोटो भेजें", s2p: "आपको टिकट नंबर और एक WhatsApp मैसेज मिलेगा। फ़ोटो भेजिए और लोकेशन पिन डालिए, ताकि अधिकारी को ठीक-ठीक पता हो कि कौन सा खंभा या गड्ढा।",
    s3: "हम फ़ोटो पढ़ते हैं", s3p: "फ़ोटो से समस्या का प्रकार और गंभीरता जाँची जाती है। खुला बिजली का तार आगे आता है; फीकी सड़क की लकीर अपनी बारी का इंतज़ार करती है।",
    s4: "एक इंसान तक पहुँचती है", s4p: "वार्ड और समस्या का प्रकार तय करता है कि ज़िम्मेदार कौन है। अधिकारी को ईमेल या WhatsApp पर तीन बटन मिलते हैं: हल हुआ, काम चल रहा है, मेरा इलाका नहीं। न ऐप, न पासवर्ड।",
    s5: "ठीक हुआ या नहीं, आप तय करें", s5p: "जब अधिकारी काम पूरा बताता है, हम आपसे पूछते हैं: \"क्या सच में ठीक हुआ? फ़ोटो भेजिए।\" आप ना कहें, तो शिकायत वापस जाती है, और अनदेखी हो तो ऊपर तक।",
    demoKicker: "डेमो", demoTitle: "एक शिकायत को फ़ोन कॉल से जलती स्ट्रीटलाइट तक देखिए।",
    c1: "रमेश हेल्पलाइन पर कॉल करते हैं", c2: "हिंदी में समस्या बताते हैं", c3: "WhatsApp पर फ़ोटो और पिन", c4: "वार्ड अधिकारी तक पहुँचती है", c5: "रमेश पुष्टि करते हैं",
    pause: "रोकें", play: "चलाएँ", demoNote: "रोकने के लिए फ़ोन पर टैप करें।",
    featKicker: "खूबियाँ", featTitle: "छोटी बातें, जिनसे शिकायत सच में पहुँचती है।",
    f1: "आपकी भाषा बोलती है", f1p: "हिंदी, अंग्रेज़ी, मराठी, हिंग्लिश और भी। बीच में भाषा बदलिए, सहायक भी बदल लेगी।",
    f2: "किसी भी फ़ोन पर", f2p: "शिकायत दर्ज करने के लिए ₹1,000 का कीपैड फ़ोन काफ़ी है। न ऐप, न अकाउंट।",
    f3: "फ़ोटो जाँच", f3p: "हर फ़ोटो से श्रेणी और गंभीरता की पुष्टि होती है, ताकि ज़रूरी समस्याएँ ऊपर आएँ।",
    f4: "वार्ड स्तर पर रूटिंग", f4p: "लोकेशन पिन → वार्ड → विभाग → एक नामित अधिकारी। अगर अधिकारी अभी पता नहीं, तो शहर या ज़िला कार्यालय को।",
    f5: "खुद सुधरने वाली डायरेक्टरी", f5p: "जब अधिकारी \"मेरा इलाका नहीं, X का है\" दबाता है, टिकट X के पास जाता है और डायरेक्टरी याद रखती है।",
    f6: "अनदेखी हो तो ऊपर", f6p: "समय पर जवाब नहीं? शिकायत अपने आप वरिष्ठ अधिकारी तक जाती है।",
    f7: "टिकट आप बंद करते हैं", f7p: "न अधिकारी, न हम। शिकायत तभी बंद होती है जब शिकायत करने वाला कहे।",
    f8: "सबके लिए खुला", f8p: "हर टिकट (बिना निजी जानकारी के) सार्वजनिक नक्शे पर दिखता है: खुला, काम जारी, ठीक।", f8a: "नक्शा देखें →",
    mapKicker: "सार्वजनिक नक्शा", mapTitle: "क्या टूटा है, क्या ठीक हो रहा है, और क्या हो गया।",
    mAll: "सभी", mOpen: "खुले", mProg: "काम जारी", mFixed: "ठीक",
    mapNote: "ये डेमो के लिए नमूना टिकट हैं। पायलट शुरू होने पर असली टिकट यहाँ दिखेंगे।",
    offKicker: "अधिकारियों के लिए", offTitle: "तीन बटन। आपके लिए पूरा सिस्टम बस इतना है।",
    offP: "आपके वार्ड की शिकायतें उसी ईमेल या WhatsApp पर आती हैं जो आप पहले से इस्तेमाल करते हैं, फ़ोटो और सही पिन के साथ। एक टैप से नागरिक को अपडेट। गलत व्यक्ति? बताइए कौन है, हम रिकॉर्ड ठीक कर देंगे।",
    offL1: "न ऐप, न लॉगिन, न ट्रेनिंग", offL2: "सिर्फ़ आपके इलाके और विभाग की शिकायतें", offL3: "फ़ोन पर दो मिनट में खुद रजिस्टर करें",
    offBtn: "अधिकारी के रूप में रजिस्टर करें", ibFwd: "इसे संभालते हैं:",
    peopleHand: "जो लोग शहर ठीक करते हैं",
    peopleTitle: "शहर लोग ठीक करते हैं। हम बस यह पक्का करते हैं कि बात उन तक पहुँचे।",
    peopleP: "लाइनमैन, सफ़ाई कर्मचारी, वार्ड इंजीनियर। ज़्यादातर चीज़ें ठीक करना चाहते हैं। जन आवाज़ उन्हें साफ़ शिकायत, फ़ोटो और सही लोकेशन देती है, न कि फ़ॉरवर्ड का फ़ॉरवर्ड।",
    faqKicker: "सवाल", faqTitle: "लोग हमसे क्या पूछते हैं",
    q1: "क्या जन आवाज़ सरकारी सेवा है?", a1: "नहीं। हम एक स्वतंत्र नागरिक सेवा हैं। हम आपकी शिकायत ज़िम्मेदार सरकारी अधिकारी तक पहुँचाते हैं और बंद होने तक उस पर नज़र रखते हैं।",
    q2: "क्या इसका कोई पैसा लगता है?", a2: "नागरिकों के लिए मुफ़्त है। सिर्फ़ आपका सामान्य कॉल चार्ज लगता है। हम कभी पैसे, OTP या बैंक जानकारी नहीं माँगेंगे।",
    q3: "मेरे पास WhatsApp नहीं है। क्या फिर भी शिकायत कर सकता हूँ?", a3: "हाँ। सिर्फ़ कॉल से शिकायत दर्ज होकर अधिकारी तक जाती है। फ़ोटो और अपडेट के लिए आप परिवार के किसी सदस्य का WhatsApp नंबर भी दे सकते हैं।",
    q4: "यह किन शहरों में काम करता है?", a4: "पूरे भारत से शिकायतें ली जाती हैं। जहाँ हमें वार्ड अधिकारी पता है, वहाँ उन्हें जाती है; नहीं तो शहर या ज़िला कार्यालय को। वार्ड स्तर की शुरुआत मुंबई से हो रही है।",
    q5: "मेरे फ़ोन नंबर का क्या होता है?", a5: "इसका इस्तेमाल सिर्फ़ आपकी शिकायत के अपडेट भेजने के लिए होता है। यह सार्वजनिक नक्शे पर कभी नहीं दिखता और संबंधित अधिकारी के अलावा किसी से साझा नहीं होता।",
    q6: "अगर आपातकाल हो तो?", a6: "आग, दुर्घटना, सड़क पर खुला तार, या जान का कोई भी खतरा हो, तो पहले 112 पर कॉल करें। बाद में हमें बता सकते हैं ताकि विभाग को भी पता चले।",
    ctaTitle: "घर लौटते हुए कुछ टूटा दिखा?", ctaP: "करीब दो मिनट लगते हैं। आज ही किसी ज़िम्मेदार तक बात पहुँचेगी।",
    emTitle: "आपातकाल?", emP: "आग, दुर्घटना या जान के खतरे में कॉल करें",
    disclaimer: "जन आवाज़ एक स्वतंत्र नागरिक सेवा है, कोई सरकारी संस्था नहीं। हम शिकायतें ज़िम्मेदार अधिकारियों तक पहुँचाते हैं।",
    credits: "फ़ोटो और वीडियो का श्रेय",
    dlgTitle: "शिकायत के लिए कॉल करें", dlgP: "कॉल करने के लिए फ़ोन कैमरे से स्कैन करें, या नीचे दिया नंबर डायल करें।",
    copy: "नंबर कॉपी करें", copied: "कॉपी हो गया!", callDevice: "इस डिवाइस से कॉल करें",
  },
};

const i18nNodes = document.querySelectorAll("[data-i18n]");
const english = { play: "Play", copied: "Copied!" };
i18nNodes.forEach((el) => { english[el.dataset.i18n] ??= el.textContent; });

let lang = "en";
const t = (key) => (lang === "hi" && STRINGS.hi[key]) || english[key] || key;

function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  i18nNodes.forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.getElementById("langToggle").textContent = lang === "hi" ? "English" : "हिंदी";
  updatePlayLabel();
  try { localStorage.setItem("ja-lang", lang); } catch (_) {}
}
document.getElementById("langToggle").addEventListener("click", () => applyLang(lang === "hi" ? "en" : "hi"));

/* =============== Header + mobile call bar =============== */

const header = document.getElementById("siteHeader");
const mobileCall = document.querySelector(".mobile-call");
const timeline = document.getElementById("timeline");

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 40);
  mobileCall.classList.toggle("show", y > window.innerHeight * 0.6);

  // Fill the timeline line as it scrolls through the viewport.
  const r = timeline.getBoundingClientRect();
  const progress = (window.innerHeight * 0.6 - r.top) / r.height;
  timeline.style.setProperty("--tl", Math.max(0, Math.min(1, progress)).toFixed(3));
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* =============== Reveal on scroll =============== */

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    revealObs.unobserve(e.target);
  });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach((el) => {
  // Stagger siblings that reveal together (cards, photos, reasons).
  const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
  el.style.setProperty("--d", `${Math.min(siblings.indexOf(el), 6) * 0.08}s`);
  revealObs.observe(el);
});

/* Run a callback while an element is on screen. */
function whileVisible(el, onShow, onHide, threshold = 0.3) {
  new IntersectionObserver(([e]) => (e.isIntersecting ? onShow() : onHide && onHide()), { threshold }).observe(el);
}

/* =============== Hero ticket =============== */

const ticket = document.getElementById("heroTicket");
const ticketSteps = [...ticket.querySelectorAll(".ticket-steps li")];
let ticketTimer = null;
let ticketStep = 0;

function advanceTicket() {
  if (ticketStep < ticketSteps.length) {
    ticketSteps[ticketStep].classList.add("done");
    ticketStep++;
    if (ticketStep === ticketSteps.length) ticket.classList.add("stamped");
    ticketTimer = setTimeout(advanceTicket, ticketStep === ticketSteps.length ? 3800 : 1100);
  } else {
    ticketSteps.forEach((li) => li.classList.remove("done"));
    ticket.classList.remove("stamped");
    ticketStep = 0;
    ticketTimer = setTimeout(advanceTicket, 700);
  }
}
if (reduceMotion) {
  ticketSteps.forEach((li) => li.classList.add("done"));
  ticket.classList.add("stamped");
} else {
  whileVisible(ticket, () => { if (!ticketTimer) ticketTimer = setTimeout(advanceTicket, 1400); },
    () => { clearTimeout(ticketTimer); ticketTimer = null; });
}

/* =============== Videos that play only when visible =============== */

document.querySelectorAll("video[data-autoplay-visible]").forEach((v) => {
  whileVisible(v, () => v.play().catch(() => {}), () => v.pause(), 0.25);
});

/* =============== Demo player =============== */

const SCENE_MS = 4800;
const player = document.getElementById("demoPlayer");
const demoVideo = document.getElementById("demoVideo");
const scenes = [...document.querySelectorAll(".scene")];
const bars = [...document.querySelectorAll(".story-progress span")];
const chapters = [...document.querySelectorAll(".chapters button")];
const playToggle = document.getElementById("playToggle");

let current = 0;
let elapsed = 0;
let playing = !reduceMotion;
let demoVisible = false;
let last = performance.now();

function showScene(i) {
  current = i;
  elapsed = 0;
  scenes.forEach((s, n) => {
    s.classList.toggle("active", n === i);
    s.classList.toggle("past", n < i);
  });
  bars.forEach((b, n) => b.style.setProperty("--p", n < i ? 1 : 0));
  chapters.forEach((c, n) => { c.classList.toggle("active", n === i); c.style.setProperty("--p", 0); });
}

function tick(now) {
  const dt = Math.min(now - last, 100);
  last = now;
  if (playing && demoVisible && !player.classList.contains("has-video")) {
    elapsed += dt;
    if (elapsed >= SCENE_MS) showScene((current + 1) % scenes.length);
    const p = elapsed / SCENE_MS;
    bars[current].style.setProperty("--p", p);
    chapters[current].style.setProperty("--p", p);
  }
  requestAnimationFrame(tick);
}

function updatePlayLabel() {
  const label = playToggle.querySelector("[data-i18n]");
  label.textContent = t(playing ? "pause" : "play");
  playToggle.setAttribute("aria-pressed", String(!playing));
}

function togglePlay() {
  playing = !playing;
  updatePlayLabel();
}

playToggle.addEventListener("click", togglePlay);
document.getElementById("story").addEventListener("click", togglePlay);
chapters.forEach((c) => c.addEventListener("click", () => {
  showScene(Number(c.dataset.goto));
  if (!playing) togglePlay();
}));
whileVisible(player, () => { demoVisible = true; }, () => { demoVisible = false; }, 0.4);

// Put a screen recording at web/assets/demo.mp4 and it replaces the animated phone.
demoVideo.addEventListener("loadedmetadata", () => {
  player.classList.add("has-video");
  demoVideo.hidden = false;
  demoVideo.controls = true;
  demoVideo.play().catch(() => {});
});
if (location.protocol !== "file:") demoVideo.src = "assets/demo.mp4";

/* =============== Officer inbox =============== */

const inbox = document.querySelector(".inbox");
const notMine = document.getElementById("notMine");
const forward = document.querySelector(".ib-forward");
const typed = document.getElementById("typed");
const FORWARD_TO = "JE Electrical, K/West ward";
let inboxTimer = null;

function runInbox(step = 0) {
  if (step === 0) { typed.textContent = ""; forward.classList.remove("show"); inboxTimer = setTimeout(() => runInbox(1), 1600); return; }
  if (step === 1) { notMine.classList.add("tap"); inboxTimer = setTimeout(() => { notMine.classList.remove("tap"); forward.classList.add("show"); runInbox(2); }, 300); return; }
  const n = step - 2;
  if (n < FORWARD_TO.length) {
    typed.textContent = FORWARD_TO.slice(0, n + 1);
    inboxTimer = setTimeout(() => runInbox(step + 1), 70);
  } else {
    inboxTimer = setTimeout(() => runInbox(0), 3200);
  }
}
if (reduceMotion) {
  forward.classList.add("show");
  typed.textContent = FORWARD_TO;
} else {
  whileVisible(inbox, () => { if (!inboxTimer) runInbox(0); }, () => { clearTimeout(inboxTimer); inboxTimer = null; });
}

/* =============== Public map (sample data) =============== */

const SAMPLE_TICKETS = [
  ["JA-1042", "Streetlight", "Lokhandwala, Andheri West", "K/W", 19.1416, 72.8270, "fixed"],
  ["JA-1043", "Pothole", "SV Road, Andheri West", "K/W", 19.1300, 72.8410, "progress"],
  ["JA-1044", "Garbage", "Hill Road, Bandra West", "H/W", 19.0560, 72.8300, "open"],
  ["JA-1045", "Waterlogging", "Hindmata, Dadar", "F/S", 19.0040, 72.8420, "progress"],
  ["JA-1046", "Drainage", "Kurla West market", "L", 19.0700, 72.8800, "open"],
  ["JA-1047", "Streetlight", "Colaba Causeway", "A", 18.9150, 72.8250, "fixed"],
  ["JA-1048", "Pothole", "Western Express Hwy, Borivali", "R/C", 19.2310, 72.8600, "open"],
  ["JA-1049", "Garbage", "LBS Marg, Ghatkopar West", "N", 19.0890, 72.9050, "fixed"],
  ["JA-1050", "Water supply", "Chembur Camp", "M/W", 19.0560, 72.8990, "progress"],
  ["JA-1051", "Stray animals", "Malad West", "P/N", 19.1870, 72.8420, "open"],
  ["JA-1052", "Fallen tree", "Hiranandani, Powai", "S", 19.1180, 72.9090, "fixed"],
  ["JA-1053", "Streetlight", "Worli Naka", "G/S", 19.0100, 72.8180, "progress"],
  ["JA-1054", "Pothole", "Sion Circle", "F/N", 19.0410, 72.8620, "fixed"],
  ["JA-1055", "Drainage", "Goregaon East", "P/S", 19.1650, 72.8580, "open"],
  ["JA-1056", "Garbage", "Mulund West station road", "T", 19.1720, 72.9520, "progress"],
  ["JA-1057", "Public toilet", "Vile Parle East", "K/E", 19.0990, 72.8510, "open"],
  ["JA-1058", "Waterlogging", "Lower Parel", "G/S", 18.9960, 72.8300, "fixed"],
  ["JA-1059", "Mosquito breeding", "Byculla", "E", 18.9790, 72.8340, "progress"],
  ["JA-1060", "Encroachment", "Santacruz West", "H/W", 19.0820, 72.8370, "open"],
  ["JA-1061", "Streetlight", "Jogeshwari East", "K/E", 19.1380, 72.8580, "fixed"],
  ["JA-1062", "Pothole", "Eastern Express Hwy, Vikhroli", "S", 19.1100, 72.9290, "progress"],
  ["JA-1063", "Garbage", "Dharavi 90 Feet Road", "G/N", 19.0420, 72.8530, "fixed"],
];
const STATUS_LABEL = { open: ["Open", "खुला"], progress: ["In progress", "काम जारी"], fixed: ["Fixed", "ठीक"] };
const STATUS_COLOR = { open: "var(--chili)", progress: "#c27f12", fixed: "var(--leaf)" };

const mapEl = document.getElementById("leafletMap");
let mapStarted = false;

function startMap() {
  if (mapStarted || !window.L) return;
  mapStarted = true;

  const map = L.map(mapEl, { scrollWheelZoom: false, zoomSnap: 0.25 }).setView([19.08, 72.875], 11);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const groups = { open: L.layerGroup(), progress: L.layerGroup(), fixed: L.layerGroup() };
  SAMPLE_TICKETS.forEach(([id, type, place, ward, lat, lng, status], i) => {
    const icon = L.divIcon({
      className: "pin-wrap",
      html: `<div class="mpin ${status}" style="--d:${(i * 0.06).toFixed(2)}s"></div>`,
      iconSize: [18, 18], iconAnchor: [9, 22], popupAnchor: [0, -20],
    });
    const label = STATUS_LABEL[status][lang === "hi" ? 1 : 0];
    L.marker([lat, lng], { icon, title: `${id} ${type}` })
      .bindPopup(`<b>${id} · ${type}</b><br>${place}<br>Ward ${ward}<br><span class="pop-status" style="color:${STATUS_COLOR[status]}">${label}</span>`)
      .addTo(groups[status]);
  });
  Object.values(groups).forEach((g) => g.addTo(map));
  const fit = () => { map.invalidateSize(); map.fitBounds(SAMPLE_TICKETS.map((tk) => [tk[4], tk[5]]), { padding: [16, 16] }); };
  fit();
  // The section is still sliding in when the map starts, so fit again once it settles.
  setTimeout(fit, 900);

  const count = (s) => SAMPLE_TICKETS.filter((tk) => tk[6] === s).length;
  document.getElementById("cAll").textContent = SAMPLE_TICKETS.length;
  document.getElementById("cOpen").textContent = count("open");
  document.getElementById("cProgress").textContent = count("progress");
  document.getElementById("cFixed").textContent = count("fixed");

  document.querySelectorAll(".chip-btn").forEach((btn) => btn.addEventListener("click", () => {
    document.querySelectorAll(".chip-btn").forEach((b) => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    Object.entries(groups).forEach(([s, g]) => {
      if (f === "all" || f === s) g.addTo(map); else g.remove();
    });
  }));
}
// Leaflet loads with `defer`, so wait for the window load before drawing.
window.addEventListener("load", () => whileVisible(mapEl, startMap, null, 0.1));

/* =============== Call buttons =============== */

const dialog = document.getElementById("callDialog");
const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
let qrDrawn = false;

document.querySelectorAll("[data-call]").forEach((el) => {
  el.addEventListener("click", (e) => {
    // Phones dial straight away; desktops show the number and a QR code to scan.
    if (!isDesktop || typeof dialog.showModal !== "function") return;
    e.preventDefault();
    if (!qrDrawn && window.QRCode) {
      new window.QRCode(document.getElementById("qr"), { text: PHONE_TEL, width: 168, height: 168 });
      qrDrawn = true;
    }
    dialog.showModal();
  });
});

// Close when the backdrop (outside the dialog box) is clicked.
dialog.addEventListener("click", (e) => {
  if (e.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
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

/* =============== Start =============== */

let saved = null;
try { saved = localStorage.getItem("ja-lang"); } catch (_) {}
applyLang(saved === "hi" ? "hi" : "en");
showScene(0);
requestAnimationFrame(tick);
