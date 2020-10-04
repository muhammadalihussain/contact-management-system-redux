import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Avatar from "react-avatar";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [DateModified, setDateModified] = useState("");
  const [DateCreated, setDateCreated] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setDateModified(contact.DateModified);
      setDateCreated(contact.DateCreated);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, {
      name: name,
      DateModified: Date.now.toString(),
      email: email,
    });

    dispatch(updateContact(update_contact));
    history.push("/")
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">View Contact</div>
      <div className="card-body">
      
      <table className="table shadow">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Date Created</th>
            <th>Date Modified</th>
          </tr>
        </thead>
        <tbody>
        <td>
        <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
       </td>
     
      <td>{email}</td>
      <td>{DateCreated}</td>
      <td>{DateModified}</td>
    </tbody>
      </table>


      </div>
    </div>
  );
};

export default EditContact;
