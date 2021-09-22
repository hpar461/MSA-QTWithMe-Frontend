/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QTs
// ====================================================

export interface QTs_qTs_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;
  /**
   * Indicates whether more edges exist prior the set defined by the clients arguments.
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface QTs_qTs_edges {
  __typename: "QTEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface QTs_qTs_nodes_user {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface QTs_qTs_nodes {
  __typename: "QT";
  id: string;
  passage: string;
  passageText: string;
  content: string;
  modified: any;
  created: any;
  user: QTs_qTs_nodes_user;
}

export interface QTs_qTs {
  __typename: "QTConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: QTs_qTs_pageInfo;
  /**
   * A list of edges.
   */
  edges: QTs_qTs_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: QTs_qTs_nodes[] | null;
}

export interface QTs {
  qTs: QTs_qTs | null;
}

export interface QTsVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
