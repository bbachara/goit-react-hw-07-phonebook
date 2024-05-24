import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <SearchBar />
      <ContactForm />
      <ContactList />
    </Layout>
  );
};
