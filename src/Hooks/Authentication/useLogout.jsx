export const useLogout = () => {
  const Logout = () => {
    const exp = new Date(-1).toUTCString();
    document.cookie = `access=; expires=${exp}; path=/`;
  };

  return {
    Logout,
  };
};
