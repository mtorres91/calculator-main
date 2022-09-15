import { localization } from '../../../lib/localization';
import constants from '../../../lib/constants';

const local = localization;

function ThankYou () {

  return (
    <div className="lg:pt-10 md:mt-0 md:col-span-2">
      <div className="shadow sm:rounded-md sm:overflow-hidden">

        <div className="px-4 py-3 text-right bg-white sm:px-6">
          <h2 className="text-2xl lg:text-3xl font-medium text-center pt-10 text-primary">
            {local('form-thank-you-title')}
          </h2>
        </div>

        <div className="lg:px-60 lg:pb-12 bg-white space-y-10 p-6">

          <p className="text-center text-gray text-xl font-medium">
          {local('form-thank-you-message')}
          </p>               

          <div className="text-center">
            <a href={constants.websiteUrl} >
              <button
                type="submit"
                className="lg:w-1/2 w-full justify-center inline-flex items-center px-10 py-5 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary uppercase"
              >
                {local('form-action-back')}
              </button>
            </a>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default ThankYou; 
