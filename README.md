# ⚡ AMPXA — Open Electrical & Solar PV Engineering Calculators

A minimalist, transparent, ad-free suite of routine arithmetic and sizing tools designed for electricians, electrical engineers, and solar PV system installers.

🔗 **Live Platform & Tools:** [https://ampxa.com/](https://ampxa.com/)

---

## 🎯 Purpose & Philosophy

Most online trade calculators function as black boxes—giving an answer without displaying the underlying assumptions, mathematical derivations, or code standards. 

**AMPXA** operates on complete mathematical transparency:
- **Zero Ads / No Distractions:** Built strictly for fast, frictionless job-site reference on both desktop and mobile.
- **Formula-Transparent:** Explicitly exposes all governing formulas, thermal limits, and NEC-aligned assumptions alongside every output.

---

## 🛠️ Included Core Calculation Modules

### 1. Solar Wire Sizing & Voltage Drop
Calculates minimum circular mil conductor area and voltage drop percentages for single-phase, split-phase, and DC solar string circuits.

$$\text{Voltage Drop (V)} = \frac{2 \times K \times I \times L}{\text{CM}}$$

- **$K$**: Conductor resistivity constant ($12.9\,\Omega\cdot\text{cmil/ft}$ for copper, $21.2$ for aluminum).
- **$I$**: Design current (Amps) including continuous load factors ($1.25\times$).
- **$L$**: One-way circuit length (Feet).
- **$\text{CM}$**: Conductor cross-sectional area (Circular Mils).

👉 **Live Calculator:** [AMPXA Solar Wire Size Calculator](https://ampxa.com/)

---

### 2. Conduit Fill Capacity (Raceway Sizing)
Determines permissible cross-sectional conduit area occupancy based on conductor counts:
- **1 Conductor:** 53% allowable fill.
- **2 Conductors:** 31% allowable fill.
- **3+ Conductors:** 40% allowable fill.

$$\text{Permissible Fill Area} = \text{Internal Area}_{\text{conduit}} \times \text{Fill Percentage}$$

👉 **Live Calculator:** [AMPXA Conduit Fill Calculator](https://ampxa.com/)

---

### 3. DC Ohm's Law & Power Relationships
Resolves mathematical relationships across Voltage ($V$), Current ($I$), Resistance ($R$), and Power ($P$):

$$V = I \times R \qquad P = V \times I = I^2 \times R = \frac{V^2}{R}$$

👉 **Live Calculator:** [AMPXA Ohm's Law Calculator](https://ampxa.com/)

---

## 💻 Vanilla JavaScript Calculation Core

```javascript
/**
 * AMPXA Core Utility Routines
 * [https://ampxa.com/](https://ampxa.com/)
 */

// Voltage Drop Calculation for DC Solar Strings
export function calculateVoltageDrop(lengthFeet, currentAmps, circularMils, material = 'copper') {
  const K = material === 'copper' ? 12.9 : 21.2;
  const dropVolts = (2 * K * currentAmps * lengthFeet) / circularMils;
  return dropVolts;
}

// Ohm's Law DC Power
export function calculatePower(volts, amps) {
  return volts * amps;
}
