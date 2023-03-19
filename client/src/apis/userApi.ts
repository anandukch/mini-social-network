import api from "./index";

export const searchUsers = (data:string) => api.get(`/users/search?search=${data}`);

export const getProfile = () => api.get(`/users`);
export const addFriend = (friendId: string) =>
  api.put(`/users/follow/${friendId}`);

export const removeFriend = (friendId: string) =>
  api.post(`/users/unfollow/${friendId}`);
