import {CREATE_CONTACT, GET_CONTACT} from "../types/types";

export const addContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact
})

export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
})