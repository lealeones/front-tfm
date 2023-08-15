import { gql } from "graphql-tag";

export const getLocation = gql`
query getLocation ($data: Int!){
  getLocation(id:$data){
      title
      description
      tipe
    }
  }
`;
