import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    status: statusFilters.all,
    searchQuery: '',
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setStatusFilter, setSearchQuery } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
