import axios from 'axios';
import history from './history';
import {convertObjectKeys} from './utils';

const HTTP_STATUS = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403
};

export const configureAPI = (onForbidden) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    response.data = convertObjectKeys(response.data);
    return response;
  };

  const onFail = (err) => {
    switch (err.response.status) {
      case HTTP_STATUS.UNAUTHORIZED:
        if (typeof onForbidden === `function`) {
          onForbidden();
        }
        break;

      case HTTP_STATUS.FORBIDDEN:
        history.push(`/login`);
        break;
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
