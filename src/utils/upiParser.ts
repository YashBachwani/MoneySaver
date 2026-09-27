export interface UpiDetails {
  upiId: string;
  payeeName: string;
  originalUrl: string;
  amount?: number;
}

export function parseUpiUrl(url: string): UpiDetails | null {
  try {
    if (!url.toLowerCase().startsWith('upi://pay')) {
      return null;
    }

    const urlObj = new URL(url);
    const params = urlObj.searchParams;

    const pa = params.get('pa');
    const pn = params.get('pn');
    const am = params.get('am');

    if (!pa) {
      return null;
    }

    return {
      upiId: pa,
      payeeName: pn || 'Unknown Merchant',
      originalUrl: url,
      amount: am ? parseFloat(am) : undefined
    };
  } catch (e) {
    return null;
  }
}

export function generateUpiUrl(baseUpi: UpiDetails, amount: number): string {
  // Preserve original parameters if possible, or just build a clean one
  // The requirement says: "Every simulated payment representation must use: pa=merchant@upi"
  // Conceptually: upi://pay?pa=merchant@upi&pn=Example%20Store&am=2000&cu=INR
  
  const url = new URL('upi://pay');
  url.searchParams.set('pa', baseUpi.upiId);
  url.searchParams.set('pn', baseUpi.payeeName);
  url.searchParams.set('am', amount.toString());
  url.searchParams.set('cu', 'INR');
  
  // You might want to carry over other params like tr, mc, etc. from the original
  try {
    const originalUrl = new URL(baseUpi.originalUrl);
    originalUrl.searchParams.forEach((value, key) => {
      if (!['pa', 'pn', 'am', 'cu'].includes(key)) {
        url.searchParams.set(key, value);
      }
    });
  } catch(e) {
    // Ignore
  }

  return url.toString();
}
