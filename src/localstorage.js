import { ref, computed } from "vue";
import { jwtDecode } from "jwt-decode";

const user = ref(null);
let tokenExpiryTimer = null;

export function useUserData() {
  const initializeUser = () => {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      try {
        user.value = JSON.parse(userData);
        if(user.value.token){
          handleToken(user.value.token)
        }
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
        // user.value = null;
        clearUser();
      }
    }
  };

  const handleToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp) {
        const expiryTime = decoded.exp * 1000;
        const now = Date.now();

        if (expiryTime <= now) {
          clearUser(); // Token already expired
        } else {
          startTokenExpiryTimer(expiryTime - now);
        }
      } else {
        console.warn("JWT does not contain an exp field");
      }
    } catch (err) {
      console.error("Failed to decode JWT:", err);
      clearUser();
    }
  };

  const startTokenExpiryTimer = (remainingTime) => {
    clearTimeout(tokenExpiryTimer);
    tokenExpiryTimer = setTimeout(() => {
      clearUser();
    }, remainingTime);
  };

  const updateUser = (newUser) => {
    if (user.value) {
      user.value = { ...user.value, ...newUser };
      sessionStorage.setItem("user", JSON.stringify(user.value));

      if (user.value.token) {
        handleToken(user.value.token);
      }
    }
  };

  const getUser = () => {
    return user.value;
  };

  const clearUser = () => {
    user.value = null;
    sessionStorage.removeItem("user");
    clearTimeout(tokenExpiryTimer);
  };

  // Set user (for login)
  const setUser = (userData) => {
    user.value = userData;
    sessionStorage.setItem("user", JSON.stringify(userData));

    if (userData.token) {
      handleToken(userData.token);
    }
  };

  return {
    user: computed(() => user.value),
    initializeUser,
    updateUser,
    getUser,
    clearUser,
    setUser,
  };
}
