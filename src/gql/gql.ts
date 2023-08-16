/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation crearUsuario($data:CreateUserInput!){\n  createUser(createUserInput:$data){\n    id\n  }\n}\n": types.CrearUsuarioDocument,
    "\nquery getLocation ($data: Int!){\n  getLocation(id:$data){\n      title\n      description\n      tipe\n    }\n  }\n": types.GetLocationDocument,
    "\nquery login ($data:LoginInput!){\n    login(loginInput:$data){\n      id\n      username\n      mail\n      name\n      lastname\n      rol\n    }\n  }\n  ": types.LoginDocument,
    "\nmutation upFile ($data: CreateFileInput!){\n    createFile(createFileInput:$data){\n      fileName\n    }\n  }\n  ": types.UpFileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation crearUsuario($data:CreateUserInput!){\n  createUser(createUserInput:$data){\n    id\n  }\n}\n"): (typeof documents)["\nmutation crearUsuario($data:CreateUserInput!){\n  createUser(createUserInput:$data){\n    id\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getLocation ($data: Int!){\n  getLocation(id:$data){\n      title\n      description\n      tipe\n    }\n  }\n"): (typeof documents)["\nquery getLocation ($data: Int!){\n  getLocation(id:$data){\n      title\n      description\n      tipe\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery login ($data:LoginInput!){\n    login(loginInput:$data){\n      id\n      username\n      mail\n      name\n      lastname\n      rol\n    }\n  }\n  "): (typeof documents)["\nquery login ($data:LoginInput!){\n    login(loginInput:$data){\n      id\n      username\n      mail\n      name\n      lastname\n      rol\n    }\n  }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation upFile ($data: CreateFileInput!){\n    createFile(createFileInput:$data){\n      fileName\n    }\n  }\n  "): (typeof documents)["\nmutation upFile ($data: CreateFileInput!){\n    createFile(createFileInput:$data){\n      fileName\n    }\n  }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;