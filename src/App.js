import React from 'react';
import { Admin, Resource, EditGuesser,fetchUtils, } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
// import simpleRestProvider from 'ra-data-simple-rest';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import { UserList } from './components/users';
import { PostList } from './components/posts';
import Dashboard from './components/Dashboard';
import authProvider from './components/Auth/authProvider';
import MyLoginPage from './components/Auth/myLoginPage';
import MyLogoutButton from './components/Auth/myLogoutButton';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
// const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} loginPage={MyLoginPage} logoutButton={MyLogoutButton} authProvider={authProvider} dataProvider={dataProvider}>
  <Resource name="users" list={UserList} icon={UserIcon}/>
  <Resource name="posts" list={PostList} edit={EditGuesser} icon={PostIcon} />
  </Admin>
)

export default App;
