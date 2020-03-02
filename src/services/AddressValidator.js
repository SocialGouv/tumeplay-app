const AddressValidator = {
  allowedZipCodes: [
    '77',
    '16',
    '17',
    '19',
    '23',
    '24',
    '33',
    '40',
    '47',
    '64',
    '79',
    '86',
    '87',
  ],

  validateZipCode: zipCode => {
    try {
      const firstPart = zipCode.substring(0, 2);
      console.log('FIRST ' + firstPart);
      console.log(AddressValidator.allowedZipCodes.indexOf(firstPart));
      return AddressValidator.allowedZipCodes.indexOf(firstPart) >= 0;
    } catch (e) {
      throw Error(e);
    }

    return false;
  },
};
export default AddressValidator;
