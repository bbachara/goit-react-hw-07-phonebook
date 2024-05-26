import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
