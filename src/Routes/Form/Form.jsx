import { useState, useEffect } from 'react'
import axios from 'axios';

import ofLogo from '../../assets/of-logo.png';
import PreQualification from './sections/PreQualification';
import CustomerCapture from './sections/CustomerCapture';
import ThankYou from './sections/ThankYou';

import validator from '../../lib/validator';
import constants from '../../lib/constants';

function Form() {

  const [preQualDetails, setPreQualDetails] = useState({});
  const [customerDetails, setCustomerDetails] = useState({});
  const [currentSection, setCurrentSection] = useState(1);
  const [formMessage, setFormMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submitPreQualForm = (e) => {
    // Clear Messages
    e.preventDefault();
    setErrorMessage('');
    setFormMessage('');
    // Validate Data
    const validate = validator(preQualDetails, 7);
    setErrorMessage(validate.error);
    setFormMessage(validate.message);
    if (validate.complete) {
      setCurrentSection(validate.stage);
    }
  }

  const submitCustomerCapture = async (e) => {
    // Clear Messages
    e.preventDefault();
    setErrorMessage('');
    // Validate Data
    const validate = validator(customerDetails, 3);
    setErrorMessage(validate.error);
    if (validate.complete) {
      sendData();
    }
  }

  const sendData = () => {
    const payload = { ...preQualDetails, ...customerDetails };
    const url = constants.submitUrl;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    }

    axios.post(url, payload, config)
    .then(response =>{
      setCurrentSection(3);
    })
    .catch(error =>{
      console.log(error);
    });
  }

  return (
    <div className="Form mb-40">
      <header className="bg-black p-5">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center lg:justify-start">
          <img src={ofLogo} alt="of-logo" className="h-12" />
        </div>
      </header>
      <section className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        {currentSection === 1 && (
          <PreQualification errorMessage={errorMessage} submitForm={submitPreQualForm} details={preQualDetails} updateDetails={setPreQualDetails} />
        )}
        {currentSection === 2 && (
          <CustomerCapture formMessage={formMessage} errorMessage={errorMessage} submitForm={submitCustomerCapture} details={customerDetails} updateDetails={setCustomerDetails} />
        )}
        {currentSection === 3 && (
          <ThankYou /> 
        )}
        <div className="flex self-start justify-end mt-2 text-xs text-gray">
          Versión {constants.version}
        </div>         
      </section>     
    </div>
  )
}

export default Form; 
