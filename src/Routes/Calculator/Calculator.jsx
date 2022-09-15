import { useState } from 'react'

import whatsapp from '../../assets/whatsapp.svg';
import { paymentCalculator } from '../../lib/payment-calculator';
import { localization } from '../../lib/localization';
import constants from '../../lib/constants';

const local = localization;

function Calculator() {
  const [loanAmount, setLoanAmount] = useState();
  const [term, setTerm] = useState();

  const whatsappNumber = null;

  const calculatePayment = () => {
    return paymentCalculator(loanAmount, term);
  };

  const setInt = (val, callback) => {
    const convert = Number(val);
    if (!isNaN(val)) {
      callback(val);
      calculatePayment();
    }
  }

  const displayFormula = () => {
    return (
      <div>
        <p className="text-3xl mb-6 font-semibold">
          ${calculatePayment()} MXN <br /> {local('calc-output-per-month')}
        </p>
        <p className="text-3xl font-semibold">
        {local('calc-output-for')} {term} {local('calc-output-month')}{term > 1 ? 's' : ''}
        </p>
      </div>
    );
  }

  const displayPlaceholder = () => {
    return (
      <div>
        <p className="text-3xl mb-6 font-semibold lg:px-24">
          {local('calc-empty-calculator')}
        </p>
      </div>
    );
  }

  return (
    <div className="lg:p-12 p-4">
      <h2 className="text-4xl font-medium text-center mb-12">
        {local('calc-title')}
      </h2>
      <div className="lg:flex">
        <div className="lg:w-3/5">
          <div className="lg:pr-40">
            <h3 className="text-lg font-normal mb-3">
            {local('calc-loan-title')}
            </h3>
            <p className="text-sm italic font-normal text-gray mb-4">
            {local('calc-loan-subtitle')}
            </p>
            <div>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-medGray sm:text-sm bg-lightGray text-white">$</span>
                <input
                  defaultValue={loanAmount}
                  type="number"
                  name="loanAmount"
                  onChange={(e) => setInt(e.target.value, setLoanAmount)}
                  id="loanAmount"
                  className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md sm:text-sm border-medGray"
                  placeholder="i.e. $10,000, $15,000, $25,000..."
                />
              </div>
            </div>
          </div>
          <div className="lg:pr-40">
            <h3 className="text-lg font-normal mb-3 mt-8">
              {local('calc-term-title')}
            </h3>
            <p className="text-sm italic font-normal text-gray mb-4">
              {local('calc-term-subtitle')}
            </p>
            <div>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  defaultValue={term}
                  type="number"
                  name="months"
                  onChange={(e) => setInt(e.target.value, setTerm)}
                  id="months"
                  className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md sm:text-sm border-medGray"
                  placeholder="i.e. 12, 24, 36..."
                />
              </div>
            </div>
          </div>          
        </div>

        <div className="lg:w-2/5 bg-white rounded-md p-10 text-center mt-10 lg:mt-0">
          <p className="text-primary text-lg font-semibold mb-6">
            {local('calc-output-title')}
          </p>          
          {((calculatePayment() != '0.00') && term) && (
            displayFormula()
          )}
          {((calculatePayment() == '0.00') || !term) && (
            displayPlaceholder()
          )}
        </div>

      </div>

      <div className="mt-16 text-center">
        <a href={`${constants.appUrl}/form`} target="_blank">
          <button
            type="button"
            className="lg:w-1/2 justify-center inline-flex items-center px-10 py-5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary uppercase"
          >
            {local('calc-submit-btn')}
          </button>
        </a>
      </div>
      {whatsappNumber && (
      <div className="mt-4 text-center">

        <a href="/">
          <button 
            type="button" 
            className="w-1/2 justify-center inline-flex items-center px-10 py-5 border border-primary shadow-sm text-base font-medium rounded-md text-primary bg-background hover:bg-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary uppercase"
          >
            <img src={whatsapp} alt="Whatsapp Logo" className="pr-6" />
            Whatsapp Us
          </button>
        </a>

      </div>
      )}

    </div>
  )
}

export default Calculator; 
