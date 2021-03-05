const AddressValidator = {
  allowedZipCodes: [
    '16',
    '17',
    '19',
    '23',
    '24',
    '33',
    '40',
    '47',
    '64',
    '75',
    '77',
    '79',
    '86',
    '87',
    '91',
    '93',
    '94',
    '95',
    '97',
  ],
  zipCodeTest: /^[0-9]{5}$/,
  zipCodePartTest: /^[0-9]{2}$/,

  validateZipCode: zipCode => {
    try {
      const firstPart = zipCode.substring(0, 2);

      return AddressValidator.allowedZipCodes.indexOf(firstPart) >= 0;
    } catch (e) {
      throw Error(e);
    }

    return false;
  },

  validateZipCodePart: zipCode => {
    try {
      return AddressValidator.zipCodePartTest.test(zipCode);
    } catch (e) {
      throw Error(e);
    }

    return false;
  },
};
export default AddressValidator;
