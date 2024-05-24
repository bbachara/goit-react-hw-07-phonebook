import { combineReducers } from 'redux';
import { statusFilters } from './constants';

const loadContactsFromLocalStorage = () => {
  const storedContacts = localStorage.getItem('contacts');
  return storedContacts
    ? JSON.parse(storedContacts)
    : [
        { id: 0, name: 'Rosie Simpson', phone: '459-121-5556' },
        { id: 1, name: 'Hermione Kline', phone: '443-839-1552' },
        { id: 2, name: 'Eden Clements', phone: '645-175-7955' },
        { id: 3, name: 'Annie Copeland', phone: '227-915-2655' },
      ];
};

const contactsInitialState = loadContactsFromLocalStorage();

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      const newState = [...state, action.payload];
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    }
    case 'contacts/deleteContact': {
      const newState = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
  searchQuery: '',
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    case 'filters/setSearchQuery':
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
