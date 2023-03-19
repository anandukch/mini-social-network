import api from "./index";

export const searchUsers = (data: string) => api.post("/users/search", data);

export const addFriend = (friendId: string) =>
  api.put(`/users/follow/${friendId}`);

export const removeFriend = (friendId: string) =>
  api.post(`/users/unfollow/${friendId}`);
