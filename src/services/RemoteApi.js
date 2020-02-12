import UserService from '../services/User';

import DefaultThemes from '../models/defaults/Themes';
import DefaultContents from '../models/defaults/Contents';
import DefaultQuestions from '../models/defaults/Questions';
import DefaultProducts from '../models/defaults/Products';
import DefaultBoarding from '../models/defaults/Boarding';
import DefaultBadges from '../models/defaults/Badges';

// @TODO : Set this in environment
const BaseRemote = 'https://tumeplay-api.fabrique.social.gouv.fr/';
//const BaseRemote = 'http://localhost:5000/';
const BaseRemoteApi = BaseRemote + 'api/';

const QuizzEndpoint = BaseRemoteApi + 'quizzs';
const BoardingEndpoint = BaseRemoteApi + 'contents';
const ContentsEndpoint = BaseRemoteApi + 'contents';
const ProductsEndpoint = BaseRemoteApi + 'boxs';
const ThemesEndpoint = BaseRemoteApi + 'thematiques';
const PickupEndpoint = BaseRemoteApi + 'poi/pickup';
const UserRegisterEndpoint = BaseRemoteApi + 'auth/simple-register';
const OrderConfirmEndpoint = BaseRemoteApi + 'orders/confirm';

// @TODO : Set this in environment
const LOCAL_MODE = false;

const RemoteApi = {
  getAutorizationHeaders: async () => {
    const token = await UserService.getJWT();

    if (token && token !== undefined) {
      return {
        Authorization: 'Bearer ' + token,
      };
    }
    return null;
  },
  fetch: async targetUrl => {
    try {
      const response = await fetch(targetUrl);
      const jsonParsed = await response.json();

      return jsonParsed;
    } catch (e) {
      throw Error(e);
    }
  },
  post: async (targetUrl, postData) => {
    try {
      const response = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      return await response.json();
    } catch (e) {
      throw Error(e);
    }
  },

  protectedFetch: async (targetUrl, headers) => {
    try {
      const response = await fetch(targetUrl, {headers: headers});
      const jsonParsed = await response.json();

      return jsonParsed;
    } catch (e) {
      throw Error(e);
    }
  },
  protectedPost: async (targetUrl, postData, headers) => {
    try {
      const localHeaders = {
        ...headers,
        ...{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(targetUrl, {
        method: 'POST',
        headers: localHeaders,
        body: JSON.stringify(postData),
      });

      return response;
    } catch (e) {
      throw Error(e);
    }
  },
  mapPictures: async objects => {
    return objects.map((item, key) => {
      if (item.picture) {
        if (typeof item.picture === 'string') {
          item.picture = {uri: BaseRemote + item.picture};
        } else {
          item.picture = {uri: BaseRemote + item.picture.path};
        }
      }
      if (item.background) {
        item.background = {uri: BaseRemote + item.background};
      }

      return item;
    });
  },
  registerUser: async uniqId => {
    try {
      if (LOCAL_MODE) {
        return null;
      } else {
        const result = await RemoteApi.post(UserRegisterEndpoint, {
          uniqId: uniqId,
        });

        return result;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  fetchPickupPoints: async (latitude, longitude) => {
    try {
      if (LOCAL_MODE) {
        return DefaultProducts;
      } else {
	    const endPoint = PickupEndpoint + '/' + latitude + '/' + longitude;
        const contents = await RemoteApi.fetch(endPoint);
        return contents.slice(0, 20);
      }
    } catch (e) {
      throw Error(e);
    }
  },
  fetchBoxsData: async () => {
    try {
      if (LOCAL_MODE) {
        return DefaultProducts;
      } else {
        const contents = await RemoteApi.fetch(ProductsEndpoint);
        contents.boxs = await RemoteApi.mapPictures(contents.boxs);
        contents.products = await RemoteApi.mapPictures(contents.products);
        return contents;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  fetchBadges: async () => {
    try {
      return DefaultBadges;
    } catch (e) {
      throw Error(e);
    }
  },
  fetchThemes: async () => {
    try {
      if (LOCAL_MODE) {
        return DefaultThemes;
      } else {
        const themes = await RemoteApi.fetch(ThemesEndpoint);

        return await RemoteApi.mapPictures(themes);
      }
    } catch (e) {
      throw Error(e);
    }
  },
  fetchContents: async selectedTheme => {
    try {
      if (LOCAL_MODE) {
        const contents = DefaultContents;
        const filtered = contents.filter(
          content => content.theme === selectedTheme.id,
        );

        return filtered;
      } else {
        const contents = await RemoteApi.fetch(ContentsEndpoint);

        let filtered = contents.filter(
          content => content.theme === selectedTheme.id,
        );

        filtered = await RemoteApi.mapPictures(filtered);

        return filtered;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  fetchQuestions: async selectedTheme => {
    try {
      if (LOCAL_MODE) {
        const questions = DefaultQuestions;
        const filtered = questions.filter(
          question => question.theme === selectedTheme.id,
        );

        return filtered;
      } else {
        const contents = await RemoteApi.fetch(QuizzEndpoint);

        let filtered = contents.filter(
          content => content.theme === selectedTheme.id,
        );

        filtered = await RemoteApi.mapPictures(filtered);

        return filtered;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  fetchBoarding: async () => {
    try {
      return DefaultBoarding;
      //@TODO : Enable Remote Boarding
      if (LOCAL_MODE) {
        return DefaultBoarding;
      } else {
        const contents = await RemoteApi.fetch(BoardingEndpoint);

        return contents.contents;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  confirmOrder: async (
    selectedItem,
    selectedProducts,
    userAdress,
    selectedPickup,
    deliveryType,
  ) => {
    try {
      if (LOCAL_MODE) {
        return true;
      } else {
        const products = [];
        const headers = await RemoteApi.getAutorizationHeaders();

        selectedProducts.forEach(product => {
          products.push({id: product.item.id, qty: product.qty});
        });

        const postData = {
          box: selectedItem.id,
          products: products,
          userAdress: userAdress,
          deliveryMode: deliveryType,
          selectedPickup: selectedPickup,
        };
        console.log(postData);
        let result = false;
        if (headers) {
          result = await RemoteApi.protectedPost(
            OrderConfirmEndpoint,
            postData,
            headers,
          );
        }

        return result;
      }
    } catch (e) {
      throw Error(e);
    }
  },
};

export default RemoteApi;
