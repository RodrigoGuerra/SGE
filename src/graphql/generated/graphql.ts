export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface GqlCreateUserInput {
  exampleField?: InputMaybe<Scalars['Int']>;
}

export interface GqlHealthCheckType {
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export interface GqlMutation {
  createUser: GqlUser;
  removeUser?: Maybe<GqlUser>;
  updateUser: GqlUser;
}

export interface GqlMutationCreateUserArgs {
  createUserInput: GqlCreateUserInput;
}

export interface GqlMutationRemoveUserArgs {
  id: Scalars['Int'];
}

export interface GqlMutationUpdateUserArgs {
  updateUserInput: GqlUpdateUserInput;
}

export interface GqlQuery {
  user?: Maybe<GqlUser>;
  users: Array<Maybe<GqlUser>>;
}

export interface GqlQueryUserArgs {
  id: Scalars['String'];
}

export interface GqlUpdateUserInput {
  id: Scalars['Int'];
}

export interface GqlUser {
  created_at?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}
