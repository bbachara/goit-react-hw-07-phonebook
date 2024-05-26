import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { fetchContacts } from '../../redux/operations';
import {
  getContacts,
  getStatusFilter,
  getSearchQuery,
} from '../../redux/selectors';
import { statusFilters } from '../../redux/constants';
import css from './ContactList.module.css';

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
  const { items: contacts, isLoading, error } = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const searchQuery = useSelector(getSearchQuery);
  const visibleContacts = getVisibleContacts(
    contacts,
    statusFilter,
    searchQuery
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 className={css.title}>List of Contacts</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
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
