import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

const graphQLClient = new ApolloClient({
  uri: "https://qtwithme-backend-graphql.azurewebsites.net/graphql/",
  cache: new InMemoryCache(),
});

interface IApolloProviderWrapper {
  children: JSX.Element
}

function ApolloProviderWrapper(props: IApolloProviderWrapper) {
  return (
    <ApolloProvider client={graphQLClient}>
      {props.children}
    </ApolloProvider>
  );
}

export default ApolloProviderWrapper;