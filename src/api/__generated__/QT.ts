/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QT
// ====================================================

export interface QT_qT {
  __typename: "QT";
  id: string;
  passage: string;
  passageText: string;
  content: string;
  modified: any;
  created: any;
}

export interface QT {
  qT: QT_qT;
}

export interface QTVariables {
  id: number;
}
