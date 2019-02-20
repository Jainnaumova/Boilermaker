import { fetchAllUsers } from "../api/user.api";

export const GOT_ALL_USERS = "GOT_ALL_USERS";

export const gotAllUsers = users => ({
  type: GOT_ALL_USERS,
  users
});

export const getAllUsers = () => async dispatch => {
  const users = await fetchAllUsers();
  dispatch(gotAllUsers(users));
};
