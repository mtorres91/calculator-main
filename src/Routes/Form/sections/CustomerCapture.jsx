import Fieldset from '../components/Fieldset';
import TextField from '../components/TextField';

import { localization } from '../../../lib/localization';
import constants from '../../../lib/constants';
import utils from '../../../lib/utils';

const local = localization;
const { genFieldName } = utils;

function CustomerCapture(props) {

  const { updateDetails, details, submitForm, formMessage, errorMessage } = props;

  const setField = (key, value) => {
    updateDetails({
      ...details,
      [key]: value
    });
  }

  return (
    <div className="lg:pt-10 md:mt-0 md:col-span-2">
      
      <form onSubmit={submitForm}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">

          <div className="px-4 py-3 bg-lightGray text-right sm:px-6">
            <h2 className="text-2xl lg:text-3xl font-medium text-center py-10">
              {formMessage}
            </h2>
          </div>

          <div className="lg:px-60 lg:py-12 bg-white space-y-10 p-6">

            <p className="text-center text-gray text-xl font-medium">
              {local('form-validator-interested')}
            </p>

            <Fieldset label={local('form-collect-name')} subLabel="">
              <TextField details={details} setField={setField} name={genFieldName(local('form-collect-name'))} fieldType="text" />
            </Fieldset>

            <Fieldset label={local('form-collect-phone')} subLabel="">
              <TextField details={details} setField={setField} name={genFieldName(local('form-collect-phone'))} fieldType="tel" />
            </Fieldset>

            <Fieldset label={local('form-collect-email')} subLabel="">
              <TextField details={details} setField={setField} name="email" fieldType="email" />
            </Fieldset>


            {errorMessage !== '' && (
              <div className="rounded-md bg-red-50 p-4 mb-5">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{errorMessage}</h3>
                  </div>
                </div>
              </div>              
            )}

            <div className="text-center">
              <button
                type="submit"
                className="lg:w-1/2 w-full justify-center inline-flex items-center px-10 py-5 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary uppercase"
              >
                {local('form-submit')}
              </button>
            </div>                

            <div className="text-center">
              <a href={constants.websiteUrl} className="uppercase text-lg text-primary">
              {local('form-action-back')}
              </a>
            </div>

          </div>
          
        </div>
      </form>
    </div>
  )
}

export default CustomerCapture; 
