import { gql } from "graphql-tag";
export const crearUsuario = gql`
mutation crearUsuario($data:CreateUserInput!){
  createUser(createUserInput:$data){
    id
  }
}
`;
