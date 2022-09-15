import { PMT } from '@formulajs/formulajs';


export const paymentCalculator = (loanAmount, term) => {
  const air     = .6; // Annual Interest Rate
  const iva     = .16; // Initial Value Added Tax

  // Calculate Payment
  const calculatedPayment = PMT(air/12*(1+iva),term,(-loanAmount),0,0);

  // Check for NAN (bad term, etc)
  const cpNotNaN = isNaN(calculatedPayment) ? 0 : calculatedPayment;

  // Convert to 2 Decimal Places
  const cpConverted = (Math.round(cpNotNaN * 100) / 100).toFixed(2);

  // Add Commas to Number
  const payment = cpConverted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return payment;
};