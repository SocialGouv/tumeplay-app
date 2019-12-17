import DefaultThemes from '../models/defaults/Themes';
import DefaultContents from '../models/defaults/Contents';
import DefaultQuestions from '../models/defaults/Questions';
import DefaultProducts from '../models/defaults/Products';
import DefaultBoarding from '../models/defaults/Boarding';

// @TODO : Set this in environment
const BaseRemoteApi = 'http://10.0.2.2:5000/api/';

const QuizzRemoteApi = BaseRemoteApi + 'contents';
const BoardingRemoteApi = BaseRemoteApi + 'contents';
const ContentsRemoteApi = BaseRemoteApi + 'contents';
const ProductsRemoteApi = BaseRemoteApi + 'contents';

// @TODO : Set this in environment
const LOCAL_MODE = true;

const RemoteApi = {
  fetch: async targetUrl => {
    try {
      const response = await fetch(targetUrl);
      const jsonParsed = await response.json();

      return jsonParsed;
    } catch (e) {
      throw Error(e);
    }
  },
  fetchProducts: async () => {
    try {
      if (LOCAL_MODE) {
        return DefaultProducts;
      } else {
        const contents = await RemoteApi.fetch(ProductsRemoteApi);

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
        const contents = await RemoteApi.fetch(BoardingRemoteApi);

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
        const contents = await RemoteApi.fetch(ContentsRemoteApi);

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
        const contents = await RemoteApi.fetch(QuizzRemoteApi);

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
        const contents = await RemoteApi.fetch(BoardingRemoteApi);

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
        return false;
        /*const contents = await RemoteApi.fetch(ProductsRemoteApi);

        return contents.contents;*/
      }
    } catch (e) {
      throw Error(e);
    }
  },
};

export default RemoteApi;
