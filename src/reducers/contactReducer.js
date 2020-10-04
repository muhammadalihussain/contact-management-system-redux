import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
} from "../constant/types";

const intialState = {
  contacts: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      DateModified : "31-01-2018 15:04",
      DateCreated : "31-01-2018 15:04",
     
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      DateModified : "31-01-2018 15:04",
      DateCreated : "31-01-2018 15:04",
      
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",     
      DateModified : "31-01-2018 15:04",
      DateCreated : "31-01-2018 15:04",
    },
    
  ],
  contact: null,
  selectedContacts: [],
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id != action.payload
        ),
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: [],
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload,
      };

    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    default:
      return state;
  }
};
