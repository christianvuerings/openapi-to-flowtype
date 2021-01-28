// @flow strict
export type Accept_Language = string;
export type AggregatedPinDataCustom = {|
  aggregated_stats?: wildcards_OneOfAnyUntypedField,
  comment_count?: wildcards_OneOfAnyUntypedField,
  creator_analytics?: wildcards_OneOfAnyUntypedField,
  did_it_data?: wildcards_OneOfAnyUntypedField,
  has_xy_tags?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  image_signature?: wildcards_OneOfAnyUntypedField,
  is_dynamic_collections?: wildcards_UntypedSniffedBool,
  is_shop_the_look?: wildcards_UntypedSniffedBool,
  is_stela?: wildcards_UntypedSniffedBool,
  link?: wildcards_OneOfAnyUntypedField,
  pin_tags?: wildcards_OneOfAnyUntypedField,
  pin_tags_chips?: wildcards_OneOfAnyUntypedField,
  place_count?: wildcards_OneOfAnyUntypedField,
  places?: wildcards_OneOfAnyUntypedField,
  reaction_by_me?: wildcards_OneOfAnyUntypedField,
  reaction_counts?: wildcards_OneOfAnyUntypedField,
  root_pin_board_id?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type AggregatedPinDataDetailed = {|
  aggregated_stats?: wildcards_OneOfAnyUntypedField,
  comment_count?: wildcards_OneOfAnyUntypedField,
  did_it_data?: wildcards_OneOfAnyUntypedField,
  has_xy_tags?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  image_signature?: wildcards_OneOfAnyUntypedField,
  is_dynamic_collections?: wildcards_UntypedSniffedBool,
  is_shop_the_look?: wildcards_UntypedSniffedBool,
  is_stela?: wildcards_UntypedSniffedBool,
  link?: wildcards_OneOfAnyUntypedField,
  pin_tags?: wildcards_OneOfAnyUntypedField,
  pin_tags_chips?: wildcards_OneOfAnyUntypedField,
  place_count?: wildcards_OneOfAnyUntypedField,
  root_pin_board_id?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type AggregatedPinDataSummary = {|
  aggregated_stats?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  image_signature?: wildcards_OneOfAnyUntypedField,
  is_shop_the_look?: wildcards_UntypedSniffedBool,
  link?: wildcards_OneOfAnyUntypedField,
  pin_tags?: wildcards_OneOfAnyUntypedField,
  place_count?: wildcards_OneOfAnyUntypedField,
  root_pin_board_id?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type ApiBookmarkedEnvelope = {|
  bookmark?: string,
  code: number,
  data:
    | number
    | string
    | {| [key: string]: mixed |}
    | boolean
    | number
    | $ReadOnlyArray<mixed>,
  debug_logs?: $ReadOnlyArray<{| [key: string]: mixed |}>,
  endpoint_name: string,
  message: string,
  message_detail?: string,
  sensitivity?: {| [key: string]: mixed |},
  status: ResponseStatus,
|};
export type ApiEnvelope = {|
  code: number,
  data:
    | number
    | string
    | {| [key: string]: mixed |}
    | boolean
    | number
    | $ReadOnlyArray<mixed>,
  debug_logs?: $ReadOnlyArray<{| [key: string]: mixed |}>,
  endpoint_name: string,
  message: string,
  message_detail?: string,
  sensitivity?: {| [key: string]: mixed |},
  status: ResponseStatus,
|};
export type ApiErrorEnvelope = {|
  code: number,
  data:
    | number
    | string
    | {| [key: string]: mixed |}
    | boolean
    | number
    | $ReadOnlyArray<mixed>,
  debug_logs?: $ReadOnlyArray<{| [key: string]: mixed |}>,
  endpoint_name: string,
  error?: {| [key: string]: mixed |},
  message: string,
  message_detail?: string,
  sensitivity?: {| [key: string]: mixed |},
  status: ResponseStatus,
|};
export type AttributionsCustom = {|
  destination?: wildcards_OneOfAnyUntypedField,
  element_type?: wildcards_OneOfAnyUntypedField,
  image_type?: wildcards_OneOfAnyUntypedField,
  reason?: wildcards_OneOfAnyUntypedField,
  shown?: wildcards_OneOfAnyUntypedField,
  subtitle?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
|};
export type AttributionsDetailed = {|
  destination?: wildcards_OneOfAnyUntypedField,
  element_type?: wildcards_OneOfAnyUntypedField,
  image_type?: wildcards_OneOfAnyUntypedField,
  reason?: wildcards_OneOfAnyUntypedField,
  shown?: wildcards_OneOfAnyUntypedField,
  subtitle?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
|};
export type AttributionsSummary = {|
  destination?: wildcards_OneOfAnyUntypedField,
  element_type?: wildcards_OneOfAnyUntypedField,
  image_type?: wildcards_OneOfAnyUntypedField,
  reason?: wildcards_OneOfAnyUntypedField,
  shown?: wildcards_OneOfAnyUntypedField,
  subtitle?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
|};
export type BoardActionLockCustom = {|
  action_type?: wildcards_OneOfAnyUntypedField,
  board_id?: wildcards_OneOfAnyUntypedField,
  created_timestamp?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  is_origin?: wildcards_UntypedSniffedBool,
  progress?: wildcards_OneOfAnyUntypedField,
  section_id?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type BoardActionLockDetailed = {|
  action_type?: wildcards_OneOfAnyUntypedField,
  board_id?: wildcards_OneOfAnyUntypedField,
  created_timestamp?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  is_origin?: wildcards_UntypedSniffedBool,
  progress?: wildcards_OneOfAnyUntypedField,
  section_id?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type BoardActionLockSummary = {|
  action_type?: wildcards_OneOfAnyUntypedField,
  board_id?: wildcards_OneOfAnyUntypedField,
  created_timestamp?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  is_origin?: wildcards_UntypedSniffedBool,
  progress?: wildcards_OneOfAnyUntypedField,
  section_id?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type BoardActivityCustom = {|
  activity_type?: wildcards_OneOfAnyUntypedField,
  aggregate_pin_count?: wildcards_OneOfAnyUntypedField,
  aux_data?: wildcards_OneOfAnyUntypedField,
  board?: wildcards_OneOfAnyUntypedField,
  comment?: wildcards_OneOfAnyUntypedField,
  comment_count?: wildcards_OneOfAnyUntypedField,
  content?: wildcards_OneOfAnyUntypedField,
  created_at?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  last_edited?: wildcards_OneOfAnyUntypedField,
  pin?: wildcards_OneOfAnyUntypedField,
  preview_pins?: wildcards_OneOfAnyUntypedField,
  reaction_by_me?: wildcards_OneOfAnyUntypedField,
  reaction_counts?: wildcards_OneOfAnyUntypedField,
  ref_board_activity?: wildcards_OneOfAnyUntypedField,
  section?: wildcards_OneOfAnyUntypedField,
  tagged_users?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  user?: wildcards_OneOfAnyUntypedField,
|};
export type BoardActivityDetailed = {|
  activity_type?: wildcards_OneOfAnyUntypedField,
  aggregate_pin_count?: wildcards_OneOfAnyUntypedField,
  board?: wildcards_OneOfAnyUntypedField,
  comment?: wildcards_OneOfAnyUntypedField,
  comment_count?: wildcards_OneOfAnyUntypedField,
  content?: wildcards_OneOfAnyUntypedField,
  created_at?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  last_edited?: wildcards_OneOfAnyUntypedField,
  pin?: wildcards_OneOfAnyUntypedField,
  preview_pins?: wildcards_OneOfAnyUntypedField,
  reaction_by_me?: wildcards_OneOfAnyUntypedField,
  reaction_counts?: wildcards_OneOfAnyUntypedField,
  ref_board_activity?: wildcards_OneOfAnyUntypedField,
  section?: wildcards_OneOfAnyUntypedField,
  tagged_users?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  user?: wildcards_OneOfAnyUntypedField,
|};
export type BoardActivitySummary = {|
  activity_type?: wildcards_OneOfAnyUntypedField,
  aggregate_pin_count?: wildcards_OneOfAnyUntypedField,
  board?: wildcards_OneOfAnyUntypedField,
  comment?: wildcards_OneOfAnyUntypedField,
  comment_count?: wildcards_OneOfAnyUntypedField,
  content?: wildcards_OneOfAnyUntypedField,
  created_at?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  last_edited?: wildcards_OneOfAnyUntypedField,
  pin?: wildcards_OneOfAnyUntypedField,
  preview_pins?: wildcards_OneOfAnyUntypedField,
  reaction_by_me?: wildcards_OneOfAnyUntypedField,
  reaction_counts?: wildcards_OneOfAnyUntypedField,
  ref_board_activity?: wildcards_OneOfAnyUntypedField,
  section?: wildcards_OneOfAnyUntypedField,
  tagged_users?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  user?: wildcards_OneOfAnyUntypedField,
|};
export type BoardCustom = {|
  access?: $ReadOnlyArray<Enum_Access>,
  allow_homefeed_recommendations?: boolean,
  annotations?: ?$ReadOnlyArray<string>,
  archived_by_me_at?: ?string,
  blocking_actions?: ?$ReadOnlyArray<
    BoardActionLockCustom | BoardActionLockDetailed | BoardActionLockSummary
  >,
  board_activity_count?: number,
  board_note_count?: ?number,
  board_order_modified_at?: ?string,
  board_owner_has_active_ads?: boolean,
  category?: ?Enum_BoardCategoriesEnum,
  collab_board_email?: boolean,
  collaborated_by_me?: boolean,
  collaborating_users?:
    | ?$ReadOnlyArray<UserCustom>
    | $ReadOnlyArray<UserDetailed>
    | $ReadOnlyArray<UserSummary>,
  collaborator_count?: number,
  collaborator_invite_counts?: SubModel_CollaboratorInviteCount,
  collaborator_invites_enabled?: boolean,
  collaborator_permissions?: $ReadOnlyArray<number>,
  collaborator_permissions_setting?: ?number,
  collaborator_requests_enabled?: boolean,
  conversation?: ?string,
  cover?: ?PinCustom | PinDetailed | PinSummary,
  cover_images?: ?{| [key: string]: SubModel_ImageDetails |},
  cover_pin?: ?CoverPinCustom | CoverPinDetailed | CoverPinSummary,
  created_at?: ?string,
  debug?: ?string,
  description?: ?string,
  eligible_pin_type_filters?: $ReadOnlyArray<
    PinTypeFilterCustom | PinTypeFilterDetailed | PinTypeFilterSummary
  >,
  event_date?: ?string,
  event_start_date?: ?string,
  followed_by_me?: boolean,
  follower_count?: number,
  has_active_ads?: ?boolean,
  has_custom_cover?: boolean,
  has_fresh_more_ideas_tab?: boolean,
  has_new_activity?: boolean,
  has_pending_invite?: boolean,
  id?: string,
  ideas_deep_link_url?: string,
  ideas_url?: string,
  image_cover_hd_url?: ?string,
  image_cover_url?: ?string,
  image_thumbnail_url?: string,
  image_thumbnail_urls?: ?{| [key: string]: SubModel_ImageDetails |},
  images?: ?{| [key: string]: SubModel_ImageDetails |},
  interests?:
    | ?$ReadOnlyArray<InterestCustom>
    | $ReadOnlyArray<InterestDetailed>
    | $ReadOnlyArray<InterestSummary>,
  is_collaborative?: boolean,
  is_eligible_for_homefeed_tabs?: ?boolean,
  is_eligible_for_seasonal_share_treatment?: ?boolean,
  layout?: Enum_BoardLayouts,
  map_id?: string,
  name?: string,
  owner?: ?UserCustom | UserDetailed | UserSummary,
  pin_count?: number,
  pin_thumbnail_urls?: $ReadOnlyArray<string>,
  pins?:
    | ?$ReadOnlyArray<PinCustom>
    | $ReadOnlyArray<PinDetailed>
    | $ReadOnlyArray<PinSummary>,
  pins_done_count?: wildcards_OneOfAnyUntypedField,
  place_recs_count?: ?number,
  place_saves_count?: ?number,
  places_enabled?: boolean,
  predicted_category?: ?Enum_BoardCategoriesEnum,
  privacy?: Enum_BoardPrivacy,
  promoter?: ?UserCustom | UserDetailed | UserSummary,
  protected?: boolean,
  recommendation_reason?: ?string,
  section_count?: ?number,
  sectionless_pin_count?: number,
  sensitivity?: ?string,
  should_show_board_activity?: boolean,
  should_show_more_ideas?: boolean,
  should_show_shop_feed?: boolean,
  subscribed_to_notifications?: boolean,
  topic?: ?string,
  type?: string,
  url?: string,
  viewer_collaborator_join_requested?: boolean,
  viewer_contact_request?: ?{|
    [key: string]:
      | ContactRequestCustom
      | ContactRequestDetailed
      | ContactRequestSummary,
  |},
  viewer_invitation?: ?{|
    [key: string]:
      | CollaboratorInviteCustom
      | CollaboratorInviteDetailed
      | CollaboratorInviteSummary,
  |},
|};
export type BoardDetailed = {|
  access?: $ReadOnlyArray<Enum_Access>,
  allow_homefeed_recommendations?: boolean,
  board_activity_count?: number,
  board_note_count?: ?number,
  board_order_modified_at: ?string,
  category: ?Enum_BoardCategoriesEnum,
  collab_board_email?: boolean,
  collaborated_by_me?: boolean,
  collaborating_users:
    | ?$ReadOnlyArray<UserCustom>
    | $ReadOnlyArray<UserDetailed>
    | $ReadOnlyArray<UserSummary>,
  collaborator_count?: number,
  collaborator_invites_enabled: boolean,
  collaborator_permissions?: $ReadOnlyArray<number>,
  collaborator_permissions_setting?: ?number,
  collaborator_requests_enabled: boolean,
  conversation?: ?string,
  cover: ?PinCustom | PinDetailed | PinSummary,
  created_at?: ?string,
  debug?: ?string,
  description: ?string,
  event_date: ?string,
  event_start_date: ?string,
  followed_by_me?: boolean,
  follower_count?: number,
  has_pending_invite?: boolean,
  id?: string,
  ideas_url?: string,
  image_cover_hd_url?: ?string,
  image_cover_url?: ?string,
  image_thumbnail_url?: string,
  image_thumbnail_urls?: ?{| [key: string]: SubModel_ImageDetails |},
  images?: ?{| [key: string]: SubModel_ImageDetails |},
  interests:
    | ?$ReadOnlyArray<InterestCustom>
    | $ReadOnlyArray<InterestDetailed>
    | $ReadOnlyArray<InterestSummary>,
  is_collaborative?: boolean,
  is_eligible_for_seasonal_share_treatment?: ?boolean,
  layout?: Enum_BoardLayouts,
  map_id?: string,
  name: string,
  owner: ?UserCustom | UserDetailed | UserSummary,
  pin_count?: number,
  pin_thumbnail_urls?: $ReadOnlyArray<string>,
  pins:
    | ?$ReadOnlyArray<PinCustom>
    | $ReadOnlyArray<PinDetailed>
    | $ReadOnlyArray<PinSummary>,
  predicted_category?: ?Enum_BoardCategoriesEnum,
  privacy?: Enum_BoardPrivacy,
  promoter: ?UserCustom | UserDetailed | UserSummary,
  recommendation_reason?: ?string,
  sensitivity?: ?string,
  should_show_board_activity?: boolean,
  should_show_shop_feed?: boolean,
  topic?: ?string,
  type?: string,
  url?: string,
  viewer_collaborator_join_requested?: boolean,
  viewer_invitation?: ?{|
    [key: string]:
      | CollaboratorInviteCustom
      | CollaboratorInviteDetailed
      | CollaboratorInviteSummary,
  |},
|};
export type BoardSectionCustom = {|
  board?: wildcards_OneOfAnyUntypedField,
  eligible_pin_type_filters?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  pin_count?: wildcards_OneOfAnyUntypedField,
  preview_pins?: wildcards_OneOfAnyUntypedField,
  slug?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  user?: wildcards_OneOfAnyUntypedField,
|};
export type BoardSectionDetailed = {|
  board?: wildcards_OneOfAnyUntypedField,
  eligible_pin_type_filters?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  pin_count?: wildcards_OneOfAnyUntypedField,
  preview_pins?: wildcards_OneOfAnyUntypedField,
  slug?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  user?: wildcards_OneOfAnyUntypedField,
|};
export type BoardSectionSummary = {|
  board?: wildcards_OneOfAnyUntypedField,
  eligible_pin_type_filters?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  pin_count?: wildcards_OneOfAnyUntypedField,
  preview_pins?: wildcards_OneOfAnyUntypedField,
  slug?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  user?: wildcards_OneOfAnyUntypedField,
|};
export type BoardSummary = {|
  board_order_modified_at: ?string,
  category: ?Enum_BoardCategoriesEnum,
  collaborated_by_me?: boolean,
  created_at?: ?string,
  followed_by_me?: boolean,
  id?: string,
  image_thumbnail_url?: string,
  is_collaborative?: boolean,
  layout?: Enum_BoardLayouts,
  name: string,
  type?: string,
  url?: string,
|};
export type BoundsCustom = {|
  ne?: {|
    [key: string]: CoordinateCustom | CoordinateDetailed | CoordinateSummary,
  |},
  sw?: {|
    [key: string]: CoordinateCustom | CoordinateDetailed | CoordinateSummary,
  |},
  type?: string,
|};
export type BoundsDetailed = {|
  ne: {|
    [key: string]: CoordinateCustom | CoordinateDetailed | CoordinateSummary,
  |},
  sw: {|
    [key: string]: CoordinateCustom | CoordinateDetailed | CoordinateSummary,
  |},
  type?: string,
|};
export type BoundsSummary = {|
  ne: {|
    [key: string]: CoordinateCustom | CoordinateDetailed | CoordinateSummary,
  |},
  sw: {|
    [key: string]: CoordinateCustom | CoordinateDetailed | CoordinateSummary,
  |},
  type?: string,
|};
export type BuyableProductMiniMetadataCustom = {|
  id?: wildcards_UntypedSniffedString,
  is_available?: wildcards_UntypedSniffedBool,
  link?: wildcards_OneOfAnyUntypedField,
  merchant_id?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type BuyableProductMiniMetadataDetailed = {|
  id?: wildcards_UntypedSniffedString,
  is_available?: wildcards_UntypedSniffedBool,
  link?: wildcards_OneOfAnyUntypedField,
  merchant_id?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type BuyableProductMiniMetadataSummary = {|
  id?: wildcards_UntypedSniffedString,
  is_available?: wildcards_UntypedSniffedBool,
  link?: wildcards_OneOfAnyUntypedField,
  merchant_id?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type ClicksAnalyticsModelCustom = {|
  clicks?: number,
  id?: string,
  pin?: ?PinCustom | PinDetailed | PinSummary,
  type?: string,
|};
export type ClicksAnalyticsModelDetailed = {|
  clicks: number,
  id?: string,
  pin: ?PinCustom | PinDetailed | PinSummary,
  type?: string,
|};
export type ClicksAnalyticsModelSummary = {|
  clicks: number,
  id?: string,
  pin: ?PinCustom | PinDetailed | PinSummary,
  type?: string,
|};
export type CollaboratorInviteCustom = {|
  access?: wildcards_OneOfAnyUntypedField,
  board?: wildcards_OneOfAnyUntypedField,
  created_at?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  invited_by_user?: wildcards_OneOfAnyUntypedField,
  invited_user?: wildcards_OneOfAnyUntypedField,
  is_acceptable?: wildcards_UntypedSniffedBool,
  message?: wildcards_OneOfAnyUntypedField,
  read_at?: wildcards_OneOfAnyUntypedField,
  status?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CollaboratorInviteDetailed = {|
  access?: wildcards_OneOfAnyUntypedField,
  board?: wildcards_OneOfAnyUntypedField,
  created_at?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  invited_by_user?: wildcards_OneOfAnyUntypedField,
  invited_user?: wildcards_OneOfAnyUntypedField,
  is_acceptable?: wildcards_UntypedSniffedBool,
  message?: wildcards_OneOfAnyUntypedField,
  read_at?: wildcards_OneOfAnyUntypedField,
  status?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CollaboratorInviteSummary = {|
  board?: wildcards_OneOfAnyUntypedField,
  created_at?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  invited_by_user?: wildcards_OneOfAnyUntypedField,
  invited_user?: wildcards_OneOfAnyUntypedField,
  is_acceptable?: wildcards_UntypedSniffedBool,
  message?: wildcards_OneOfAnyUntypedField,
  status?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CollagePinCustom = {|
  id?: wildcards_UntypedSniffedString,
  image_signature?: wildcards_OneOfAnyUntypedField,
  images?: wildcards_OneOfAnyUntypedField,
  layout_id?: wildcards_OneOfAnyUntypedField,
  link?: wildcards_OneOfAnyUntypedField,
  slot_data?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CollagePinDetailed = {|
  id?: wildcards_UntypedSniffedString,
  image_signature?: wildcards_OneOfAnyUntypedField,
  images?: wildcards_OneOfAnyUntypedField,
  layout_id?: wildcards_OneOfAnyUntypedField,
  link?: wildcards_OneOfAnyUntypedField,
  slot_data?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CollagePinSummary = {|
  id?: wildcards_UntypedSniffedString,
  image_signature?: wildcards_OneOfAnyUntypedField,
  layout_id?: wildcards_OneOfAnyUntypedField,
  slot_data?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CollectionPinCustom = {|
  active?: wildcards_OneOfAnyUntypedField,
  display_type?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  item_data?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CollectionPinDetailed = {|
  active?: wildcards_OneOfAnyUntypedField,
  display_type?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  item_data?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CollectionPinSummary = {|
  active?: wildcards_OneOfAnyUntypedField,
  display_type?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  item_data?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CommentCustom = {|
  commenter?: wildcards_OneOfAnyUntypedField,
  created_at?: wildcards_OneOfAnyUntypedField,
  deletable_by_me?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  text?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CommentDetailed = {|
  commenter?: wildcards_OneOfAnyUntypedField,
  created_at?: wildcards_OneOfAnyUntypedField,
  deletable_by_me?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  text?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CommentSummary = {|
  commenter?: wildcards_OneOfAnyUntypedField,
  created_at?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  text?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type ContactRequestCustom = {|
  board?: wildcards_OneOfAnyUntypedField,
  conversation?: wildcards_OneOfAnyUntypedField,
  created_at?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  read?: wildcards_OneOfAnyUntypedField,
  recipient?: wildcards_OneOfAnyUntypedField,
  sender?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type ContactRequestDetailed = {|
  board?: wildcards_OneOfAnyUntypedField,
  conversation?: wildcards_OneOfAnyUntypedField,
  created_at?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  read?: wildcards_OneOfAnyUntypedField,
  recipient?: wildcards_OneOfAnyUntypedField,
  sender?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type ContactRequestSummary = {|
  board?: wildcards_OneOfAnyUntypedField,
  conversation?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  recipient?: wildcards_OneOfAnyUntypedField,
  sender?: wildcards_OneOfAnyUntypedField,
|};
export type CoordinateCustom = {|
  latitude?: number,
  longitude?: number,
  type?: string,
|};
export type CoordinateDetailed = {|
  latitude: number,
  longitude: number,
  type?: string,
|};
export type CoordinateSummary = {|
  latitude: number,
  longitude: number,
  type?: string,
|};
export type CoverPinCustom = {|
  background_color?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  image_large_url?: wildcards_OneOfAnyUntypedField,
  image_medium_url?: wildcards_OneOfAnyUntypedField,
  image_signature?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CoverPinDetailed = {|
  background_color?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  image_large_url?: wildcards_OneOfAnyUntypedField,
  image_medium_url?: wildcards_OneOfAnyUntypedField,
  image_signature?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CoverPinSummary = {|
  id?: wildcards_UntypedSniffedString,
  image_signature?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type CreatorClassCustom = {|
  board?: ?BoardCustom | BoardDetailed | BoardSummary,
  canonical_pin?: ?PinCustom | PinDetailed | PinSummary,
  carousel_images?: ?{| [key: string]: wildcards_OneOfAny |},
  class_type?: number,
  creator?: ?UserCustom | UserDetailed | UserSummary,
  description?: string,
  details?: string,
  duration_minutes?: number,
  hero_images?: ?{| [key: string]: wildcards_OneOfAny |},
  hero_video?: ?VideoCustom | VideoDetailed | VideoSummary,
  id?: string,
  language?: string,
  location?: string,
  max_class_size?: number,
  price_usd?: number,
  product_story?: ?SubModel_MinimalModel,
  subjects?:
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<string>
    | $ReadOnlyArray<{| [key: string]: mixed |}>
    | $ReadOnlyArray<boolean>
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<$ReadOnlyArray<mixed>>,
  supply_basics?: ?SubModel_MinimalModel,
  taken_users?:
    | ?$ReadOnlyArray<UserCustom>
    | $ReadOnlyArray<UserDetailed>
    | $ReadOnlyArray<UserSummary>,
  title?: string,
  type?: string,
  users_taken_count?: number,
  viewing_user_latest_booking?: ?SubModel_MinimalModel,
|};
export type CreatorClassDetailed = {|
  board: ?BoardCustom | BoardDetailed | BoardSummary,
  canonical_pin: ?PinCustom | PinDetailed | PinSummary,
  carousel_images?: ?{| [key: string]: wildcards_OneOfAny |},
  class_type: number,
  creator: ?UserCustom | UserDetailed | UserSummary,
  description: string,
  details: string,
  duration_minutes: number,
  hero_images?: ?{| [key: string]: wildcards_OneOfAny |},
  hero_video: ?VideoCustom | VideoDetailed | VideoSummary,
  id?: string,
  language: string,
  location: string,
  max_class_size: number,
  price_usd: number,
  product_story?: ?SubModel_MinimalModel,
  subjects:
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<string>
    | $ReadOnlyArray<{| [key: string]: mixed |}>
    | $ReadOnlyArray<boolean>
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<$ReadOnlyArray<mixed>>,
  supply_basics: ?SubModel_MinimalModel,
  taken_users:
    | ?$ReadOnlyArray<UserCustom>
    | $ReadOnlyArray<UserDetailed>
    | $ReadOnlyArray<UserSummary>,
  title: string,
  type?: string,
  users_taken_count: number,
  viewing_user_latest_booking?: ?SubModel_MinimalModel,
|};
export type CreatorClassSummary = {|
  canonical_pin: ?PinCustom | PinDetailed | PinSummary,
  class_type: number,
  description: string,
  details: string,
  duration_minutes: number,
  id?: string,
  language: string,
  location: string,
  max_class_size: number,
  price_usd: number,
  subjects:
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<string>
    | $ReadOnlyArray<{| [key: string]: mixed |}>
    | $ReadOnlyArray<boolean>
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<$ReadOnlyArray<mixed>>,
  title: string,
  type?: string,
  users_taken_count: number,
|};
export type DomainCustom = {|
  access?: wildcards_OneOfAnyUntypedField,
  client_details?: wildcards_OneOfAnyUntypedField,
  favicon?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  name?: wildcards_OneOfAnyUntypedField,
  official_user?: wildcards_OneOfAnyUntypedField,
  thumbnails?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type DomainDetailed = {|
  access?: wildcards_OneOfAnyUntypedField,
  client_details?: wildcards_OneOfAnyUntypedField,
  favicon?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  name?: wildcards_OneOfAnyUntypedField,
  thumbnails?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type DomainSummary = {|
  access?: wildcards_OneOfAnyUntypedField,
  client_details?: wildcards_OneOfAnyUntypedField,
  favicon?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  name?: wildcards_OneOfAnyUntypedField,
  thumbnails?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type Enum_Access = "delete" | "tag" | "write";
export type Enum_AccountType =
  | "blogger"
  | "brand"
  | "consumer_good_product_or_service"
  | "contractor_or_service_provider"
  | "default_null"
  | "influencer_public_figure_or_celebrity"
  | "institution_or_non_prof"
  | "local_business"
  | "local_retail_store"
  | "local_service"
  | "media"
  | "not_sure"
  | "online_marketplace"
  | "online_retail_or_marketplace"
  | "other"
  | "professional"
  | "public_figure"
  | "publisher_or_media"
  | "retailer";
export type Enum_ActionType =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75
  | 76
  | 77
  | 78
  | 79
  | 80
  | 81
  | 82
  | 83
  | 84
  | 85
  | 86
  | 87
  | 88
  | 89
  | 90
  | 91
  | 92
  | 93
  | 94
  | 95
  | 96
  | 97
  | 98
  | 100
  | 101
  | 102
  | 103
  | 104
  | 105
  | 106
  | 110
  | 111
  | 112
  | 113
  | 114
  | 115
  | 116
  | 117
  | 118
  | 119
  | 120
  | 121
  | 122
  | 123
  | 124
  | 125
  | 126
  | 127
  | 128
  | 129
  | 130
  | 131
  | 132
  | 133
  | 134
  | 135
  | 136
  | 137
  | 138
  | 139
  | 140
  | 141
  | 142
  | 143
  | 144
  | 145
  | 146
  | 147
  | 148
  | 149
  | 150
  | 151
  | 152
  | 153
  | 154
  | 155
  | 156
  | 157
  | 158
  | 159
  | 160
  | 161
  | 162
  | 163;
export type Enum_AppType =
  | "ANDROID_LITE"
  | "ANDROID_MOBILE"
  | "ANDROID_TABLET"
  | "BROWSER_EXTENSION"
  | "IPAD"
  | "IPHONE"
  | "SHOPIFY"
  | "WEB"
  | "WEB_DENZEL"
  | "WEB_MOBILE"
  | "WINDOWS_DESKTOP";
export type Enum_BoardCategoriesEnum =
  | "animals"
  | "architecture"
  | "art"
  | "cars_motorcycles"
  | "celebrities"
  | "design"
  | "diy_crafts"
  | "education"
  | "film_music_books"
  | "food_drink"
  | "gardening"
  | "geek"
  | "hair_beauty"
  | "health_fitness"
  | "history"
  | "holidays_events"
  | "home_decor"
  | "humor"
  | "illustrations_posters"
  | "kids"
  | "mens_fashion"
  | "other"
  | "outdoors"
  | "photography"
  | "products"
  | "quotes"
  | "science_nature"
  | "sports"
  | "tattoos"
  | "technology"
  | "travel"
  | "weddings"
  | "womens_fashion";
export type Enum_BoardLayouts =
  | "class_community"
  | "default"
  | "places"
  | "quick_saves"
  | "screenshot"
  | "taught_classes"
  | "travel";
export type Enum_BoardPrivacy = "protected" | "public" | "secret";
export type Enum_BusinessGoals =
  | "BRAND_AWARENESS"
  | "CREATE_CONTENT"
  | "DRIVE_TRAFFIC"
  | "GENERATE_LEADS"
  | "NOT_SURE"
  | "SELL_PRODUCTS";
export type Enum_ClickThroughAction = 0 | 1;
export type Enum_CommunityRole =
  | "ADMIN"
  | "BANNED"
  | "GUEST"
  | "MEMBER"
  | "MODERATOR"
  | "SUPER_MODERATOR";
export type Enum_CreativeType =
  | "APP"
  | "APP_VIDEO"
  | "BOARD"
  | "CAROUSEL"
  | "CINEMATIC"
  | "COMMERCE"
  | "MAX_VIDEO"
  | "NATIVE_VIDEO"
  | "REGULAR"
  | "SEARCH_PROMINENCE"
  | "SEARCH_PROMINENCE_CAROUSEL"
  | "SHOPPING"
  | "SHOP_THE_PIN"
  | "STORY"
  | "THIRD_PARTY"
  | "VIDEO";
export type Enum_CreativeTypes =
  | "app"
  | "cinematic"
  | "max_video"
  | "regular"
  | "video";
export type Enum_DestinationUrlType = 0 | 1 | 2 | 3 | 4;
export type Enum_ECommercePlatforms =
  | "ETSY"
  | "MAGENTO"
  | "OPEN_CART"
  | "PRESTA_SHOP"
  | "SHOPIFY"
  | "SQUARESPACE_COMMERCE"
  | "WIX_STORES"
  | "WOO_COMMERCE"
  | "ZEN_CART";
export type Enum_EnumType =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 85
  | 92
  | 109
  | 110
  | 111
  | 116
  | 117
  | 118
  | 120
  | 124
  | 125
  | 126
  | 127
  | 128
  | 129
  | 130
  | 136
  | 200
  | 207
  | 208
  | 209
  | 212
  | 226
  | 247
  | 250
  | 258
  | 400
  | 401
  | 3051
  | 3052
  | 3053
  | 3054
  | 3057
  | 3060
  | 3061
  | 3063
  | 3085
  | 3105
  | 3108
  | 3166
  | 3177
  | 3221
  | 3236
  | 3243
  | 3244
  | 3254
  | 3273
  | 3277
  | 3278
  | 3281
  | 3282
  | 3283
  | 3308
  | 3338
  | 3339
  | 3340
  | 3341
  | 3342
  | 3343
  | 3347
  | 3348
  | 3349
  | 3369
  | 3374
  | 3380
  | 3381
  | 3382
  | 3415
  | 3450
  | 3468
  | 3474
  | 3481
  | 3482
  | 3511
  | 3512
  | 3513
  | 3514
  | 3515
  | 3518
  | 3531
  | 3532
  | 3533
  | 3539
  | 3550
  | 3551
  | 3552;
export type Enum_GenderEnum = "Female" | "Male" | "Unspecified";
export type Enum_HomefeedBrowsingLevel =
  | "BROWSER_28D"
  | "BROWSER_7D"
  | "DEEP_BROWSER_28D"
  | "DEEP_BROWSER_7D"
  | "FREQ_DEEP_BROWSER_28D"
  | "FREQ_DEEP_BROWSER_7D"
  | "LANDER_28D"
  | "LANDER_7D"
  | "OTHER";
export type Enum_InsertionStrategy =
  | "insert_at_the_end"
  | "insert_in_place"
  | "none";
export type Enum_InterestImageSource = "c" | "g" | "p";
export type Enum_InterestRecommendSource =
  | "annotation"
  | "cm"
  | "default"
  | "fb"
  | "nux"
  | "related"
  | "search"
  | "trending";
export type Enum_InterestSizeType = 1 | 2;
export type Enum_LoginState = 1 | 2;
export type Enum_MatchReason = 0 | 1 | 2 | 3;
export type Enum_NoPromotableReason =
  | "App install pins may not be promoted."
  | "GIF pins may not be promoted."
  | "Pin does not have a click-through link."
  | "Pins from secret boards may not be promoted."
  | "Repins of promoted pins may not be promoted."
  | "Video pins may not be promoted.";
export type Enum_PinMethods =
  | "ads_bulk_editor"
  | "adtech"
  | "android"
  | "android_tablet"
  | "api_bulk_upload"
  | "api_bulk_video_upload"
  | "api_other"
  | "api_sdk"
  | "bad"
  | "bookmarklet"
  | "button"
  | "button_external"
  | "camera"
  | "catalog_bulk_create"
  | "clipboard"
  | "creative_editor"
  | "csr"
  | "csv_importer"
  | "dev_api"
  | "directpartner"
  | "drop"
  | "email"
  | "extension"
  | "feed_crawler"
  | "in_app_browser"
  | "instagram_api"
  | "ipad"
  | "iphone"
  | "lens_camera"
  | "make_bulk_upload"
  | "make_view"
  | "martech"
  | "photos"
  | "pin_scheduling"
  | "place"
  | "scraped"
  | "share_extension_android"
  | "share_extension_ios"
  | "unknown"
  | "uploaded"
  | "virtual_try_on_camera";
export type Enum_PinQualityState = 0 | 1 | 2 | 3 | 4;
export type Enum_Privacy = "public" | "secret";
export type Enum_ReactionTypeEnum =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13;
export type Enum_RecommendationComplaintReason =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18;
export type Enum_RelatedModule =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 100;
export type Enum_SourceName = "1" | "2";
export type Enum_ThirdPartyApps = "SHOPIFY";
export type Enum_TopInterest =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23;
export type Enum_UserBoardFeedSortTypes =
  | "alphabetical"
  | "custom"
  | "group_boards_at_top"
  | "last_pinned_to"
  | "newest"
  | "oldest";
export type Enum_VideoStatus = 1 | 2 | 3 | 4 | 5 | 6;
export type Enum_VirtualTryOnPinType = 0 | 1 | 2 | 3 | 4;
export type FeedbackOptionsCustom = {|
  description?: wildcards_OneOfAnyUntypedField,
  options?: wildcards_OneOfAnyUntypedField,
|};
export type FeedbackOptionsDetailed = {|
  description?: wildcards_OneOfAnyUntypedField,
  options?: wildcards_OneOfAnyUntypedField,
|};
export type FeedbackOptionsSummary = {|
  description?: wildcards_OneOfAnyUntypedField,
  options?: wildcards_OneOfAnyUntypedField,
|};
export type FlexGridStyleCustom = {|
  aspect_ratio?: wildcards_OneOfAnyUntypedField,
  column_width?: wildcards_OneOfAnyUntypedField,
  layout?: wildcards_OneOfAnyUntypedField,
|};
export type FlexGridStyleDetailed = {|
  aspect_ratio?: wildcards_OneOfAnyUntypedField,
  column_width?: wildcards_OneOfAnyUntypedField,
  layout?: wildcards_OneOfAnyUntypedField,
|};
export type FlexGridStyleSummary = {|
  aspect_ratio?: wildcards_OneOfAnyUntypedField,
  column_width?: wildcards_OneOfAnyUntypedField,
  layout?: wildcards_OneOfAnyUntypedField,
|};
export type GalleryItemCustom = {|
  canonical_images?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  image_signature?: wildcards_OneOfAnyUntypedField,
  media_type?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type GalleryItemDetailed = {|
  canonical_images?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  image_signature?: wildcards_OneOfAnyUntypedField,
  media_type?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type GalleryItemSummary = {|
  canonical_images?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  image_signature?: wildcards_OneOfAnyUntypedField,
  media_type?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type HoursTextCustom = {|
  id?: string,
  is_today?: boolean,
  text?: string,
  type?: string,
|};
export type HoursTextDetailed = {|
  id?: string,
  is_today: boolean,
  text: string,
  type?: string,
|};
export type HoursTextSummary = {|
  id?: string,
  is_today: boolean,
  text: string,
  type?: string,
|};
export type InterestCustom = {|
  article_feed_description?: string,
  article_feed_title?: string,
  background_color?: string,
  best_board?: ?SubModel_BestBoard,
  best_boards?:
    | ?$ReadOnlyArray<BoardCustom>
    | $ReadOnlyArray<BoardDetailed>
    | $ReadOnlyArray<BoardSummary>,
  best_pins_images?: $ReadOnlyArray<string>,
  breadcrumbs?: ?$ReadOnlyArray<SubModel_Breadcrumbs>,
  brio_background_color?: string,
  canonical_term?: ?SubModel_CanonicalTerm,
  canonical_url?: ?string,
  category?: ?string,
  category_title?: string,
  contextual_insertion_strategy?: Enum_InsertionStrategy,
  contextual_interests?: ?$ReadOnlyArray<
    InterestCustom | InterestDetailed | InterestSummary
  >,
  creation_time?: number,
  curated_description?: ?string,
  curated_on_page_title?: ?string,
  curated_rows?: ?SubModel_SeasonalModules,
  curated_title?: ?string,
  cycling_images?: ?$ReadOnlyArray<{| [key: string]: SubModel_Thumbnails |}>,
  description?: ?string,
  enum_type?: Enum_EnumType,
  explore_section?: ?string,
  feed_update_time?: string,
  feed_view_time?: string,
  flow_stats?: number,
  follower_count?: number,
  gender_signal?: ?Enum_GenderEnum,
  has_related?: boolean,
  id?: string,
  image_signature?: string,
  image_size?: Enum_InterestSizeType,
  image_source?: Enum_InterestImageSource,
  images?: ?{| [key: string]: SubModel_ImageDetails |},
  interest_stats?: ?SubModel_SeoTopicsPageStats,
  is_followed?: boolean,
  is_ideas_hub?: ?boolean,
  is_interest?: boolean,
  is_klp_term?: boolean,
  is_new?: boolean,
  is_recommended?: boolean,
  is_taxonomy_topic?: boolean,
  key?: string,
  klp_category?: ?SubModel_CategoryMap,
  klp_has_related?: boolean,
  log_data?: ?string,
  name?: string,
  p2p_pins_story?: ?SubModel_Story,
  pin_count_by_user?: number,
  pinner_count?: number | boolean,
  recommendation_pins?: $ReadOnlyArray<string>,
  recommendation_source?: Enum_InterestRecommendSource,
  seo_breadcrumbs?: ?$ReadOnlyArray<SubModel_SeoBreadcrumbs>,
  seo_related_interests?: ?$ReadOnlyArray<SubModel_SeoBreadcrumbs>,
  topic_breadcrumbs?: $ReadOnlyArray<SubModel_Breadcrumbs>,
  translation_urls?: {| [key: string]: string |},
  trending_searches?: ?$ReadOnlyArray<string>,
  type?: string,
  url_name?: string,
|};
export type InterestDetailed = {|
  article_feed_description?: string,
  article_feed_title?: string,
  background_color?: string,
  best_board?: ?SubModel_BestBoard,
  best_boards:
    | ?$ReadOnlyArray<BoardCustom>
    | $ReadOnlyArray<BoardDetailed>
    | $ReadOnlyArray<BoardSummary>,
  best_pins_images?: $ReadOnlyArray<string>,
  breadcrumbs?: ?$ReadOnlyArray<SubModel_Breadcrumbs>,
  canonical_term?: ?SubModel_CanonicalTerm,
  canonical_url?: ?string,
  category_title?: string,
  contextual_insertion_strategy?: Enum_InsertionStrategy,
  contextual_interests?: ?$ReadOnlyArray<
    InterestCustom | InterestDetailed | InterestSummary
  >,
  creation_time: number,
  curated_description?: ?string,
  curated_on_page_title?: ?string,
  curated_title?: ?string,
  cycling_images?: ?$ReadOnlyArray<{| [key: string]: SubModel_Thumbnails |}>,
  description?: ?string,
  enum_type?: Enum_EnumType,
  feed_update_time?: string,
  feed_view_time?: string,
  follower_count?: number,
  has_related?: boolean,
  id?: string,
  image_signature?: string,
  image_size?: Enum_InterestSizeType,
  image_source?: Enum_InterestImageSource,
  images?: ?{| [key: string]: SubModel_ImageDetails |},
  interest_stats?: ?SubModel_SeoTopicsPageStats,
  is_followed?: boolean,
  is_interest: boolean,
  is_klp_term: boolean,
  is_new: boolean,
  is_recommended?: boolean,
  is_taxonomy_topic?: boolean,
  key: string,
  klp_category?: ?SubModel_CategoryMap,
  klp_has_related?: boolean,
  log_data?: ?string,
  name?: string,
  pin_count_by_user: number,
  pinner_count?: number | boolean,
  recommendation_source?: Enum_InterestRecommendSource,
  topic_breadcrumbs?: $ReadOnlyArray<SubModel_Breadcrumbs>,
  translation_urls?: {| [key: string]: string |},
  type?: string,
  url_name: string,
|};
export type InterestSummary = {|
  background_color?: string,
  creation_time: number,
  enum_type?: Enum_EnumType,
  has_related?: boolean,
  id?: string,
  image_signature?: string,
  image_size?: Enum_InterestSizeType,
  image_source?: Enum_InterestImageSource,
  is_followed?: boolean,
  is_new: boolean,
  key: string,
  name?: string,
  type?: string,
  url_name: string,
|};
export type Origin = string;
export type PartnerCustom = {|
  account_type?: Enum_AccountType,
  advertising_intent?: ?number,
  auto_follow_allowed?: boolean,
  biz_ownership_email?: ?string,
  biz_ownership_status?: ?string,
  business_goals?: $ReadOnlyArray<Enum_BusinessGoals>,
  business_name?: string,
  contact_email?: ?string,
  contact_name?: string,
  contact_phone?: string,
  contact_phone_country?: SubModel_PhoneCountryCode,
  created_at?: string,
  enable_profile_address?: boolean,
  enable_profile_message?: boolean,
  id?: string,
  is_business_agency?: ?boolean,
  is_convert?: ?boolean,
  is_create?: boolean,
  is_linked_business?: boolean,
  is_shopify_installed?: boolean,
  profile_place?: ?PlaceCustom | PlaceDetailed | PlaceSummary,
  profile_place_id?: number,
  selected_ecommerce_platforms?: $ReadOnlyArray<Enum_ECommercePlatforms>,
  third_party_apps?: ?$ReadOnlyArray<Enum_ThirdPartyApps>,
  type?: string,
|};
export type PartnerDetailed = {|
  account_type: Enum_AccountType,
  advertising_intent?: ?number,
  auto_follow_allowed: boolean,
  biz_ownership_email?: ?string,
  biz_ownership_status?: ?string,
  business_goals: $ReadOnlyArray<Enum_BusinessGoals>,
  business_name: string,
  contact_email: ?string,
  contact_name: string,
  contact_phone: string,
  contact_phone_country?: SubModel_PhoneCountryCode,
  created_at: string,
  enable_profile_address: boolean,
  enable_profile_message: boolean,
  id?: string,
  is_business_agency: ?boolean,
  is_convert?: ?boolean,
  is_create: boolean,
  is_linked_business: boolean,
  is_shopify_installed?: boolean,
  profile_place: ?PlaceCustom | PlaceDetailed | PlaceSummary,
  profile_place_id: number,
  selected_ecommerce_platforms: $ReadOnlyArray<Enum_ECommercePlatforms>,
  third_party_apps: ?$ReadOnlyArray<Enum_ThirdPartyApps>,
  type?: string,
|};
export type PartnerSummary = {|
  account_type: Enum_AccountType,
  advertising_intent?: ?number,
  auto_follow_allowed: boolean,
  business_goals: $ReadOnlyArray<Enum_BusinessGoals>,
  business_name: string,
  contact_name: string,
  created_at: string,
  enable_profile_address: boolean,
  enable_profile_message: boolean,
  id?: string,
  is_business_agency: ?boolean,
  is_convert?: ?boolean,
  is_create: boolean,
  is_linked_business: boolean,
  selected_ecommerce_platforms: $ReadOnlyArray<Enum_ECommercePlatforms>,
  third_party_apps: ?$ReadOnlyArray<Enum_ThirdPartyApps>,
  type?: string,
|};
export type PerPinAnalyticsCustom = {|
  clickthrough?: number,
  closeup?: number,
  id?: string,
  impression?: number,
  metrics_start?: string,
  repin?: number,
  total_engagement?: number,
  type?: string,
|};
export type PerPinAnalyticsDetailed = {|
  clickthrough: number,
  closeup: number,
  id?: string,
  impression: number,
  metrics_start: string,
  repin: number,
  total_engagement: number,
  type?: string,
|};
export type PerPinAnalyticsSummary = {|
  clickthrough: number,
  closeup: number,
  id?: string,
  impression: number,
  metrics_start: string,
  repin: number,
  total_engagement: number,
  type?: string,
|};
export type PinCarouselDataCustom = {|
  carousel_slots?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  index?: wildcards_OneOfAnyUntypedField,
  rich_metadata?: wildcards_OneOfAnyUntypedField,
  rich_summary?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type PinCarouselDataDetailed = {|
  carousel_slots?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  index?: wildcards_OneOfAnyUntypedField,
  rich_metadata?: wildcards_OneOfAnyUntypedField,
  rich_summary?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type PinCarouselDataSummary = {|
  carousel_slots?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  index?: wildcards_OneOfAnyUntypedField,
  rich_metadata?: wildcards_OneOfAnyUntypedField,
  rich_summary?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type PinCustom = {|
  access?: $ReadOnlyArray<Enum_Access>,
  activity?: ?Enum_ActionType,
  activity_timestamp?: ?number,
  ad_closeup_behaviors?: wildcards_OneOfAnyUntypedField,
  ad_creative_type?: Enum_CreativeType,
  ad_destination_url?: ?string,
  ad_match_reason?: ?Enum_MatchReason,
  ad_targeting_attribution?: SubModel_AdTargetingAttribution,
  additional_hide_reasons?: $ReadOnlyArray<Enum_RecommendationComplaintReason>,
  aggregated_pin_data?:
    | ?AggregatedPinDataCustom
    | AggregatedPinDataDetailed
    | AggregatedPinDataSummary,
  alt_text?: ?string,
  analytics?:
    | ClicksAnalyticsModelCustom
    | ClicksAnalyticsModelDetailed
    | ClicksAnalyticsModelSummary
    | RepinsAnalyticsModelCustom
    | RepinsAnalyticsModelDetailed
    | RepinsAnalyticsModelSummary,
  app_domain?:
    | ?$ReadOnlyArray<DomainCustom>
    | $ReadOnlyArray<DomainDetailed>
    | $ReadOnlyArray<DomainSummary>,
  attribution?: ?SubModel_Attribution,
  auto_alt_text?: ?string,
  board?: ?BoardCustom | BoardDetailed | BoardSummary,
  board_activity?:
    | ?BoardActivityCustom
    | BoardActivityDetailed
    | BoardActivitySummary,
  buyable_product?: ?string,
  buyable_product_availability?:
    | ?BuyableProductMiniMetadataCustom
    | BuyableProductMiniMetadataDetailed
    | BuyableProductMiniMetadataSummary,
  cacheable_id?: string,
  can_delete_did_it_and_comments?: boolean,
  canonical_merchant_domain?: ?string,
  canonical_merchant_name?: ?string,
  canonical_pin?: ?string,
  carousel_data?:
    | ?PinCarouselDataCustom
    | PinCarouselDataDetailed
    | PinCarouselDataSummary,
  category?: ?Enum_BoardCategoriesEnum,
  category_p2i?: ?number,
  cinematic_data?: SubModel_CinematicData,
  click_through_action?: Enum_ClickThroughAction,
  click_through_link_quality?: ?SubModel_ClickThroughLinkQuality,
  client_id?: ?string,
  closeup_attribution?: ?UserCustom | UserDetailed | UserSummary,
  closeup_description?: ?string,
  closeup_unified_description?: ?string,
  closeup_unified_title?: ?string,
  closeup_user_note?: ?string,
  collage_pin?: ?CollagePinCustom | CollagePinDetailed | CollagePinSummary,
  collage_pin_id?: ?string,
  collection_data_id?: ?string,
  collection_pin?:
    | ?CollectionPinCustom
    | CollectionPinDetailed
    | CollectionPinSummary,
  comment_count?: number,
  comments?:
    | ?$ReadOnlyArray<CommentCustom>
    | $ReadOnlyArray<CommentDetailed>
    | $ReadOnlyArray<CommentSummary>,
  comments_disabled?: boolean,
  complementary_pins?:
    | ?$ReadOnlyArray<PinCustom>
    | $ReadOnlyArray<PinDetailed>
    | $ReadOnlyArray<PinSummary>,
  content_sensitivity?: {| [key: string]: boolean |},
  created_at?: ?string,
  creative_types?: ?$ReadOnlyArray<Enum_CreativeTypes>,
  creator_analytics?: ?SubModel_PinAnalyticsStats,
  creator_class?:
    | ?CreatorClassCustom
    | CreatorClassDetailed
    | CreatorClassSummary,
  cta_text?: ?string,
  dark_profile_link?: string,
  deb_ads?: $ReadOnlyArray<string>,
  deb_all_signals?: $ReadOnlyArray<string>,
  deb_content_quality?: $ReadOnlyArray<string>,
  deb_inclusive_product?: $ReadOnlyArray<string>,
  deb_shopping?: $ReadOnlyArray<string>,
  deb_trust_and_safety?: $ReadOnlyArray<string>,
  debug?: ?string | {| [key: string]: wildcards_OneOfAny |},
  debug_info_html?: ?string,
  description?: ?string,
  description_html?: string,
  destination_url_type?: ?Enum_DestinationUrlType,
  did_it_disabled?: boolean,
  did_its?:
    | ?$ReadOnlyArray<UserDidItDataCustom>
    | $ReadOnlyArray<UserDidItDataDetailed>
    | $ReadOnlyArray<UserDidItDataSummary>,
  domain?: string,
  domain_tracking_params?: $ReadOnlyArray<SubModel_DomainTrackingFormat>,
  dominant_color?: ?string,
  done_by_board_contributors?: boolean,
  done_by_me?: boolean,
  dynamic_ad_data?: SubModel_DynamicAdData,
  edited_fields?: $ReadOnlyArray<string>,
  embed?: ?SubModel_Embed,
  favorite_user_count?: number,
  favorited_by_me?: boolean,
  feedback_options?: ?SubModel_FeedbackOptionsWithRecommendationReason,
  filtered_visual_objects?: $ReadOnlyArray<string>,
  flex_grid_style?: ?{|
    [key: string]:
      | FlexGridStyleCustom
      | FlexGridStyleDetailed
      | FlexGridStyleSummary,
  |},
  gallery?: $ReadOnlyArray<
    GalleryItemCustom | GalleryItemDetailed | GalleryItemSummary
  >,
  grid_description?: ?string,
  grid_title?: string,
  grid_title_ads_experiment?: string,
  has_bad_category?: ?boolean,
  has_been_promoted?: boolean,
  has_male_category?: ?boolean,
  has_required_attribution_provider?: boolean,
  hashtags?: $ReadOnlyArray<string>,
  headline_text?: string,
  id?: string,
  image_crop?: ?SubModel_ImageCrop,
  image_did_it_count?: ?number,
  image_large_size_pixels?: ?SubModel_ImageDimensions,
  image_large_size_points?: ?SubModel_ImageDimensions,
  image_large_url?: ?string,
  image_medium_size_pixels?: ?SubModel_ImageDimensions,
  image_medium_size_points?: ?SubModel_ImageDimensions,
  image_medium_url?: ?string,
  image_metadata?: wildcards_OneOfAnyUntypedField,
  image_signature?: string,
  image_square_size_pixels?: ?SubModel_ImageDimensions,
  image_square_size_points?: ?SubModel_ImageDimensions,
  image_square_url?: ?string,
  images?: {| [key: string]: SubModel_ImageDetails |},
  influencer_pin_stats?: ?SubModel_PinAnalyticsStats,
  is_best_tried_it?: ?boolean,
  is_blocked?: boolean,
  is_cinematic?: boolean,
  is_cpc_ad?: boolean,
  is_downstream_promotion?: boolean,
  is_eligible_for_aggregated_comments?: boolean,
  is_eligible_for_brand_catalog?: boolean,
  is_eligible_for_cta?: boolean,
  is_eligible_for_flashlight_shopping?: boolean,
  is_eligible_for_pdp?: boolean,
  is_eligible_for_related_products?: boolean,
  is_eligible_for_responses?: boolean,
  is_eligible_for_reverse_stela?: boolean,
  is_eligible_for_stela_categories?: boolean,
  is_eligible_for_web_closeup?: boolean,
  is_full_width?: boolean,
  is_ghost?: boolean,
  is_hidden?: boolean,
  is_native?: boolean,
  is_native_video?: boolean,
  is_oos_product?: boolean,
  is_playable?: boolean,
  is_porn_domain?: boolean,
  is_post_reranked?: boolean,
  is_prefetch_enabled?: boolean,
  is_promotable?: boolean,
  is_promoted?: boolean,
  is_quick_promotable?: boolean,
  is_quick_promotable_by_pinner?: boolean,
  is_repin?: boolean,
  is_scene?: boolean,
  is_shopping_ad?: boolean,
  is_spam_domain?: boolean,
  is_stale_product?: boolean,
  is_uploaded?: boolean,
  is_video?: boolean,
  is_virtual_try_on?: boolean,
  is_whitelisted_for_tried_it?: boolean,
  last_repin_date?: ?string,
  lifetime_video_views?: wildcards_OneOfAnyUntypedField,
  like_count?: number,
  liked_by_me?: boolean,
  link?: ?string,
  link_domain?: ?DomainCustom | DomainDetailed | DomainSummary,
  link_user_website?:
    | ?UserWebsiteCustom
    | UserWebsiteDetailed
    | UserWebsiteSummary,
  lookbook?: wildcards_OneOfAnyUntypedField,
  manual_interest_tags?: ?{| [key: string]: string |},
  matched_user_interest?: ?string,
  meta_title_description?: SubModel_TitleAndDescription,
  method?: Enum_PinMethods,
  mobile_link?: ?string,
  multiple_links?: ?$ReadOnlyArray<string>,
  native_creator?: ?UserCustom | UserDetailed | UserSummary,
  native_pin_stats?: ?string,
  native_place?: ?PlaceCustom | PlaceDetailed | PlaceSummary,
  native_video_data?: wildcards_OneOfAnyUntypedField,
  not_promotable_reason?: ?Enum_NoPromotableReason,
  origin_pin?: ?PinCustom | PinDetailed | PinSummary,
  origin_pinner?: ?UserCustom | UserDetailed | UserSummary,
  parent_pin?: ?PinCustom | PinDetailed | PinSummary,
  per_pin_analytics?:
    | ?PerPinAnalyticsCustom
    | PerPinAnalyticsDetailed
    | PerPinAnalyticsSummary,
  pin360?: ?SubModel_Pin360Metadata,
  pin_attribution?:
    | ?AttributionsCustom
    | AttributionsDetailed
    | AttributionsSummary,
  pin_join?: ?PinJoinCustom | PinJoinDetailed | PinJoinSummary,
  pin_note?: ?PinNoteCustom | PinNoteDetailed | PinNoteSummary,
  pin_stats?: ?SubModel_PinAnalyticsStats,
  pinned_to_board?: ?{|
    [key: string]: BoardCustom | BoardDetailed | BoardSummary,
  |},
  pinner?: ?UserCustom | UserDetailed | UserSummary,
  place?: ?string,
  place_summary?: ?string,
  prefetch_asset_urls?: $ReadOnlyArray<string>,
  price_currency?: string,
  price_value?: number,
  privacy?: Enum_Privacy,
  product_metadata?:
    | ?ProductMetadataCustom
    | ProductMetadataDetailed
    | ProductMetadataSummary,
  product_pin_data?:
    | ?ProductMetadataV2Custom
    | ProductMetadataV2Detailed
    | ProductMetadataV2Summary,
  promote_button?: SubModel_PromotedButton,
  promoted_android_deep_link?: string,
  promoted_ios_deep_link?: string,
  promoted_is_congruency_enabled?: boolean,
  promoted_is_max_video?: boolean,
  promoted_is_opaque_onetap_enabled?: boolean,
  promoted_is_removable?: boolean,
  promoted_position?: ?number,
  promoter?: ?UserCustom | UserDetailed | UserSummary,
  quality_state?: Enum_PinQualityState,
  reaction_by_me?: Enum_ReactionTypeEnum,
  reaction_counts?: SubModel_ReactionCount,
  recommendation_reason?: ?SubModel_RecommendationReason,
  related_module?: ?Enum_RelatedModule,
  repin_count?: number,
  requires_advertiser_attribution?: boolean,
  rich_merchant_name?: ?string,
  rich_metadata?:
    | ?RichPinDataViewCustom
    | RichPinDataViewDetailed
    | RichPinDataViewSummary,
  rich_recipe_top_ingredients?: $ReadOnlyArray<SubModel_TopIngredient>,
  rich_summary?:
    | ?RichPinGridDataCustom
    | RichPinGridDataDetailed
    | RichPinGridDataSummary,
  root_pin_id?: string,
  scene_data?: {| [key: string]: string |},
  search_query?: ?string,
  section?: ?BoardSectionCustom | BoardSectionDetailed | BoardSectionSummary,
  serving_link_metadata?: wildcards_OneOfAnyUntypedField,
  shareable_url?: string,
  shopping_flags?: $ReadOnlyArray<number>,
  should_autoplay?: boolean,
  should_prefetch?: boolean,
  should_preload?: boolean,
  source_interest?: ?InterestCustom | InterestDetailed | InterestSummary,
  source_type?: ?string,
  sponsorship?: ?SubModel_Sponsorship,
  story_pin_data?:
    | ?StoryPinDataCustom
    | StoryPinDataDetailed
    | StoryPinDataSummary,
  story_pin_data_id?: ?string,
  subscribed_to_notifications?: boolean,
  themes?: ?$ReadOnlyArray<{| [key: string]: wildcards_OneOfAny |}>,
  third_party_pin_owner?: ?UserCustom | UserDetailed | UserSummary,
  title?: ?string,
  top_interest?: Enum_TopInterest,
  total_reaction_count?: number,
  tracked_link?: ?string,
  tracking_params?: ?string,
  type?: string,
  unified_user_note?: ?string,
  upsell_audience_size?: ?SubModel_Interests,
  url_with_text?: string,
  user_mention_tags?: ?$ReadOnlyArray<
    TextTagCustom | TextTagDetailed | TextTagSummary
  >,
  via_pinner?: ?UserCustom | UserDetailed | UserSummary,
  video_signature?: ?string,
  video_status?: ?Enum_VideoStatus,
  video_status_message?: ?SubModel_VideoStatusMessage,
  videos?: ?VideoCustom | VideoDetailed | VideoSummary,
  view_tags?: ?$ReadOnlyArray<SubModel_ViewTag>,
  virtual_try_on_data?: SubModel_VirtualTryOnData,
  virtual_try_on_type?: Enum_VirtualTryOnPinType,
  visual_objects?: $ReadOnlyArray<SubModel_StelaVisualObject>,
  visual_search_attrs?: ?{| [key: string]: string |},
|};
export type PinDetailed = {|
  access?: $ReadOnlyArray<Enum_Access>,
  activity?: ?Enum_ActionType,
  activity_timestamp?: ?number,
  ad_closeup_behaviors?: wildcards_OneOfAnyUntypedField,
  ad_creative_type?: Enum_CreativeType,
  ad_destination_url?: ?string,
  ad_match_reason: ?Enum_MatchReason,
  ad_targeting_attribution?: SubModel_AdTargetingAttribution,
  additional_hide_reasons: $ReadOnlyArray<Enum_RecommendationComplaintReason>,
  alt_text: ?string,
  analytics?:
    | ClicksAnalyticsModelCustom
    | ClicksAnalyticsModelDetailed
    | ClicksAnalyticsModelSummary
    | RepinsAnalyticsModelCustom
    | RepinsAnalyticsModelDetailed
    | RepinsAnalyticsModelSummary,
  app_domain:
    | ?$ReadOnlyArray<DomainCustom>
    | $ReadOnlyArray<DomainDetailed>
    | $ReadOnlyArray<DomainSummary>,
  attribution?: ?SubModel_Attribution,
  auto_alt_text?: ?string,
  board?: ?BoardCustom | BoardDetailed | BoardSummary,
  board_activity:
    | ?BoardActivityCustom
    | BoardActivityDetailed
    | BoardActivitySummary,
  buyable_product_availability:
    | ?BuyableProductMiniMetadataCustom
    | BuyableProductMiniMetadataDetailed
    | BuyableProductMiniMetadataSummary,
  cacheable_id?: string,
  can_delete_did_it_and_comments?: boolean,
  canonical_merchant_name?: ?string,
  carousel_data?:
    | ?PinCarouselDataCustom
    | PinCarouselDataDetailed
    | PinCarouselDataSummary,
  category?: ?Enum_BoardCategoriesEnum,
  category_p2i?: ?number,
  click_through_link_quality?: ?SubModel_ClickThroughLinkQuality,
  client_id?: ?string,
  closeup_attribution: ?UserCustom | UserDetailed | UserSummary,
  closeup_description?: ?string,
  closeup_unified_description?: ?string,
  closeup_unified_title?: ?string,
  closeup_user_note?: ?string,
  collage_pin?: ?CollagePinCustom | CollagePinDetailed | CollagePinSummary,
  collage_pin_id?: ?string,
  collection_data_id?: ?string,
  collection_pin?:
    | ?CollectionPinCustom
    | CollectionPinDetailed
    | CollectionPinSummary,
  comment_count?: number,
  comments:
    | ?$ReadOnlyArray<CommentCustom>
    | $ReadOnlyArray<CommentDetailed>
    | $ReadOnlyArray<CommentSummary>,
  comments_disabled?: boolean,
  content_sensitivity?: {| [key: string]: boolean |},
  created_at: ?string,
  cta_text?: ?string,
  dark_profile_link?: string,
  deb_ads?: $ReadOnlyArray<string>,
  deb_all_signals?: $ReadOnlyArray<string>,
  deb_content_quality?: $ReadOnlyArray<string>,
  deb_inclusive_product?: $ReadOnlyArray<string>,
  deb_shopping?: $ReadOnlyArray<string>,
  deb_trust_and_safety?: $ReadOnlyArray<string>,
  debug?: ?string | {| [key: string]: wildcards_OneOfAny |},
  debug_info_html: ?string,
  description?: ?string,
  destination_url_type?: ?Enum_DestinationUrlType,
  did_it_disabled?: boolean,
  did_its:
    | ?$ReadOnlyArray<UserDidItDataCustom>
    | $ReadOnlyArray<UserDidItDataDetailed>
    | $ReadOnlyArray<UserDidItDataSummary>,
  domain?: string,
  domain_tracking_params?: $ReadOnlyArray<SubModel_DomainTrackingFormat>,
  dominant_color?: ?string,
  done_by_board_contributors?: boolean,
  dynamic_ad_data?: SubModel_DynamicAdData,
  edited_fields?: $ReadOnlyArray<string>,
  embed?: ?SubModel_Embed,
  feedback_options?: ?SubModel_FeedbackOptionsWithRecommendationReason,
  filtered_visual_objects?: $ReadOnlyArray<string>,
  flex_grid_style: ?{|
    [key: string]:
      | FlexGridStyleCustom
      | FlexGridStyleDetailed
      | FlexGridStyleSummary,
  |},
  grid_description?: ?string,
  grid_title?: string,
  grid_title_ads_experiment?: string,
  has_been_promoted: boolean,
  has_required_attribution_provider?: boolean,
  hashtags?: $ReadOnlyArray<string>,
  headline_text?: string,
  id?: string,
  image_crop?: ?SubModel_ImageCrop,
  image_did_it_count?: ?number,
  image_large_size_pixels?: ?SubModel_ImageDimensions,
  image_large_size_points?: ?SubModel_ImageDimensions,
  image_large_url?: ?string,
  image_medium_size_pixels?: ?SubModel_ImageDimensions,
  image_medium_size_points?: ?SubModel_ImageDimensions,
  image_medium_url?: ?string,
  image_metadata?: wildcards_OneOfAnyUntypedField,
  image_signature: string,
  image_square_size_pixels?: ?SubModel_ImageDimensions,
  image_square_size_points?: ?SubModel_ImageDimensions,
  image_square_url?: ?string,
  influencer_pin_stats?: ?SubModel_PinAnalyticsStats,
  is_best_tried_it?: ?boolean,
  is_blocked?: boolean,
  is_cpc_ad?: boolean,
  is_downstream_promotion: boolean,
  is_eligible_for_brand_catalog?: boolean,
  is_eligible_for_cta?: boolean,
  is_eligible_for_web_closeup?: boolean,
  is_full_width?: boolean,
  is_ghost?: boolean,
  is_hidden: boolean,
  is_native: boolean,
  is_oos_product?: boolean,
  is_playable: boolean,
  is_porn_domain?: boolean,
  is_prefetch_enabled?: boolean,
  is_promotable?: boolean,
  is_promoted?: boolean,
  is_quick_promotable?: boolean,
  is_quick_promotable_by_pinner?: boolean,
  is_repin: boolean,
  is_scene: boolean,
  is_shopping_ad: boolean,
  is_spam_domain?: boolean,
  is_stale_product?: boolean,
  is_uploaded: boolean,
  is_video: boolean,
  is_whitelisted_for_tried_it?: boolean,
  last_repin_date?: ?string,
  like_count?: number,
  liked_by_me?: boolean,
  link?: ?string,
  link_domain: ?DomainCustom | DomainDetailed | DomainSummary,
  link_user_website:
    | ?UserWebsiteCustom
    | UserWebsiteDetailed
    | UserWebsiteSummary,
  lookbook?: wildcards_OneOfAnyUntypedField,
  manual_interest_tags?: ?{| [key: string]: string |},
  matched_user_interest: ?string,
  meta_title_description?: SubModel_TitleAndDescription,
  method?: Enum_PinMethods,
  multiple_links?: ?$ReadOnlyArray<string>,
  native_creator: ?UserCustom | UserDetailed | UserSummary,
  native_pin_stats?: ?string,
  not_promotable_reason?: ?Enum_NoPromotableReason,
  origin_pin?: ?PinCustom | PinDetailed | PinSummary,
  origin_pinner: ?UserCustom | UserDetailed | UserSummary,
  parent_pin?: ?PinCustom | PinDetailed | PinSummary,
  pin360?: ?SubModel_Pin360Metadata,
  pin_attribution?:
    | ?AttributionsCustom
    | AttributionsDetailed
    | AttributionsSummary,
  pin_stats?: ?SubModel_PinAnalyticsStats,
  pinner?: ?UserCustom | UserDetailed | UserSummary,
  prefetch_asset_urls?: $ReadOnlyArray<string>,
  price_currency?: string,
  price_value: number,
  privacy?: Enum_Privacy,
  promote_button?: SubModel_PromotedButton,
  promoted_android_deep_link?: string,
  promoted_ios_deep_link?: string,
  promoted_is_congruency_enabled?: boolean,
  promoted_is_max_video?: boolean,
  promoted_is_opaque_onetap_enabled?: boolean,
  promoted_is_removable: boolean,
  promoted_position?: ?number,
  promoter?: ?UserCustom | UserDetailed | UserSummary,
  quality_state?: Enum_PinQualityState,
  recommendation_reason?: ?SubModel_RecommendationReason,
  repin_count: number,
  requires_advertiser_attribution?: boolean,
  rich_metadata:
    | ?RichPinDataViewCustom
    | RichPinDataViewDetailed
    | RichPinDataViewSummary,
  rich_recipe_top_ingredients?: $ReadOnlyArray<SubModel_TopIngredient>,
  rich_summary:
    | ?RichPinGridDataCustom
    | RichPinGridDataDetailed
    | RichPinGridDataSummary,
  scene_data?: {| [key: string]: string |},
  search_query?: ?string,
  serving_link_metadata?: wildcards_OneOfAnyUntypedField,
  shareable_url?: string,
  shopping_flags?: $ReadOnlyArray<number>,
  should_autoplay: boolean,
  should_prefetch?: boolean,
  should_preload?: boolean,
  source_interest?: ?InterestCustom | InterestDetailed | InterestSummary,
  source_type?: ?string,
  sponsorship?: ?SubModel_Sponsorship,
  story_pin_data?:
    | ?StoryPinDataCustom
    | StoryPinDataDetailed
    | StoryPinDataSummary,
  story_pin_data_id?: ?string,
  themes?: ?$ReadOnlyArray<{| [key: string]: wildcards_OneOfAny |}>,
  third_party_pin_owner?: ?UserCustom | UserDetailed | UserSummary,
  title: ?string,
  top_interest?: Enum_TopInterest,
  tracked_link?: ?string,
  tracking_params?: ?string,
  type?: string,
  unified_user_note?: ?string,
  user_mention_tags?: ?$ReadOnlyArray<
    TextTagCustom | TextTagDetailed | TextTagSummary
  >,
  via_pinner: ?UserCustom | UserDetailed | UserSummary,
  video_status?: ?Enum_VideoStatus,
  video_status_message?: ?SubModel_VideoStatusMessage,
  videos?: ?VideoCustom | VideoDetailed | VideoSummary,
  view_tags: ?$ReadOnlyArray<SubModel_ViewTag>,
  visual_search_attrs?: ?{| [key: string]: string |},
|};
export type PinJoinCustom = {|
  annotations_with_links?: wildcards_OneOfAnyUntypedField,
  breadcrumbs?: wildcards_OneOfAnyUntypedField,
  canonical_pin?: wildcards_OneOfAnyUntypedField,
  i18n_visual_descriptions?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  seo_breadcrumbs?: wildcards_OneOfAnyUntypedField,
  seo_description?: wildcards_OneOfAnyUntypedField,
  visual_annotation?: wildcards_OneOfAnyUntypedField,
  visual_descriptions?: wildcards_OneOfAnyUntypedField,
|};
export type PinJoinDetailed = {|
  annotations_with_links?: wildcards_OneOfAnyUntypedField,
  breadcrumbs?: wildcards_OneOfAnyUntypedField,
  canonical_pin?: wildcards_OneOfAnyUntypedField,
  i18n_visual_descriptions?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  seo_breadcrumbs?: wildcards_OneOfAnyUntypedField,
  seo_description?: wildcards_OneOfAnyUntypedField,
  visual_annotation?: wildcards_OneOfAnyUntypedField,
  visual_descriptions?: wildcards_OneOfAnyUntypedField,
|};
export type PinJoinSummary = {|
  breadcrumbs?: wildcards_OneOfAnyUntypedField,
  canonical_pin?: wildcards_OneOfAnyUntypedField,
  i18n_visual_descriptions?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  seo_breadcrumbs?: wildcards_OneOfAnyUntypedField,
  seo_description?: wildcards_OneOfAnyUntypedField,
  visual_annotation?: wildcards_OneOfAnyUntypedField,
  visual_descriptions?: wildcards_OneOfAnyUntypedField,
|};
export type PinNoteCustom = {|
  created_at?: string,
  id?: string,
  pin?: ?PinCustom | PinDetailed | PinSummary,
  text?: string,
  type?: string,
  updated_at?: ?string,
|};
export type PinNoteDetailed = {|
  created_at?: string,
  id?: string,
  pin?: ?PinCustom | PinDetailed | PinSummary,
  text: string,
  type?: string,
  updated_at?: ?string,
|};
export type PinNoteSummary = {|
  created_at?: string,
  id?: string,
  text: string,
  type?: string,
  updated_at?: ?string,
|};
export type PinSummary = {|
  attribution?: ?SubModel_Attribution,
  cacheable_id?: string,
  comment_count?: number,
  created_at: ?string,
  description?: ?string,
  domain?: string,
  id?: string,
  image_large_size_pixels?: ?SubModel_ImageDimensions,
  image_large_size_points?: ?SubModel_ImageDimensions,
  image_large_url?: ?string,
  image_medium_size_pixels?: ?SubModel_ImageDimensions,
  image_medium_size_points?: ?SubModel_ImageDimensions,
  image_medium_url?: ?string,
  image_square_size_pixels?: ?SubModel_ImageDimensions,
  image_square_size_points?: ?SubModel_ImageDimensions,
  image_square_url?: ?string,
  is_downstream_promotion: boolean,
  is_playable: boolean,
  is_repin: boolean,
  is_uploaded: boolean,
  is_video: boolean,
  link?: ?string,
  price_currency?: string,
  price_value: number,
  promoter?: ?UserCustom | UserDetailed | UserSummary,
  repin_count: number,
  title: ?string,
  tracked_link?: ?string,
  tracking_params?: ?string,
  type?: string,
|};
export type PinTypeFilterCustom = {|
  id?: string,
  pin_type?: number,
  text?: string,
  type?: string,
|};
export type PinTypeFilterDetailed = {|
  id?: string,
  pin_type: number,
  text: string,
  type?: string,
|};
export type PinTypeFilterSummary = {|
  id?: string,
  pin_type: number,
  text: string,
  type?: string,
|};
export type PlaceCategoryCustom = {|
  icon_url?: ?string,
  id?: string,
  l1_category_name?: string,
  name?: string,
  type?: string,
|};
export type PlaceCategoryDetailed = {|
  icon_url: ?string,
  id: string,
  l1_category_name: string,
  name: string,
  type?: string,
|};
export type PlaceCategorySummary = {|
  icon_url: ?string,
  id: string,
  l1_category_name: string,
  name: string,
  type?: string,
|};
export type PlaceCustom = {|
  access?:
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<string>
    | $ReadOnlyArray<{| [key: string]: mixed |}>
    | $ReadOnlyArray<boolean>
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<$ReadOnlyArray<mixed>>,
  bounds?: ?{| [key: string]: BoundsCustom | BoundsDetailed | BoundsSummary |},
  category?: string,
  category_join?:
    | ?PlaceCategoryCustom
    | PlaceCategoryDetailed
    | PlaceCategorySummary,
  country?: ?string,
  extra_street?: ?string,
  from_pin_join?: boolean,
  hero_images?: wildcards_OneOfAnyUntypedField,
  hours?: $ReadOnlyArray<SubModel_PlaceHours>,
  hours_texts?: $ReadOnlyArray<
    HoursTextCustom | HoursTextDetailed | HoursTextSummary
  >,
  id?: string,
  image?: ?{|
    [key: string]: PlaceImageCustom | PlaceImageDetailed | PlaceImageSummary,
  |},
  images?: ?$ReadOnlyArray<
    PlaceImageCustom | PlaceImageDetailed | PlaceImageSummary
  >,
  latitude?: number,
  locality?: ?string,
  longitude?: number,
  name?: string,
  owner?: ?UserCustom | UserDetailed | UserSummary,
  phone?: ?string,
  postal_code?: ?string,
  rating?: ?number,
  rating_signals?: ?number,
  region?: ?string,
  search_id?: string,
  simple_tips?: ?$ReadOnlyArray<string>,
  source_icon?: ?string,
  source_name?: ?Enum_SourceName,
  source_url?: ?string,
  street?: ?string,
  type?: string,
  upsell_images?: wildcards_OneOfAnyUntypedField,
  url?: ?string,
  user_education_images?: wildcards_OneOfAnyUntypedField,
|};
export type PlaceDetailed = {|
  access?:
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<string>
    | $ReadOnlyArray<{| [key: string]: mixed |}>
    | $ReadOnlyArray<boolean>
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<$ReadOnlyArray<mixed>>,
  bounds: ?{| [key: string]: BoundsCustom | BoundsDetailed | BoundsSummary |},
  category?: string,
  country: ?string,
  extra_street: ?string,
  from_pin_join?: boolean,
  hours?: $ReadOnlyArray<SubModel_PlaceHours>,
  hours_texts?: $ReadOnlyArray<
    HoursTextCustom | HoursTextDetailed | HoursTextSummary
  >,
  id: string,
  images?: ?$ReadOnlyArray<
    PlaceImageCustom | PlaceImageDetailed | PlaceImageSummary
  >,
  latitude: number,
  locality: ?string,
  longitude: number,
  name: string,
  owner: ?UserCustom | UserDetailed | UserSummary,
  phone: ?string,
  postal_code: ?string,
  rating: ?number,
  rating_signals: ?number,
  region: ?string,
  simple_tips: ?$ReadOnlyArray<string>,
  source_icon?: ?string,
  source_name: ?Enum_SourceName,
  source_url: ?string,
  street: ?string,
  type?: string,
  url: ?string,
|};
export type PlaceImageCustom = {|
  id?: string,
  thumbnails?: {| [key: string]: SubModel_ImageDetails |},
  type?: string,
|};
export type PlaceImageDetailed = {|
  id: string,
  thumbnails?: {| [key: string]: SubModel_ImageDetails |},
  type?: string,
|};
export type PlaceImageSummary = {|
  id: string,
  thumbnails?: {| [key: string]: SubModel_ImageDetails |},
  type?: string,
|};
export type PlaceSummary = {|
  access?:
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<string>
    | $ReadOnlyArray<{| [key: string]: mixed |}>
    | $ReadOnlyArray<boolean>
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<$ReadOnlyArray<mixed>>,
  bounds: ?{| [key: string]: BoundsCustom | BoundsDetailed | BoundsSummary |},
  category?: string,
  country: ?string,
  from_pin_join?: boolean,
  id: string,
  latitude: number,
  locality: ?string,
  longitude: number,
  name: string,
  phone: ?string,
  postal_code: ?string,
  rating: ?number,
  rating_signals: ?number,
  region: ?string,
  source_icon?: ?string,
  source_name: ?Enum_SourceName,
  source_url: ?string,
  street: ?string,
  type?: string,
  url: ?string,
|};
export type ProductMetadataCustom = {|
  description?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  item_id?: wildcards_OneOfAnyUntypedField,
  item_set_id?: wildcards_OneOfAnyUntypedField,
  offers?: wildcards_OneOfAnyUntypedField,
  product_pin_type?: wildcards_OneOfAnyUntypedField,
  shipping_info?: wildcards_OneOfAnyUntypedField,
  site_name?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type ProductMetadataDetailed = {|
  description?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  item_id?: wildcards_OneOfAnyUntypedField,
  item_set_id?: wildcards_OneOfAnyUntypedField,
  offers?: wildcards_OneOfAnyUntypedField,
  product_pin_type?: wildcards_OneOfAnyUntypedField,
  shipping_info?: wildcards_OneOfAnyUntypedField,
  site_name?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type ProductMetadataSummary = {|
  id?: wildcards_UntypedSniffedString,
  type?: wildcards_UntypedSniffedString,
|};
export type ProductMetadataV2Custom = {|
  active_max_price?: wildcards_OneOfAnyUntypedField,
  active_min_price?: wildcards_OneOfAnyUntypedField,
  availability?: wildcards_OneOfAnyUntypedField,
  canonical_merchant_domain?: wildcards_OneOfAnyUntypedField,
  currency?: wildcards_OneOfAnyUntypedField,
  description?: wildcards_OneOfAnyUntypedField,
  discount_percent?: wildcards_OneOfAnyUntypedField,
  display_active_max_price?: wildcards_OneOfAnyUntypedField,
  display_active_min_price?: wildcards_OneOfAnyUntypedField,
  display_max_price?: wildcards_OneOfAnyUntypedField,
  display_min_price?: wildcards_OneOfAnyUntypedField,
  display_price?: wildcards_OneOfAnyUntypedField,
  display_sale_price?: wildcards_OneOfAnyUntypedField,
  display_shipping_time?: wildcards_OneOfAnyUntypedField,
  favicon_link?: wildcards_OneOfAnyUntypedField,
  has_free_shipping?: wildcards_OneOfAnyUntypedField,
  has_swatches?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  is_available?: wildcards_UntypedSniffedBool,
  is_head_merchant?: wildcards_UntypedSniffedBool,
  items?: wildcards_OneOfAnyUntypedField,
  layout?: wildcards_OneOfAnyUntypedField,
  link?: wildcards_OneOfAnyUntypedField,
  max_price?: wildcards_OneOfAnyUntypedField,
  merchant_badge?: wildcards_OneOfAnyUntypedField,
  merchant_id?: wildcards_OneOfAnyUntypedField,
  merchant_item_group_id?: wildcards_OneOfAnyUntypedField,
  merchant_name?: wildcards_OneOfAnyUntypedField,
  merchant_rating?: wildcards_OneOfAnyUntypedField,
  min_price?: wildcards_OneOfAnyUntypedField,
  price?: wildcards_OneOfAnyUntypedField,
  product_thumbnails?: wildcards_OneOfAnyUntypedField,
  refund_info?: wildcards_OneOfAnyUntypedField,
  return_policy_link?: wildcards_OneOfAnyUntypedField,
  rich_description?: wildcards_OneOfAnyUntypedField,
  sale_price?: wildcards_OneOfAnyUntypedField,
  short_description?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  variations?: wildcards_OneOfAnyUntypedField,
|};
export type ProductMetadataV2Detailed = {|
  active_max_price?: wildcards_OneOfAnyUntypedField,
  active_min_price?: wildcards_OneOfAnyUntypedField,
  availability?: wildcards_OneOfAnyUntypedField,
  canonical_merchant_domain?: wildcards_OneOfAnyUntypedField,
  currency?: wildcards_OneOfAnyUntypedField,
  description?: wildcards_OneOfAnyUntypedField,
  discount_percent?: wildcards_OneOfAnyUntypedField,
  display_active_max_price?: wildcards_OneOfAnyUntypedField,
  display_active_min_price?: wildcards_OneOfAnyUntypedField,
  display_max_price?: wildcards_OneOfAnyUntypedField,
  display_min_price?: wildcards_OneOfAnyUntypedField,
  display_price?: wildcards_OneOfAnyUntypedField,
  display_sale_price?: wildcards_OneOfAnyUntypedField,
  display_shipping_time?: wildcards_OneOfAnyUntypedField,
  favicon_link?: wildcards_OneOfAnyUntypedField,
  has_free_shipping?: wildcards_OneOfAnyUntypedField,
  has_swatches?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  is_available?: wildcards_UntypedSniffedBool,
  is_head_merchant?: wildcards_UntypedSniffedBool,
  items?: wildcards_OneOfAnyUntypedField,
  layout?: wildcards_OneOfAnyUntypedField,
  link?: wildcards_OneOfAnyUntypedField,
  max_price?: wildcards_OneOfAnyUntypedField,
  merchant_badge?: wildcards_OneOfAnyUntypedField,
  merchant_id?: wildcards_OneOfAnyUntypedField,
  merchant_item_group_id?: wildcards_OneOfAnyUntypedField,
  merchant_name?: wildcards_OneOfAnyUntypedField,
  merchant_rating?: wildcards_OneOfAnyUntypedField,
  min_price?: wildcards_OneOfAnyUntypedField,
  price?: wildcards_OneOfAnyUntypedField,
  refund_info?: wildcards_OneOfAnyUntypedField,
  return_policy_link?: wildcards_OneOfAnyUntypedField,
  rich_description?: wildcards_OneOfAnyUntypedField,
  sale_price?: wildcards_OneOfAnyUntypedField,
  short_description?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  variations?: wildcards_OneOfAnyUntypedField,
|};
export type ProductMetadataV2Summary = {|
  canonical_merchant_domain?: wildcards_OneOfAnyUntypedField,
  currency?: wildcards_OneOfAnyUntypedField,
  discount_percent?: wildcards_OneOfAnyUntypedField,
  display_active_max_price?: wildcards_OneOfAnyUntypedField,
  display_active_min_price?: wildcards_OneOfAnyUntypedField,
  display_max_price?: wildcards_OneOfAnyUntypedField,
  display_min_price?: wildcards_OneOfAnyUntypedField,
  display_price?: wildcards_OneOfAnyUntypedField,
  display_sale_price?: wildcards_OneOfAnyUntypedField,
  favicon_link?: wildcards_OneOfAnyUntypedField,
  has_swatches?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  is_available?: wildcards_UntypedSniffedBool,
  is_head_merchant?: wildcards_UntypedSniffedBool,
  layout?: wildcards_OneOfAnyUntypedField,
  merchant_item_group_id?: wildcards_OneOfAnyUntypedField,
  merchant_name?: wildcards_OneOfAnyUntypedField,
  price?: wildcards_OneOfAnyUntypedField,
  sale_price?: wildcards_OneOfAnyUntypedField,
  short_description?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  variations?: wildcards_OneOfAnyUntypedField,
|};
export type ProfileCoverSourceCustom = {|
  id?: string,
  image_tracking_ids?: {| [key: string]: string |},
  images?: ?{| [key: string]: SubModel_ImageDetails |},
  source?: string,
  source_id?: ?string,
  type?: string,
  video?: ?VideoCustom | VideoDetailed | VideoSummary,
  video_tracking_ids?: {| [key: string]: string |},
|};
export type ProfileCoverSourceDetailed = {|
  id?: string,
  image_tracking_ids: {| [key: string]: string |},
  images?: ?{| [key: string]: SubModel_ImageDetails |},
  source?: string,
  source_id?: ?string,
  type?: string,
  video: ?VideoCustom | VideoDetailed | VideoSummary,
  video_tracking_ids: {| [key: string]: string |},
|};
export type ProfileCoverSourceSummary = {|
  id?: string,
  source?: string,
  source_id?: ?string,
  type?: string,
|};
export type ProfileTabCustom = {|
  id?: string,
  name?: string,
  tab_type?: number,
  type?: string,
|};
export type ProfileTabDetailed = {|
  id?: string,
  name: string,
  tab_type: number,
  type?: string,
|};
export type ProfileTabSummary = {|
  id?: string,
  name: string,
  tab_type: number,
  type?: string,
|};
export type RepinsAnalyticsModelCustom = {|
  id?: string,
  pin?: ?PinCustom | PinDetailed | PinSummary,
  repins?: number,
  type?: string,
|};
export type RepinsAnalyticsModelDetailed = {|
  id?: string,
  pin: ?PinCustom | PinDetailed | PinSummary,
  repins: number,
  type?: string,
|};
export type RepinsAnalyticsModelSummary = {|
  id?: string,
  pin: ?PinCustom | PinDetailed | PinSummary,
  repins: number,
  type?: string,
|};
export type ResponseStatus = "success" | "failure";
export type RichPinDataViewCustom = {|
  aggregate_rating?: wildcards_OneOfAnyUntypedField,
  aggregated_app_link?: wildcards_OneOfAnyUntypedField,
  amp_url?: wildcards_OneOfAnyUntypedField,
  amp_valid?: wildcards_OneOfAnyUntypedField,
  apple_touch_icon_images?: wildcards_OneOfAnyUntypedField,
  apple_touch_icon_link?: wildcards_OneOfAnyUntypedField,
  article?: wildcards_OneOfAnyUntypedField,
  canonical_url?: wildcards_OneOfAnyUntypedField,
  description?: wildcards_OneOfAnyUntypedField,
  favicon_images?: wildcards_OneOfAnyUntypedField,
  favicon_link?: wildcards_OneOfAnyUntypedField,
  has_price_drop?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  instant_article?: wildcards_OneOfAnyUntypedField,
  instant_content?: wildcards_OneOfAnyUntypedField,
  is_hard_404?: wildcards_UntypedSniffedBool,
  is_product_pin_v2?: wildcards_UntypedSniffedBool,
  is_soft_404?: wildcards_UntypedSniffedBool,
  link_status?: wildcards_OneOfAnyUntypedField,
  locale?: wildcards_OneOfAnyUntypedField,
  mobile_app?: wildcards_OneOfAnyUntypedField,
  movie?: wildcards_OneOfAnyUntypedField,
  place?: wildcards_OneOfAnyUntypedField,
  products?: wildcards_OneOfAnyUntypedField,
  products_history?: wildcards_OneOfAnyUntypedField,
  recipe?: wildcards_OneOfAnyUntypedField,
  site_name?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  tracker?: wildcards_OneOfAnyUntypedField,
  tutorial?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  url?: wildcards_OneOfAnyUntypedField,
|};
export type RichPinDataViewDetailed = {|
  aggregate_rating?: wildcards_OneOfAnyUntypedField,
  aggregated_app_link?: wildcards_OneOfAnyUntypedField,
  amp_url?: wildcards_OneOfAnyUntypedField,
  amp_valid?: wildcards_OneOfAnyUntypedField,
  apple_touch_icon_images?: wildcards_OneOfAnyUntypedField,
  apple_touch_icon_link?: wildcards_OneOfAnyUntypedField,
  article?: wildcards_OneOfAnyUntypedField,
  canonical_url?: wildcards_OneOfAnyUntypedField,
  description?: wildcards_OneOfAnyUntypedField,
  favicon_images?: wildcards_OneOfAnyUntypedField,
  favicon_link?: wildcards_OneOfAnyUntypedField,
  has_price_drop?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  instant_article?: wildcards_OneOfAnyUntypedField,
  instant_content?: wildcards_OneOfAnyUntypedField,
  is_hard_404?: wildcards_UntypedSniffedBool,
  is_product_pin_v2?: wildcards_UntypedSniffedBool,
  is_soft_404?: wildcards_UntypedSniffedBool,
  link_status?: wildcards_OneOfAnyUntypedField,
  locale?: wildcards_OneOfAnyUntypedField,
  mobile_app?: wildcards_OneOfAnyUntypedField,
  movie?: wildcards_OneOfAnyUntypedField,
  place?: wildcards_OneOfAnyUntypedField,
  products?: wildcards_OneOfAnyUntypedField,
  products_history?: wildcards_OneOfAnyUntypedField,
  recipe?: wildcards_OneOfAnyUntypedField,
  site_name?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  tracker?: wildcards_OneOfAnyUntypedField,
  tutorial?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  url?: wildcards_OneOfAnyUntypedField,
|};
export type RichPinDataViewSummary = {|
  aggregate_rating?: wildcards_OneOfAnyUntypedField,
  aggregated_app_link?: wildcards_OneOfAnyUntypedField,
  amp_url?: wildcards_OneOfAnyUntypedField,
  amp_valid?: wildcards_OneOfAnyUntypedField,
  apple_touch_icon_images?: wildcards_OneOfAnyUntypedField,
  apple_touch_icon_link?: wildcards_OneOfAnyUntypedField,
  article?: wildcards_OneOfAnyUntypedField,
  canonical_url?: wildcards_OneOfAnyUntypedField,
  description?: wildcards_OneOfAnyUntypedField,
  favicon_images?: wildcards_OneOfAnyUntypedField,
  favicon_link?: wildcards_OneOfAnyUntypedField,
  has_price_drop?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  instant_article?: wildcards_OneOfAnyUntypedField,
  instant_content?: wildcards_OneOfAnyUntypedField,
  is_hard_404?: wildcards_UntypedSniffedBool,
  is_product_pin_v2?: wildcards_UntypedSniffedBool,
  is_soft_404?: wildcards_UntypedSniffedBool,
  link_status?: wildcards_OneOfAnyUntypedField,
  locale?: wildcards_OneOfAnyUntypedField,
  mobile_app?: wildcards_OneOfAnyUntypedField,
  movie?: wildcards_OneOfAnyUntypedField,
  place?: wildcards_OneOfAnyUntypedField,
  products?: wildcards_OneOfAnyUntypedField,
  products_history?: wildcards_OneOfAnyUntypedField,
  recipe?: wildcards_OneOfAnyUntypedField,
  site_name?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  tracker?: wildcards_OneOfAnyUntypedField,
  tutorial?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  url?: wildcards_OneOfAnyUntypedField,
|};
export type RichPinGridDataCustom = {|
  actions?: wildcards_OneOfAnyUntypedField,
  aggregate_rating?: wildcards_OneOfAnyUntypedField,
  apple_touch_icon_images?: wildcards_OneOfAnyUntypedField,
  apple_touch_icon_link?: wildcards_OneOfAnyUntypedField,
  display_cook_time?: wildcards_OneOfAnyUntypedField,
  display_description?: wildcards_OneOfAnyUntypedField,
  display_name?: wildcards_OneOfAnyUntypedField,
  favicon_images?: wildcards_OneOfAnyUntypedField,
  favicon_link?: wildcards_OneOfAnyUntypedField,
  has_instant_content?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  instant_article?: wildcards_OneOfAnyUntypedField,
  instant_content?: wildcards_OneOfAnyUntypedField,
  is_hard_404?: wildcards_UntypedSniffedBool,
  is_product_pin_v2?: wildcards_UntypedSniffedBool,
  is_soft_404?: wildcards_UntypedSniffedBool,
  mobile_app?: wildcards_OneOfAnyUntypedField,
  products?: wildcards_OneOfAnyUntypedField,
  site_name?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  type_name?: wildcards_OneOfAnyUntypedField,
  url?: wildcards_OneOfAnyUntypedField,
|};
export type RichPinGridDataDetailed = {|
  actions?: wildcards_OneOfAnyUntypedField,
  aggregate_rating?: wildcards_OneOfAnyUntypedField,
  apple_touch_icon_images?: wildcards_OneOfAnyUntypedField,
  apple_touch_icon_link?: wildcards_OneOfAnyUntypedField,
  display_cook_time?: wildcards_OneOfAnyUntypedField,
  display_description?: wildcards_OneOfAnyUntypedField,
  display_name?: wildcards_OneOfAnyUntypedField,
  favicon_images?: wildcards_OneOfAnyUntypedField,
  favicon_link?: wildcards_OneOfAnyUntypedField,
  has_instant_content?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  instant_article?: wildcards_OneOfAnyUntypedField,
  instant_content?: wildcards_OneOfAnyUntypedField,
  is_hard_404?: wildcards_UntypedSniffedBool,
  is_product_pin_v2?: wildcards_UntypedSniffedBool,
  is_soft_404?: wildcards_UntypedSniffedBool,
  mobile_app?: wildcards_OneOfAnyUntypedField,
  products?: wildcards_OneOfAnyUntypedField,
  site_name?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  type_name?: wildcards_OneOfAnyUntypedField,
  url?: wildcards_OneOfAnyUntypedField,
|};
export type RichPinGridDataSummary = {|
  actions?: wildcards_OneOfAnyUntypedField,
  aggregate_rating?: wildcards_OneOfAnyUntypedField,
  apple_touch_icon_images?: wildcards_OneOfAnyUntypedField,
  apple_touch_icon_link?: wildcards_OneOfAnyUntypedField,
  display_cook_time?: wildcards_OneOfAnyUntypedField,
  display_description?: wildcards_OneOfAnyUntypedField,
  display_name?: wildcards_OneOfAnyUntypedField,
  favicon_images?: wildcards_OneOfAnyUntypedField,
  favicon_link?: wildcards_OneOfAnyUntypedField,
  has_instant_content?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  instant_article?: wildcards_OneOfAnyUntypedField,
  instant_content?: wildcards_OneOfAnyUntypedField,
  is_hard_404?: wildcards_UntypedSniffedBool,
  is_product_pin_v2?: wildcards_UntypedSniffedBool,
  is_soft_404?: wildcards_UntypedSniffedBool,
  mobile_app?: wildcards_OneOfAnyUntypedField,
  products?: wildcards_OneOfAnyUntypedField,
  site_name?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  type_name?: wildcards_OneOfAnyUntypedField,
  url?: wildcards_OneOfAnyUntypedField,
|};
export type StoryCustom = {|
  action?: wildcards_OneOfAnyUntypedField,
  aux_fields?: wildcards_OneOfAnyUntypedField,
  background_colour?: wildcards_OneOfAnyUntypedField,
  button_text?: wildcards_OneOfAnyUntypedField,
  closeup_id?: wildcards_OneOfAnyUntypedField,
  container_type?: wildcards_OneOfAnyUntypedField,
  content_ids?: wildcards_OneOfAnyUntypedField,
  copy?: wildcards_OneOfAnyUntypedField,
  custom_properties?: wildcards_OneOfAnyUntypedField,
  display_options?: wildcards_OneOfAnyUntypedField,
  dynamic_insertion_options?: wildcards_OneOfAnyUntypedField,
  experience?: wildcards_OneOfAnyUntypedField,
  experience_extra_context?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  mapped_display_options?: wildcards_OneOfAnyUntypedField,
  objects?: wildcards_OneOfAnyUntypedField,
  product?: wildcards_OneOfAnyUntypedField,
  referring_source?: wildcards_OneOfAnyUntypedField,
  related_interests?: wildcards_OneOfAnyUntypedField,
  relationships?: wildcards_OneOfAnyUntypedField,
  search_referring_source?: wildcards_OneOfAnyUntypedField,
  selected_interests?: wildcards_OneOfAnyUntypedField,
  slot?: wildcards_OneOfAnyUntypedField,
  story_type?: wildcards_OneOfAnyUntypedField,
  subtitle?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  user?: wildcards_OneOfAnyUntypedField,
|};
export type StoryDetailed = {|
  action?: wildcards_OneOfAnyUntypedField,
  aux_fields?: wildcards_OneOfAnyUntypedField,
  background_colour?: wildcards_OneOfAnyUntypedField,
  button_text?: wildcards_OneOfAnyUntypedField,
  closeup_id?: wildcards_OneOfAnyUntypedField,
  container_type?: wildcards_OneOfAnyUntypedField,
  content_ids?: wildcards_OneOfAnyUntypedField,
  copy?: wildcards_OneOfAnyUntypedField,
  custom_properties?: wildcards_OneOfAnyUntypedField,
  display_options?: wildcards_OneOfAnyUntypedField,
  dynamic_insertion_options?: wildcards_OneOfAnyUntypedField,
  experience?: wildcards_OneOfAnyUntypedField,
  experience_extra_context?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  mapped_display_options?: wildcards_OneOfAnyUntypedField,
  objects?: wildcards_OneOfAnyUntypedField,
  product?: wildcards_OneOfAnyUntypedField,
  referring_source?: wildcards_OneOfAnyUntypedField,
  related_interests?: wildcards_OneOfAnyUntypedField,
  relationships?: wildcards_OneOfAnyUntypedField,
  search_referring_source?: wildcards_OneOfAnyUntypedField,
  selected_interests?: wildcards_OneOfAnyUntypedField,
  slot?: wildcards_OneOfAnyUntypedField,
  story_type?: wildcards_OneOfAnyUntypedField,
  subtitle?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  user?: wildcards_OneOfAnyUntypedField,
|};
export type StoryPinDataCustom = {|
  has_product_pins?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  last_edited?: wildcards_OneOfAnyUntypedField,
  mentioned_users?: wildcards_OneOfAnyUntypedField,
  metadata?: wildcards_OneOfAnyUntypedField,
  page_count?: wildcards_OneOfAnyUntypedField,
  pages?: wildcards_OneOfAnyUntypedField,
  pages_preview?: wildcards_OneOfAnyUntypedField,
  product_pins?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type StoryPinDataDetailed = {|
  has_product_pins?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  last_edited?: wildcards_OneOfAnyUntypedField,
  mentioned_users?: wildcards_OneOfAnyUntypedField,
  metadata?: wildcards_OneOfAnyUntypedField,
  page_count?: wildcards_OneOfAnyUntypedField,
  pages?: wildcards_OneOfAnyUntypedField,
  product_pins?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type StoryPinDataSummary = {|
  has_product_pins?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  last_edited?: wildcards_OneOfAnyUntypedField,
  mentioned_users?: wildcards_OneOfAnyUntypedField,
  metadata?: wildcards_OneOfAnyUntypedField,
  page_count?: wildcards_OneOfAnyUntypedField,
  pages?: wildcards_OneOfAnyUntypedField,
  product_pins?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type StorySummary = {|
  action?: wildcards_OneOfAnyUntypedField,
  aux_fields?: wildcards_OneOfAnyUntypedField,
  background_colour?: wildcards_OneOfAnyUntypedField,
  button_text?: wildcards_OneOfAnyUntypedField,
  closeup_id?: wildcards_OneOfAnyUntypedField,
  container_type?: wildcards_OneOfAnyUntypedField,
  content_ids?: wildcards_OneOfAnyUntypedField,
  copy?: wildcards_OneOfAnyUntypedField,
  custom_properties?: wildcards_OneOfAnyUntypedField,
  display_options?: wildcards_OneOfAnyUntypedField,
  dynamic_insertion_options?: wildcards_OneOfAnyUntypedField,
  experience?: wildcards_OneOfAnyUntypedField,
  experience_extra_context?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  mapped_display_options?: wildcards_OneOfAnyUntypedField,
  objects?: wildcards_OneOfAnyUntypedField,
  referring_source?: wildcards_OneOfAnyUntypedField,
  relationships?: wildcards_OneOfAnyUntypedField,
  slot?: wildcards_OneOfAnyUntypedField,
  story_type?: wildcards_OneOfAnyUntypedField,
  subtitle?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  user?: wildcards_OneOfAnyUntypedField,
|};
export type SubModel_AdTargetingAttribution = {|
  geo_postal_code?: string,
  geo_region?: string,
  is_age_matched?: boolean,
  is_behavior_targeting_matched?: boolean,
  is_customer_list_matched?: boolean,
  is_geo_postal_code_matched?: boolean,
  is_geo_region_matched?: boolean,
  is_shopping_retargeting_matched?: boolean,
|};
export type SubModel_AltLink = {| domain?: string, url?: string |};
export type SubModel_AnalyticsStats = {|
  clickthrough?: number,
  closeup?: number,
  impression?: number,
  last_updated?: string,
  save?: number,
  video_average_time?: number,
  video_p95_views?: number,
  video_start?: number,
  video_total_time?: number,
  video_views?: number,
|};
export type SubModel_AppleId = {| apple_id?: string |};
export type SubModel_Attribution = {|
  author_name?: ?string,
  author_url?: ?string,
  cc_url?: string,
  embed?: SubModel_Embed,
  embed_url?: string,
  height?: string,
  provider_favicon_url?: string,
  provider_icon_url?: string,
  provider_name?: string,
  provider_url?: string,
  rich_site_name?: string,
  title?: ?string,
  url?: string,
  width?: string,
|};
export type SubModel_BestBoard = {| id?: string, url?: string |};
export type SubModel_Breadcrumbs = {|
  breadcrumb_url?: string,
  display_name?: string,
  full_local_url?: string,
|};
export type SubModel_CanonicalTerm = {| id?: number |};
export type SubModel_CategoryMap = {|
  category_type?: string,
  images?: {| [key: string]: SubModel_Thumbnails |},
  key?: string,
  name?: string,
|};
export type SubModel_CinematicData = {|
  duration?: number,
  height?: number,
  images?: {| [key: string]: SubModel_ImageDetails |},
  signature?: string,
  simple_cinematic_data?: boolean,
  src?: string,
  type?: string,
  width?: number,
|};
export type SubModel_ClickThroughLinkQuality = {|
  alternate_links?: $ReadOnlyArray<SubModel_AltLink>,
  is_inaccessible?: boolean,
|};
export type SubModel_CollaboratorInviteCount = {|
  accepted?: number,
  contact_request_not_approved?: number,
  denied?: number,
  new?: number,
  pending_approval?: number,
|};
export type SubModel_CreatorRecommendationReason = {|
  reason_description?: string,
  reason_str?: string,
  recommendation_reason_description?: string,
  recommendation_reason_details?: string,
  recommendation_reason_type?: number,
|};
export type SubModel_DomainTrackingFormat = {|
  base_url_regex?: string,
  query_params?: $ReadOnlyArray<string>,
  type?: number,
|};
export type SubModel_DynamicAdData = {|
  assets?: SubModel_DynamicAdDataAssets,
|};
export type SubModel_DynamicAdDataAssets = {|
  cta_text?: string,
  position?: number,
  type?: string,
|};
export type SubModel_Embed = {|
  height?: ?number,
  src?: string,
  subtype?: string,
  type?: string,
  width?: ?number,
|};
export type SubModel_FeedbackOptionsWithRecommendationReason = {|
  menu_options?:
    | FeedbackOptionsCustom
    | FeedbackOptionsDetailed
    | FeedbackOptionsSummary,
  recommendation_reason?: ?string,
|};
export type SubModel_GatekeeperExperiment = {| group?: string, key?: string |};
export type SubModel_ImageCrop = {| max_y?: number, min_y?: number |};
export type SubModel_ImageDetails = {|
  domain_color?: string,
  height?: number,
  type?: string,
  url?: string,
  width?: number,
|};
export type SubModel_ImageDimensions = {| height?: number, width?: number |};
export type SubModel_Interests = {|
  estimate?: number,
  id?: number,
  name?: string,
  score?: string,
  type?: string,
|};
export type SubModel_IsConnected = {| is_connected?: boolean |};
export type SubModel_MinimalModel = {| id?: string |};
export type SubModel_Nags = {| message?: string, type?: string |};
export type SubModel_PhoneCountryCode = {|
  code?: string,
  phone_code?: string,
|};
export type SubModel_Pin360Metadata = {| stereo?: string, type?: string |};
export type SubModel_PinAnalyticsStats = {|
  "24h"?: SubModel_AnalyticsStats,
  "24h_realtime"?: SubModel_AnalyticsStats,
  "30d"?: SubModel_AnalyticsStats,
  "30d_realtime"?: SubModel_AnalyticsStats,
  "7d"?: SubModel_AnalyticsStats,
  "7d_realtime"?: SubModel_AnalyticsStats,
  "90d"?: SubModel_AnalyticsStats,
  "90d_realtime"?: SubModel_AnalyticsStats,
  all_time?: SubModel_AnalyticsStats,
  all_time_realtime?: SubModel_AnalyticsStats,
  type?: string,
|};
export type SubModel_PlaceHours = {|
  days?: string,
  open?: $ReadOnlyArray<SubModel_PlaceHoursOpen>,
|};
export type SubModel_PlaceHoursOpen = {| end?: string, start?: string |};
export type SubModel_PrivacyPolicyRules = {|
  send_events_to_ad_networks?: boolean,
  send_events_to_facebook?: boolean,
  send_marketing_data?: boolean,
  send_pixel?: boolean,
|};
export type SubModel_PromotedButton = {|
  promote_button_destination?: string,
  promote_button_text?: string,
  show_promote_button?: boolean,
|};
export type SubModel_ReactionCount = {|
  "0"?: number,
  "1"?: number,
  "2"?: number,
  "3"?: number,
  "4"?: number,
  "5"?: number,
  "6"?: number,
  "7"?: number,
  "8"?: number,
  "9"?: number,
  "10"?: number,
  "11"?: number,
  "12"?: number,
  "13"?: number,
|};
export type SubModel_RecommendationReason = {|
  reason?: string,
  reason_id?: string,
  reason_id_str?: string,
  reason_image?: string,
  through_interest?: string,
  through_properties?: {| [key: string]: $ReadOnlyArray<string> |},
|};
export type SubModel_ResurrectionInfo = {|
  id?: string,
  resurrection_dt?: ?string,
  type?: string,
|};
export type SubModel_SeasonalModules = {|
  id?: string,
  type?: string,
  url?: string,
|};
export type SubModel_SeoBreadcrumbs = {|
  image?: {| [key: string]: SubModel_Thumbnails |},
  name?: string,
  url?: string,
|};
export type SubModel_SeoTopicsPageStats = {|
  num_repinners?: number,
  num_tries?: number,
|};
export type SubModel_Sponsorship = {|
  creator?: UserCustom | UserDetailed | UserSummary,
  sponsor?: UserCustom | UserDetailed | UserSummary,
|};
export type SubModel_StelaVisualObject = {|
  detection?: boolean,
  h?: number,
  index?: number,
  is_stela?: boolean,
  label?: string,
  label_x?: number,
  label_y?: number,
  score?: number,
  show_on_closeup?: boolean,
  w?: number,
  x?: number,
  y?: number,
|};
export type SubModel_Story = {|
  container_type?: string,
  content?: SubModel_StoryContent,
  display_options?: SubModel_StoryDisplayOptions,
  id?: string,
  relationships?: SubModel_StoryRelationships,
  story_type?: string,
  title?: SubModel_StoryTitle,
  type?: string,
|};
export type SubModel_StoryContent = {|
  featured_ids?: $ReadOnlyArray<string>,
  objects?: $ReadOnlyArray<string>,
|};
export type SubModel_StoryDisplayOptions = {|
  action_button_location?: string,
  show_action_as_footer?: boolean,
  show_dismiss_button?: boolean,
|};
export type SubModel_StoryRelationships = {|
  action_override_deep_link?: string,
  action_override_text?: string,
  feedback_ids?: $ReadOnlyArray<string>,
  follow_ids?: $ReadOnlyArray<string>,
  highlighted_id?: string,
  objects?: $ReadOnlyArray<wildcards_OneOfAny>,
|};
export type SubModel_StoryTitle = {|
  args?: $ReadOnlyArray<SubModel_StoryTitleArg>,
  text?: string,
|};
export type SubModel_StoryTitleArg = {|
  id?: string,
  render?: string,
  type?: string,
|};
export type SubModel_TWITTER_FIELD_MAPPING_TYPES = {|
  description?: string,
  id?: string,
  location?: string,
  name?: string,
  profile_image_url?: string,
  screen_name?: string,
  url?: string,
|};
export type SubModel_Thumbnails = {|
  height?: number,
  url?: string,
  width?: number,
|};
export type SubModel_TitleAndDescription = {|
  description?: string,
  title?: string,
|};
export type SubModel_TopIngredient = {| name?: string, slug?: string |};
export type SubModel_USER_EMAIL_DATA = {|
  board_count?: ?number,
  connected_to_facebook?: ?boolean,
  connected_to_google?: ?boolean,
  email?: string,
  first_name?: string,
  followers_count?: ?number,
  full_name?: string,
  has_password?: ?boolean,
  id?: string,
  large_image_url?: string,
  locale?: string,
  medium_image_url?: string,
  partner?: ?SubModel_USER_EMAIL_DATA,
  pin_count?: ?number,
  small_image_url?: string,
  url?: string,
  username?: string,
  verified?: ?boolean,
  xlarge_image_url?: string,
|};
export type SubModel_UserBoard = {|
  new_board_created?: boolean,
  pin?: PinCustom | PinDetailed | PinSummary,
|};
export type SubModel_VerifiedIdentity = {| name?: string, verified?: boolean |};
export type SubModel_VideoStatusMessage = {|
  closeup?: string,
  subtitle?: string,
  title?: string,
|};
export type SubModel_ViewTag = {| id?: string, url?: string |};
export type SubModel_VirtualTryOnData = {|
  look_metadata?: SubModel_schemas_virtual_try_on_ttypes_LookMetadata,
  makeup_eyeshadow?: $ReadOnlyArray<SubModel_schemas_virtual_try_on_ttypes_ModifaceMakeupParams>,
  makeup_lipstick?: SubModel_schemas_virtual_try_on_ttypes_ModifaceMakeupParams,
  pin_type?: number,
  product_metadata?: SubModel_schemas_virtual_try_on_ttypes_ProductMetadata,
|};
export type SubModel_schemas_virtual_try_on_ttypes_LookMetadata = {|
  skinTone?: number,
|};
export type SubModel_schemas_virtual_try_on_ttypes_ModifaceMakeupParams = {|
  category?: string,
  colorAlpha?: number,
  colorHex?: string,
  envMappingIntensity?: number,
  glitter?: number,
  glitterBaseReflectivity?: number,
  glitterColorVariation?: number,
  glitterDensity?: number,
  glitterHex?: string,
  glitterSize?: number,
  glitterSizeVariation?: number,
  gloss?: number,
  glossDetail?: number,
  opacity?: number,
  placement?: string,
  shadeName?: string,
  wetness?: number,
|};
export type SubModel_schemas_virtual_try_on_ttypes_ProductMetadata = {|
  brandName?: string,
  country?: string,
  finish?: string,
  gtin?: string,
  layerShadeNames?: $ReadOnlyArray<string>,
  merchantName?: string,
  productLine?: string,
  productType?: number,
  shadeName?: string,
  sku?: string,
|};
export type TextTagCustom = {|
  id?: wildcards_UntypedSniffedString,
  length?: wildcards_OneOfAnyUntypedField,
  link?: wildcards_OneOfAnyUntypedField,
  metadata?: wildcards_OneOfAnyUntypedField,
  object_id?: wildcards_OneOfAnyUntypedField,
  offset?: wildcards_OneOfAnyUntypedField,
  tag_type?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type TextTagDetailed = {|
  id?: wildcards_UntypedSniffedString,
  length?: wildcards_OneOfAnyUntypedField,
  link?: wildcards_OneOfAnyUntypedField,
  metadata?: wildcards_OneOfAnyUntypedField,
  object_id?: wildcards_OneOfAnyUntypedField,
  offset?: wildcards_OneOfAnyUntypedField,
  tag_type?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type TextTagSummary = {|
  id?: wildcards_UntypedSniffedString,
  length?: wildcards_OneOfAnyUntypedField,
  link?: wildcards_OneOfAnyUntypedField,
  metadata?: wildcards_OneOfAnyUntypedField,
  object_id?: wildcards_OneOfAnyUntypedField,
  offset?: wildcards_OneOfAnyUntypedField,
  tag_type?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type UserCustom = {|
  about?: string,
  active?: boolean,
  ads_customize_from_conversion?: boolean,
  age_in_years?: ?number,
  allow_analytic_cookies?: ?boolean,
  allow_marketing_cookies?: ?boolean,
  allow_personalization_cookies?: ?boolean,
  archived_board_count?: number,
  blocked_by_me?: boolean,
  board_count?: number,
  brand?: ?SubModel_MinimalModel,
  browsing_level?: ?Enum_HomefeedBrowsingLevel,
  businesses?:
    | ?$ReadOnlyArray<UserCustom>
    | $ReadOnlyArray<UserDetailed>
    | $ReadOnlyArray<UserSummary>,
  can_enable_mfa?: boolean,
  can_upload_cover?: boolean,
  canonical_merchant_domain?: ?string,
  ccpa_opted_out?: boolean,
  commerce_module_data?: ?{| [key: string]: wildcards_OneOfAny |},
  community_display_name?: string,
  community_role?: ?Enum_CommunityRole,
  community_roles?: $ReadOnlyArray<Enum_CommunityRole>,
  connected_to_dropbox?: boolean,
  connected_to_etsy?: boolean,
  connected_to_facebook?: boolean,
  connected_to_google?: boolean,
  connected_to_gplus?: boolean,
  connected_to_instagram?: boolean,
  connected_to_microsoft?: boolean,
  connected_to_old_instagram_auth?: boolean,
  connected_to_rakuten?: boolean,
  connected_to_twitter?: boolean,
  connected_to_yahoo?: boolean,
  connected_to_youtube?: boolean,
  content_claiming_access?: boolean,
  country?: ?string,
  created_at?: string,
  custom_gender?: ?string,
  debug?: string | {| [key: string]: wildcards_OneOfAny |},
  default_payment?: ?{| [key: string]: wildcards_OneOfAny |},
  default_shipping?: ?{| [key: string]: wildcards_OneOfAny |},
  domain_url?: ?string,
  domain_verified?: boolean,
  eligible_profile_tabs?: $ReadOnlyArray<
    ProfileTabCustom | ProfileTabDetailed | ProfileTabSummary
  >,
  email?: ?string,
  exclude_from_search?: boolean,
  experiments?: {| [key: string]: SubModel_GatekeeperExperiment |},
  explicit_board_following_count?: number,
  explicit_user_following_count?: number,
  explicitly_followed_by_me?: boolean,
  facebook_id?: ?string,
  facebook_publish_stream_enabled?: boolean,
  facebook_timeline_enabled?: boolean,
  facebook_url?: ?string,
  fast_advertiser_info_has_any_managed_advertisers?: boolean,
  first_name?: ?string,
  followed_by_me?: boolean,
  follower_count?: number,
  following_count?: number,
  full_name?: string,
  gatekeeper_experiments?: {| [key: string]: SubModel_GatekeeperExperiment |},
  gender?: string,
  gplus_url?: ?string,
  group_board_count?: number,
  has_catalog?: boolean,
  has_completed_quiz?: boolean,
  has_custom_board_sorting_order?: boolean,
  has_done_app_install?: boolean,
  has_done_clickthrough?: boolean,
  has_done_closeup?: boolean,
  has_mfa_enabled?: boolean,
  has_password?: boolean,
  has_seen_notifications?: boolean,
  has_shopping_showcase?: boolean,
  has_showcase?: boolean,
  id?: string,
  image_large_url?: string,
  image_medium_url?: string,
  image_small_url?: string,
  image_xlarge_url?: string,
  implicitly_followed_by_me?: boolean,
  impressum_url?: ?string,
  indexed?: boolean,
  interest_following_count?: ?number,
  ip_country?: ?string,
  is_any_website_verified?: boolean,
  is_default_image?: boolean,
  is_eligible_for_shop_tab?: boolean,
  is_employee?: boolean,
  is_geo_eligible_for_creator_messaging?: boolean,
  is_high_risk?: boolean,
  is_known_facebook_user?: boolean,
  is_partner?: boolean,
  is_primary_website_verified?: boolean,
  is_story_pin_creator?: boolean,
  is_tastemaker?: boolean,
  is_third_party_ads_enabled?: boolean,
  is_verified_merchant?: boolean,
  is_write_banned?: boolean,
  joined_communities_count?: number,
  last_login_country?: ?string,
  last_name?: ?string,
  last_pin_done_time?: ?string,
  last_pin_like_time?: ?string,
  last_pin_save_time?: ?string,
  like_count?: number,
  listed_website_url?: ?string,
  locale?: ?string,
  location?: ?string,
  login_state?: ?Enum_LoginState,
  merchant_id?: string,
  mfa_backup_codes?:
    | ?$ReadOnlyArray<number>
    | $ReadOnlyArray<string>
    | $ReadOnlyArray<{| [key: string]: mixed |}>
    | $ReadOnlyArray<boolean>
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<$ReadOnlyArray<mixed>>,
  most_recent_board_sort_order?: ?Enum_UserBoardFeedSortTypes,
  nags?: $ReadOnlyArray<SubModel_Nags>,
  native_pin_count?: number,
  obfuscated_email?: string,
  owners?:
    | ?$ReadOnlyArray<UserCustom>
    | $ReadOnlyArray<UserDetailed>
    | $ReadOnlyArray<UserSummary>,
  partner?: ?PartnerCustom | PartnerDetailed | PartnerSummary,
  personalize_from_offsite_browsing?: boolean,
  phone_country?: ?string,
  phone_number?: ?string,
  phone_number_end?: ?string,
  phone_number_without_country?: ?string,
  pin_count?: number,
  pin_thumbnail_urls?: $ReadOnlyArray<string>,
  pins?:
    | ?$ReadOnlyArray<PinCustom>
    | $ReadOnlyArray<PinDetailed>
    | $ReadOnlyArray<PinSummary>,
  pins_done_count?: number,
  ppa_merchant_id?: string,
  profile_cover?:
    | ?ProfileCoverSourceCustom
    | ProfileCoverSourceDetailed
    | ProfileCoverSourceSummary,
  profile_cover_source?: ?{|
    [key: string]:
      | ProfileCoverSourceCustom
      | ProfileCoverSourceDetailed
      | ProfileCoverSourceSummary,
  |},
  profile_discovered_public?: ?boolean,
  profile_reach?: ?number,
  profile_url?: string,
  profile_views?: ?number,
  push_package_user_id?: string,
  recent_pin_images?: ?{| [key: string]: SubModel_ImageDetails |},
  recommendation_reason?: ?string,
  repins_from?:
    | ?$ReadOnlyArray<UserCustom>
    | $ReadOnlyArray<UserDetailed>
    | $ReadOnlyArray<UserSummary>,
  resurrection_info?: ?SubModel_ResurrectionInfo,
  scheduled_pin_count?: number,
  secret_board_count?: number,
  secret_boards_remaining?: number,
  should_show_creator_bubbles?: ?boolean,
  should_show_homefeed_ads?: boolean,
  show_creator_profile?: boolean,
  show_discovered_feed?: ?boolean,
  show_engagement_tab?: boolean,
  show_following_tab?: boolean,
  show_impressum?: boolean,
  storefront_management_enabled?: boolean,
  storefront_search_enabled?: boolean,
  story_pin_count?: number,
  subscribed_to_notifications?: boolean,
  tag?: ?string,
  third_party_ad_unit_id?: string,
  third_party_ads_config?: {| [key: string]: wildcards_OneOfAny |},
  third_party_app_id?: string,
  third_party_marketing_tracking_enabled?: boolean,
  triggerable_experiments?: {| [key: string]: string |},
  twitter_publish_enabled?: boolean,
  twitter_url?: ?string,
  type?: string,
  unverified_phone_country?: ?string,
  unverified_phone_number?: ?string,
  unverified_phone_number_without_country?: ?string,
  user_following_count?: number,
  user_recommendation_reason?: ?SubModel_CreatorRecommendationReason,
  username?: string,
  usmstate?: string,
  verified_domains?: $ReadOnlyArray<string>,
  verified_identity?: ?SubModel_VerifiedIdentity,
  verified_user_websites?: $ReadOnlyArray<string>,
  video_pin_count?: number,
  video_upload_allowed?: boolean,
  video_views?: number,
  website_url?: ?string,
|};
export type UserDetailed = {|
  about: string,
  active?: boolean,
  blocked_by_me?: boolean,
  board_count?: number,
  businesses?:
    | ?$ReadOnlyArray<UserCustom>
    | $ReadOnlyArray<UserDetailed>
    | $ReadOnlyArray<UserSummary>,
  canonical_merchant_domain?: ?string,
  commerce_module_data?: ?{| [key: string]: wildcards_OneOfAny |},
  created_at?: string,
  debug?: string | {| [key: string]: wildcards_OneOfAny |},
  domain_url: ?string,
  domain_verified: boolean,
  explicitly_followed_by_me?: boolean,
  first_name?: ?string,
  followed_by_me?: boolean,
  follower_count?: number,
  following_count?: number,
  full_name?: string,
  gender?: string,
  group_board_count?: number,
  has_custom_board_sorting_order?: boolean,
  id?: string,
  image_large_url?: string,
  image_medium_url?: string,
  image_small_url?: string,
  image_xlarge_url?: string,
  implicitly_followed_by_me?: boolean,
  impressum_url: ?string,
  indexed?: boolean,
  is_any_website_verified?: boolean,
  is_default_image: boolean,
  is_employee?: boolean,
  is_geo_eligible_for_creator_messaging?: boolean,
  is_partner?: boolean,
  is_primary_website_verified?: boolean,
  is_story_pin_creator?: boolean,
  is_verified_merchant?: boolean,
  last_login_country?: ?string,
  last_name?: ?string,
  last_pin_like_time?: ?string,
  last_pin_save_time?: ?string,
  like_count?: number,
  listed_website_url: ?string,
  location: ?string,
  merchant_id?: string,
  native_pin_count?: number,
  obfuscated_email?: string,
  partner: ?PartnerCustom | PartnerDetailed | PartnerSummary,
  pin_count?: number,
  pin_thumbnail_urls?: $ReadOnlyArray<string>,
  pins:
    | ?$ReadOnlyArray<PinCustom>
    | $ReadOnlyArray<PinDetailed>
    | $ReadOnlyArray<PinSummary>,
  pins_done_count?: number,
  profile_cover_source?: ?{|
    [key: string]:
      | ProfileCoverSourceCustom
      | ProfileCoverSourceDetailed
      | ProfileCoverSourceSummary,
  |},
  profile_discovered_public?: ?boolean,
  profile_reach?: ?number,
  profile_views?: ?number,
  recent_pin_images?: ?{| [key: string]: SubModel_ImageDetails |},
  recommendation_reason?: ?string,
  repins_from:
    | ?$ReadOnlyArray<UserCustom>
    | $ReadOnlyArray<UserDetailed>
    | $ReadOnlyArray<UserSummary>,
  should_show_creator_bubbles?: ?boolean,
  show_creator_profile?: boolean,
  show_discovered_feed?: ?boolean,
  show_impressum: boolean,
  subscribed_to_notifications?: boolean,
  tag?: ?string,
  type?: string,
  user_following_count?: number,
  user_recommendation_reason?: ?SubModel_CreatorRecommendationReason,
  username: string,
  verified_domains: $ReadOnlyArray<string>,
  verified_identity: ?SubModel_VerifiedIdentity,
  verified_user_websites: $ReadOnlyArray<string>,
  website_url: ?string,
|};
export type UserDidItDataCustom = {|
  comment_count?: wildcards_OneOfAnyUntypedField,
  details?: wildcards_OneOfAnyUntypedField,
  did_it_type?: wildcards_OneOfAnyUntypedField,
  dominant_color?: wildcards_OneOfAnyUntypedField,
  done_at?: wildcards_OneOfAnyUntypedField,
  has_recommended?: wildcards_OneOfAnyUntypedField,
  helpful_count?: number,
  id?: wildcards_UntypedSniffedString,
  image_signatures?: wildcards_OneOfAnyUntypedField,
  images?: wildcards_OneOfAnyUntypedField,
  like_count?: wildcards_OneOfAnyUntypedField,
  liked_by_me?: wildcards_OneOfAnyUntypedField,
  marked_helpful_by_me?: boolean,
  paragraph_blocks?: wildcards_OneOfAnyUntypedField,
  pin?: wildcards_OneOfAnyUntypedField,
  privacy?: wildcards_OneOfAnyUntypedField,
  reaction_by_me?: wildcards_OneOfAnyUntypedField,
  reaction_counts?: wildcards_OneOfAnyUntypedField,
  recommend_score?: wildcards_OneOfAnyUntypedField,
  recommendation_reason?: wildcards_OneOfAnyUntypedField,
  tags?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  user?: wildcards_OneOfAnyUntypedField,
  videos?: wildcards_OneOfAnyUntypedField,
|};
export type UserDidItDataDetailed = {|
  comment_count?: wildcards_OneOfAnyUntypedField,
  details?: wildcards_OneOfAnyUntypedField,
  did_it_type?: wildcards_OneOfAnyUntypedField,
  dominant_color?: wildcards_OneOfAnyUntypedField,
  done_at?: wildcards_OneOfAnyUntypedField,
  has_recommended?: wildcards_OneOfAnyUntypedField,
  helpful_count: number,
  id?: wildcards_UntypedSniffedString,
  image_signatures?: wildcards_OneOfAnyUntypedField,
  images?: wildcards_OneOfAnyUntypedField,
  like_count?: wildcards_OneOfAnyUntypedField,
  liked_by_me?: wildcards_OneOfAnyUntypedField,
  marked_helpful_by_me?: boolean,
  paragraph_blocks?: wildcards_OneOfAnyUntypedField,
  pin?: wildcards_OneOfAnyUntypedField,
  privacy?: wildcards_OneOfAnyUntypedField,
  reaction_by_me?: wildcards_OneOfAnyUntypedField,
  reaction_counts?: wildcards_OneOfAnyUntypedField,
  recommend_score?: wildcards_OneOfAnyUntypedField,
  recommendation_reason?: wildcards_OneOfAnyUntypedField,
  tags?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  user?: wildcards_OneOfAnyUntypedField,
  videos?: wildcards_OneOfAnyUntypedField,
|};
export type UserDidItDataSummary = {|
  comment_count?: wildcards_OneOfAnyUntypedField,
  details?: wildcards_OneOfAnyUntypedField,
  did_it_type?: wildcards_OneOfAnyUntypedField,
  done_at?: wildcards_OneOfAnyUntypedField,
  has_recommended?: wildcards_OneOfAnyUntypedField,
  helpful_count: number,
  id?: wildcards_UntypedSniffedString,
  image_signatures?: wildcards_OneOfAnyUntypedField,
  images?: wildcards_OneOfAnyUntypedField,
  like_count?: wildcards_OneOfAnyUntypedField,
  liked_by_me?: wildcards_OneOfAnyUntypedField,
  marked_helpful_by_me?: boolean,
  pin?: wildcards_OneOfAnyUntypedField,
  privacy?: wildcards_OneOfAnyUntypedField,
  reaction_by_me?: wildcards_OneOfAnyUntypedField,
  reaction_counts?: wildcards_OneOfAnyUntypedField,
  recommend_score?: wildcards_OneOfAnyUntypedField,
  recommendation_reason?: wildcards_OneOfAnyUntypedField,
  tags?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
  user?: wildcards_OneOfAnyUntypedField,
  videos?: wildcards_OneOfAnyUntypedField,
|};
export type UserSummary = {|
  first_name?: ?string,
  full_name?: string,
  gender?: string,
  id?: string,
  image_large_url?: string,
  image_medium_url?: string,
  image_small_url?: string,
  image_xlarge_url?: string,
  last_name?: ?string,
  type?: string,
  username: string,
|};
export type UserWebsiteCustom = {|
  domain_name?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  official_user?: wildcards_OneOfAnyUntypedField,
  path?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type UserWebsiteDetailed = {|
  domain_name?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  path?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type UserWebsiteSummary = {|
  domain_name?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  path?: wildcards_OneOfAnyUntypedField,
  type?: wildcards_UntypedSniffedString,
|};
export type User_Agent = string;
export type VideoCustom = {|
  annotations?: wildcards_OneOfAnyUntypedField,
  cover_image_url?: wildcards_OneOfAnyUntypedField,
  duration?: wildcards_OneOfAnyUntypedField,
  error?: wildcards_OneOfAnyUntypedField,
  frame_rate?: wildcards_OneOfAnyUntypedField,
  height?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  keywords?: wildcards_OneOfAnyUntypedField,
  signature?: wildcards_OneOfAnyUntypedField,
  status_code?: wildcards_OneOfAnyUntypedField,
  thumbnails_signatures?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  video_list?: wildcards_OneOfAnyUntypedField,
  video_urls?: wildcards_OneOfAnyUntypedField,
  width?: wildcards_OneOfAnyUntypedField,
|};
export type VideoDetailed = {|
  annotations?: wildcards_OneOfAnyUntypedField,
  cover_image_url?: wildcards_OneOfAnyUntypedField,
  duration?: wildcards_OneOfAnyUntypedField,
  error?: wildcards_OneOfAnyUntypedField,
  frame_rate?: wildcards_OneOfAnyUntypedField,
  height?: wildcards_OneOfAnyUntypedField,
  id?: wildcards_UntypedSniffedString,
  keywords?: wildcards_OneOfAnyUntypedField,
  signature?: wildcards_OneOfAnyUntypedField,
  status_code?: wildcards_OneOfAnyUntypedField,
  thumbnails_signatures?: wildcards_OneOfAnyUntypedField,
  title?: wildcards_OneOfAnyUntypedField,
  video_list?: wildcards_OneOfAnyUntypedField,
  video_urls?: wildcards_OneOfAnyUntypedField,
  width?: wildcards_OneOfAnyUntypedField,
|};
export type VideoSummary = {| id?: wildcards_UntypedSniffedString |};
export type X_Pinterest_AppState = string;
export type X_Pinterest_App_Type = {| $ref: Enum_AppType |};
export type X_Pinterest_Force_User_Country = string;
export type X_Pinterest_Force_User_Gender = string;
export type X_Pinterest_Force_User_Locale = string;
export type X_Pinterest_InstallId = {| $ref: Enum_AppType |};
export type X_Pinterest_Integration_Test_Mode = string;
export type X_Pinterest_Rid = {| $ref: Enum_AppType |};
export type X_Real_Ip = string;
export type add_fields = $ReadOnlyArray<string>;
export type api_error_1 = {|
  code: 1,
  message: "Invalid parameters.",
|} & ApiErrorEnvelope;
export type api_error_200 = {|
  code: 200,
  message: "Something went wrong while trying to save this Pin. Please try again.",
|} & ApiErrorEnvelope;
export type api_error_2031 = {|
  code: 2031,
  message: "Sorry! We couldn't find this board section.",
|} & ApiErrorEnvelope;
export type api_error_2034 = {|
  code: 2034,
  message: "Sorry! You can only have up to 500 sections on a board.",
|} & ApiErrorEnvelope;
export type api_error_2171 = {|
  code: 2171,
  message: "Please wait until your Pins are finished deleting.",
|} & ApiErrorEnvelope;
export type api_error_2172 = {|
  code: 2172,
  message: "Please wait until your Pins are finished moving.",
|} & ApiErrorEnvelope;
export type api_error_2173 = {|
  code: 2173,
  message: "Please wait until the previous board action finishes.",
|} & ApiErrorEnvelope;
export type api_error_2174 = {|
  code: 2174,
  message: "Sorry! We don't support performing this action on a board of this type.",
|} & ApiErrorEnvelope;
export type api_error_2611 = {|
  code: 2611,
  message: "Sorry! Something went wrong with your reaction.",
|} & ApiErrorEnvelope;
export type api_error_270 = {|
  code: 270,
  message: "Place not found.",
|} & ApiErrorEnvelope;
export type api_error_3 = {|
  code: 3,
  message: "Authorization failed.",
|} & ApiErrorEnvelope;
export type api_error_30 = {|
  code: 30,
  message: "User not found.",
|} & ApiErrorEnvelope;
export type api_error_32 = {|
  code: 32,
  message: "Something went wrong while trying to follow this user. Please try again.",
|} & ApiErrorEnvelope;
export type api_error_330 = {|
  code: 330,
  message: "Interest not found.",
|} & ApiErrorEnvelope;
export type api_error_40 = {|
  code: 40,
  message: "Board not found.",
|} & ApiErrorEnvelope;
export type api_error_50 = {|
  code: 50,
  message: "Pin not found.",
|} & ApiErrorEnvelope;
export type api_error_96 = {|
  code: 96,
  message: "Invalid board name.",
|} & ApiErrorEnvelope;
export type base_scheme = "http" | "https";
export type fields = $ReadOnlyArray<string>;
export type render_style = "detailed" | "summary" | "all_fields";
export type wildcards_OneOfAny = {| [key: string]: mixed |};
export type wildcards_OneOfAnyUntypedField = {| [key: string]: mixed |};
export type wildcards_UntypedSniffedBool = boolean;
export type wildcards_UntypedSniffedString = string;
