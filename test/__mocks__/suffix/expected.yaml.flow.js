// @flow strict
export type OrderType = {
  id?: number,
  petId?: number,
  quantity?: number,
  shipDate?: string,
  status?: "placed" | "approved" | "delivered",
  complete?: boolean,
};
export type CategoryType = { id?: number, name?: string };
export type UserType = {
  id?: number,
  username?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  phone?: string,
  userStatus?: number,
};
export type TagType = { id?: number, name?: string };
export type PetType = {
  id?: number,
  "x-dashes-id"?: string,
  snake_case_id?: string,
  category?: CategoryType,
  name: string,
  photoUrls: $ReadOnlyArray<string>,
  tags?: $ReadOnlyArray<TagType>,
  status?: "available" | "pending" | "sold",
  objectType?: {| [key: string]: mixed |},
};
export type IGenericCollectionPetType = { items?: $ReadOnlyArray<PetType> };
export type IGenericCollectionStringType = { items?: $ReadOnlyArray<string> };
export type ApiResponseType = {
  code?: number,
  type?: string,
  message?: string,
};
