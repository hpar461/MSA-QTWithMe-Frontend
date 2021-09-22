/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddQT
// ====================================================

export interface AddQT_addQT {
  __typename: "QT";
  id: string;
  passage: string;
  passageText: string;
  content: string;
  modified: any;
  created: any;
}

export interface AddQT {
  addQT: AddQT_addQT;
}

export interface AddQTVariables {
  passage: string;
}
