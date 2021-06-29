// @flow strict
export type wildcards_OneOfAnyUntypedField = {| [key: string]: mixed |};
export type ContactRequestCustom = {|
  board?: wildcards_OneOfAnyUntypedField,
  conversation?: wildcards_OneOfAnyUntypedField,
|};
export type ContactRequestDetailed = {|
  board?: wildcards_OneOfAnyUntypedField,
  conversation?: wildcards_OneOfAnyUntypedField,
|};
export type ContactRequestSummary = {|
  recipient?: wildcards_OneOfAnyUntypedField,
  sender?: wildcards_OneOfAnyUntypedField,
|};
export type SubModel_ImageDetails = {|
  domain_color?: string,
  height?: number,
  type?: string,
  url?: string,
  width?: number,
|};
export type UserCustom = {|
  about?: string,
  recent_pin_images?: ?{| [key: string]: ?SubModel_ImageDetails |},
  through_properties?: {| [key: string]: ?$ReadOnlyArray<string> |},
|};
export type BoardCustom = {|
  viewer_contact_request_one_of?: ?{|
    [key: string]:
      | ?ContactRequestCustom
      | ContactRequestDetailed
      | ContactRequestSummary,
  |},
  viewer_contact_request_all_of?: ?{|
    [key: string]: ?ContactRequestCustom &
      ContactRequestDetailed &
      ContactRequestSummary,
  |},
  viewer_contact_request_any_of?: ?{|
    [key: string]:
      | ?ContactRequestCustom
      | ContactRequestDetailed
      | ContactRequestSummary,
  |},
|};
