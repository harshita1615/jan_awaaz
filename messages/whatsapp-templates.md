# Jan Awaaz: WhatsApp Message Templates

These are the messages Jan Awaaz sends on WhatsApp. Each one is written so it can be submitted to Meta as a message template.

## Rules for submitting to Meta
- **Template names** use lowercase letters and underscores, for example ja_ticket_created.
- **Categories:**
  - The OTP is an **Authentication** template. Meta fixes its wording; you can only switch on the security line and the expiry line.
  - Everything else is a **Utility** template (transactional updates, no marketing).
- **Variables** are written {{1}}, {{2}} and so on. Meta rejects a template whose body starts or ends with a variable, or has two variables side by side, so every body below starts and ends with fixed text.
- **Languages:** submit each template twice, once as English (en) and once as Hindi (hi), under the same name.
- **Link buttons** use a fixed web address with a variable ending, for example https://janawaaz.in/t/{{1}}. Your domain must be verified in Meta Business Manager.
- Replies the citizen sends within 24 hours of their last message don't need templates. The free-text replies in section 4 can be sent as normal messages.

---

## 1. OTP (Authentication)

**Name:** ja_otp
**Category:** Authentication. Meta writes the text; you set the options.

Options to switch on:
- Security disclaimer: on
- Code expiry: 10 minutes
- Button: "Copy code"

What the citizen sees (English):
> **4729** is your verification code. For your security, do not share this code.
> This code expires in 10 minutes.
> [ Copy code ]

What the citizen sees (Hindi):
> **4729** आपका सत्यापन कोड है। अपनी सुरक्षा के लिए यह कोड किसी के साथ साझा न करें।
> यह कोड 10 मिनट में समाप्त हो जाएगा।
> [ कोड कॉपी करें ]

Note: the voice agent asks the caller to read this code aloud during the call, so the security line ("do not share") may confuse callers. If it does, switch the security disclaimer off.

---

## 2. Ticket created + upload link (Utility)

Sent straight after the call, when create_ticket succeeds.

**Name:** ja_ticket_created
**Header (text):** Complaint registered ✅

**Body (English):**
> Namaste {{1}}, your complaint has been registered with Jan Awaaz.
>
> Ticket: *{{2}}*
> Problem: {{3}}
> Location: {{4}}
>
> Please tap the button below to send a photo or video of the problem and drop your exact location pin. This helps the officer find it quickly.
>
> We will update you here at every step.

**Body (Hindi):**
> नमस्ते {{1}}, आपकी शिकायत जन आवाज़ में दर्ज हो गई है।
>
> टिकट: *{{2}}*
> समस्या: {{3}}
> जगह: {{4}}
>
> कृपया नीचे दिए बटन पर टैप करके समस्या की फ़ोटो या वीडियो भेजें और सही लोकेशन पिन डालें। इससे अधिकारी उसे जल्दी ढूँढ पाएँगे।
>
> हर अपडेट आपको यहीं मिलेगा।

**Footer:** Jan Awaaz · Independent citizen service
**Button (link):** "Add photo & location" / "फ़ोटो और लोकेशन भेजें" → https://janawaaz.in/u/{{1}}

**Example values:**
- {{1}} = Ramesh ji (if no name was given, send "Citizen" / "नागरिक")
- {{2}} = JA-1042
- {{3}} = Streetlight not working for 3 days
- {{4}} = Lokhandwala, Andheri West, Mumbai
- Button {{1}} = a one-time upload token, not the ticket ID

---

## 3. Reminder: photo not received (Utility)

Sent if nothing was uploaded within 2 hours.

**Name:** ja_upload_reminder

**Body (English):**
> Your complaint *{{1}}* is registered, but we haven't received a photo or location yet.
>
> A photo and pin help the officer reach the exact spot. It takes less than a minute.

**Body (Hindi):**
> आपकी शिकायत *{{1}}* दर्ज है, लेकिन हमें अभी तक फ़ोटो या लोकेशन नहीं मिली।
>
> फ़ोटो और पिन से अधिकारी सही जगह तक पहुँच पाते हैं। इसमें एक मिनट से कम लगता है।

**Button (link):** "Add photo & location" / "फ़ोटो और लोकेशन भेजें" → https://janawaaz.in/u/{{1}}

---

## 4. Upload received (free text, inside the 24-hour window)

**English:**
> Thank you! We received your photo and location for *JA-1042*. ✅
> Your complaint is now being sent to the officer responsible for your area.

**Hindi:**
> धन्यवाद! *JA-1042* के लिए आपकी फ़ोटो और लोकेशन मिल गई। ✅
> आपकी शिकायत अब आपके इलाके के ज़िम्मेदार अधिकारी को भेजी जा रही है।

If the photo check suggests a different category:
> From your photo, this looks like a *drainage* problem. Is that right?
> [ Yes ] [ No, it's {{original category}} ]

---

## 5. Sent to officer (Utility)

**Name:** ja_routed

**Body (English):**
> Update on *{{1}}*: your complaint has been sent to *{{2}}*, who is responsible for this area.
>
> We'll let you know as soon as they respond.

**Body (Hindi):**
> अपडेट: टिकट *{{1}}* वाली आपकी शिकायत *{{2}}* को भेज दी गई है, जो इस इलाके के ज़िम्मेदार हैं।
>
> उनका जवाब आते ही हम आपको बताएँगे।

**Example:** {{1}} = JA-1042, {{2}} = Junior Engineer (Electrical), K/West Ward

Use the officer's designation, never their personal name or phone number.

---

## 6. Work in progress (Utility)

**Name:** ja_in_progress

**Body (English):**
> Good news on *{{1}}*: the officer has marked your complaint as *in progress*.
>
> We'll update you when they mark it as done.

**Body (Hindi):**
> अच्छी खबर: टिकट *{{1}}* पर अधिकारी ने *काम शुरू* कर दिया है।
>
> काम पूरा होने पर हम आपको बताएँगे।

---

## 7. Forwarded to the right officer (Utility)

Sent when an officer taps "Not my area".

**Name:** ja_forwarded

**Body (English):**
> Update on *{{1}}*: the first officer told us this is handled by another department, so we've forwarded it to *{{2}}*.
>
> No action is needed from you.

**Body (Hindi):**
> अपडेट: टिकट *{{1}}* के बारे में पहले अधिकारी ने बताया कि यह दूसरे विभाग का काम है, इसलिए हमने इसे *{{2}}* को भेज दिया है।
>
> आपको कुछ करने की ज़रूरत नहीं है।

---

## 8. Resolved: please confirm (Utility)

Sent when the officer taps "Resolved". This is the citizen-confirmed closure step.

**Name:** ja_confirm_fix

**Body (English):**
> The officer has marked *{{1}}* as *resolved*.
>
> Is the problem really fixed? Please check and tell us. If you can, send a photo too.

**Body (Hindi):**
> अधिकारी ने *{{1}}* को *हल* बता दिया है।
>
> क्या समस्या सच में ठीक हो गई? कृपया देखकर बताइए। हो सके तो एक फ़ोटो भी भेजिए।

**Buttons (quick reply):**
- "Yes, it's fixed ✅" / "हाँ, ठीक हो गया ✅"
- "No, not fixed ❌" / "नहीं, ठीक नहीं हुआ ❌"

---

## 9. Replies to the confirm buttons (free text, inside the 24-hour window)

**If the citizen taps Yes (closed):**
> Thank you for confirming! *JA-1042* is now closed. 🙏
> If you see another problem, call Jan Awaaz any time.

> पुष्टि के लिए धन्यवाद! *JA-1042* अब बंद हो गया है। 🙏
> कोई और समस्या दिखे तो जन आवाज़ पर कभी भी कॉल करें।

**If the citizen taps No (reopened):**
> Sorry to hear that. We've reopened *JA-1042* and sent it back to the officer.
> Please send a photo of the current situation so they can see what's still wrong.

> यह जानकर अफ़सोस हुआ। हमने *JA-1042* को फिर से खोलकर अधिकारी को वापस भेज दिया है।
> कृपया अभी की स्थिति की एक फ़ोटो भेजें, ताकि उन्हें पता चले कि क्या बाकी है।

**No reply after 3 days:**
> We didn't hear back on *JA-1042*, so we've marked it as resolved. If the problem is still there, reply *REOPEN* and we'll send it back.

---

## 10. Escalated (Utility)

Sent when the officer doesn't respond in time.

**Name:** ja_escalated

**Body (English):**
> Update on *{{1}}*: we didn't get a response in time, so your complaint has been escalated to *{{2}}*.
>
> We're still tracking it for you.

**Body (Hindi):**
> अपडेट: टिकट *{{1}}* पर समय पर जवाब नहीं मिला, इसलिए शिकायत *{{2}}* तक आगे बढ़ा दी गई है।
>
> हम इस पर नज़र रखे हुए हैं।

**Example:** {{2}} = Assistant Commissioner, K/West Ward

---

## 11. Message to the officer (Utility, officer's WhatsApp)

**Name:** ja_officer_new_ticket
**Header (image):** the citizen's photo, if uploaded

**Body (English):**
> New complaint for your area: *{{1}}*
>
> Problem: {{2}}
> Location: {{3}}
> Reported: {{4}} · Severity: {{5}}
>
> Please tap one option below. The citizen will be updated automatically.

**Buttons (quick reply):**
- "Resolved"
- "In progress"
- "Not my area"

**Button (link):** "View photo & map" → https://janawaaz.in/o/{{1}}

**When the officer taps "Not my area" (free text):**
> Thanks for letting us know. Who handles this? Reply with their name, designation or email, and we'll forward it and update our records.

**After the officer replies:**
> Done. *JA-1042* has been forwarded. Thank you for helping us route it correctly. 🙏

---

## Message flow at a glance

1. Call ends with a verified OTP → **ja_ticket_created**, with the upload link
2. No upload after 2 hours → **ja_upload_reminder**
3. Upload received → thank-you message (free text) → **ja_routed** to the citizen, and **ja_officer_new_ticket** to the officer
4. The officer taps:
   - In progress → **ja_in_progress**
   - Not my area → **ja_forwarded**
   - Resolved → **ja_confirm_fix**
5. The citizen taps:
   - Yes → closed
   - No → reopened and sent back to the officer
6. No officer response in time → **ja_escalated**
