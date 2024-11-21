export function formatNumber(value: number | string): string {
    let numberValue: number;
  
    if (typeof value === 'string') { 
      numberValue = parseFloat(value); 
      if (isNaN(numberValue)) {
        numberValue = 0;
      }
    } else {
      numberValue = value;
    }
  
    return numberValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  
 

export function convertToFarsiDigits(value: string): string {
    const farsiDigits = '۰۱۲۳۴۵۶۷۸۹';
    return value.replace(/\d/g, (digit) => farsiDigits[parseInt(digit)]);
}

export function formatNumberToFarsi(value: number): string {
    const formattedValue = formatNumber(value);
    return convertToFarsiDigits(formattedValue);
}
  
 
  
  