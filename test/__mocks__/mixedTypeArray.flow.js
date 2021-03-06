// @flow strict
export type Cat = { id?: number, "x-dashes-id"?: string };
export type MixedTypeArray = $ReadOnlyArray<Cat | string>;
