import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";

const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  const { name, email, id } = contact;
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
      </td>
     
      <td>{email}</td>
      <td className="actions">

      <Link to={`/contacts/view/${id}`}>
          <span className="btn btn-info mr-2">view</span>
        </Link>

        <Link to={`/contacts/edit/${id}`}>
          <span className="btn btn-primary mr-2">edit</span>
        </Link>
        <span
          className="btn btn-danger mr-2"
          onClick={() => dispatch(deleteContact(id))}
        >
         delete
        </span>
     
      </td>
    </tr>
  );
};

export default Contact;
