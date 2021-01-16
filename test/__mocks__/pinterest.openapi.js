// @flow strict
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
export type AttributionsCustom = {| [key: string]: mixed |};
export type AttributionsDetailed = {| [key: string]: mixed |};
export type AttributionsSummary = {| [key: string]: mixed |};
export type BoardActionLockCustom = {| is_origin?: ?boolean |};
export type BoardActionLockDetailed = {| is_origin?: ?boolean |};
export type BoardActionLockSummary = {| is_origin?: ?boolean |};
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
  category?: ?Enum_BoardCategories,
  collab_board_email?: boolean,
  collaborated_by_me?: boolean,
  collaborator_count?: number,
  collaborator_invite_counts?: SubModel_CollaboratorInviteCount,
  collaborator_invites_enabled?: boolean,
  collaborator_permissions?: $ReadOnlyArray<number>,
  collaborator_permissions_setting?: ?number,
  collaborator_requests_enabled?: boolean,
  cover_images?: ?SubModel_ImageDetails,
  cover_pin?: ?SubModel_CoverPin,
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
  image_thumbnail_urls?: ?{| [key: string]: mixed |},
  images?: ?{| [key: string]: mixed |},
  is_collaborative?: boolean,
  is_eligible_for_homefeed_tabs?: ?boolean,
  is_eligible_for_seasonal_share_treatment?: ?boolean,
  layout?: Enum_BoardLayouts,
  map_id?: string,
  name?: string,
  pin_count?: number,
  place_recs_count?: ?number,
  place_saves_count?: ?number,
  places_enabled?: boolean,
  predicted_category?: ?Enum_CategoryDim,
  privacy?: Enum_BoardPrivacy,
  protected?: boolean,
  recommendation_reason?: ?string,
  section_count?: ?number,
  sectionless_pin_count?: number,
  should_show_board_activity?: boolean,
  should_show_more_ideas?: boolean,
  should_show_shop_feed?: boolean,
  topic?: ?string,
  type?: string,
  url?: string,
  viewer_collaborator_join_requested?: boolean,
  viewer_contact_request?: ?{| [key: string]: mixed |},
  viewer_invitation?: ?{| [key: string]: mixed |},
|};
export type BoardDetailed = {|
  access?: $ReadOnlyArray<Enum_Access>,
  allow_homefeed_recommendations?: boolean,
  board_activity_count?: number,
  board_note_count?: ?number,
  board_order_modified_at: ?string,
  category: ?Enum_BoardCategories,
  collab_board_email?: boolean,
  collaborated_by_me?: boolean,
  collaborator_count?: number,
  collaborator_invites_enabled: boolean,
  collaborator_permissions?: $ReadOnlyArray<number>,
  collaborator_permissions_setting?: ?number,
  collaborator_requests_enabled: boolean,
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
  image_thumbnail_urls?: ?{| [key: string]: mixed |},
  images?: ?{| [key: string]: mixed |},
  is_collaborative?: boolean,
  is_eligible_for_seasonal_share_treatment?: ?boolean,
  layout?: Enum_BoardLayouts,
  map_id?: string,
  name: string,
  pin_count?: number,
  predicted_category?: ?Enum_CategoryDim,
  privacy?: Enum_BoardPrivacy,
  recommendation_reason?: ?string,
  should_show_board_activity?: boolean,
  should_show_shop_feed?: boolean,
  topic?: ?string,
  type?: string,
  url?: string,
  viewer_collaborator_join_requested?: boolean,
  viewer_invitation?: ?{| [key: string]: mixed |},
|};
export type BoardSummary = {|
  board_order_modified_at: ?string,
  category: ?Enum_BoardCategories,
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
export type CollaboratorInviteCustom = {| is_acceptable?: ?boolean |};
export type CollaboratorInviteDetailed = {| is_acceptable?: ?boolean |};
export type CollaboratorInviteSummary = {| is_acceptable?: ?boolean |};
export type ContactRequestCustom = {| [key: string]: mixed |};
export type ContactRequestDetailed = {| [key: string]: mixed |};
export type ContactRequestSummary = {| [key: string]: mixed |};
export type Enum_Access = "delete" | "tag" | "write";
export type Enum_ActionType =
  | "ADVERTISER_FOLLOW"
  | "ADVERTISER_PROFILE_CLICK"
  | "ADVERTISER_UNFOLLOW"
  | "APP_ENGAGEMENT"
  | "APP_INSTALL"
  | "APP_INSTALL_CLICKTHROUGH"
  | "APP_INSTALL_CONVERSION"
  | "APP_INSTALL_IMPRESSION"
  | "APP_INSTALL_VARIABLE_ATTR"
  | "ASSOCIATED_INSERTION"
  | "BAD_CLICK_3S"
  | "BILLABLE_ENGAGEMENT"
  | "BOARD_CLOSEUP"
  | "BOARD_ENGAGEMENT"
  | "BOARD_FOLLOW"
  | "BOARD_HIDE"
  | "BOARD_IMPRESSION"
  | "BOARD_SEND"
  | "BUY_BUTTON_CLICK"
  | "CAROUSEL_SLOT_CLICKTHROUGH"
  | "CAROUSEL_SLOT_IMPRESSION"
  | "CAROUSEL_SLOT_SIDESWIPE"
  | "CAROUSEL_SLOT_SIDESWIPE_GRID"
  | "CAROUSEL_SLOT_SIDESWIPE_ONE_TAP"
  | "CAROUSEL_SLOT_SIDESWIPE_TWO_TAP"
  | "CAROUSEL_SLOT_VIEW_WEBSITE"
  | "CART_CALCULATE_PRICE"
  | "CART_CREATE"
  | "CLICKTHROUGH"
  | "CLICKTHROUGH_APP_INSTALL"
  | "CLICKTHROUGH_AUTOML_MODEL_OUTPUT"
  | "CLICKTHROUGH_END"
  | "CLICKTHROUGH_LINEAR_MODEL_LOGISTIC_OUTPUT"
  | "CLICKTHROUGH_LINEAR_MODEL_OUTPUT"
  | "CLICKTHROUGH_LINEAR_MODEL_SIGMOID_OUTPUT"
  | "CLICKTHROUGH_NATIVE_TF"
  | "CLICKTHROUGH_NEW_ADS_PROD"
  | "CLICKTHROUGH_TO_APP_INSTALL"
  | "CLICKTHROUGH_TO_GOOD_CLICKTHROUGH_30S"
  | "CLICKTHROUGH_TO_WEB_ADD_TO_CART"
  | "CLICKTHROUGH_TO_WEB_CHECKOUT"
  | "CLICKTHROUGH_TO_WEB_CUSTOM"
  | "CLICKTHROUGH_TO_WEB_LEAD"
  | "CLICKTHROUGH_TO_WEB_SESSION"
  | "CLICKTHROUGH_TO_WEB_SIGNUP"
  | "CLOSEUP"
  | "CLOSEUP_TO_WEB_CONVERSION"
  | "COLLECTION_ITEM_CLICKTHROUGH"
  | "COLLECTION_ITEM_CLICKTHROUGH_END"
  | "COLLECTION_ITEM_CLOSEUP"
  | "COLLECTION_ITEM_IMPRESSION"
  | "COLLECTION_ITEM_REPIN"
  | "COLLECTION_PIN_CLICKTHROUGH"
  | "COLLECTION_PIN_CLICKTHROUGH_END"
  | "DARK_CPC_QUALITY_TRIMMED"
  | "DESTINATION_WEBSITE_VIEW"
  | "DESTINATION_WEBSITE_VIEW_END"
  | "FLAG"
  | "GOOD_CLICKTHROUGH"
  | "GOOD_CLICKTHROUGH_10S"
  | "GOOD_CLICKTHROUGH_30S"
  | "GOOD_CLICKTHROUGH_30S_AUTOML_MODEL_OUTPUT"
  | "GOOD_CLICKTHROUGH_30S_LINEAR_MODEL_OUTPUT"
  | "GRID_PIN_CLICK"
  | "HIDE"
  | "IMPRESSION"
  | "IMPRESSION_TO_POSTCLICK_SIGNUP"
  | "IMPRESSION_TO_POSTCLICK_WEB_CHECKOUT"
  | "IMPRESSION_TO_POSTVIEW_APP_INSTALL"
  | "IMPRESSION_TO_POSTVIEW_WEB_ADD_TO_CART"
  | "IMPRESSION_TO_POSTVIEW_WEB_CHECKOUT"
  | "IMPRESSION_TO_POSTVIEW_WEB_LEAD"
  | "IMPRESSION_TO_POSTVIEW_WEB_SIGNUP"
  | "INSERTION"
  | "INTERNAL_ONE_TAP_V2_CLICKTHOURGH"
  | "INTERNAL_WEB_CLOSEUP"
  | "INTERNAL_WEB_CLOSEUP_APP_INSTALL"
  | "INTERNAL_WEB_CLOSEUP_TO_APP_INSTALL"
  | "LANDING_PAGE_NEGATIVE_FEEDBACK"
  | "LANDING_PAGE_POSITIVE_FEEDBACK"
  | "LIKE"
  | "LONG_2T700_TO_WEB_ADD_TO_CART"
  | "LONG_2T700_TO_WEB_CHECKOUT"
  | "LONG_2T700_TO_WEB_CUSTOM"
  | "LONG_2T700_TO_WEB_LEAD"
  | "LONG_2T700_TO_WEB_SIGNUP"
  | "LONG_700_TO_WEB_ADD_TO_CART"
  | "LONG_700_TO_WEB_CHECKOUT"
  | "LONG_700_TO_WEB_CUSTOM"
  | "LONG_700_TO_WEB_LEAD"
  | "LONG_700_TO_WEB_SIGNUP"
  | "LONG_770_TO_WEB_ADD_TO_CART"
  | "LONG_770_TO_WEB_CHECKOUT"
  | "LONG_770_TO_WEB_CUSTOM"
  | "LONG_770_TO_WEB_LEAD"
  | "LONG_770_TO_WEB_SIGNUP"
  | "MAX_GOOD_CLICKTHROUGH_30S"
  | "NEGATIVE_ENGAGEMENT"
  | "OFFLINE_CONVERSION"
  | "ONE_TAP_V2_WEBSITE_VIEW"
  | "OUTBOUND_CLICK"
  | "OUTBOUND_CLICK_END"
  | "PIN_CLICK"
  | "PIN_CLICK_END"
  | "POINT_OF_SALE"
  | "POSITIVE_ENGAGEMENT"
  | "POST_CLOSEUP_SCROLLUP"
  | "PURCHASE"
  | "QUALITY"
  | "RELEVANCE"
  | "REPIN"
  | "REPIN_AUTOML_MODEL_OUTPUT"
  | "RICH_BUTTON_CLICK"
  | "SCROLLUP_AUTOML_MODEL_OUTPUT"
  | "SEND"
  | "TEMPORARY_APP_INSTALL_CLICKTHROUGH"
  | "TEMPORARY_BIDDED_CPM"
  | "TEMPORARY_BIDDED_CPM_VIDEO"
  | "TEMPORARY_IMPRESSION_VIDEO"
  | "TEMPORARY_MRC_CPV_VIDEO"
  | "TEMPORARY_SHOPPING"
  | "TEMPORARY_TRAFFIC_CLICKTHROUGH_APP"
  | "TIMED_PAIR_END"
  | "UFR_CLICKTHROUGH"
  | "VIDEO_VIEW"
  | "VIDEO_VIEW_V2"
  | "VIDEO_VIEW_V2_CLOSEUP"
  | "VIDEO_VIEW_V2_CLOSEUP_FULLSCREEN"
  | "VIDEO_VIEW_V2_FEED"
  | "VIDEO_VIEW_V2_SEARCH"
  | "VIDEO_V_50_100P_VIDEODURATION"
  | "VIDEO_V_50_10SEC_OR_50P_VIDEODURATION"
  | "VIDEO_V_50_10SEC_OR_75P_VIDEODURATION"
  | "VIDEO_V_50_10SEC_OR_95P_VIDEODURATION_CLOSEUP"
  | "VIDEO_V_50_10SEC_OR_95P_VIDEODURATION_GRID"
  | "VIDEO_V_50_50P_VIDEODURATION"
  | "VIDEO_V_50_5SEC_OR_50P_VIDEODURATION"
  | "VIDEO_V_50_5SEC_OR_75P_VIDEODURATION"
  | "VIDEO_V_50_95P_VIDEODURATION"
  | "VIDEO_V_50_MRC"
  | "VIDEO_V_50_MRC_CLOSEUP"
  | "VIDEO_V_50_MRC_GRID"
  | "WEB_ADD_TO_CART"
  | "WEB_CHECKOUT"
  | "WEB_CONVERSION"
  | "WEB_CUSTOM"
  | "WEB_LEAD"
  | "WEB_PAGE_VISIT"
  | "WEB_SEARCH"
  | "WEB_SESSION"
  | "WEB_SIGNUP"
  | "WEB_SIGNUPLEADADDTOCARTCHECKOUT"
  | "WEB_VIEW_CATEGORY"
  | "WEB_WATCH_VIDEO";
export type Enum_BoardCategories =
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
export type Enum_CategoryDim =
  | "ANIMALS"
  | "ARCHITECTURE"
  | "ART"
  | "CARS_MOTORCYCLES"
  | "CELEBRITIES"
  | "DESIGN"
  | "DIY_CRAFTS"
  | "EDUCATION"
  | "FILM_MUSIC_BOOKS"
  | "FOOD_DRINK"
  | "FOR_DAD"
  | "GARDENING"
  | "GEEK"
  | "HAIR_BEAUTY"
  | "HEALTH_FITNESS"
  | "HISTORY"
  | "HOLIDAYS_EVENTS"
  | "HOME_DECOR"
  | "HUMOR"
  | "ILLUSTRATIONS_POSTERS"
  | "KIDS"
  | "MENS_FASHION"
  | "OUTDOORS"
  | "PHOTOGRAPHY"
  | "PRODUCTS"
  | "QUOTES"
  | "SCIENCE_NATURE"
  | "SPORTS"
  | "TATTOOS"
  | "TECHNOLOGY"
  | "TRAVEL"
  | "WEDDINGS"
  | "WOMENS_FASHION";
export type Enum_ClickThroughAction = number;
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
  | "THIRD_PARTY"
  | "VIDEO";
export type Enum_CreativeTypes =
  | "app"
  | "cinematic"
  | "max_video"
  | "regular"
  | "video";
export type Enum_DestinationUrlType = number;
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
export type Enum_LoginState = number;
export type Enum_MatchReason = number;
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
export type Enum_PinQualityState = number;
export type Enum_Privacy = "public" | "secret";
export type Enum_ReactionTypeEnum = number;
export type Enum_RecommendationComplaintReason = number;
export type Enum_RelatedModule = number;
export type Enum_TopInterest = number;
export type Enum_UserBoardFeedSortTypes =
  | "ALPHABETICAL"
  | "CUSTOM"
  | "GROUP_BOARDS_AT_TOP"
  | "LAST_PINNED_TO"
  | "NEWEST"
  | "OLDEST";
export type Enum_VideoStatus = number;
export type Enum_VirtualTryOnPinType = number;
export type FeedbackOptionsCustom = {| [key: string]: mixed |};
export type FeedbackOptionsDetailed = {| [key: string]: mixed |};
export type FeedbackOptionsSummary = {| [key: string]: mixed |};
export type FlexGridStyleCustom = {| [key: string]: mixed |};
export type FlexGridStyleDetailed = {| [key: string]: mixed |};
export type FlexGridStyleSummary = {| [key: string]: mixed |};
export type GalleryItemCustom = {| [key: string]: mixed |};
export type GalleryItemDetailed = {| [key: string]: mixed |};
export type GalleryItemSummary = {| [key: string]: mixed |};
export type PinCustom = {|
  access?: $ReadOnlyArray<Enum_Access>,
  activity?: ?Enum_ActionType,
  activity_timestamp?: ?number,
  ad_creative_type?: Enum_CreativeType,
  ad_destination_url?: ?string,
  ad_match_reason?: ?Enum_MatchReason,
  ad_targeting_attribution?: SubModel_AdTargetingAttribution,
  additional_hide_reasons?: $ReadOnlyArray<Enum_RecommendationComplaintReason>,
  alt_text?: ?string,
  analytics?: {| [key: string]: mixed |},
  attribution?: ?SubModel_Attribution,
  auto_alt_text?: ?string,
  cacheable_id?: string,
  can_delete_did_it_and_comments?: boolean,
  canonical_merchant_domain?: ?string,
  canonical_merchant_name?: ?string,
  category?: ?Enum_CategoryDim,
  category_p2i?: ?number,
  cinematic_data?: SubModel_CinematicData,
  click_through_action?: Enum_ClickThroughAction,
  click_through_link_quality?: ?SubModel_ClickThroughLinkQuality,
  client_id?: ?string,
  closeup_attribution?: ?{| [key: string]: mixed |},
  closeup_description?: ?string,
  closeup_unified_description?: ?string,
  closeup_unified_title?: ?string,
  closeup_user_note?: ?string,
  collage_pin_id?: ?string,
  collection_data_id?: ?string,
  comment_count?: number,
  comments_disabled?: boolean,
  content_sensitivity?: {| [key: string]: mixed |},
  created_at?: ?string,
  creative_types?: ?$ReadOnlyArray<Enum_CreativeTypes>,
  creator_analytics?: ?{| [key: string]: mixed |},
  cta_text?: ?string,
  dark_profile_link?: string,
  deb_ads?: $ReadOnlyArray<string>,
  deb_all_signals?: $ReadOnlyArray<string>,
  deb_content_quality?: $ReadOnlyArray<string>,
  deb_inclusive_product?: $ReadOnlyArray<string>,
  deb_shopping?: $ReadOnlyArray<string>,
  deb_trust_and_safety?: $ReadOnlyArray<string>,
  debug?: ?{| [key: string]: mixed |},
  debug_info_html?: ?string,
  description?: ?string,
  description_html?: string,
  destination_url_type?: ?Enum_DestinationUrlType,
  did_it_disabled?: boolean,
  domain?: string,
  domain_tracking_params?: $ReadOnlyArray<SubModel_DomainTrackingFormat>,
  dominant_color?: ?string,
  done_by_board_contributors?: boolean,
  done_by_me?: boolean,
  dynamic_ad_data?: SubModel_DynamicAdData,
  edited_fields?: $ReadOnlyArray<string>,
  embed?: ?SubModel_Embed,
  feedback_options?: ?SubModel_FeedbackOptionsWithRecommendationReason,
  flex_grid_style?: ?{| [key: string]: mixed |},
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
  image_signature?: string,
  image_square_size_pixels?: ?SubModel_ImageDimensions,
  image_square_size_points?: ?SubModel_ImageDimensions,
  image_square_url?: ?string,
  images?: {| [key: string]: mixed |},
  influencer_pin_stats?: ?{| [key: string]: mixed |},
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
  is_native_video?: ?boolean,
  is_oos_product?: boolean,
  is_playable?: boolean,
  is_porn_domain?: boolean,
  is_post_reranked?: boolean,
  is_prefetch_enabled?: ?boolean,
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
  link?: ?string,
  manual_interest_tags?: ?{| [key: string]: mixed |},
  matched_user_interest?: ?string,
  meta_title_description?: SubModel_TitleAndDescription,
  method?: Enum_PinMethods,
  mobile_link?: ?string,
  multiple_links?: ?$ReadOnlyArray<string>,
  not_promotable_reason?: ?Enum_NoPromotableReason,
  pin360?: ?SubModel_Pin360Metadata,
  pin_attribution?:
    | ?AttributionsCustom
    | AttributionsDetailed
    | AttributionsSummary,
  pin_stats?: ?{| [key: string]: mixed |},
  pinned_to_board?: ?{| [key: string]: mixed |},
  prefetch_asset_urls?: $ReadOnlyArray<string>,
  price_currency?: string,
  price_value?: number,
  privacy?: Enum_Privacy,
  promote_button?: SubModel_PromotedButton,
  promoted_android_deep_link?: string,
  promoted_ios_deep_link?: string,
  promoted_is_congruency_enabled?: boolean,
  promoted_is_max_video?: boolean,
  promoted_is_opaque_onetap_enabled?: boolean,
  promoted_is_removable?: boolean,
  promoted_position?: ?number,
  quality_state?: Enum_PinQualityState,
  reaction_by_me?: Enum_ReactionTypeEnum,
  reaction_counts?: {| [key: string]: mixed |},
  recommendation_reason?: ?SubModel_RecommendationReason,
  related_module?: ?Enum_RelatedModule,
  repin_count?: number,
  requires_advertiser_attribution?: boolean,
  rich_merchant_name?: ?string,
  rich_recipe_top_ingredients?: $ReadOnlyArray<SubModel_TopIngredient>,
  root_pin_id?: string,
  scene_data?: {| [key: string]: mixed |},
  search_query?: ?string,
  shareable_url?: string,
  shopping_flags?: $ReadOnlyArray<number>,
  should_autoplay?: boolean,
  should_prefetch?: boolean,
  should_preload?: boolean,
  source_type?: ?string,
  sponsorship?: ?SubModel_Sponsorship,
  story_pin_data_id?: ?string,
  third_party_pin_owner?: ?{| [key: string]: mixed |},
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
  video_signature?: ?string,
  video_status?: ?Enum_VideoStatus,
  video_status_message?: ?SubModel_VideoStatusMessage,
  view_tags?: ?$ReadOnlyArray<SubModel_ViewTag>,
  virtual_try_on_data?: {| [key: string]: mixed |},
  virtual_try_on_type?: Enum_VirtualTryOnPinType,
  visual_objects?: $ReadOnlyArray<SubModel_StelaVisualObject>,
  visual_search_attrs?: ?{| [key: string]: mixed |},
|};
export type PinDetailed = {|
  access?: $ReadOnlyArray<Enum_Access>,
  activity?: ?Enum_ActionType,
  activity_timestamp?: ?number,
  ad_creative_type?: Enum_CreativeType,
  ad_destination_url?: ?string,
  ad_match_reason: ?Enum_MatchReason,
  ad_targeting_attribution?: SubModel_AdTargetingAttribution,
  additional_hide_reasons: $ReadOnlyArray<Enum_RecommendationComplaintReason>,
  alt_text: ?string,
  analytics?: {| [key: string]: mixed |},
  attribution?: ?SubModel_Attribution,
  auto_alt_text?: ?string,
  cacheable_id?: string,
  can_delete_did_it_and_comments?: boolean,
  canonical_merchant_name?: ?string,
  category?: ?Enum_CategoryDim,
  category_p2i?: ?number,
  click_through_link_quality?: ?SubModel_ClickThroughLinkQuality,
  client_id?: ?string,
  closeup_attribution?: ?{| [key: string]: mixed |},
  closeup_description?: ?string,
  closeup_unified_description?: ?string,
  closeup_unified_title?: ?string,
  closeup_user_note?: ?string,
  collage_pin_id?: ?string,
  collection_data_id?: ?string,
  comment_count?: number,
  comments_disabled?: boolean,
  content_sensitivity?: {| [key: string]: mixed |},
  created_at: ?string,
  cta_text?: ?string,
  dark_profile_link?: string,
  deb_ads?: $ReadOnlyArray<string>,
  deb_all_signals?: $ReadOnlyArray<string>,
  deb_content_quality?: $ReadOnlyArray<string>,
  deb_inclusive_product?: $ReadOnlyArray<string>,
  deb_shopping?: $ReadOnlyArray<string>,
  deb_trust_and_safety?: $ReadOnlyArray<string>,
  debug?: ?{| [key: string]: mixed |},
  debug_info_html: ?string,
  description?: ?string,
  destination_url_type?: ?Enum_DestinationUrlType,
  did_it_disabled?: boolean,
  domain?: string,
  domain_tracking_params?: $ReadOnlyArray<SubModel_DomainTrackingFormat>,
  dominant_color?: ?string,
  done_by_board_contributors?: boolean,
  dynamic_ad_data?: SubModel_DynamicAdData,
  edited_fields?: $ReadOnlyArray<string>,
  embed?: ?SubModel_Embed,
  feedback_options?: ?SubModel_FeedbackOptionsWithRecommendationReason,
  flex_grid_style: ?{| [key: string]: mixed |},
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
  image_signature: string,
  image_square_size_pixels?: ?SubModel_ImageDimensions,
  image_square_size_points?: ?SubModel_ImageDimensions,
  image_square_url?: ?string,
  influencer_pin_stats?: ?{| [key: string]: mixed |},
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
  is_prefetch_enabled?: ?boolean,
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
  link?: ?string,
  manual_interest_tags?: ?{| [key: string]: mixed |},
  matched_user_interest: ?string,
  meta_title_description?: SubModel_TitleAndDescription,
  method?: Enum_PinMethods,
  multiple_links?: ?$ReadOnlyArray<string>,
  not_promotable_reason?: ?Enum_NoPromotableReason,
  pin360?: ?SubModel_Pin360Metadata,
  pin_attribution?:
    | ?AttributionsCustom
    | AttributionsDetailed
    | AttributionsSummary,
  pin_stats?: ?{| [key: string]: mixed |},
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
  quality_state?: Enum_PinQualityState,
  recommendation_reason?: ?SubModel_RecommendationReason,
  repin_count: number,
  requires_advertiser_attribution?: boolean,
  rich_recipe_top_ingredients?: $ReadOnlyArray<SubModel_TopIngredient>,
  scene_data?: {| [key: string]: mixed |},
  search_query?: ?string,
  shareable_url?: string,
  shopping_flags?: $ReadOnlyArray<number>,
  should_autoplay: boolean,
  should_prefetch?: boolean,
  should_preload?: boolean,
  source_type?: ?string,
  sponsorship?: ?SubModel_Sponsorship,
  story_pin_data_id?: ?string,
  third_party_pin_owner?: ?{| [key: string]: mixed |},
  title: ?string,
  top_interest?: Enum_TopInterest,
  tracked_link?: ?string,
  tracking_params?: ?string,
  type?: string,
  unified_user_note?: ?string,
  user_mention_tags?: ?$ReadOnlyArray<
    TextTagCustom | TextTagDetailed | TextTagSummary
  >,
  video_status?: ?Enum_VideoStatus,
  video_status_message?: ?SubModel_VideoStatusMessage,
  view_tags: ?$ReadOnlyArray<SubModel_ViewTag>,
  visual_search_attrs?: ?{| [key: string]: mixed |},
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
export type ResponseStatus = "success" | "failure";
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
  author_name?: string,
  author_url?: string,
  cc_url?: string,
  embed?: SubModel_Embed,
  embed_url?: string,
  height?: string,
  provider_favicon_url?: string,
  provider_name?: string,
  provider_url?: string,
  rich_site_name?: string,
  title?: string,
  url?: string,
  width?: string,
|};
export type SubModel_CinematicData = {|
  duration?: number,
  height?: number,
  images?: {| [key: string]: mixed |},
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
export type SubModel_CoverPin = {|
  image_signature?: string,
  pin_id?: string,
  timestamp?: number,
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
  height?: number,
  src?: string,
  subtype?: string,
  type?: string,
  width?: number,
|};
export type SubModel_FeedbackOptionsWithRecommendationReason = {|
  menu_options?:
    | FeedbackOptionsCustom
    | FeedbackOptionsDetailed
    | FeedbackOptionsSummary,
  recommendation_reason?: string,
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
export type SubModel_Nags = {| message?: string, type?: string |};
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
export type SubModel_RecommendationReason = {|
  reason?: string,
  reason_id?: string,
  reason_id_str?: string,
  reason_image?: string,
  through_interest?: string,
  through_properties?: {| [key: string]: mixed |},
|};
export type SubModel_ResurrectionInfo = {| resurrection_dt?: string |};
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
export type SubModel_TWITTER_FIELD_MAPPING_TYPES = {|
  description?: string,
  id?: string,
  location?: string,
  name?: string,
  profile_image_url?: string,
  screen_name?: string,
  url?: string,
|};
export type SubModel_TitleAndDescription = {|
  description?: string,
  title?: string,
|};
export type SubModel_TopIngredient = {| name?: string, slug?: string |};
export type SubModel_UserBoard = {|
  new_board_created?: BoardCustom | BoardDetailed | BoardSummary,
  pin?: PinCustom | PinDetailed | PinSummary,
|};
export type SubModel_VerifiedIdentity = {| name?: string, verified?: boolean |};
export type SubModel_VideoStatusMessage = {|
  closeup?: string,
  subtitle?: string,
  title?: string,
|};
export type SubModel_ViewTag = {| id?: string, url?: string |};
export type TextTagCustom = {| [key: string]: mixed |};
export type TextTagDetailed = {| [key: string]: mixed |};
export type TextTagSummary = {| [key: string]: mixed |};
export type UserCustom = {|
  about?: string,
  active?: boolean,
  ads_customize_from_conversion?: boolean,
  age_in_years?: number,
  allow_analytic_cookies?: boolean,
  allow_marketing_cookies?: boolean,
  allow_personalization_cookies?: boolean,
  archived_board_count?: number,
  blocked_by_me?: boolean,
  board_count?: number,
  browsing_level?: ?Enum_HomefeedBrowsingLevel,
  can_enable_mfa?: boolean,
  can_upload_cover?: boolean,
  canonical_merchant_domain?: ?string,
  ccpa_opted_out?: boolean,
  commerce_module_data?: ?{| [key: string]: mixed |},
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
  country?: ?string,
  created_at?: string,
  custom_gender?: ?string,
  debug?: {| [key: string]: mixed |},
  default_payment?: ?{| [key: string]: mixed |},
  default_shipping?: ?{| [key: string]: mixed |},
  domain_url?: ?string,
  domain_verified?: boolean,
  eligible_profile_tabs?: $ReadOnlyArray<
    ProfileTabCustom | ProfileTabDetailed | ProfileTabSummary
  >,
  email?: ?string,
  exclude_from_search?: boolean,
  experiments?: {| [key: string]: mixed |},
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
  gatekeeper_experiments?: {| [key: string]: mixed |},
  gender?: string,
  gplus_url?: ?string,
  group_board_count?: number,
  has_catalog?: boolean,
  has_completed_quiz?: boolean,
  has_content_claiming_access?: boolean,
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
  interest_following_count?: number,
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
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<string>
    | $ReadOnlyArray<{| [key: string]: mixed |}>
    | $ReadOnlyArray<boolean>
    | $ReadOnlyArray<number>
    | $ReadOnlyArray<$ReadOnlyArray<mixed>>,
  most_recent_board_sort_order?: Enum_UserBoardFeedSortTypes,
  nags?: $ReadOnlyArray<SubModel_Nags>,
  native_pin_count?: number,
  obfuscated_email?: string,
  personalize_from_offsite_browsing?: boolean,
  phone_country?: ?string,
  phone_number?: ?string,
  phone_number_end?: ?string,
  phone_number_without_country?: ?string,
  pin_count?: number,
  pin_thumbnail_urls?: $ReadOnlyArray<string>,
  pins_done_count?: number,
  ppa_merchant_id?: string,
  profile_cover_source?: ?string,
  profile_discovered_public?: boolean,
  profile_reach?: ?number,
  profile_url?: string,
  push_package_user_id?: string,
  recent_pin_images?: ?{| [key: string]: mixed |},
  recommendation_reason?: ?string,
  resurrection_info?: ?SubModel_ResurrectionInfo,
  scheduled_pin_count?: number,
  secret_board_count?: number,
  secret_boards_remaining?: number,
  should_show_creator_bubbles?: boolean,
  should_show_homefeed_ads?: boolean,
  show_creator_profile?: boolean,
  show_discovered_feed?: boolean,
  show_engagement_tab?: boolean,
  show_following_tab?: boolean,
  show_impressum?: boolean,
  storefront_management_enabled?: boolean,
  storefront_search_enabled?: boolean,
  story_pin_count?: number,
  tag?: ?string,
  third_party_ad_unit_id?: string,
  third_party_ads_config?: {| [key: string]: mixed |},
  third_party_app_id?: string,
  third_party_marketing_tracking_enabled?: boolean,
  triggerable_experiments?: {| [key: string]: mixed |},
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
  canonical_merchant_domain?: ?string,
  commerce_module_data?: ?{| [key: string]: mixed |},
  created_at?: string,
  debug?: {| [key: string]: mixed |},
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
  listed_website_url?: ?string,
  location: ?string,
  merchant_id?: string,
  native_pin_count?: number,
  obfuscated_email?: string,
  pin_count?: number,
  pin_thumbnail_urls?: $ReadOnlyArray<string>,
  pins_done_count?: number,
  profile_cover_source?: ?string,
  profile_discovered_public?: boolean,
  profile_reach?: ?number,
  recent_pin_images?: ?{| [key: string]: mixed |},
  recommendation_reason?: ?string,
  should_show_creator_bubbles?: boolean,
  show_creator_profile?: boolean,
  show_discovered_feed?: boolean,
  show_impressum: boolean,
  tag?: ?string,
  type?: string,
  user_following_count?: number,
  user_recommendation_reason?: ?SubModel_CreatorRecommendationReason,
  username: string,
  verified_domains?: $ReadOnlyArray<string>,
  verified_identity: ?SubModel_VerifiedIdentity,
  verified_user_websites?: $ReadOnlyArray<string>,
  website_url?: ?string,
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
export type Wildcard_OneOfAny = {| [key: string]: mixed |};
export type add_fields = $ReadOnlyArray<string>;
export type api_error_200 = {|
  code: number,
  message: "Something went wrong while trying to save this Pin. Please try again.",
|} & ApiErrorEnvelope;
export type api_error_2034 = {|
  code: number,
  message: "Sorry! You can only have up to 500 sections on a board.",
|} & ApiErrorEnvelope;
export type api_error_2171 = {|
  code: number,
  message: "Please wait until your Pins are finished deleting.",
|} & ApiErrorEnvelope;
export type api_error_2172 = {|
  code: number,
  message: "Please wait until your Pins are finished moving.",
|} & ApiErrorEnvelope;
export type api_error_2173 = {|
  code: number,
  message: "Please wait until the previous board action finishes.",
|} & ApiErrorEnvelope;
export type api_error_2174 = {|
  code: number,
  message: "Sorry! We don't support performing this action on a board of this type.",
|} & ApiErrorEnvelope;
export type api_error_2611 = {|
  code: number,
  message: "Sorry! Something went wrong with your reaction.",
|} & ApiErrorEnvelope;
export type api_error_32 = {|
  code: number,
  message: "Something went wrong while trying to follow this user. Please try again.",
|} & ApiErrorEnvelope;
export type api_error_96 = {|
  code: number,
  message: "Invalid board name.",
|} & ApiErrorEnvelope;
export type base_scheme = "http" | "https";
export type fields = $ReadOnlyArray<string>;
export type render_style = "detailed" | "summary" | "all_fields";
