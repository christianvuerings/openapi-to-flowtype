// @flow strict
export type Partner = PartnerCustom | PartnerDetailed;
export type PartnerMany =
  | $ReadOnlyArray<PartnerCustom>
  | $ReadOnlyArray<PartnerDetailed>;
export type PartnerCustom = {| advertising_intent?: ?number |};
export type PartnerDetailed = {| biz_ownership_email?: ?string |};
export type wildcards_OneOfAny = {| [key: string]: mixed |};
