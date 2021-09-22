import React from 'react';
import { Story, Meta } from '@storybook/react';
import Header from './Header';
import { IHeaderProps } from './Header';
import ApolloProviderWrapper from '../Helper/ApolloProviderWrapper';

export default {
  title: 'UI Components/Header',
  component: Header,
} as Meta;

const Template: Story<IHeaderProps> = (args) => (
  <ApolloProviderWrapper>
    <Header user={args.user} code={args.code} />
  </ApolloProviderWrapper>
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    __typename: "User",
    id: "1",
    name: "John Doe",
    gitHub: "johndoe",
    imageURI: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  code: null
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
};
