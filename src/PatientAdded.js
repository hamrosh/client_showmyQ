import React from 'react';
import { Subscription } from 'react-apollo';
import { gql } from 'apollo-boost';

const newNums = gql`
  subscription patientAdded {
    patientAdded {
      id
      patientName
    }
  }
`;

export default () => (
  <Subscription subscription={newNums}>
    {({ data }) => {
      return (
        <h3>
          New Patient Added :{' '}
          {!data ? 'waiting...' : data.patientAdded.patientName}
        </h3>
      );
    }}
  </Subscription>
);
