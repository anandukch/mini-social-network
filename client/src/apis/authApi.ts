import api from "./index";

export const login = (data: any) => api.post("/auth/signin", data);

export const register = (data: any) => api.post("/auth/signup", data);
