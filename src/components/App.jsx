import css from './App.module.css';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { useEffect } from 'react';
import { setContactsAction } from 'redux/contacts/contacts.slice';

export const App = () => {
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      setContactsAction(JSON.parse(contacts));
    }
  }, []);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
