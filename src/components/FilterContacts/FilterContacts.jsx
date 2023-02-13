import React from 'react';
import {Wrapper, Label, Input} from './FilterContacts.styled'
import PropTypes from 'prop-types';
import { useDispatch} from 'react-redux';
import { filterContacts } from 'redux/actions';

export default function Filter() {
  const dispatch = useDispatch();

  const changeFilter = e => {
    console.log(e.currentTarget.value);

    let value = e.currentTarget.value;
    dispatch(filterContacts(value));
  };

  return (
    <Wrapper>
      <Label>
        Filter: <Input type="text" onChange={changeFilter} />
      </Label>
    </Wrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
