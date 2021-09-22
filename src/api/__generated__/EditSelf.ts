/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditSelf
// ====================================================

export interface EditSelf_editUser {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface EditSelf {
  editUser: EditSelf_editUser;
}

export interface EditSelfVariables {
  name?: string | null;
  imageURI?: string | null;
}
