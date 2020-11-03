import React, {useState} from 'react';

import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {addContact} from "../../redux/actions/actions";

const AddContact = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    let history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: Math.random(),
            name: name,
            email: email,
            phone: phone
        };

        dispatch(addContact(newContact));
        history.push('/');
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={(e) =>  handleSubmit(e)}>
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
                    <button onSubmit={handleSubmit}
                            type="submit" className="btn btn-primary">
                        Create Contact
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddContact;