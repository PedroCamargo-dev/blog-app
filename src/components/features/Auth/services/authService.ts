import { endPoint } from "../../../../api";
import { AuthProps } from "../../interfaces/IAuth";

export const login = async ({ email, password }: AuthProps) => {
  try {
    const response = await endPoint.login({ email, password })
    const token = response.data.accessToken;
    localStorage.setItem('accessToken', token);
    return token;
  } catch (error: any) {
    throw error.response.data;
  }
};
