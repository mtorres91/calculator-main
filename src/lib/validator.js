import { localization } from './localization';
import utils from './utils';

const { genFieldName } = utils;
const local = localization;

const validator = (obj, questionCount) => {
  let complete  = false;
  let message   = '';
  let error     = '';
  let stage     = 1;

  // General Checking. Ensuring all fields are filled out and not empty or null.
  const isEmpty = Object.values(obj).some(x => x === null || x === '');
  if (Object.keys(obj).length !== questionCount || isEmpty) {
    error = local('form-validator-general');
  } else {
    // Hard Coded Questions
    message = local('form-validator-qualified');
    stage = 2;
    complete = true;
    error = '';

    if (obj[genFieldName(local('form-q-1'))] === local('form-q-1-option-2').toLowerCase()) {
      message = local('form-validator-disqualify');
    }

    if (obj[genFieldName(local('form-q-2'))] === local('form-helper-other').toLowerCase()) {
      message = local('form-validator-location');
    }

    if (obj[genFieldName(local('form-q-5'))] === local('form-helper-yes').toLowerCase()) {
      message = local('form-validator-disqualify');
    }
  }

  return { complete, message, stage, error };
};

export default validator;