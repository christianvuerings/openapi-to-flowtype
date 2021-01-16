// @flow strict
export type Order = {
  id?: number,
  petId?: number,
  quantity?: number,
  shipDate?: string,
  status?: "placed" | "approved" | "delivered",
  complete?: boolean,
};
export type Category = { id?: number, name?: string };
export type User = {
  id?: number,
  username?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  phone?: string,
  userStatus?: number,
};
export type Tag = { id?: number, name?: string };
export type Pet = {
  id?: number,
  "x-dashes-id"?: string,
  snake_case_id?: string,
  category?: Category,
  name: string,
  photoUrls: $ReadOnlyArray<string>,
  tags?: $ReadOnlyArray<Tag>,
  status?: "available" | "pending" | "sold",
  objectType?: {| [key: string]: mixed |},
};
export type IGenericCollectionPet = { items?: $ReadOnlyArray<Pet> };
export type IGenericCollectionString = { items?: $ReadOnlyArray<string> };
export type ApiResponse = { code?: number, type?: string, message?: string };
