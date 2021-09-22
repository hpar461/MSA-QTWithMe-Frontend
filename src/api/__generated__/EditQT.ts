/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditQT
// ====================================================

export interface EditQT_editQT {
  __typename: "QT";
  id: string;
  passage: string;
  passageText: string;
  content: string;
  modified: any;
  created: any;
}

export interface EditQT {
  editQT: EditQT_editQT;
}

export interface EditQTVariables {
  qtId: string;
  passage?: string | null;
  content?: string | null;
}
