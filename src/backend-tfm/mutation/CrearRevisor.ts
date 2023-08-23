import { gql } from "graphql-tag";
export const CrearRevisor = gql`
mutation CrearRevisor ($data:CreateUserRevisorInput!){
    createUserRevisor(createUserRevisorInput:$data){
      id
    }
  }
`;
