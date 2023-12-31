import { loginApi } from "apis/auth.api";
import { notification } from "helpers/notification.helper";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "constants"
export const login = async (data) => {
  const { success, payload, errorMessage  } = await loginApi(data);
  if (success) {
    localStorage.setItem(ACCESS_TOKEN, payload[ACCESS_TOKEN]);
    localStorage.setItem(REFRESH_TOKEN, payload[REFRESH_TOKEN]);
    notification({ type: "success", message: "Login Success" });
    return true;
  } else {
    notification({ type: "error", message:errorMessage});
    return false;
  }
};

export const logout = async () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  notification({ type: "success", message: "Logout Success" });
  return true;
};
