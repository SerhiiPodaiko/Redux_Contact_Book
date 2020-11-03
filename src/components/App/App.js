import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import NavBar from "../NavBar";
import Contacts from "../Contacts";
import AddContact from "../Contacts/AddContact";
import EditContact from "../Contacts/EditContact";

class App extends Component {
  render() {
    return (
        <div className="App">
            <NavBar />
            <div className="container">
                <div className="py-3">
                    <Switch>
                        <Route exact path="/" component={Contacts} />
                        <Route exact path="/contacts/add" component={AddContact} />
                        <Route exact path="/contacts/edit/:id" component={EditContact} />
                    </Switch>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
