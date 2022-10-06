import HTTPClient from "./HTTPClient";

class Api extends HTTPClient {
  public verifyEmail = async (token: string) =>
    this.post<boolean>(`users/verify-email`, { token: token });
}

const api = new Api(process.env.VITE_APP_PROXY_URL as string, true);

export default api;
