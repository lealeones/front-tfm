import { gql } from "graphql-tag";
export const CrearAlumno = gql`
mutation CrearAlumno ($data:CreateUserAlumno!){
    createUserAlumno(createUserAlumno:$data){
      id
    }
  }
`;
