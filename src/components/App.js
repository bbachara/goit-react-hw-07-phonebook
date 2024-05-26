import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import { getContacts } from '../redux/selectors';
import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';

export const App = () => {
  const dispatch = useDispatch();
  const { items: contacts, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = contact => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Layout>
      <AppBar />
      <SearchBar />
      <ContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </Layout>
  );
};
