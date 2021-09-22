import { gql } from "@apollo/client";
import * as fragments from "./Fragments";

export const LOGIN = gql`
  mutation Login($code: String!) {
    login(input: { code: $code }) {
      user {
        ...userFields
      }
      jwt
    }
  }
  ${fragments.USER}
`;

export const EDIT_SELF = gql`
  mutation EditSelf($name: String, $imageURI: String) {
    editUser(input: { name: $name, imageURI: $imageURI }) {
      ...userFields
    }
  }
  ${fragments.USER}
`;


export const ADD_QT = gql`
  mutation AddQT(
    $passage: String!
  ) {
    addQT(input: { passage: $passage }) {
      ...qTFields
    }
  }
  ${fragments.QT}
`;

export const EDIT_QT = gql`
  mutation EditQT(
    $qtId: String!
    $passage: String
    $content: String
  ) {
    editQT(
      input: {
        qtId: $qtId,
        passage: $passage,
        content: $content,
      }
    ) {
      ...qTFields
    }
  }
  ${fragments.QT}
`;

export const ADD_COMMENT = gql`
  mutation AddComment(
    $content: String!,
    $qtId: String!
  ) {
    addComment(input: { content: $content, qtId: $qtId }) {
      ...commentFields
    }
  }
  ${fragments.COMMENT}
`

export const EDIT_COMMENT = gql`
  mutation EditComment(
    $commentId: String!,
    $content: String
  ) {
    editComment(input: { commentId: $commentId, content: $content}) {
      ...commentFields
    }
  }
  ${fragments.COMMENT}
`