const { createSlice } = require('@reduxjs/toolkit');

const initialContactsState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContactAction: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            name: contact.name,
            number: contact.number,
            id: contact.id,
          },
        };
      },
    },
    deleteContactAction(state, action) {
      const id = action.payload;
      return state.filter(task => task.id !== id);
    },
    setContactsAction(state, action) {
      const localStorageContacts = action.payload;
      return (state = localStorageContacts);
    },
  },
});

export const { addContactAction, deleteContactAction, setContactsAction } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
