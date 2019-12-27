import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Storage from './Storage';
import UserModel from '../models/User';

const User = {
  localUserKey: 'local.user',
  localUser: null,

  generateUniqueId: async () => {
    let uniqueId = false;

    if (Platform.OS == 'web') {
      var n = false;
      var base = false;
      if (window.performance) {
        var s = performance.timing.navigationStart;
        n = performance.now();
        base = Math.floor((s + Math.floor(n)) / 1000);
      } else {
        n = new Date().getTime();
        base = Math.floor(n / 1000);
      }
      var ext = Math.floor((n % 1000) * 1000);
      var now =
        ('00000000' + base.toString(16)).slice(-8) +
        ('000000' + ext.toString(16)).slice(-5);
      if (now <= window.my_las_uid) {
        now = (
          parseInt(window.my_las_uid ? window.my_las_uid : now, 16) + 1
        ).toString(16);
      }

      uniqueId = now;
    } else {
      uniqueId = DeviceInfo.getUniqueId();
    }

    return uniqueId;
  },
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
      if (!User.localUser) {
        await User.load();
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
      if (!User.localUser) {
        await User.load();
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
  getJWT: async () => {
    let localUser = false;

    if (!localUser) {
      localUser = await User.load();
    }

    if (localUser) {
      return localUser.token;
    }

    return null;
  },
  setJWT: async token => {
    let localUser = User.localUser;

    if (!localUser) {
      localUser = await User.load();
    }

    if (localUser) {
      localUser.token = token;

      await User.save();

      return localUser;
    }

    return null;
  },
  getUniqueId: async () => {
    try {
      if (!User.localUser) {
        var localUser = await User.load();

        if (localUser) {
          if (localUser.uniqueId === undefined) {
            localUser.uniqueId = await User.generateUniqueId();

            await User.save();
          }

          return localUser.uniqueId;
        }

        return null;
      } else {
        return User.localUser.uniqueId;
      }
    } catch (e) {
      throw Error(e);
    }
  },

  init: async () => {
    try {
      const _localUser = new UserModel();

      _localUser.uniqueId = await User.generateUniqueId();

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
