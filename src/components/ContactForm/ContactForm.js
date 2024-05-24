import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import { addContact } from '../../redux/actions';
import { getContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      window.alert('Contact with this name already exists.');
      return;
    }

    dispatch(addContact({ name, phone }));
    form.reset();
    setError('');
  };

  return (
    <div>
      <h2 className={css.title}>Add Contacts</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        {error && <p className={css.error}>{error}</p>}
        <input
          className={css.field}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          placeholder="Enter contact name..."
          required
        />
        <input
          className={css.field}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone number..."
          required
        />
        <Button type="submit">Add contact</Button>
      </form>
    </div>
  );
};
