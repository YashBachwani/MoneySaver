# 💸 MONEY SAVER

## SPLIT THE MATH. NOT THE MONEY.

> 📰 EXPERIMENT NO. 001
> One payment entered the building.
> Multiple simulated payments came out.
> Nobody panicked.
> Except the calculator.

MoneySaver is a small educational demo that takes a UPI QR, reads the payment details, and shows how one total can be broken into smaller simulated payment chunks. It is not a payment processor, not a banking tool, and definitely not a secret way to outsmart the system. It is a visual experiment in understanding the math behind a payment flow.

If a checkout looks like this:

₹7,500

it can be represented as:

₹2,000
₹2,000
₹2,000
₹1,500

And then:

₹2,000 + ₹2,000 + ₹2,000 + ₹1,500 = ₹7,500 ✓

Nothing disappeared. Nothing was created. The accountant can sleep tonight.

---

# WHAT IS MONEY SAVER?

MoneySaver is a browser-based demo built to make payment math easier to see and understand. The app is designed around a very simple idea: when a UPI QR includes a merchant destination and an amount, the interface can simulate how that total might be split into smaller payment amounts.

It does this by:

- reading a UPI QR image
- extracting the payment destination and merchant name
- accepting a total amount
- choosing a maximum simulated payment size
- generating smaller payment chunks as demo QR representations
- checking that the total still adds up correctly

This is all for educational and demonstration purposes. It exists to help people visualize payment mechanics in plain English instead of forcing them to read six paragraphs of financial jargon while their coffee goes cold.

Because reading six paragraphs about payment rules isn't exactly what we call a Sunday activity.

---

# WHY WAS IT BUILT?

This started with a very normal question:

"What happens if we split it?"

And then someone built it.

The goal was simple: make UPI payment math less mysterious. The site is meant to help curious users understand how a total can be broken into smaller payments, what a QR might contain, and how the underlying numbers behave when simulated in a controlled environment.

It is not trying to solve taxes, fees, banking policies, or merchant compliance with a single click. It is just a clean little visual experiment built to ask: what if we made payment math easier to read?

---

# HOW IT WORKS

## 01 — DROP YOUR QR

The first step is to upload a UPI QR image. In the browser, the app tries to decode the QR code and extract the relevant UPI information. When it works, the destination and merchant details are shown on screen.

This is the part where the project looks at the QR as a data source, not as a magical payment oracle.

## 02 — ENTER THE AMOUNT

Once the QR is recognized, the next step is to enter the total amount in rupees.

Example:

₹7,500

The app accepts the amount and validates it before moving forward. In other words: no nonsense, no hidden math tricks, no "oops, that was actually ₹6,900" energy.

## 03 — CHOOSE THE MAXIMUM

Then the user picks the maximum simulated payment size.

Example:

₹2,000

This decides how large each split can be before the app starts creating the next one. It is a visual control for the experiment, not a payment rulebook.

## 04 — LET THE MATH COOK

Once the amount and maximum are in place, the app calculates the split and builds a result like this:

Payment 01 → ₹2,000
Payment 02 → ₹2,000
Payment 03 → ₹2,000
Payment 04 → ₹1,500

Then the app checks the total:

₹2,000 + ₹2,000 + ₹2,000 + ₹1,500 = ₹7,500 ✓

It is a conceptual payment breakdown, not a real transaction. The goal is to make the logic visible and understandable.

---

# QR FUNCTIONALITY

MoneySaver can decode an uploaded UPI QR and extract basic payment information such as the UPI ID and merchant name. That data is then used to populate the interface and generate simulated QR representations for each split.

The app preserves the original destination information when it builds the demo QR representations, which helps keep the generated cards visually aligned with the source payment context. In plain English: the demo split cards still point at the same destination, but they are clearly part of a simulation.

This should be read as a demo setup for learning and experimentation, not as a live payment system. The app does not send or complete real transactions.

The wording in the interface is intentionally clear: these are generated demo QR representations, not real payment instructions.

---

# 🔐 DOES MONEY SAVER TOUCH MY BANK ACCOUNT?

NO.

MoneySaver does not ask for:

- UPI PIN
- OTP
- bank password
- card number
- CVV
- internet banking credentials
- your emotional support during tax season

The QR processing in the app happens on the client side in the browser. The app is designed to read a QR image and analyze its content locally; it does not ask for financial credentials as part of the flow.

We don't need your financial life story.

That said, this is a demo project and should still be treated with common sense. If you upload a QR image, you are deciding what information you are sharing with the app in your browser environment.

---

# DEMO MODE

There is a built-in demo mode for testing the experience without needing a real QR image.

Click the demo button and the app loads a sample UPI flow with a total like ₹7,500 and a max payment size of ₹2,000. It is fake money. Which means: perfect.

This is a good way to see how the split engine behaves without needing a live QR scan at the moment.

---

# 🎯 WHO IS THIS FOR?

## 🧑‍💻 DEVELOPERS

For people who look at a QR code and immediately think: "I wonder what's actually inside this thing."

## 🎓 STUDENTS

For anyone learning how payment data is represented, how totals are calculated, and why payment flows can feel more confusing than they should.

## 🧠 CURIOUS USERS

For the people who want to understand the math behind payment breakdowns without reading a 30-page fintech PDF written by a sleep-deprived intern.

## 🏪 MERCHANTS & BUSINESS OWNERS

For operators who want a clearer, visual explanation of how a total can be represented in smaller simulated chunks without diving straight into payment-provider jargon.

---

# DESIGN PHILOSOPHY

MoneySaver does not look like a normal fintech tool, and that is intentional.

Normal fintech websites already have enough gradients, glass cards, and suspiciously rounded rectangles. This one leans into a newspaper/editorial rhythm, a sketchbook engineering aesthetic, and a little Gen-Z chaos energy.

The visual direction mixes:

- newspaper and editorial layouts
- engineering notebook energy
- hand-drawn illustration details
- black and off-white surfaces
- yellow highlight accents
- thick borders and hard shadows
- bold typography
- playful product personality

The result feels a bit like a financial experiment that escaped a design brief and became more interesting because of it.

---

# MONEY SAVER CHARACTERS

The interface includes illustrated characters to make the payment story more readable and memorable. These are fictional editorial personas used to give the product a clearer point of view.

### THE SHOPKEEPER

"Okay... but where did the money go?"

### THE CUSTOMER

"Can I just scan this?"

### THE MATH NERD

"Give me three seconds."

### THE ACCOUNTANT

"Where is the ₹1?"

### THE QR GUY

"Scan me."

These characters are part of the site's editorial language, not real endorsements or public-personality statements. They are there to help the interface feel human, not to pretend to be the financial system.

---

# 🚨 IMPORTANT

MoneySaver is an educational and demo project.

It:

- does not process payments
- does not access bank accounts
- does not guarantee fee avoidance
- does not guarantee MDR treatment
- does not guarantee regulatory compliance
- does not replace payment providers
- does not provide financial, tax, banking, or legal advice

Please follow applicable laws, regulations, and payment-provider terms. Do not turn our little Sunday experiment into a banking incident.

---

# REAL-WORLD PAYMENT RULES

MoneySaver is designed to visualize payment calculations and mechanics. It does not claim to beat payment rules, sidestep charges, or magically avoid compliance issues.

Real payment systems have their own fees, merchant rules, regulatory requirements, and operational constraints. Those rules vary by provider, geography, and use case. This project is not a guide to circumventing them.

It is a tool for understanding the math and the flow, not a method for evading payment policies.

---

# EXAMPLE / CALCULATION SECTION

### ₹1,000

Result:

₹1,000

### ₹4,500

Result:

₹2,000
₹2,000
₹500

### ₹7,500

Result:

₹2,000
₹2,000
₹2,000
₹1,500

### ₹10,000

Result:

₹2,000 × 5

At this point the calculator started questioning its career.

---

# MONEY SAVER — PROJECT STATUS

QR DECODING          ✓
AMOUNT CALCULATION   ✓
SPLIT ENGINE         ✓
SIMULATED QR         ✓
RESPONSIVE UI        ✓
HAND-DRAWN CHAOS     ✓

FINANCIAL WISDOM     ????
SUNDAY PRODUCTIVITY  QUESTIONABLE

The app covers the core demo experience as built in this project: upload a QR, read the UPI information, enter an amount, split it, and generate simulated QR representations. If something is missing, it is not being disguised as complete.

---

## 🛠️ Built With

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- jsQR
- qrcode.react
- React Router DOM
- Lucide React

---

## 🚀 Run It Locally

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm run dev -- --host 127.0.0.1
```

Then open the local Vite URL in your browser and let the math do its thing.

---

MoneySaver is a tiny product with a big attitude: part payment experiment, part editorial joke, part calculator with a conscience. It exists to make money math feel a little less intimidating and a little more understandable.

The QR is only the beginning. The real story is the split.
