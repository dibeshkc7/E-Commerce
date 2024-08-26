import Cookies from "js-cookie";
export const useAuth = () => {
  const accessToken = Cookies.get("accessToken");
  const role = Cookies.get("role");
  const userId = Cookies.get("userID")

  return { accessToken, role, userId };
};
