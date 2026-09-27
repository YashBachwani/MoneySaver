<table border="1" cellpadding="12" cellspacing="0" width="100%" style="border-collapse: collapse; border: 3px solid #111; background: #f5f1e8;">
  <tr>
    <td width="45%" style="border-right: 3px solid #111; background: #f5f1e8;">
      <h1 style="margin: 0; font-size: 34px; letter-spacing: 1px;"><strong>MONEY SAVER</strong></h1>
    </td>
    <td align="center" style="border-left: 3px solid #111; background: #f5f1e8;">
      <strong>HOW IT WORKS</strong> &nbsp;&nbsp; <strong>DEMO</strong> &nbsp;&nbsp; <strong>ABOUT</strong>
    </td>
    <td width="18%" align="center" style="background: #111; color: #f5f1e8; font-weight: 700;">
      TRY IT →
    </td>
  </tr>
</table>

<div align="center">

# WHAT HAPPENS WHEN YOU SPLIT ONE PAYMENT?

> 📰 EXPERIMENT NO. 001  
> One payment entered the building.  
> Multiple simulated payments came out.  
> Nobody panicked.  
> Except the calculator.

</div>

MoneySaver is a small editorial experiment for understanding how a single UPI payment can be broken into smaller simulated chunks. You upload a QR, enter an amount, choose the maximum value for each simulated payment, and watch the app show the math in a clearer, more visual way.

It is not a payment app, not a banking tool, and not a shortcut around real payment rules. It is a browser demo built to make payment mechanics easier to understand.

<div align="center">

## THE MATH

</div>

<table border="1" cellpadding="16" cellspacing="0" width="100%" style="border-collapse: collapse; border: 3px solid #111; background: #f5f1e8;">
  <tr>
    <td width="50%" style="border-right: 3px solid #111; vertical-align: top;">
      <strong>ORIGINAL</strong><br><br>
      <div style="background: #f3d437; border: 3px solid #111; padding: 20px; font-size: 42px; font-weight: 800; text-align: center;">₹8,500</div>
    </td>
    <td width="50%" style="vertical-align: top;">
      <strong>SIMULATED SPLITS</strong><br><br>
      <div style="border: 2px solid #111; background: #f5f1e8; padding: 10px 14px; margin-bottom: 8px; font-weight: 700;">₹2,000</div>
      <div style="border: 2px solid #111; background: #f5f1e8; padding: 10px 14px; margin-bottom: 8px; font-weight: 700;">₹2,000</div>
      <div style="border: 2px solid #111; background: #f5f1e8; padding: 10px 14px; margin-bottom: 8px; font-weight: 700;">₹2,000</div>
      <div style="border: 2px solid #111; background: #f5f1e8; padding: 10px 14px; font-weight: 700;">₹2,500</div>
    </td>
  </tr>
</table>

<div align="center">

### TOTAL CHECK

₹2,000 + ₹2,000 + ₹2,000 + ₹2,500 = ₹8,500 ✓

</div>

---

## WHAT IT DOES

MoneySaver is designed around a very simple flow:

1. Upload a UPI QR image.
2. Let the app read the QR and extract the payment destination.
3. Enter the total amount.
4. Set the maximum amount for each simulated payment.
5. Generate smaller payment slices and check that the numbers still add up.

This is the kind of project that exists because someone asked: "What if we split it?" and then built the answer in front of us.

It is a visualization tool for payment math, not a real payment engine.

---

## HOW IT WORKS

### 01 — DROP YOUR QR

The first step is to upload a QR image. The app decodes the QR in the browser and extracts the UPI destination information it can read. That includes the merchant ID and name when available.

### 02 — ENTER THE AMOUNT

The user enters the total amount in rupees. Example:

₹7,500

### 03 — CHOOSE THE MAXIMUM

The maximum simulated payment size is chosen next. Example:

₹2,000

### 04 — LET THE MATH COOK

The app then breaks the total into chunks like this:

- Payment 01 → ₹2,000
- Payment 02 → ₹2,000
- Payment 03 → ₹2,000
- Payment 04 → ₹1,500

and confirms the total:

₹2,000 + ₹2,000 + ₹2,000 + ₹1,500 = ₹7,500 ✓

No magic. No disappearing rupees. Just a controlled visual breakdown.

---

## QR FUNCTIONALITY

MoneySaver can decode a UPI QR and understand the destination details embedded in it. Those details are then used to show the source payment context and create demo QR representations for each split.

The app keeps the destination information intact for the generated simulated payment cards. That means the demo split still points to the same merchant destination, but it remains clearly a simulation rather than a live payment instruction.

This is for educational and testing purposes.

---

## 🔐 DOES MONEY SAVER TOUCH MY BANK ACCOUNT?

NO.

The app does not ask for:

- UPI PIN
- OTP
- bank password
- card number
- CVV
- internet banking credentials

The QR parsing happens locally in the browser. It does not access bank accounts or execute payment actions.

We don’t need your financial life story.

---

## DEMO MODE

There is a built-in demo flow for testing the experience without a real QR image.

It loads sample payment data so the app can show how the split engine behaves. It is fake money. Which means: perfect.

---

## WHO IS THIS FOR?

### DEVELOPERS

For people who look at a QR and immediately think: “I wonder what is actually inside this thing.”

### STUDENTS

For anyone learning how a total can be broken into smaller payment chunks and why payment math looks easier than it feels.

### CURIOUS USERS

For anyone who wants a clearer, more visual explanation of UPI payment logic without reading a fintech manifesto.

### MERCHANTS & BUSINESS OWNERS

For operators who want a plain-English view of how a total can be represented in smaller simulated amounts without wading through provider jargon.

---

## DESIGN PHILOSOPHY

MoneySaver does not try to look like a normal fintech product, and that is intentional.

Normal finance websites already have enough gradients, glass cards, and suspiciously rounded rectangles. This project leans into:

- newspaper and editorial layouts
- engineering notebook energy
- hand-drawn illustration style
- black and off-white surfaces
- yellow highlight accents
- thick borders and hard shadows
- bold typography
- a slightly chaotic but confident personality

It feels like a financial experiment that escaped a design brief and became better for it.

---

## THE CHARACTERS

The interface includes fictional editorial characters to make the money story more readable and memorable.

- The Shopkeeper: “Okay... but where did the money go?”
- The Customer: “Can I just scan this?”
- The Math Nerd: “Give me three seconds.”
- The Accountant: “Where is the ₹1?”

These are fictional and part of the product’s communication style, not endorsements or real-person statements.

---

## 🚨 IMPORTANT

MoneySaver is an educational and demo project.

It does not:

- process payments
- access bank accounts
- guarantee fee avoidance
- guarantee MDR treatment
- guarantee regulatory compliance
- replace a payment provider
- provide financial, tax, banking, or legal advice

Please follow the relevant laws, regulations, and payment-provider terms. Please do not turn our little Sunday experiment into a banking incident.

---

## REAL-WORLD PAYMENT RULES

This project is designed to visualize payment calculations and mechanics. It is not a method to evade payment rules, sidestep charges, or magically ignore compliance requirements.

Real payment systems have fees, restrictions, operational rules, and regulatory requirements. MoneySaver is about understanding the math behind the flow, not bypassing the system.

---

## EXAMPLES FROM THE DESK

### ₹1,000

₹1,000

### ₹4,500

₹2,000  
₹2,000  
₹500

### ₹7,500

₹2,000  
₹2,000  
₹2,000  
₹1,500

### ₹10,000

₹2,000 × 5

At this point the calculator started questioning its career.

---

## PROJECT STATUS

QR decoding ✓  
Amount calculation ✓  
Split engine ✓  
Simulated QR ✓  
Responsive UI ✓  
Hand-drawn chaos ✓  

Financial wisdom ????  
Sunday productivity questionable

---

## 🛠️ BUILT WITH

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

## 🚀 RUN IT LOCALLY

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm run dev -- --host 127.0.0.1
```

Then open the provided local URL and let the math do its thing.

---

MoneySaver is a tiny product with a loud point of view: part payment experiment, part editorial joke, part calculator with a conscience. It exists to make money math feel less intimidating and a little more understandable.

The QR is only the beginning. The real story is the split.
