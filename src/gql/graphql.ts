/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateFileInput = {
  dateUpload: Scalars['DateTime']['input'];
  /** fileHash */
  fileHash: Scalars['String']['input'];
  /** fileName */
  fileName: Scalars['String']['input'];
  /** originalName */
  originalName: Scalars['String']['input'];
};

export type CreateLocationInput = {
  /** description */
  description: Scalars['String']['input'];
  /** tipe */
  tipe: Scalars['String']['input'];
  /** title */
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  lastname: Scalars['String']['input'];
  mail: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pwd: Scalars['String']['input'];
  rol: RolUser;
  username: Scalars['String']['input'];
};

export type File = {
  __typename?: 'File';
  dateUpload: Scalars['DateTime']['output'];
  /** fileHash */
  fileHash: Scalars['String']['output'];
  /** fileName */
  fileName: Scalars['String']['output'];
  /** User ID */
  id: Scalars['Int']['output'];
  /** originalName */
  originalName: Scalars['String']['output'];
};

export type Location = {
  __typename?: 'Location';
  /** description */
  description: Scalars['String']['output'];
  /** Location ID */
  id: Scalars['Int']['output'];
  /** tipe */
  tipe: Scalars['String']['output'];
  /** title */
  title: Scalars['String']['output'];
};

export type LoginInput = {
  pwd: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFile: File;
  createLocation: Location;
  createUser: User;
  removeFile: File;
  removeLocation: Location;
  removeUser: User;
  updateFile: File;
  updateLocation: Location;
  updateUser: User;
};


export type MutationCreateFileArgs = {
  createFileInput: CreateFileInput;
};


export type MutationCreateLocationArgs = {
  createLocationInput: CreateLocationInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveLocationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateFileArgs = {
  updateFileInput: UpdateFileInput;
};


export type MutationUpdateLocationArgs = {
  updateLocationInput: UpdateLocationInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  file: File;
  files: Array<File>;
  getLocation: Location;
  location: Array<Location>;
  login: User;
  user: User;
  users: Array<User>;
};


export type QueryFileArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetLocationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryLoginArgs = {
  loginInput: LoginInput;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export enum RolUser {
  Administrador = 'ADMINISTRADOR',
  Estudiante = 'ESTUDIANTE',
  Otros = 'OTROS',
  Revisor = 'REVISOR',
  Secretaria = 'SECRETARIA'
}

export type UpdateFileInput = {
  dateUpload?: InputMaybe<Scalars['DateTime']['input']>;
  /** fileHash */
  fileHash?: InputMaybe<Scalars['String']['input']>;
  /** fileName */
  fileName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** originalName */
  originalName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLocationInput = {
  /** description */
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** tipe */
  tipe?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  id: Scalars['Int']['input'];
  lastname?: InputMaybe<Scalars['String']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pwd?: InputMaybe<Scalars['String']['input']>;
  rol?: InputMaybe<RolUser>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  /** User ID */
  id: Scalars['Int']['output'];
  lastname: Scalars['String']['output'];
  mail: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pwd: Scalars['String']['output'];
  rol: RolUser;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type CrearUsuarioMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CrearUsuarioMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number } };

export type GetLocationQueryVariables = Exact<{
  data: Scalars['Int']['input'];
}>;


export type GetLocationQuery = { __typename?: 'Query', getLocation: { __typename?: 'Location', title: string, description: string, tipe: string } };

export type LoginQueryVariables = Exact<{
  data: LoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'User', id: number, username: string, mail: string, name: string, lastname: string, rol: RolUser } };

export type UpFileMutationVariables = Exact<{
  data: CreateFileInput;
}>;


export type UpFileMutation = { __typename?: 'Mutation', createFile: { __typename?: 'File', fileName: string } };


export const CrearUsuarioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"crearUsuario"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CrearUsuarioMutation, CrearUsuarioMutationVariables>;
export const GetLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tipe"}}]}}]}}]} as unknown as DocumentNode<GetLocationQuery, GetLocationQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"mail"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"rol"}}]}}]}}]} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
export const UpFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createFileInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileName"}}]}}]}}]} as unknown as DocumentNode<UpFileMutation, UpFileMutationVariables>;