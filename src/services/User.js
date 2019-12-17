import DeviceInfo from 'react-native-device-info';
import Storage from './Storage';
import UserModel from '../models/User';

const User = {
  localUserKey: 'local.user',
  localUser: null,

  getTokensAmount: async () => {
    try {
      if (!User.localUser) {
        var localUser = await User.load();

        if (localUser) {
          return localUser.availableTokens;
        }

        return 0;
      } else {
        return User.localUser.availableTokens;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  subTokens: async substractedTokens => {
    try {
      let localUser = null;

      if (!User.localUser) {
        localUser = await User.load();
      }

      // Not an "else".
      if (User.localUser) {
        User.localUser.availableTokens =
          User.localUser.availableTokens - substractedTokens;

        await User.save();

        return User.localUser.availableTokens;
      }
    } catch (e) {
      throw Error(e);
    }
  },

  addTokens: async addedTokens => {
    try {
      let localUser = null;

      if (!User.localUser) {
        localUser = await User.load();
      }

      // Not an "else".
      if (User.localUser) {
        User.localUser.availableTokens =
          User.localUser.availableTokens + addedTokens;

        await User.save();

        return User.localUser.availableTokens;
      }
    } catch (e) {
      throw Error(e);
    }
  },

  getUniqueId: async () => {
    try {
      if (!User.localUser) {
        var localUser = User.load();

        if (localUser) {
          return localUser.uniqueId;
        }

        return null;
      } else {
        return User.localUser.tokens;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  //@TODO: Cant' put promlise in JS file ?
  isUserRegistered: async (): Promise<null> => {
    return new Promise((resolve, reject) => {
      try {
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  },

  init: async () => {
    try {
      const uniqueId = DeviceInfo.getUniqueId();
      const _localUser = new UserModel();

      _localUser.uniqueId = uniqueId;

      User.localUser = _localUser;

      return await User.save();
    } catch (e) {
      throw Error(e);
    }
  },

  load: async () => {
    try {
      var localUser = await Storage.get(User.localUserKey);

      if (localUser && localUser != null) {
        localUser = JSON.parse(localUser);
        User.localUser = localUser;

        return localUser;
      } else {
        return await User.init();
      }
    } catch (e) {
      throw Error(e);
    }
  },

  save: async () => {
    try {
      await Storage.set(User.localUserKey, JSON.stringify(User.localUser));

      return User.localUser;
    } catch (e) {
      throw Error(e);
    }
  },
};
export default User;
