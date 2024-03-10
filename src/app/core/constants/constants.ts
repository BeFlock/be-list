const apiurl = 'http://localhost:8000/api';

export const apiEndpoint = {
  AuthEndpoint: {
    login: `${apiurl}/login`,
    logout: `${apiurl}/logout`,
    loggedUser: `${apiurl}/user`,
  },
  TodoEndpoint: {
    getAllTodo: `${apiurl}/todo`,
    addTodo: `${apiurl}/todo`,
    updateTodo: `${apiurl}/todo`,
  },
};

export const constants = {
  CURRENT_TOKEN: 'AUTH_CURRENT_TOKEN_BEFLOCK_TODO',
};