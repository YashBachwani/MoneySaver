export interface PaymentSplit {
  index: number;
  amount: number;
}

export interface SplitResult {
  totalAmount: number;
  maximumAmount: number;
  numberOfPayments: number;
  payments: PaymentSplit[];
}

export function calculateSplitAmount(totalAmount: number, maximumAmount: number): SplitResult {
  if (totalAmount <= 0 || maximumAmount <= 0) {
    return {
      totalAmount,
      maximumAmount,
      numberOfPayments: 0,
      payments: []
    };
  }

  // Convert to paise to avoid floating point issues
  const totalPaise = Math.round(totalAmount * 100);
  const maxPaise = Math.round(maximumAmount * 100);
  
  if (maxPaise === 0) {
    return { totalAmount, maximumAmount, numberOfPayments: 0, payments: [] };
  }

  const payments: PaymentSplit[] = [];
  let remainingPaise = totalPaise;
  let index = 1;

  while (remainingPaise > 0) {
    const currentPaise = Math.min(remainingPaise, maxPaise);
    payments.push({
      index,
      amount: currentPaise / 100
    });
    remainingPaise -= currentPaise;
    index++;
  }

  return {
    totalAmount,
    maximumAmount,
    numberOfPayments: payments.length,
    payments
  };
}
