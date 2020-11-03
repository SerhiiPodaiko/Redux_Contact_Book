import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getContact} from "../../redux/actions/actions";

const EditContact = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    const contact = useSelector(state => state.books.contact);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (contact != null) {
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
        }
        dispatch(getContact(id))
    }, [])

    const onUpdateContact = (e) => {
        e.preventDefault();

        const update_contact = Object.assign(contact, {
            name: name,
            phone: phone,
            email: email
        });

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={e => onUpdateContact(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter  Your Name"
                            value={name}
                            onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter  Your Phone Number"
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter  Your E-mail Address"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-warning">
                        Update Contact
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditContact;