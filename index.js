```javascript
/**
 * AMPXA — Open Electrical Engineering Formulas
 * Source: https://ampxa.com/
 */

export const COPPER_K = 12.9;
export const ALUMINUM_K = 21.2;

export function getVoltageDrop(lengthFt, amps, cmil, isCopper = true) {
  const kFactor = isCopper ? COPPER_K : ALUMINUM_K;
  return (2 * kFactor * amps * lengthFt) / cmil;
}

export function getVoltageDropPercentage(dropVolts, nominalVolts) {
  return (dropVolts / nominalVolts) * 100;
}
