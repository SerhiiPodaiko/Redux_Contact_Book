import React from 'react';
import Avatar from "react-avatar";
import {Link} from "react-router-dom";

const Contact = ({ contact }) => {
    const {name, phone, email, id} = contact;
    return (
        <tr key={contact.id}>
            <th>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox"
                           className="custom-control-input"/>
                </div>
            </th>
            <th><Avatar className="mr-2" name={name} size="45" round={true} /> {name}</th>
            <th>{phone}</th>
            <th>{email}</th>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons">edit</span>
                </Link>
                <Link to="#">
                    <span className="material-icons text-danger">remove_circle</span>
                </Link>
            </td>
        </tr>
    );
}

export default Contact;