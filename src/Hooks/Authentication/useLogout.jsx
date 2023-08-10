export const useLogout = () => {
    const Logout = () => {
      const pastDate = new Date(-1).toUTCString();
      document.cookie = `access_token=; expires=${pastDate}; path=/`;
    };
  
    return {
      Logout
    };
  };
    