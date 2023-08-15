import { gql } from "@apollo/client";
const upFile = gql`
mutation upFile ($data: CreateFileInput!){
    createFile(createFileInput:$data){
      fileName
    }
  }
  `;

  export default upFile;