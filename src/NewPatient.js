import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const getPatients = gql`
  {
    allPatients {
      id
      patientName
    }
  }
`;

const newPatients = gql`
  subscription {
    patientAdded {
      id
      patientName
    }
  }
`;

let unsubscribe = null;

export default () => (
  <Query query={getPatients}>
    {({ loading, data, subscribeToMore }) => {
      if (loading) {
        return null;
      }

      if (!unsubscribe) {
        unsubscribe = subscribeToMore({
          document: newPatients,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            console.log(subscriptionData.data.patientAdded);
            const patientAdded = subscriptionData.data.patientAdded;
            return {
              ...prev,
              allPatients: [...prev.allPatients, patientAdded]
            };
          }
        });
      }
      return (
        <div>
          {data.allPatients.map(x => <h3 key={x.id}>{x.patientName}</h3>)}
        </div>
      );
    }}
  </Query>
);
