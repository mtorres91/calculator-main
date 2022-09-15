import { PMT } from '@formulajs/formulajs';


export const paymentCalculator = (loanAmount, term) => {
  const air     = .6; // Annual Interest Rate
  const iva     = .16; // Initial Value Added Tax

  var Tas = (.050*1.16);

  // calculate Payment OF
  if(loanAmount<=80000){
    Tas=(.050*1.16);
  }
  if(loanAmount>80000){
    
    Tas=(.0490*1.16);
  }
  if(loanAmount>120000){
    Tas=(.047*1.16);
  }
  if(loanAmount>200000){
    Tas=(.045*1.16);
  }  
  if(loanAmount>300000){
    Tas=(.040*1.16);
  }  
  const calculatedPayment = PMT(Tas,term,(-loanAmount),0,0);

  // Check for NAN (bad term, etc)
  const cpNotNaN = isNaN(calculatedPayment) ? 0 : calculatedPayment;

  // Convert to 2 Decimal Places
  const cpConverted = (Math.round(cpNotNaN * 100) / 100).toFixed(2);

  // Add Commas to Number
  const payment = cpConverted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return payment;
};