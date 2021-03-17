jest.mock('react-native-device-info', () => {
  return {
    getModel: jest.fn(),
  };
});
global.window = jest.fn();
global.document = window.document;

jest.mock('@react-native-community/geolocation', () => {
  return {
    addListener: jest.fn(),
    getCurrentPosition: jest.fn(),
    removeListeners: jest.fn(),
    requestAuthorization: jest.fn(),
    setConfiguration: jest.fn(),
    startObserving: jest.fn(),
    stopObserving: jest.fn(),
  };
});

jest.mock('react-native-web-swiper', () => 'Swiper');
//jest.mock('axios');

/* mock Platform */
jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = require.requireActual(
    'react-native/Libraries/Utilities/Platform',
  );
  Platform.OS = 'web';
  return Platform;
});
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
