import { gql } from "@apollo/client";

export const USER = gql`
    fragment userFields on User {
        id
        name
        gitHub
        imageURI
    }
`;

export const QT = gql`
    fragment qTFields on QT {
        id
        passage
        passageText
        content
        modified
        created
    }
`;

export const COMMENT = gql`
    fragment commentFields on Comment {
        id
        content
        modified
        created
    }
`;

export const PAGE_INFO = gql`
    fragment pageInfoFields on PageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
    }
`;