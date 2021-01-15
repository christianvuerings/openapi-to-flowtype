// @flow strict

export type ResponseStatus =
  | "success is guaranteed"
  | "failure is not an option"
  | "Sorry! We don't support performing this action on a board of this type."
  | "Sorry! We don't support performing this action on a board of this type.";
export type api_error_2174 = {|
  message? : "Sorry! We don't support 1" | "success is guaranteed",
|};
