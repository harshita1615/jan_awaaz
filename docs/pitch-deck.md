# Jan Awaaz (जन आवाज़): Pitch Deck Content

Slide-by-slide content for the hackathon presentation. Each slide has the **on-screen text** (keep it short) and **speaker notes** (what to say). Items in [square brackets] need your input before presenting.

Suggested length: 12 slides, about 5 minutes, plus a 3-minute live demo.

---

## Slide 1: Title

**On screen:**
- **Jan Awaaz** · जन आवाज़
- *Your street's problem, on the right officer's desk.*
- Call **+91 79 6921 5737** to report any civic problem. No app needed.
- [Team name] · [Hackathon name] · [Date]

**Visual:** the night-time Mumbai street from the landing page, with the logo and phone number on top.

**Speaker notes:**
"Jan Awaaz means 'the people's voice'. It's a phone helpline where anyone in India can report a broken streetlight, a pothole or overflowing garbage, in their own language, and have it reach the one officer responsible for fixing it."

---

## Slide 2: The problem

**On screen:**
- Complaints don't die because people stop caring.
- **They die in the wrong inbox.**
- 📱 Apps nobody installs
- 🗂️ Portals nobody reads
- ✅ "Closed" isn't "fixed"

**Visual:** the photo strip (Kolkata pothole, Delhi garbage, Mumbai monsoon, a dark street).

**Speaker notes:**
"Most complaint systems ask citizens to download an app, create a login and pick the right department from a dropdown. The person who walks past the broken drain every day often has none of that. Even when a complaint is filed, it lands in a general queue, and the engineer who could fix it never sees it. And tickets get marked 'resolved' without anyone asking the citizen."

[Optional: add 1–2 statistics with a source, for example the number of complaints pending on your city's grievance portal. Only use numbers you can cite.]

---

## Slide 3: Who we're building for

**On screen:**
- **Citizens:** anyone with a basic phone, in any language
- **Officers:** ward engineers, sanitation and electrical staff, who want clear, located complaints
- **Cities:** need to know what's broken and where

**Speaker notes:**
"We designed for the least-connected citizen first. If it works for a vegetable seller with a keypad phone who speaks only Marathi, it works for everyone. And we designed the officer's side to need zero training: three buttons in an inbox they already use."

---

## Slide 4: The solution

**On screen:**
- **Phone in.** Call and describe the problem in your language.
- **WhatsApp out.** Photo, location pin and every update arrive on WhatsApp.
- **One officer.** Routed by ward and problem type to the person who owns it.
- **You close it.** A ticket closes only when the citizen confirms it's fixed.

**Speaker notes:**
"Jan Awaaz connects the citizen's phone call directly to the responsible officer's inbox, and keeps both sides in the loop until the problem is actually fixed."

---

## Slide 5: How it works

**On screen (flow diagram):**
1. 📞 **Call:** the AI voice agent Sahayak takes the problem and location
2. 🔐 **Verify:** an OTP confirms the caller's number
3. 💬 **WhatsApp link:** the citizen adds a photo, video and location pin
4. 🧠 **AI check:** the photo confirms the category and severity
5. 🗺️ **Route:** location → ward → department → officer
6. 📧 **Officer:** one-tap Resolved / In progress / Not my area
7. ✅ **Citizen confirms**, or the ticket reopens and escalates

**Speaker notes:**
"The whole loop needs no app on either side. The citizen only makes a phone call and uses WhatsApp, which they already have. The officer only taps a button in an email or WhatsApp message."

---

## Slide 6: Live demo

**On screen:**
- **Live demo**
- Call: +91 79 6921 5737
- Website: [your deployed URL]

**Demo script (about 3 minutes):**
1. A teammate calls and reports, in Hindi, a streetlight that has been off for three days in Andheri West.
2. The agent confirms the details and sends an OTP; the teammate reads it back and is verified.
3. A WhatsApp message arrives with ticket **JA-1042** and the upload link; they send a photo and location pin.
4. The dashboard shows the ticket classified as "Streetlight · High" and routed to the K/West ward officer.
5. The "officer" opens the email and taps **Not my area**, naming Officer B. The ticket moves, and the directory updates.
6. Officer B taps **Resolved**. The citizen gets "Is it really fixed?" on WhatsApp and taps **Yes**.
7. The public map shows the ticket turning green.

**Backup:** [link to the recorded demo video]. Play this if the live call fails.

---

## Slide 7: What makes it different

**On screen:**

| | Typical complaint apps | Jan Awaaz |
|---|---|---|
| Citizen needs | Smartphone, app, login | Any phone |
| Language | Mostly English or Hindi forms | Speak naturally, in many languages |
| Goes to | A general department queue | One named, responsible officer |
| Officer needs | Portal login and training | Three buttons in email or WhatsApp |
| Closed when | The officer says so | The **citizen** confirms |
| Wrong department | Ticket stalls | "Not my area" forwards it and the directory learns |

**Speaker notes:**
"Two ideas set us apart. First, a **self-healing directory**: every 'not my area, it's X' reply permanently improves the routing, so the system gets more accurate with use. Second, **citizen-confirmed closure**: an officer can't close a ticket alone."

---

## Slide 8: Features

**On screen (grid):**
- 🗣️ Multilingual voice agent
- 🔐 OTP-verified callers
- 📸 AI photo check (category + severity)
- 🗺️ Ward-level routing, with national fallback
- 👆 One-tap officer actions
- 🔁 Self-healing officer directory
- ⏱️ Auto-escalation if ignored
- ✅ Citizen-confirmed closure
- 🌍 Public map of open and fixed issues

---

## Slide 9: Architecture and tech stack

**On screen (diagram):**

Citizen call → **VocalLabs** voice agent → backend API (OTP, ticket) → **WhatsApp Business API** (link, updates) → photo upload → **vision AI** (classify, severity) → **routing engine** (PostGIS ward lookup) → officer **email or WhatsApp** (magic link) → status webhook → citizen update → **public map**

| Part | Tool |
|---|---|
| Voice agent and calls | VocalLabs (incoming calls, multilingual) |
| Messaging | WhatsApp Cloud API (templates) |
| Backend | [FastAPI / Node.js] |
| Database | PostgreSQL + PostGIS (Supabase) |
| Image analysis | Vision LLM (Claude) |
| Officer email | Resend |
| Map | Leaflet + OpenStreetMap |
| Ward data | Datameet ward boundaries, Local Government Directory (LGD) |
| Hosting | [Railway / Render / Vercel] |

**Speaker notes:**
"Routing works in levels. If we know the ward officer, the complaint goes to them; if not, to the city office, then the district office, then the state portal. So it works anywhere in India from day one, and gets more precise as officers register."

---

## Slide 10: Impact

**On screen:**
- **Inclusion:** works on a ₹1,000 keypad phone, with no literacy barrier
- **Speed:** the complaint reaches the right person on day one, not after weeks of internal forwarding
- **Accountability:** every ticket is public, timestamped and closed by the citizen
- **Data for cities:** a live map of where problems cluster

**Speaker notes:**
"The biggest impact is on who gets heard. Today, the people most affected by broken civic services are the least able to use the systems meant to fix them."

[If you have pilot feedback or a letter from a ward officer or RWA, put it here. That's your strongest proof.]

---

## Slide 11: Trust, privacy and safety

**On screen:**
- Independent service, clearly **not** posing as a government body
- Phone numbers are never shown publicly; data is used only for updates
- The voice agent never asks for Aadhaar, bank details or payment OTPs
- Emergencies are redirected to **112** immediately
- Officer contacts are verified before tickets are sent to them

**Speaker notes:**
"We've thought carefully about misuse. The OTP stops fake complaints from spoofed numbers, the public map strips personal details, and the agent is built to refuse anything outside civic complaints."

---

## Slide 12: Roadmap

**On screen:**
- **Now (hackathon):** full loop working in Mumbai with demo officers
- **Next 3 months:** pilot with [1 ward office or RWA in your city]; real officer directory for one city
- **6 months:** more cities using public ward and officer data; duplicate detection (many calls about one pothole become one ticket)
- **Later:** integration with official municipal grievance portals; analytics for city planners

**Speaker notes:**
"Our next step is a real pilot. We're [in conversation with / planning to approach] [name the ward office, councillor or RWA]."

---

## Slide 13: Team

**On screen:**
- [Name]: Telephony and voice agent
- [Name]: Backend and routing
- [Name]: AI and data
- [Name]: Frontend, design and pitch

---

## Slide 14: Thank you

**On screen:**
- **Jan Awaaz** · जन आवाज़
- Try it now: **+91 79 6921 5737**
- [Website URL] · [GitHub URL]
- *Har awaaz, sahi jagah.* (Every voice, to the right place.)

---

## Likely judge questions (prepare answers)

1. **"How do you get real officer data?"**
   Public ward office directories and the councillor lists that every city corporation publishes. Officers can also register themselves by phone, and the "Not my area" replies correct the directory over time.
2. **"Why would officers respond?"**
   It costs them one tap, the complaint arrives with a photo and an exact pin, and every ticket is public. Ignored tickets escalate to their senior.
3. **"What stops spam or fake complaints?"**
   OTP verification, photo evidence, one complaint per call, and duplicate detection on the roadmap.
4. **"How is this different from existing government grievance apps?"**
   No app, voice in any language, one named officer instead of a department queue, citizen-confirmed closure, and a directory that improves itself.
5. **"How will it sustain itself?"**
   [Your answer, for example: funded partnerships with municipal corporations, CSR grants, or civic-tech foundations. Pick one you can defend.]
6. **"What does it cost to run?"**
   Per complaint: voice-agent minutes, a few WhatsApp messages and one AI image check. [Add your real numbers from VocalLabs and Meta pricing.]
