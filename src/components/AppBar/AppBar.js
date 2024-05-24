import { ContactCounter } from '../ContactCounter/ContactCounter';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactCounter />
      </section>
    </header>
  );
};
