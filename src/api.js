import axios from 'axios';
import history from './history';

export const configureAPI = (onForbidden) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    switch (err.response.status) {
      case 401:
        history.push(`/login`);
        break;

      case 403:
        if (typeof onForbidden === `function`) {
          onForbidden();
        }
        break;
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
