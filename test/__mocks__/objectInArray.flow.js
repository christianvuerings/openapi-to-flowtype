// @flow strict
export type ObjectInArray = {
  array: $ReadOnlyArray<{
    requiredProp: string,
    "x-dashes-id": string,
    optionalProp?: string,
    "x-dashes-optional-id"?: string,
  }>,
};
