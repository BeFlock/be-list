const apiurl = 'http://localhost:4201/api';

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