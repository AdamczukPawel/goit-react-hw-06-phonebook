export const getContacts = state => {
  if (state === undefined) {
    return;
  }
  return state.contacts;
};

export const getFilter = state => {
  if (state === undefined) {
    return;
  }
  console.log(state);
  return state.filter;
};
