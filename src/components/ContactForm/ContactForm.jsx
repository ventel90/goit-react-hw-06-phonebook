import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  Wrapper,
  Label,
  Input,
  Btn
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/actions';


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already your contacts!`);
    } else {
      dispatch(addContacts({ id: 'id-' + nanoid(), name, number }));
    }
    onReset();
  };

  const onReset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    };
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="">
          Name:{' '}
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
      </Wrapper>
      <Wrapper>
        <Label htmlFor="">
          Phone:{' '}
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
      </Wrapper>

      <Btn type="submit">Add contact</Btn>
    </Form>
  );
}

export default ContactForm;
