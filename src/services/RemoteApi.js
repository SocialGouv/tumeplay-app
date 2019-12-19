import UserService from '../services/User';

import DefaultThemes from '../models/defaults/Themes';
import DefaultContents from '../models/defaults/Contents';
import DefaultQuestions from '../models/defaults/Questions';
import DefaultProducts from '../models/defaults/Products';
import DefaultBoarding from '../models/defaults/Boarding';

// @TODO : Set this in environment
const BaseRemoteApi = 'http://127.0.0.1:5000/api/';

const QuizzEndpoint = BaseRemoteApi + 'contents';
const BoardingEndpoint = BaseRemoteApi + 'contents';
const ContentsEndpoint = BaseRemoteApi + 'contents';
const ProductsEndpoint = BaseRemoteApi + 'contents';
const UserRegisterEndpoint = BaseRemoteApi + 'auth/simple-register';
const OrderConfirmEndpoint = BaseRemoteApi + 'orders/confirm';

// @TODO : Set this in environment
const LOCAL_MODE = true;

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

      return await response.json();
    } catch (e) {
      throw Error(e);
    }
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
  fetchProducts: async () => {
    try {
      if (LOCAL_MODE) {
        return DefaultProducts;
      } else {
        const contents = await RemoteApi.fetch(ProductsEndpoint);

        return contents.contents;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  fetchThemes: async () => {
    try {
      if (LOCAL_MODE) {
        return DefaultThemes;
      } else {
        const contents = await RemoteApi.fetch(BoardingEndpoint);

        return contents.contents;
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
          content => content.theme == selectedTheme.id,
        );

        return filtered;
      } else {
        const contents = await RemoteApi.fetch(ContentsEndpoint);

        return contents.contents;
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
          question => question.theme == selectedTheme.id,
        );

        return filtered;
      } else {
        const contents = await RemoteApi.fetch(QuizzEndpoint);

        return contents.contents;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  fetchBoarding: async () => {
    try {
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
  confirmOrder: async selectedItem => {
    try {
      if (LOCAL_MODE) {
        return true;
      } else {
        const headers = await RemoteApi.getAutorizationHeaders();

        let result = false;
        if (headers) {
          result = await RemoteApi.protectedPost(
            OrderConfirmEndpoint,
            selectedItem,
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
