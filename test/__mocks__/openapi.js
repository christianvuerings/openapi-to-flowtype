// @flow strict
export type Category = { code?: number, message?: string };
export type Pet = NewPet & {
  id: number,
  "x-dashes-id"?: string,
  snake_case_id?: string,
  objectType?: {| [key: string]: mixed |},
};
export type NewPet = { name: string, tag?: string, category?: Category };
export type ErrorModel = { code: number, message: string };
export type IGenericCollectionPet = { items?: $ReadOnlyArray<Pet> };
export type IGenericCollectionString = { items?: $ReadOnlyArray<string> };
