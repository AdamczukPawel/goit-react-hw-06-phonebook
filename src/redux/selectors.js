export const getContacts = store => {
  if (store === undefined) {
    return;
  }
  return store.contacts;
};

export const getFilter = store => {
  if (store === undefined) {
    return;
  }
  return store.filter;
};
