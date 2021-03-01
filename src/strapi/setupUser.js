import { setStorageUser, setUser } from '../stores/user';

export default function setupUser(response) {
  const { jwt } = response.data;
  const { username } = response.data.user;
  const user = { username, jwt };

  setStorageUser(user);
  setUser(user);
}