const save =  (key, data) => localStorage.setItem(key, data);

const get = (key) => {
  const item = localStorage.getItem(key);
  return item === 'undefined' ? undefined : item;
};

export default {
  save,
  get,
};
