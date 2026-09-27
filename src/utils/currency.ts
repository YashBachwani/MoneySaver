export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatCurrencyRaw(amount: number): string {
  if (amount === 0) return '0';
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function parseCurrencyInput(value: string): number {
  // Strip everything except digits and decimal point
  const cleaned = value.replace(/[^0-9.]/g, '');
  if (cleaned === '' || cleaned === '.') return 0;
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

export function sanitizeCurrencyInput(value: string): string {
  // Remove everything except digits and at most one decimal point
  let result = '';
  let hasDecimal = false;
  let decimalDigits = 0;

  for (const char of value) {
    if (char >= '0' && char <= '9') {
      if (hasDecimal) {
        if (decimalDigits < 2) {
          result += char;
          decimalDigits++;
        }
      } else {
        result += char;
      }
    } else if (char === '.' && !hasDecimal) {
      hasDecimal = true;
      result += char;
    }
    // All other characters are silently dropped
  }

  // Remove leading zeros (but keep "0" and "0.xx")
  if (result.length > 1 && result[0] === '0' && result[1] !== '.') {
    result = result.replace(/^0+/, '') || '0';
  }

  return result;
}
