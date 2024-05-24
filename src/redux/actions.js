import { nanoid } from "nanoid";

export const addContact = (contact) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name: contact.name,
      phone: contact.phone,
    },
  };
};

export const deleteContact = (contactId) => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};

export const setStatusFilter = (value) => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};

export const setSearchQuery = (query) => {
  return {
    type: "filters/setSearchQuery",
    payload: query,
  };
};
