import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import PatientAdded from './PatientAdded';
import NewPatient from './NewPatient';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <PatientAdded />
        </div>

        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <NewPatient />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
