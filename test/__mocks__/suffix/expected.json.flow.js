// @flow strict
export type CategoryType = { code?: number, message?: string };
export type PetType = {
  id: number,
  "x-dashes-id"?: string,
  snake_case_id?: string,
  objectType?: {| [key: string]: mixed |},
} & NewPetType;
export type NewPetType = {
  name: string,
  tag?: string,
  category?: CategoryType,
};
export type ErrorModelType = { code: number, message: string };
export type IGenericCollectionPetType = { items?: $ReadOnlyArray<PetType> };
export type IGenericCollectionStringType = { items?: $ReadOnlyArray<string> };
