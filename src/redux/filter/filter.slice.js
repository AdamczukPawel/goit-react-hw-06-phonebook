const { createSlice } = require('@reduxjs/toolkit');

const initialFilterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState.filter,
  reducers: {
    setFilterAction(state, action) {
      state = action.payload;
    },
  },
});

export const { setFilterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
