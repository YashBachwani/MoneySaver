# 💸 MONEY SAVER

## SPLIT THE MATH. NOT THE MONEY.

> 📰 EXPERIMENT NO. 001  
> One payment entered the building.  
> Multiple simulated payments came out.  
> Nobody panicked.  
> Except the calculator.

<div align="center">
  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80" alt="Editorial money desk" width="100%" />
</div>

MoneySaver is a browser-based demo for visualizing how a UPI payment total can be split into smaller simulated chunks. It reads a QR image, extracts the UPI destination, lets you enter a total amount, and then breaks the math into smaller demo payment slices for easier understanding.

This is not a banking app. It is not a payment system. It is not a secret trick to dodge fees or rules. It is a practical little experiment for understanding what is happening behind the numbers.

Think of it like this:

₹7,500

becomes:

₹2,000  
₹2,000  
₹2,000  
₹1,500

and then:

₹2,000 + ₹2,000 + ₹2,000 + ₹1,500 = ₹7,500 ✓

Nothing disappeared. Nothing was created. The accountant can sleep tonight.

---

# THE MONEY DESK

## WHAT THIS IS

MoneySaver is a small editorial product built around one question:

"What happens if we split it?"

Instead of burying people in financial terms, it turns the flow into something visual and understandable. Upload a UPI QR, enter the total, choose a maximum simulated payment size, and the app shows how the split could work.

This is built for demos, learning, and curiosity. It is designed to help users understand the logic and mechanics behind payment breakdowns without making the whole thing feel like a tax filing nightmare.

Because reading six paragraphs about payment rules is not exactly a Sunday activity.

---

## HOW IT WORKS

### 01 — DROP YOUR QR

The user uploads a UPI QR image. The app decodes it in the browser with the QR parsing library and extracts the destination and merchant information it can read.

This is a local browser flow. The app is reading a QR image, not tapping into a bank account.

### 02 — ENTER THE AMOUNT

The next step is simple: enter the total amount.

Example:

₹7,500

The app validates the value before the math starts. No dramatic surprises. No weird ghost numbers. Just a clean, readable total.

### 03 — CHOOSE THE MAXIMUM

The user then picks the maximum simulated payment amount.

Example:

₹2,000

That sets the largest chunk the app will generate in the split. Think of it as controlling the size of each imaginary payment slice.

### 04 — LET THE MATH COOK

Once the inputs are set, the app calculates the split. A result might look like this:

Payment 01 → ₹2,000  
Payment 02 → ₹2,000  
Payment 03 → ₹2,000  
Payment 04 → ₹1,500

Then it checks the total:

₹2,000 + ₹2,000 + ₹2,000 + ₹1,500 = ₹7,500 ✓

That is the whole point of the experiment: make the mathematics easy to see instead of easy to ignore.

---

# QR FUNCTIONALITY

The app can decode an uploaded UPI QR and extract information like the destination UPI ID and the merchant name. It also uses that data to generate demo QR representations for each simulated split.

The generated split cards preserve the original destination where possible, so the visual flow still feels like the same payment context. That does not mean the app is processing real payments. It is generating simulated QR representations for demonstration purposes.

This is educational tooling, not a transaction engine.

---

# 🔐 DOES MONEY SAVER TOUCH MY BANK ACCOUNT?

NO.

The app does not ask for:

- UPI PIN
- OTP
- bank password
- card number
- CVV
- internet banking credentials
- your life story in exchange for a calculator

The QR decoding and processing happens in the browser. The app is not built to access bank accounts, complete transactions, or collect payment credentials.

We don't need your financial life story.

That does not mean you should upload random files without thinking. It just means the project is intentionally designed to stay out of your banking flow and keep the experimentation to the browser layer.

---

# DEMO MODE

MoneySaver includes a demo mode for people who want to play without a QR image.

It loads a fictional UPI setup and an example amount so the split engine can be tested instantly. It is fake money. Which means: perfect.

This is the cleanest way to see how the app behaves without needing a live QR in the room.

---

# 🎯 WHO IS THIS FOR?

## 🧑‍💻 DEVELOPERS

For people who see a QR code and instantly think: "I wonder what the machine actually sees."

## 🎓 STUDENTS

For anyone learning how payment data is represented, how totals behave, and why payment math can be more confusing than it should be.

## 🧠 CURIOUS USERS

For anyone who wants a clearer explanation of split logic without reading 12 paragraphs of fintech filler.

## 🏪 MERCHANTS & BUSINESS OWNERS

For operators who want a simple visual explanation of payment breakdowns and simulated split mechanics without diving straight into provider jargon.

---

# DESIGN PHILOSOPHY

MoneySaver looks the way it does on purpose.

Normal fintech websites already have enough gradients, glass cards, and suspiciously rounded rectangles. This one leans into a newspaper/editorial rhythm with engineering-notebook energy and a little Gen-Z visual chaos.

The aesthetic mixes:

- newspaper and editorial layouts
- hand-drawn illustration language
- black and off-white surfaces
- yellow highlighter accents
- thick borders and hard shadows
- bold typography
- playful but confident personality

It feels like a financial experiment that escaped a design brief and became better because of it.

---

# THE CAST

The UI includes illustrated characters to make the experience more memorable and easier to read.

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

These are fictional editorial characters, not endorsements, not public-figure statements, and not real financial guidance.

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

Please follow applicable laws, regulations, and payment-provider terms. Please do not turn our little Sunday experiment into a banking incident.

---

# REAL-WORLD PAYMENT RULES

MoneySaver is designed to visualize payment calculations and mechanics. It is not a method to evade payment rules, sidestep charges, or pretend compliance is optional.

Real payment systems have their own fees, merchant conditions, compliance requirements, and operational constraints. Those rules vary by provider, geography, and use case. This project is a learning tool, not an instruction manual for bypassing them.

---

# EXAMPLES FROM THE DESK

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

The project currently covers the core demo flow: upload a QR, read the destination details, enter an amount, simulate a split, and generate demo QR representations. If something is missing, it is not being disguised as complete.

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

MoneySaver is a tiny product with a sharp point of view: part payment experiment, part editorial joke, part calculator with a conscience. It exists to make money math feel a bit less mysterious and a bit more human.

The QR is only the beginning. The real story is the split.
