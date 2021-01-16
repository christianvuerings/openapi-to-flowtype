// @flow strict
export type Category = { code?: number, message?: string };
export type Pet = {
  id: number,
  xDashesId?: string,
  snakeCaseId?: string,
  objectType?: {| [key: string]: mixed |},
} & NewPet;
export type NewPet = { name: string, tag?: string, category?: Category };
export type ErrorModel = { code: number, message: string };
export type IGenericCollectionPet = { items?: $ReadOnlyArray<Pet> };
export type IGenericCollectionString = { items?: $ReadOnlyArray<string> };
