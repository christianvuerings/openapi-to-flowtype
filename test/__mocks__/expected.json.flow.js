// @flow strict

export type Pet = {
  "x-dashes-id"? : string,
  id : number,
  objectType? : {| [key : string] : mixed |},
  snake_case_id? : string,
} & NewPet;
export type NewPet = { category? : Category, name : string, tag? : string };
export type ErrorModel = { code : number, message : string };
export type IGenericCollectionPet = { items? : Pet[] };
export type IGenericCollectionString = { items? : string[] };
