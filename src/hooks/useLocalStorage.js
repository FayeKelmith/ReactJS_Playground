export const useLocalStorage = (key) => {
  const setItem = (value) => {
    window.localStorage.setItem(value, JSON.stringify(value));
  };

  const getItem = () => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : undefined;
  };

  return { setItem, getItem };
};
