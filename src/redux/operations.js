import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://664e4445fafad45dfadf99c4.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post(BASE_URL, contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`${BASE_URL}/${contactId}`);
    return contactId;
  }
);
