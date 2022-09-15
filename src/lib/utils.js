const utils = {};

utils.genFieldName = title => {
  const lowercase = title.toLowerCase();
  const alphanumerical = lowercase.replace(/[^a-z0-9 ]/g, '');
  const hyphenated = alphanumerical.replace(/\s+/g, '-');
  return hyphenated;
}

export default utils;