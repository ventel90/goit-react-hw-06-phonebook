import React from "react";
import PropTypes from 'prop-types';
import { Contacts, ContactItem, Name, Number, Btn } from './ContactList.styled';
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "redux/actions";

const filteredContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

const ContactList =()=>{
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const contactsList = filteredContacts(contacts, filter);
  const deleteItem = id => {
    dispatch(deleteContacts(id));
  };
  
  return (
    <Contacts>
  {contactsList.map(({ id, name, number }) => (
    <ContactItem key={id}>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Btn onClick={() => deleteItem(id)}>Delete</Btn>
    </ContactItem>
  ))}
</Contacts>)
};

export default ContactList

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
