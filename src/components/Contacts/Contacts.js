import React from 'react';
import {connect} from 'react-redux';

import Contact from "./Contact";

const Contacts = ({ contacts }) => {
    return (
        <div>
            <table className="table shadow">
                <thead className="bg-primary text-white">
                <tr>
                    <th>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox"
                                className="custom-control-input" />
                            <label className="custom-control-label"></label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                { contacts.map((contact) => (
                    <Contact contact={contact} key={contact.id} />
                )) }
                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        contacts: state.books.contacts
    }
};

export default connect(mapStateToProps)(Contacts);