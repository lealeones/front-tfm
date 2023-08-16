import { gql } from "@apollo/client";
const login = gql`
query login ($data:LoginInput!){
    login(loginInput:$data){
      id
      username
      mail
      name
      lastname
      rol
    }
  }
  `;

export default login;