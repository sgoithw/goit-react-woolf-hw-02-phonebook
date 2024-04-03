import style from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={style.contactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        onDelete={() => onDeleteContact(id)}
      />
    ))}
  </ul>
);

export default ContactList;
