// @flow strict

export type GalleryItemDetailed = {| [key : string] : mixed |};
export type GalleryItemSummary = {| [key : string] : mixed |};
export type GalleryItemCustom = {| [key : string] : mixed |};
export type PinDetailed = {|
  access? : string[],
  activity? : ?number,
  ad_destination_url? : ?string,
  ad_match_reason? : ?number,
  ad_targeting_attribution? : {| [key : string] : mixed |},
  additional_hide_reasons? : number[],
  attribution? : ?{| [key : string] : mixed |},
  cacheable_id? : string,
  can_delete_did_it_and_comments? : boolean,
  category? : ?string,
  category_p2i? : ?number,
  click_through_link_quality? : ?{| [key : string] : mixed |},
  client_id? : ?string,
  closeup_description? : ?string,
  closeup_unified_description? : ?string,
  closeup_unified_title? : ?string,
  closeup_user_note? : ?string,
  comment_count? : number,
  comments_disabled? : boolean,
  content_sensitivity? : {| [key : string] : mixed |},
  created_at? : ?string,
  cta_text? : ?string,
  dark_profile_link? : string,
  debug_info_html? : ?string,
  description? : ?string,
  destination_url_type? : ?number,
  did_it_disabled? : boolean,
  domain? : string,
  domain_tracking_params? : | number[]
    | string[]
    | {| [key : string] : mixed |}[]
    | boolean[]
    | number[]
    | mixed[][],
  dominant_color? : ?string,
  done_by_board_contributors? : boolean,
  edited_fields? : string[],
  embed? : ?{| [key : string] : mixed |},
  feedback_options? : ?{| [key : string] : mixed |},
  grid_description? : ?string,
  grid_title? : string,
  grid_title_ads_experiment? : string,
  has_been_promoted? : boolean,
  has_required_attribution_provider? : boolean,
  hashtags? : string[],
  headline_text? : string,
  id? : string,
  image_did_it_count? : ?number,
  image_large_size_pixels? : ?{| [key : string] : mixed |},
  image_large_size_points? : ?{| [key : string] : mixed |},
  image_large_url? : ?string,
  image_medium_size_pixels? : ?{| [key : string] : mixed |},
  image_medium_size_points? : ?{| [key : string] : mixed |},
  image_medium_url? : ?string,
  image_signature? : string,
  image_square_size_pixels? : ?{| [key : string] : mixed |},
  image_square_size_points? : ?{| [key : string] : mixed |},
  image_square_url? : ?string,
  is_best_tried_it? : ?boolean,
  is_blocked? : boolean,
  is_cpc_ad? : boolean,
  is_downstream_promotion? : boolean,
  is_eligible_for_brand_catalog? : boolean,
  is_eligible_for_cta? : boolean,
  is_eligible_for_web_closeup? : boolean,
  is_full_width? : boolean,
  is_ghost? : boolean,
  is_hidden? : boolean,
  is_native? : ?boolean,
  is_oos_product? : boolean,
  is_playable? : boolean,
  is_porn_domain? : boolean,
  is_prefetch_enabled? : ?boolean,
  is_promotable? : ?boolean,
  is_promoted? : boolean,
  is_quick_promotable? : boolean,
  is_quick_promotable_by_pinner? : boolean,
  is_repin? : boolean,
  is_scene? : boolean,
  is_shopping_ad? : boolean,
  is_spam_domain? : boolean,
  is_stale_product? : boolean,
  is_uploaded? : boolean,
  is_video? : boolean,
  is_whitelisted_for_tried_it? : boolean,
  link? : ?string,
  price_currency? : string,
  price_value? : number,
  repin_count? : number,
  title? : ?string,
  tracked_link? : ?string,
  tracking_params? : ?string,
  type? : string,
|};
export type PinSummary = {|
  attribution? : ?{| [key : string] : mixed |},
  cacheable_id? : string,
  comment_count? : number,
  created_at? : ?string,
  description? : ?string,
  domain? : string,
  id? : string,
  image_large_size_pixels? : ?{| [key : string] : mixed |},
  image_large_size_points? : ?{| [key : string] : mixed |},
  image_large_url? : ?string,
  image_medium_size_pixels? : ?{| [key : string] : mixed |},
  image_medium_size_points? : ?{| [key : string] : mixed |},
  image_medium_url? : ?string,
  image_square_size_pixels? : ?{| [key : string] : mixed |},
  image_square_size_points? : ?{| [key : string] : mixed |},
  image_square_url? : ?string,
  is_downstream_promotion? : boolean,
  is_playable? : boolean,
  is_repin? : boolean,
  is_uploaded? : boolean,
  is_video? : boolean,
  link? : ?string,
  price_currency? : string,
  price_value? : number,
  repin_count? : number,
  title? : ?string,
  tracked_link? : ?string,
  tracking_params? : ?string,
  type? : string,
|};
export type PinCustom = {|
  access? : string[],
  activity? : ?number,
  ad_destination_url? : ?string,
  ad_match_reason? : ?number,
  ad_targeting_attribution? : {| [key : string] : mixed |},
  additional_hide_reasons? : number[],
  attribution? : ?{| [key : string] : mixed |},
  cacheable_id? : string,
  can_delete_did_it_and_comments? : boolean,
  category? : ?string,
  category_p2i? : ?number,
  cinematic_data? : {| [key : string] : mixed |},
  click_through_action? : number,
  click_through_link_quality? : ?{| [key : string] : mixed |},
  client_id? : ?string,
  closeup_description? : ?string,
  closeup_unified_description? : ?string,
  closeup_unified_title? : ?string,
  closeup_user_note? : ?string,
  comment_count? : number,
  comments_disabled? : boolean,
  content_sensitivity? : {| [key : string] : mixed |},
  created_at? : ?string,
  creative_types? : ?string[],
  cta_text? : ?string,
  dark_profile_link? : string,
  debug_info_html? : ?string,
  description? : ?string,
  description_html? : string,
  destination_url_type? : ?number,
  did_it_disabled? : boolean,
  domain? : string,
  domain_tracking_params? : | number[]
    | string[]
    | {| [key : string] : mixed |}[]
    | boolean[]
    | number[]
    | mixed[][],
  dominant_color? : ?string,
  done_by_board_contributors? : boolean,
  done_by_me? : boolean,
  edited_fields? : string[],
  embed? : ?{| [key : string] : mixed |},
  feedback_options? : ?{| [key : string] : mixed |},
  gallery? : {| [key : string] : mixed |},
  grid_description? : ?string,
  grid_title? : string,
  grid_title_ads_experiment? : string,
  has_bad_category? : ?boolean,
  has_been_promoted? : boolean,
  has_male_category? : ?boolean,
  has_required_attribution_provider? : boolean,
  hashtags? : string[],
  headline_text? : string,
  id? : string,
  image_did_it_count? : ?number,
  image_large_size_pixels? : ?{| [key : string] : mixed |},
  image_large_size_points? : ?{| [key : string] : mixed |},
  image_large_url? : ?string,
  image_medium_size_pixels? : ?{| [key : string] : mixed |},
  image_medium_size_points? : ?{| [key : string] : mixed |},
  image_medium_url? : ?string,
  image_signature? : string,
  image_square_size_pixels? : ?{| [key : string] : mixed |},
  image_square_size_points? : ?{| [key : string] : mixed |},
  image_square_url? : ?string,
  images? : {| [key : string] : mixed |},
  is_best_tried_it? : ?boolean,
  is_blocked? : boolean,
  is_cinematic? : boolean,
  is_cpc_ad? : boolean,
  is_downstream_promotion? : boolean,
  is_eligible_for_aggregated_comments? : boolean,
  is_eligible_for_brand_catalog? : boolean,
  is_eligible_for_cta? : boolean,
  is_eligible_for_flashlight_shopping? : boolean,
  is_eligible_for_pdp? : boolean,
  is_eligible_for_related_products? : boolean,
  is_eligible_for_responses? : boolean,
  is_eligible_for_reverse_stela? : boolean,
  is_eligible_for_stela_categories? : boolean,
  is_eligible_for_web_closeup? : boolean,
  is_full_width? : boolean,
  is_ghost? : boolean,
  is_hidden? : boolean,
  is_native? : ?boolean,
  is_native_video? : ?boolean,
  is_oos_product? : boolean,
  is_playable? : boolean,
  is_porn_domain? : boolean,
  is_post_reranked? : boolean,
  is_prefetch_enabled? : ?boolean,
  is_promotable? : ?boolean,
  is_promoted? : boolean,
  is_quick_promotable? : boolean,
  is_quick_promotable_by_pinner? : boolean,
  is_repin? : boolean,
  is_scene? : boolean,
  is_shopping_ad? : boolean,
  is_spam_domain? : boolean,
  is_stale_product? : boolean,
  is_uploaded? : boolean,
  is_video? : boolean,
  is_virtual_try_on? : boolean,
  is_whitelisted_for_tried_it? : boolean,
  link? : ?string,
  price_currency? : string,
  price_value? : number,
  repin_count? : number,
  title? : ?string,
  tracked_link? : ?string,
  tracking_params? : ?string,
  type? : string,
  upsell_audience_size? : ?{| [key : string] : mixed |},
|};
export type BoardActionLockDetailed = {| is_origin? : ?boolean |};
export type BoardActionLockSummary = {| is_origin? : ?boolean |};
export type BoardActionLockCustom = {| is_origin? : ?boolean |};
export type CollaboratorInviteDetailed = {| is_acceptable? : ?boolean |};
export type CollaboratorInviteSummary = {| is_acceptable? : ?boolean |};
export type CollaboratorInviteCustom = {| is_acceptable? : ?boolean |};
export type PinTypeFilterDetailed = {|
  id? : string,
  pin_type? : number,
  text? : string,
  type? : string,
|};
export type PinTypeFilterSummary = {|
  id? : string,
  pin_type? : number,
  text? : string,
  type? : string,
|};
export type PinTypeFilterCustom = {|
  id? : string,
  pin_type? : number,
  text? : string,
  type? : string,
|};
export type BoardDetailed = {|
  access? : string[],
  allow_homefeed_recommendations? : boolean,
  board_activity_count? : number,
  board_note_count? : ?number,
  board_order_modified_at? : ?string,
  category? : ?string,
  collab_board_email? : boolean,
  collaborated_by_me? : boolean,
  collaborator_count? : number,
  collaborator_invites_enabled? : boolean,
  collaborator_permissions? : number[],
  collaborator_permissions_setting? : number,
  collaborator_requests_enabled? : boolean,
  created_at? : ?string,
  debug? : ?string,
  description? : ?string,
  event_date? : ?string,
  event_start_date? : ?string,
  followed_by_me? : boolean,
  follower_count? : number,
  has_pending_invite? : boolean,
  id? : string,
  ideas_url? : string,
  image_cover_hd_url? : ?string,
  image_cover_url? : ?string,
  image_thumbnail_url? : string,
  image_thumbnail_urls? : ?{| [key : string] : mixed |},
  images? : ?{| [key : string] : mixed |},
  is_collaborative? : boolean,
  is_eligible_for_seasonal_share_treatment? : boolean,
  layout? : string,
  map_id? : string,
  name? : string,
  pin_count? : number,
  predicted_category? : ?string,
  privacy? : string,
  recommendation_reason? : ?string,
  should_show_board_activity? : boolean,
  should_show_shop_feed? : boolean,
  topic? : ?string,
  type? : string,
  url? : string,
  viewer_collaborator_join_requested? : boolean,
  viewer_invitation? : ?{| [key : string] : mixed |},
|};
export type BoardSummary = {|
  board_order_modified_at? : ?string,
  category? : ?string,
  collaborated_by_me? : boolean,
  created_at? : ?string,
  followed_by_me? : boolean,
  id? : string,
  image_thumbnail_url? : string,
  is_collaborative? : boolean,
  layout? : string,
  name? : string,
  type? : string,
  url? : string,
|};
export type BoardCustom = {|
  access? : string[],
  allow_homefeed_recommendations? : boolean,
  annotations? : ?string[],
  archived_by_me_at? : ?string,
  blocking_actions? : ( BoardActionLockCustom | BoardActionLockDetailed | BoardActionLockSummary )[],
  board_activity_count? : number,
  board_note_count? : ?number,
  board_order_modified_at? : ?string,
  board_owner_has_active_ads? : boolean,
  category? : ?string,
  collab_board_email? : boolean,
  collaborated_by_me? : boolean,
  collaborator_count? : number,
  collaborator_invites_enabled? : boolean,
  collaborator_permissions? : number[],
  collaborator_permissions_setting? : number,
  collaborator_requests_enabled? : boolean,
  cover_images? : ?{| [key : string] : mixed |},
  cover_pin? : ?{| [key : string] : mixed |},
  created_at? : ?string,
  debug? : ?string,
  description? : ?string,
  eligible_pin_type_filters? : ( PinTypeFilterCustom | PinTypeFilterDetailed | PinTypeFilterSummary )[],
  event_date? : ?string,
  event_start_date? : ?string,
  followed_by_me? : boolean,
  follower_count? : number,
  has_active_ads? : boolean,
  has_custom_cover? : boolean,
  has_fresh_more_ideas_tab? : boolean,
  has_new_activity? : boolean,
  has_pending_invite? : boolean,
  id? : string,
  ideas_deep_link_url? : string,
  ideas_url? : string,
  image_cover_hd_url? : ?string,
  image_cover_url? : ?string,
  image_thumbnail_url? : string,
  image_thumbnail_urls? : ?{| [key : string] : mixed |},
  images? : ?{| [key : string] : mixed |},
  is_collaborative? : boolean,
  is_eligible_for_homefeed_tabs? : boolean,
  is_eligible_for_seasonal_share_treatment? : boolean,
  layout? : string,
  map_id? : string,
  name? : string,
  pin_count? : number,
  place_recs_count? : number,
  place_saves_count? : number,
  places_enabled? : boolean,
  predicted_category? : ?string,
  privacy? : string,
  protected? : boolean,
  recommendation_reason? : ?string,
  section_count? : number,
  sectionless_pin_count? : number,
  should_show_board_activity? : boolean,
  should_show_more_ideas? : boolean,
  should_show_shop_feed? : boolean,
  topic? : ?string,
  type? : string,
  url? : string,
  viewer_collaborator_join_requested? : boolean,
  viewer_invitation? : ?{| [key : string] : mixed |},
|};
export type UserDetailed = {|
  about? : string,
  active? : boolean,
  blocked_by_me? : boolean,
  board_count? : number,
  canonical_merchant_domain? : ?string,
  commerce_module_data? : ?{| [key : string] : mixed |},
  created_at? : string,
  debug? : {| [key : string] : mixed |},
  domain_url? : ?string,
  domain_verified? : boolean,
  explicitly_followed_by_me? : boolean,
  first_name? : ?string,
  followed_by_me? : boolean,
  follower_count? : number,
  following_count? : number,
  full_name? : string,
  gender? : string,
  group_board_count? : number,
  has_custom_board_sorting_order? : boolean,
  id? : string,
  image_large_url? : string,
  image_medium_url? : string,
  image_small_url? : string,
  image_xlarge_url? : string,
  implicitly_followed_by_me? : boolean,
  impressum_url? : ?string,
  indexed? : boolean,
  is_any_website_verified? : boolean,
  is_default_image? : boolean,
  is_employee? : boolean,
  is_geo_eligible_for_creator_messaging? : boolean,
  is_partner? : boolean,
  is_primary_website_verified? : boolean,
  is_verified_merchant? : boolean,
  last_login_country? : ?string,
  last_name? : ?string,
  last_pin_like_time? : ?string,
  last_pin_save_time? : ?string,
  like_count? : number,
  listed_website_url? : ?string,
  location? : ?string,
  merchant_id? : string,
  native_pin_count? : number,
  obfuscated_email? : string,
  pin_count? : number,
  pin_thumbnail_urls? : string[],
  pins_done_count? : number,
  profile_cover_source? : ?string,
  profile_discovered_public? : boolean,
  profile_reach? : ?number,
  recent_pin_images? : ?{| [key : string] : mixed |},
  recommendation_reason? : ?string,
  show_creator_profile? : boolean,
  show_discovered_feed? : boolean,
  show_impressum? : boolean,
  tag? : ?string,
  type? : string,
  user_following_count? : number,
  user_recommendation_reason? : ?{| [key : string] : mixed |},
  username? : string,
  verified_domains? : string[],
  verified_identity? : ?{| [key : string] : mixed |},
  verified_user_websites? : string[],
  website_url? : ?string,
|};
export type UserSummary = {|
  first_name? : ?string,
  full_name? : string,
  gender? : string,
  id? : string,
  image_large_url? : string,
  image_medium_url? : string,
  image_small_url? : string,
  image_xlarge_url? : string,
  last_name? : ?string,
  type? : string,
  username? : string,
|};
export type UserCustom = {|
  about? : string,
  active? : boolean,
  ads_customize_from_conversion? : boolean,
  age_in_years? : number,
  allow_analytic_cookies? : boolean,
  allow_marketing_cookies? : boolean,
  allow_personalization_cookies? : boolean,
  archived_board_count? : number,
  blocked_by_me? : boolean,
  board_count? : number,
  browsing_level? : ?string,
  can_enable_mfa? : boolean,
  can_upload_cover? : boolean,
  canonical_merchant_domain? : ?string,
  ccpa_opted_out? : boolean,
  commerce_module_data? : ?{| [key : string] : mixed |},
  community_display_name? : string,
  community_role? : ?string,
  community_roles? : | number[]
    | string[]
    | {| [key : string] : mixed |}[]
    | boolean[]
    | number[]
    | mixed[][],
  connected_to_dropbox? : boolean,
  connected_to_etsy? : boolean,
  connected_to_facebook? : boolean,
  connected_to_google? : boolean,
  connected_to_gplus? : boolean,
  connected_to_instagram? : boolean,
  connected_to_microsoft? : boolean,
  connected_to_old_instagram_auth? : boolean,
  connected_to_rakuten? : boolean,
  connected_to_twitter? : boolean,
  connected_to_yahoo? : boolean,
  connected_to_youtube? : boolean,
  country? : ?string,
  created_at? : string,
  custom_gender? : ?string,
  debug? : {| [key : string] : mixed |},
  default_payment? : ?{| [key : string] : mixed |},
  default_shipping? : ?{| [key : string] : mixed |},
  domain_url? : ?string,
  domain_verified? : boolean,
  eligible_profile_tabs? : | number[]
    | string[]
    | {| [key : string] : mixed |}[]
    | boolean[]
    | number[]
    | mixed[][],
  email? : ?string,
  exclude_from_search? : boolean,
  experiments? : {| [key : string] : mixed |},
  explicit_board_following_count? : number,
  explicit_user_following_count? : number,
  explicitly_followed_by_me? : boolean,
  facebook_id? : ?string,
  facebook_publish_stream_enabled? : boolean,
  facebook_timeline_enabled? : boolean,
  facebook_url? : ?string,
  fast_advertiser_info_has_any_managed_advertisers? : boolean,
  first_name? : ?string,
  followed_by_me? : boolean,
  follower_count? : number,
  following_count? : number,
  full_name? : string,
  gatekeeper_experiments? : {| [key : string] : mixed |},
  gender? : string,
  gplus_url? : ?string,
  group_board_count? : number,
  has_catalog? : boolean,
  has_completed_quiz? : boolean,
  has_content_claiming_access? : boolean,
  has_custom_board_sorting_order? : boolean,
  has_done_app_install? : boolean,
  has_done_clickthrough? : boolean,
  has_done_closeup? : boolean,
  has_mfa_enabled? : boolean,
  has_password? : boolean,
  has_seen_notifications? : boolean,
  has_shopping_showcase? : boolean,
  has_showcase? : boolean,
  id? : string,
  image_large_url? : string,
  image_medium_url? : string,
  image_small_url? : string,
  image_xlarge_url? : string,
  implicitly_followed_by_me? : boolean,
  impressum_url? : ?string,
  indexed? : boolean,
  interest_following_count? : number,
  ip_country? : ?string,
  is_any_website_verified? : boolean,
  is_default_image? : boolean,
  is_eligible_for_shop_tab? : boolean,
  is_employee? : boolean,
  is_geo_eligible_for_creator_messaging? : boolean,
  is_high_risk? : boolean,
  is_known_facebook_user? : boolean,
  is_partner? : boolean,
  is_primary_website_verified? : boolean,
  is_tastemaker? : boolean,
  is_third_party_ads_enabled? : boolean,
  is_verified_merchant? : boolean,
  is_write_banned? : boolean,
  joined_communities_count? : number,
  last_login_country? : ?string,
  last_name? : ?string,
  last_pin_done_time? : ?string,
  last_pin_like_time? : ?string,
  last_pin_save_time? : ?string,
  like_count? : number,
  listed_website_url? : ?string,
  locale? : ?string,
  location? : ?string,
  login_state? : ?number,
  merchant_id? : string,
  mfa_backup_codes? : | number[]
    | string[]
    | {| [key : string] : mixed |}[]
    | boolean[]
    | number[]
    | mixed[][],
  most_recent_board_sort_order? : string,
  nags? : | number[]
    | string[]
    | {| [key : string] : mixed |}[]
    | boolean[]
    | number[]
    | mixed[][],
  native_pin_count? : number,
  obfuscated_email? : string,
  personalize_from_offsite_browsing? : boolean,
  phone_country? : ?string,
  phone_number? : ?string,
  phone_number_end? : ?string,
  phone_number_without_country? : ?string,
  pin_count? : number,
  pin_thumbnail_urls? : string[],
  pins_done_count? : number,
  ppa_merchant_id? : string,
  profile_cover_source? : ?string,
  profile_discovered_public? : boolean,
  profile_reach? : ?number,
  profile_url? : string,
  push_package_user_id? : string,
  recent_pin_images? : ?{| [key : string] : mixed |},
  recommendation_reason? : ?string,
  resurrection_info? : ?{| [key : string] : mixed |},
  scheduled_pin_count? : number,
  secret_board_count? : number,
  secret_boards_remaining? : number,
  should_show_homefeed_ads? : boolean,
  show_creator_profile? : boolean,
  show_discovered_feed? : boolean,
  show_engagement_tab? : boolean,
  show_impressum? : boolean,
  storefront_management_enabled? : boolean,
  storefront_search_enabled? : boolean,
  story_pin_count? : number,
  tag? : ?string,
  third_party_ad_unit_id? : string,
  third_party_ads_config? : {| [key : string] : mixed |},
  third_party_app_id? : string,
  third_party_marketing_tracking_enabled? : boolean,
  triggerable_experiments? : {| [key : string] : mixed |},
  twitter_publish_enabled? : boolean,
  twitter_url? : ?string,
  type? : string,
  unverified_phone_country? : ?string,
  unverified_phone_number? : ?string,
  unverified_phone_number_without_country? : ?string,
  user_following_count? : number,
  user_recommendation_reason? : ?{| [key : string] : mixed |},
  username? : string,
  usmstate? : string,
  verified_domains? : string[],
  verified_identity? : ?{| [key : string] : mixed |},
  verified_user_websites? : string[],
  video_pin_count? : number,
  video_upload_allowed? : boolean,
  video_views? : number,
  website_url? : ?string,
|};
export type ResponseStatus = "success" | "failure";
export type ApiEnvelope = {|
  code : number,
  data : | number
    | string
    | {| [key : string] : mixed |}
    | boolean
    | number
    | mixed[],
  debug_logs? : {| [key : string] : mixed |}[],
  endpoint_name : string,
  message : string,
  message_detail? : string,
  sensitivity? : {| [key : string] : mixed |},
  status : ResponseStatus,
|};
export type ApiErrorEnvelope = {|
  code : number,
  data : | number
    | string
    | {| [key : string] : mixed |}
    | boolean
    | number
    | mixed[],
  debug_logs? : {| [key : string] : mixed |}[],
  endpoint_name : string,
  error? : {| [key : string] : mixed |},
  message : string,
  message_detail? : string,
  sensitivity? : {| [key : string] : mixed |},
  status : ResponseStatus,
|};
export type ApiBookmarkedEnvelope = {|
  bookmark : string,
  code : number,
  data : | number
    | string
    | {| [key : string] : mixed |}
    | boolean
    | number
    | mixed[],
  debug_logs? : {| [key : string] : mixed |}[],
  endpoint_name : string,
  message : string,
  message_detail? : string,
  sensitivity? : {| [key : string] : mixed |},
  status : ResponseStatus,
|};
export type fields = string[];
export type add_fields = string[];
export type base_scheme = "http" | "https";
export type render_style = "detailed" | "summary" | "all_fields";
