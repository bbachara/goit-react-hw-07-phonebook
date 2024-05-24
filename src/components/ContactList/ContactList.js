import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Contact } from '../Contact/Contact';
import {
  getContacts,
  getStatusFilter,
  getSearchQuery,
} from '../../redux/selectors';
import css from './ContactList.module.css';
import { statusFilters } from '../../redux/constants';

const getVisibleContacts = (contacts, statusFilter, searchQuery) => {
  let filteredContacts = contacts;

  if (searchQuery) {
    filteredContacts = filteredContacts.filter(contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  switch (statusFilter) {
    case statusFilters.active:
      return filteredContacts.filter(contact => !contact.completed);
    case statusFilters.completed:
      return filteredContacts.filter(contact => contact.completed);
    default:
      return filteredContacts;
  }
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const searchQuery = useSelector(getSearchQuery);
  const visibleContacts = getVisibleContacts(
    contacts,
    statusFilter,
    searchQuery
  );

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);

      dispatch({ type: 'contacts/loadContacts', payload: parsedContacts });
    }
  }, [dispatch]);

  return (
    <div>
      <h2 className={css.title}>List of Contacts</h2>
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};
