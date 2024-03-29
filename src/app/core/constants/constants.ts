import { environment } from './../../../environments/environment'

const apiurl = environment.apiUrl;

export const apiEndpoint = {
  AuthEndpoint: {
    login: `${apiurl}/login`,
    logout: `${apiurl}/logout`,
    register: `${apiurl}/register`,
    loggedUser: `${apiurl}/user`,
  },
  TodoEndpoint: {
    getAllTodo: `${apiurl}/tasks`,
    addTodo: `${apiurl}/tasks`,
    updateTodo: `${apiurl}/tasks`,
  },
};

export const constants = {
  CURRENT_TOKEN: 'AUTH_CURRENT_TOKEN_BELIST',
};