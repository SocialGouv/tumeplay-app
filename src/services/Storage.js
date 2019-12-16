import {AsyncStorage} from 'react-native';

const Storage = {
  get: async key => {
    try {
      const localValue = AsyncStorage.getItem(key);

      return localValue;
    } catch (e) {
      throw Error(e);
    }
  },

  set: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      throw Error(e);
    }
  },

  //@TODO: Cant' put promlise in JS file ?
  clear: async (): Promise<null> => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      throw Error(e);
    }
  },

  remove: async key => {
    try {
      await AsyncStorage.remove(key);
    } catch (e) {
      throw Error(e);
    }
  },
};
export default Storage;
