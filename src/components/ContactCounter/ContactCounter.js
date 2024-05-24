import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import css from './ContactCounter.module.css';

export const ContactCounter = () => {
  const contacts = useSelector(getContacts);

  const count = contacts.length;

  return (
    <div>
      <p className={css.text}>Total Contacts: {count}</p>
    </div>
  );
};
