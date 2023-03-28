export const getSessionStotage = (key) => {
  let initialValue = {
    user: false,
    userID: "",
    email: "",
    name: "",
    token: false,
    overlay: false,
  };
  try {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial structural value
    return initialValue;
  }
};
