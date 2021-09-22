import { gql } from "@apollo/client";
import * as fragments from "./Fragments";

export const QTS = gql`
  query QTs($first: Int, $after: String, $last: Int, $before: String) {
    qTs(first: $first, after: $after, last: $last, before: $before) {
      pageInfo {
        ...pageInfoFields
      }
      edges {
        cursor
      }
      nodes {
        ...qTFields
        user {
          ...userFields
        }
      }
    }
  }
  ${fragments.QT}
  ${fragments.PAGE_INFO}
  ${fragments.USER}
`;

export const QT = gql`
  query QT($id: Int!) {
    qT(id: $id) {
      ...qTFields
    }
  }
  ${fragments.QT}
`;

export const USERS = gql`
  query Users($first: Int, $after: String, $last: Int, $before: String) {
    users(first: $first, after: $after, last: $last, before: $before) {
      pageInfo {
        ...pageInfoFields
      }
      edges {
        cursor
      }
      nodes {
        ...userFields
      }
    }
  }
  ${fragments.USER}
  ${fragments.PAGE_INFO}
`;

export const USER = gql`
  query User($id: Int!) {
    user(id: $id) {
      ...userFields
    }
  }
  ${fragments.USER}
`;

export const SELF = gql`
  query Self {
    self {
      ...userFields
    }
  }
  ${fragments.USER}
`;
