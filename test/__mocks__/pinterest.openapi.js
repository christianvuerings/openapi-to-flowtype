// @flow strict
export type Accept_Language = string;
export type AccountType =
  | ""
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
export type ActionType =
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
  | 163
  | 164
  | 165
  | 166
  | 167;
export type AdTargetingAttribution = {|
  geo_postal_code?: string,
  geo_region?: string,
  is_age_matched?: boolean,
  is_behavior_targeting_matched?: boolean,
  is_customer_list_matched?: boolean,
  is_geo_postal_code_matched?: boolean,
  is_geo_region_matched?: boolean,
  is_shopping_retargeting_matched?: boolean,
|};
export type AdditionalImages = {|
  canonical_images?: {| [key: string]: Thumbnails |},
  image_signature?: string,
|};
export type AddressMetadata = {|
  country?: ?string,
  id?: string,
  locality?: ?string,
  postal_code?: ?string,
  region?: ?string,
  street?: ?string,
  type?: "addressmetadata",
|};
export type AddressMetadataMany = $ReadOnlyArray<AddressMetadata>;
export type AdvisoryAction = {|
  button?: AdvisoryButton,
  description?: ?AdvisoryRichText,
  id?: string,
  title?: ?AdvisoryRichText,
  type?: "advisoryaction",
|};
export type AdvisoryActionMany = $ReadOnlyArray<AdvisoryAction>;
export type AdvisoryButton = {|
  aux_data?: {| [key: string]: wildcards_OneOfAny |},
  id?: string,
  link?: string,
  text?: string,
  type?: "advisorybutton",
|};
export type AdvisoryButtonMany = $ReadOnlyArray<AdvisoryButton>;
export type AdvisoryFooter = {|
  id?: string,
  link?: string,
  text?: string,
  type?: "advisoryfooter",
|};
export type AdvisoryFooterMany = $ReadOnlyArray<AdvisoryFooter>;
export type AdvisoryNotice = {|
  actions?: AdvisoryActionMany,
  description?: AdvisoryRichText,
  footer?: ?AdvisoryFooter,
  id?: string,
  style?: SensitivityAdvisoryNoticeStyleType,
  title?: string,
  type?: "advisorynotice",
|};
export type AdvisoryNoticeMany = $ReadOnlyArray<AdvisoryNotice>;
export type AdvisoryRichText = {|
  id?: string,
  text?: string,
  text_tags?: TextTagMany,
  type?: "advisoryrichtext",
|};
export type AdvisoryRichTextMany = $ReadOnlyArray<AdvisoryRichText>;
export type AggregateRatingMetadata = {|
  best_rating?: ?string,
  id?: string,
  name?: ?string,
  rating_count?: number,
  rating_value?: ?string,
  review_count?: ?number,
  type?: "aggregateratingmetadata",
|};
export type AggregateRatingMetadataMany = $ReadOnlyArray<AggregateRatingMetadata>;
export type AggregatedAppLinkMetadata = {|
  android?: ?AppLinkMetadata,
  ios?: ?AppLinkMetadata,
  ipad?: ?AppLinkMetadata,
  iphone?: ?AppLinkMetadata,
|};
export type AggregatedAppLinkMetadataMany = $ReadOnlyArray<AggregatedAppLinkMetadata>;
export type AggregatedDidItData = {|
  details_count?: number,
  images_count?: number,
  rating?: number,
  recommend_scores?: $ReadOnlyArray<Score>,
  recommended_count?: number,
  responses_count?: number,
  tags?: $ReadOnlyArray<string>,
  type?: "aggregateddiditdata",
  user_count?: number,
  videos_count?: number,
|};
export type AggregatedDidItDataMany = $ReadOnlyArray<AggregatedDidItData>;
export type AggregatedPinData = {|
  aggregated_stats?: AggregatedStats,
  catalog_collection_type?: number,
  comment_count?: number,
  creator_analytics?: ?PinAnalyticsStats,
  did_it_data?: ?AggregatedDidItData,
  has_xy_tags?: boolean,
  id?: string,
  image_signature?: string,
  is_dynamic_collections?: boolean,
  is_shop_the_look?: boolean,
  is_stela?: boolean,
  link?: string,
  pin_tags?: $ReadOnlyArray<PinTag>,
  pin_tags_chips?: $ReadOnlyArray<PinTagChip>,
  place_count?: number,
  places?: ?PlaceMany,
  root_pin_board_id?: ?number,
  shopping_rec_disabled?: boolean,
  type?: "aggregatedpindata",
|};
export type AggregatedPinDataMany = $ReadOnlyArray<AggregatedPinData>;
export type AggregatedStats = {| done?: number, saves?: number |};
export type AltLink = {| domain?: string, url?: string |};
export type AnnotationsWithLinks = {| name?: ?string, url?: ?string |};
export type AnonymousUser = {|
  gatekeeper_experiments?: {| [key: string]: GatekeeperExperiment |},
  id?: string,
  ip_country?: ?string,
  ip_region?: ?string,
  type?: "anonymous_user",
|};
export type AnonymousUserMany = $ReadOnlyArray<AnonymousUser>;
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
  sensitivity?: Sensitivity,
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
  sensitivity?: Sensitivity,
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
  sensitivity?: Sensitivity,
  status: ResponseStatus,
|};
export type AppLinkMetadata = {|
  app_id?: string,
  app_name?: ?string,
  app_url?: ?string,
|};
export type AppLinkMetadataMany = $ReadOnlyArray<AppLinkMetadata>;
export type AppType =
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
export type AppleId = {| apple_id?: string |};
export type ArticleAuxFields = {|
  action_url?: string,
  annotation_id?: number,
  module_in_feed?: boolean,
  module_position?: number,
  module_source_id?: number,
  module_style?: string,
|};
export type ArticleMetadata = {|
  authors?: PersonMetadataMany,
  date_published?: ?string,
  description?: ?string,
  id?: string,
  name?: string,
  type?: "articlemetadata",
|};
export type ArticleMetadataMany = $ReadOnlyArray<ArticleMetadata>;
export type ArticleThumbnail = {|
  height?: ?number,
  url?: string,
  width?: ?number,
|};
export type ArticleTitle = {|
  args?: $ReadOnlyArray<{| [key: string]: string |}>,
  format?: ?string,
  text?: ?string,
|};
export type Attribution = {|
  author_name?: ?string,
  author_url?: ?string,
  cc_url?: string,
  embed?: ?Embed,
  embed_url?: string,
  height?: string,
  provider_icon_url?: string,
  provider_name?: string,
  provider_url?: string,
  rich_site_name?: string,
  title?: ?string,
  url?: ?string,
  width?: string,
|};
export type Attributions = {|
  destination?: LinkedObject,
  element_type?: number,
  image_type?: ?"pin" | "user" | "board" | "interest",
  reason?: ?FormattedStringWithObjectLinks,
  shown?: LinkedObject,
  subtitle?: FormattedStringWithObjectLinks,
  title?: FormattedStringWithObjectLinks,
|};
export type AttributionsMany = $ReadOnlyArray<Attributions>;
export type Audio = {|
  artist_name?: string,
  audio_url?: string,
  description?: string,
  duration?: number,
  id?: string,
  provider_recording_id?: string,
  thumbnail_image_url?: string,
  title?: string,
  type?: "audio",
|};
export type AudioMany = $ReadOnlyArray<Audio>;
export type AvailabilityTypeEnum = 1 | 2 | 3 | 4;
export type BackendServerAction = {| server_action?: ?string |};
export type BackendServerActionMany = $ReadOnlyArray<BackendServerAction>;
export type BadgeType = "highlights" | "pickedforyou" | "trending";
export type BestBoard = {| id?: string, url?: string |};
export type BlockStyle = {|
  corner_radius?: number,
  height?: number,
  rotation?: number,
  width?: number,
  x_coord?: number,
  y_coord?: number,
|};
export type BlockStyleMany = $ReadOnlyArray<BlockStyle>;
export type Board = {|
  access?: $ReadOnlyArray<BoardAccess>,
  allow_homefeed_recommendations?: boolean,
  annotations?: ?$ReadOnlyArray<string>,
  archived_by_me_at?: ?string,
  blocking_actions?: ?BoardActionLockMany,
  board_activity_count?: number,
  board_note_count?: ?number,
  board_order_modified_at?: ?string,
  board_owner_has_active_ads?: boolean,
  category?: ?BoardCategoriesEnum,
  collab_board_email?: boolean,
  collaborated_by_me?: boolean,
  collaborating_users?: ?UserMany,
  collaborator_count?: number,
  collaborator_invite_counts?: CollaboratorInviteCount,
  collaborator_invites_enabled?: boolean,
  collaborator_permissions?: $ReadOnlyArray<number>,
  collaborator_permissions_setting?: ?number,
  collaborator_requests_enabled?: boolean,
  conversation?: ?string,
  cover?: ?Pin,
  cover_images?: ?{| [key: string]: CoverImageDetails |},
  cover_pin?: ?CoverPin,
  created_at?: ?string,
  debug?: ?string,
  description?: ?string,
  eligible_pin_type_filters?: PinTypeFilterMany,
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
  image_thumbnail_urls?: ?{| [key: string]: string |},
  images?: ?{| [key: string]: $ReadOnlyArray<ImageDetails> |},
  interests?: ?InterestMany,
  is_collaborative?: boolean,
  is_eligible_for_homefeed_tabs?: ?boolean,
  is_eligible_for_seasonal_share_treatment?: ?boolean,
  layout?: BoardLayouts,
  map_id?: string,
  name?: string,
  owner?: ?User,
  pin_count?: number,
  pin_thumbnail_urls?: ?$ReadOnlyArray<string>,
  pins?: ?PinMany,
  place_recs_count?: ?number,
  place_saves_count?: ?number,
  places_enabled?: boolean,
  predicted_category?: ?BoardCategoriesEnum,
  privacy?: BoardPrivacyEnum,
  promoter?: ?User,
  protected?: boolean,
  recommendation_reason?: ?string,
  section_count?: ?number,
  sectionless_pin_count?: number,
  sensitivity?: ?string,
  sensitivity_screen?: ?SensitivityScreen,
  seo_related_interests?: ?$ReadOnlyArray<SeoBreadcrumbs>,
  should_show_board_activity?: boolean,
  should_show_more_ideas?: boolean,
  should_show_shop_feed?: boolean,
  subscribed_to_notifications?: boolean,
  topic?: ?string,
  type?: "board",
  url?: string,
  viewer_collaborator_join_requested?: boolean,
  viewer_contact_request?: ?ContactRequest,
  viewer_invitation?: ?CollaboratorInvite,
|};
export type BoardAccess = "delete" | "tag" | "write";
export type BoardActionLock = {|
  action_type?: number,
  board_id?: string,
  created_timestamp?: ?number,
  id?: string,
  is_origin?: boolean,
  progress?: number,
  section_id?: ?string,
  type?: "bulkboardaction",
|};
export type BoardActionLockMany = $ReadOnlyArray<BoardActionLock>;
export type BoardActivity = {|
  activity_type?: ?BoardActivityType,
  aggregate_pin_count?: number,
  aux_data?: BoardActivityAuxData,
  board?: ?Board,
  comment?: ?BoardActivityComment,
  comment_count?: number,
  content?: CommunityContent,
  created_at?: ?string,
  id?: string,
  last_edited?: ?string,
  pin?: ?Pin,
  preview_pins?: ?PinMany,
  reaction_by_me?: ReactionTypeEnum,
  reaction_counts?: ReactionCount,
  ref_board_activity?: ?BoardActivity,
  section?: ?BoardSection,
  tagged_users?: ?UserMany,
  type?: "boardactivity",
  user?: ?User,
|};
export type BoardActivityAuxData = {|
  new_name?: string,
  previous_name?: string,
|};
export type BoardActivityComment = {|
  comment_count?: number,
  content?: CommunityContent,
  created_at?: string,
  depth?: number,
  id?: string,
  last_edited?: ?string,
  parent_comment?: ?BoardActivityComment,
  reaction_by_me?: ReactionTypeEnum,
  reaction_counts?: ReactionCount,
  root_board_activity?: ?BoardActivity,
  tagged_users?: ?UserMany,
  type?: "boardactivitycomment",
  user?: ?User,
|};
export type BoardActivityCommentMany = $ReadOnlyArray<BoardActivityComment>;
export type BoardActivityMany = $ReadOnlyArray<BoardActivity>;
export type BoardActivityType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type BoardCategoriesEnum =
  | ""
  | " "
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
export type BoardLayouts =
  | "class_community"
  | "default"
  | "places"
  | "quick_saves"
  | "screenshot"
  | "taking_classes"
  | "taught_classes"
  | "travel";
export type BoardMany = $ReadOnlyArray<Board>;
export type BoardNote = {|
  board?: ?Board,
  checklist_placeholder?: string,
  cover_images?: $ReadOnlyArray<{| [key: string]: Thumbnails |}>,
  created_at?: string,
  creator?: ?User,
  id?: string,
  list_item_count?: number,
  subtitle?: string,
  subtitle_placeholder?: string,
  subtitle_preview?: string,
  title?: ?string,
  title_placeholder?: string,
  type?: "boardnote",
  updated_at?: ?string,
|};
export type BoardNoteMany = $ReadOnlyArray<BoardNote>;
export type BoardPrivacyEnum = "protected" | "public" | "secret";
export type BoardSection = {|
  board?: ?Board,
  eligible_pin_type_filters?: PinTypeFilterMany,
  id?: string,
  pin_count?: ?number,
  preview_pins?: ?PinMany,
  slug?: string,
  title?: string,
  type?: "board_section",
  user?: ?User,
|};
export type BoardSectionMany = $ReadOnlyArray<BoardSection>;
export type BoardSectionNameRecommendation = {|
  cover_images?: $ReadOnlyArray<{| [key: string]: Thumbnails |}>,
  id?: string,
  images?: {| [key: string]: Thumbnails |},
  interest_key?: ?string,
  name?: string,
  pins?: PinMany,
  source_type?: SectionTitleRecommendationSource,
  type?: "board_section_name_recommendation",
|};
export type BoardSectionNameRecommendationMany = $ReadOnlyArray<BoardSectionNameRecommendation>;
export type BoardViewType = 0 | 1;
export type Bounds = {| ne?: Coordinate, sw?: Coordinate, type?: "bounds" |};
export type BoundsMany = $ReadOnlyArray<Bounds>;
export type Breadcrumbs = {|
  breadcrumb_url?: string,
  display_name?: string,
  full_local_url?: string,
|};
export type BusinessGoals =
  | ""
  | "BRAND_AWARENESS"
  | "CREATE_CONTENT"
  | "DRIVE_TRAFFIC"
  | "GENERATE_LEADS"
  | "NOT_SURE"
  | "SELL_PRODUCTS"
  | "build_brand"
  | "drive_traffic"
  | "not_sure"
  | "other"
  | "sell_product";
export type BuyableProductMiniMetadata = {|
  id?: string,
  is_available?: boolean,
  link?: string,
  merchant_id?: string,
  type?: string,
|};
export type BuyableProductMiniMetadataMany = $ReadOnlyArray<BuyableProductMiniMetadata>;
export type CallToCreateAllowResponsesStatus = 0 | 1 | 2 | 3;
export type CanonicalTerm = {| id?: number |};
export type CatalogsIngestionStatsErrors = {|
  "3"?: number,
  "100"?: number,
  "101"?: number,
  "102"?: number,
  "103"?: number,
  "104"?: number,
  "105"?: number,
  "106"?: number,
  "107"?: number,
  "108"?: number,
  "109"?: number,
  "110"?: number,
  "111"?: number,
  "112"?: number,
  "113"?: number,
  "116"?: number,
  "120"?: number,
  "122"?: number,
  "128"?: number,
  "135"?: number,
  "138"?: number,
  "139"?: number,
  "140"?: number,
  "141"?: number,
  "142"?: number,
  "143"?: number,
  "150"?: number,
  "151"?: number,
  "152"?: number,
  "156"?: number,
  "1001"?: number,
  "1006"?: number,
  "1007"?: number,
  "1008"?: number,
  "1012"?: number,
  "1014"?: number,
  "4022"?: number,
  "4023"?: number,
  "4028"?: number,
  "4032"?: number,
  "4033"?: number,
  "4037"?: number,
  "4042"?: number,
  "4052"?: number,
  "4054"?: number,
  "4060"?: number,
|};
export type CatalogsIngestionStatsInfo = {|
  "9000"?: number,
  "9001"?: number,
  "9002"?: number,
|};
export type CatalogsMessageMap = {|
  "1"?: string,
  "2"?: string,
  "3"?: string,
  "100"?: string,
  "101"?: string,
  "102"?: string,
  "103"?: string,
  "104"?: string,
  "105"?: string,
  "106"?: string,
  "107"?: string,
  "108"?: string,
  "109"?: string,
  "110"?: string,
  "111"?: string,
  "112"?: string,
  "113"?: string,
  "114"?: string,
  "115"?: string,
  "116"?: string,
  "117"?: string,
  "118"?: string,
  "119"?: string,
  "120"?: string,
  "121"?: string,
  "122"?: string,
  "123"?: string,
  "124"?: string,
  "125"?: string,
  "126"?: string,
  "127"?: string,
  "128"?: string,
  "129"?: string,
  "130"?: string,
  "131"?: string,
  "132"?: string,
  "133"?: string,
  "134"?: string,
  "135"?: string,
  "136"?: string,
  "137"?: string,
  "138"?: string,
  "139"?: string,
  "140"?: string,
  "141"?: string,
  "142"?: string,
  "143"?: string,
  "144"?: string,
  "145"?: string,
  "146"?: string,
  "147"?: string,
  "148"?: string,
  "149"?: string,
  "150"?: string,
  "151"?: string,
  "152"?: string,
  "153"?: string,
  "154"?: string,
  "155"?: string,
  "156"?: string,
  "157"?: string,
  "158"?: string,
  "159"?: string,
  "160"?: string,
  "161"?: string,
  "162"?: string,
  "163"?: string,
  "164"?: string,
  "165"?: string,
  "166"?: string,
  "167"?: string,
  "168"?: string,
  "169"?: string,
  "1000"?: string,
  "1001"?: string,
  "1002"?: string,
  "1003"?: string,
  "1004"?: string,
  "1006"?: string,
  "1007"?: string,
  "1008"?: string,
  "1010"?: string,
  "1012"?: string,
  "1013"?: string,
  "1014"?: string,
  "1101"?: string,
  "1102"?: string,
  "1103"?: string,
  "1104"?: string,
  "1105"?: string,
  "1106"?: string,
  "1107"?: string,
  "1108"?: string,
  "1109"?: string,
  "1110"?: string,
  "4023"?: string,
  "4028"?: string,
  "4029"?: string,
  "4042"?: string,
  "4059"?: string,
|};
export type CatalogsValidationStatsErrors = {|
  "3"?: number,
  "100"?: number,
  "101"?: number,
  "102"?: number,
  "103"?: number,
  "104"?: number,
  "105"?: number,
  "106"?: number,
  "107"?: number,
  "108"?: number,
  "109"?: number,
  "110"?: number,
  "111"?: number,
  "112"?: number,
  "113"?: number,
  "116"?: number,
  "120"?: number,
  "122"?: number,
  "128"?: number,
  "135"?: number,
  "138"?: number,
  "139"?: number,
  "140"?: number,
  "141"?: number,
  "142"?: number,
  "143"?: number,
  "150"?: number,
  "151"?: number,
  "152"?: number,
  "156"?: number,
  "1012"?: number,
  "4023"?: number,
  "4028"?: number,
  "4042"?: number,
  "4059"?: number,
|};
export type CatalogsValidationStatsWarnings = {|
  "2"?: number,
  "114"?: number,
  "115"?: number,
  "117"?: number,
  "118"?: number,
  "119"?: number,
  "121"?: number,
  "123"?: number,
  "124"?: number,
  "125"?: number,
  "126"?: number,
  "127"?: number,
  "129"?: number,
  "130"?: number,
  "131"?: number,
  "132"?: number,
  "133"?: number,
  "134"?: number,
  "136"?: number,
  "137"?: number,
  "144"?: number,
  "145"?: number,
  "146"?: number,
  "147"?: number,
  "148"?: number,
  "149"?: number,
  "153"?: number,
  "154"?: number,
  "155"?: number,
  "157"?: number,
  "158"?: number,
  "159"?: number,
  "160"?: number,
  "161"?: number,
  "162"?: number,
  "163"?: number,
  "164"?: number,
  "165"?: number,
  "166"?: number,
  "167"?: number,
  "168"?: number,
  "169"?: number,
  "1013"?: number,
  "4029"?: number,
|};
export type CategorizedIngredientsMetadata = {|
  category?: string,
  id?: string,
  ingredients?: ParsedIngredientMetadataMany,
  type?: "categorizedingredientsmetadata",
|};
export type CategorizedIngredientsMetadataMany = $ReadOnlyArray<CategorizedIngredientsMetadata>;
export type CategoryMap = {|
  category_type?: string,
  images?: {| [key: string]: Thumbnails |},
  key?: string,
  name?: string,
|};
export type CinematicData = {|
  duration?: number,
  height?: number,
  images?: {| [key: string]: ImageDetails |},
  signature?: string,
  simple_cinematic_data?: boolean,
  src?: string,
  type?: string,
  width?: number,
|};
export type ClassLiveStatus = 1 | 2 | 3 | 4 | 5;
export type ClickThroughAction = 0 | 1;
export type ClickThroughLinkQuality = {|
  alternate_links?: $ReadOnlyArray<AltLink>,
  is_inaccessible?: boolean,
|};
export type ClicksAnalyticsModel = {|
  clicks?: number,
  id?: string,
  pin?: ?Pin,
  type?: "clicksanalyticsmodel",
|};
export type ClicksAnalyticsModelMany = $ReadOnlyArray<ClicksAnalyticsModel>;
export type CollaboratorInvite = {|
  access?: $ReadOnlyArray<string>,
  board?: ?Board,
  created_at?: string,
  id?: string,
  invited_by_user?: ?User,
  invited_user?: ?User,
  is_acceptable?: boolean,
  message?: ?string,
  read_at?: ?string,
  status?:
    | "new"
    | "accepted"
    | "denied"
    | "pending_approval"
    | "contact_request_not_approved"
    | "unknown",
  type?: "collaboratorinvite",
|};
export type CollaboratorInviteCount = {|
  accepted?: number,
  contact_request_not_approved?: number,
  denied?: number,
  new?: number,
  pending_approval?: number,
|};
export type CollaboratorInviteMany = $ReadOnlyArray<CollaboratorInvite>;
export type CollagePin = {|
  id?: string,
  image_signature?: string,
  images?: ?{| [key: string]: Thumbnails |},
  layout_id?: CollagePinLayout,
  link?: string,
  slot_data?: CollagePinSlotDataMany,
  type?: "collagepin",
|};
export type CollagePinLayout = 0 | 1 | 2;
export type CollagePinMany = $ReadOnlyArray<CollagePin>;
export type CollagePinSlotData = {|
  collage_pin_id?: string,
  height_percent?: string,
  image_signature?: string,
  images?: ?{| [key: string]: Thumbnails |},
  link?: string,
  slot_pin?: ?Pin,
  slot_pin_id?: string,
  type?: "collagepinslotdata",
  width_percent?: string,
  x_coordinate_percent?: string,
  y_coordinate_percent?: string,
|};
export type CollagePinSlotDataMany = $ReadOnlyArray<CollagePinSlotData>;
export type CollectionPin = {|
  active?: boolean,
  display_type?: string,
  id?: string,
  item_data?: CollectionPinItemMany,
  type?: "collectionpin",
|};
export type CollectionPinItem = {|
  image_signature?: string,
  images?: {| [key: string]: Thumbnails |},
  pin?: ?Pin,
  pin_id?: string,
  rich_metadata?: ?RichPinDataView,
  rich_summary?: ?RichPinGridData,
  type?: "collectionpinitem",
|};
export type CollectionPinItemMany = $ReadOnlyArray<CollectionPinItem>;
export type CollectionPinMany = $ReadOnlyArray<CollectionPin>;
export type Comment = {|
  commenter?: ?User,
  created_at?: string,
  deletable_by_me?: boolean,
  id?: string,
  text?: string,
  type?: "comment",
|};
export type CommentMany = $ReadOnlyArray<Comment>;
export type Community = {|
  cover_image_signature?: string,
  cover_images?: {| [key: string]: string |},
  created_at?: string,
  created_by_user?: ?User,
  description?: string,
  id?: string,
  is_member?: boolean,
  members_count?: number,
  name?: string,
  permissions?: $ReadOnlyArray<string>,
  preview_members?: ?UserMany,
  preview_posts?: ?CommunityPostMany,
  roles?: $ReadOnlyArray<string>,
  rules?: ?CommunityRuleMany,
  slug?: string,
  type?: "community",
|};
export type CommunityComment = {|
  comment_count?: number,
  community?: ?Community,
  content?: CommunityContent,
  created_at?: string,
  created_by_user_roles?: $ReadOnlyArray<string>,
  depth?: number,
  id?: string,
  last_edited?: ?string,
  parent_comment?: ?CommunityComment,
  pins?: ?PinMany,
  reaction_by_me?: number,
  reaction_counts?: ReactionCount,
  reply_to_comment?: ?CommunityComment,
  root_post?: ?CommunityPost,
  tagged_users?: ?UserMany,
  type?: "communitycomment",
  user?: ?User,
  visibility?: number,
|};
export type CommunityCommentMany = $ReadOnlyArray<CommunityComment>;
export type CommunityContent = {|
  id?: string,
  image_signatures?: $ReadOnlyArray<string>,
  images?: $ReadOnlyArray<string>,
  object_ids?: $ReadOnlyArray<string>,
  tags?: TextTagMany,
  text?: ?string,
  type?: "communitycontent",
|};
export type CommunityContentMany = $ReadOnlyArray<CommunityContent>;
export type CommunityMany = $ReadOnlyArray<Community>;
export type CommunityPost = {|
  comment_count?: number,
  community?: ?Community,
  content?: CommunityContent,
  created_at?: string,
  created_by_user_roles?: $ReadOnlyArray<string>,
  id?: string,
  last_edited?: ?string,
  pins?: ?PinMany,
  preview_comments?: ?CommunityCommentMany,
  reaction_by_me?: number,
  reaction_counts?: ReactionCount,
  slug?: string,
  sticky?: boolean,
  tagged_users?: ?UserMany,
  title?: ?string,
  type?: "communitypost",
  user?: ?User,
  views?: number,
  visibility?: number,
|};
export type CommunityPostMany = $ReadOnlyArray<CommunityPost>;
export type CommunityRoleEnum =
  | "ADMIN"
  | "BANNED"
  | "GUEST"
  | "MEMBER"
  | "MODERATOR"
  | "SUPER_MODERATOR";
export type CommunityRule = {|
  content?: CommunityContent,
  id?: string,
  title?: string,
  type?: "communityrule",
|};
export type CommunityRuleMany = $ReadOnlyArray<CommunityRule>;
export type ContactRequest = {|
  board?: ?Board,
  conversation?: ?Conversation,
  created_at?: string,
  id?: string,
  read?: boolean,
  recipient?: ?User,
  sender?: ?User,
  type?: "contactrequest",
|};
export type ContactRequestMany = $ReadOnlyArray<ContactRequest>;
export type ContentType =
  | ""
  | "board"
  | "category_feed"
  | "story"
  | "video_feed_story";
export type ContextualSearch = {|
  display?: string,
  id?: string,
  term?: string,
  type?: ContextualSearchType,
|};
export type ContextualSearchType = "contextual_search";
export type Conversation = {|
  board?: ?string,
  created_at?: string,
  emails?: ?$ReadOnlyArray<string>,
  id?: string,
  last_message?: ?ConversationMessage,
  name?: ?string,
  read_times?: ?{| [key: string]: string |},
  read_times_ms?: {| [key: string]: number |},
  snooze_time?: ?number,
  type?: "conversation",
  unread?: number,
  unread_pins?: number,
  users?: ?UserMany,
|};
export type ConversationAction = {|
  action_type?: ConversationActionType,
  actor?: ?User,
  created_at?: string,
  created_ms?: number,
|};
export type ConversationActionMany = $ReadOnlyArray<ConversationAction>;
export type ConversationActionType =
  | 0
  | 1
  | 2
  | 1000
  | 1001
  | 1002
  | 1003
  | 1004
  | 1005
  | 2000
  | 2001
  | 2002
  | 2003
  | 2004
  | 2005
  | 2006
  | 2007;
export type ConversationMany = $ReadOnlyArray<Conversation>;
export type ConversationMessage = {|
  actions?: ?ConversationActionMany,
  board?: ?Board,
  community?: ?Community,
  created_at?: string,
  created_ms?: number,
  event_object?: number,
  event_type?: ?ConversationMessageEventType,
  id?: string,
  invite_code?: ?InviteCode,
  message_context?: ConversationMessageContext,
  pin?: ?Pin,
  sender?: ?User,
  shared_object_context?: ?ConversationSharedObjectContext,
  text?: ?string,
  type?: ConversationMessageType,
  user?: ?User,
  user_did_it_data?: ?UserDidItData,
|};
export type ConversationMessageContext = "shared_pin_context" | "standard";
export type ConversationMessageEventType =
  | "collaborator_approve"
  | "collaborator_suggest"
  | "comment"
  | "invite"
  | "invite_accept"
  | "pin_delete";
export type ConversationMessageMany = $ReadOnlyArray<ConversationMessage>;
export type ConversationMessageType =
  | "event"
  | "like"
  | "message"
  | "repin"
  | "shared_pin_context";
export type ConversationSharedObjectContext = {| from_user_id?: number |};
export type CookTime = {| d?: ?number, h?: ?number, m?: ?number, s?: ?number |};
export type CookTimes = {|
  cook?: CookTime,
  prep?: CookTime,
  total?: CookTime,
|};
export type Coordinate = {|
  latitude?: number,
  longitude?: number,
  type?: "coordinate",
|};
export type CoordinateMany = $ReadOnlyArray<Coordinate>;
export type Countries =
  | "AR"
  | "AT"
  | "AU"
  | "BR"
  | "CA"
  | "CH"
  | "CL"
  | "CO"
  | "CZ"
  | "DE"
  | "DK"
  | "ES"
  | "FI"
  | "FR"
  | "GB"
  | "GR"
  | "HU"
  | "ID"
  | "IE"
  | "IN"
  | "IT"
  | "JP"
  | "KR"
  | "MX"
  | "NL"
  | "NO"
  | "NZ"
  | "PH"
  | "PL"
  | "PT"
  | "RO"
  | "RU"
  | "SE"
  | "SK"
  | "TR"
  | "US"
  | "ZA";
export type CoverImageDetails = {|
  dominant_color?: string,
  height?: ?number,
  type?: string,
  url?: ?string,
  width?: ?number,
|};
export type CoverPin = {|
  crop?: $ReadOnlyArray<number>,
  custom_cover?: boolean,
  customized?: boolean,
  image_key?: string,
  image_signature?: string,
  image_size?: $ReadOnlyArray<number>,
  image_url?: string,
  key?: string,
  pin_id?: string,
  scale?: number,
  size?: $ReadOnlyArray<number>,
  timestamp?: number,
  url?: string,
|};
export type CreativeType =
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
export type CreativeTypes =
  | "app"
  | "cinematic"
  | "max_video"
  | "regular"
  | "video";
export type CreatorAnalytics = {|
  clickthrough?: ?number,
  closeup?: ?number,
  core_timestamp?: string,
  id?: string,
  impression?: ?number,
  is_realtime?: boolean,
  last_updated?: string,
  offline_timestamp?: ?string,
  outbound_click?: ?number,
  pin_click?: ?number,
  profile_visit?: ?number,
  save?: ?number,
  timestamp?: string,
  type?: "creator_analytics",
  user_follow?: ?number,
  video_average_time?: ?number,
  video_p95_views?: ?number,
  video_timestamp?: string,
  video_total_time?: ?number,
  video_views?: ?number,
|};
export type CreatorAnalyticsMany = $ReadOnlyArray<CreatorAnalytics>;
export type CreatorClass = {|
  board?: ?string,
  canonical_pin?: ?Pin,
  carousel_images?: $ReadOnlyArray<string>,
  class_type?: number,
  creator?: ?User,
  description?: ?string,
  details?: ?string,
  duration_minutes?: number,
  hero_images?: ?{| [key: string]: Thumbnails |},
  hero_video?: ?Video,
  id?: string,
  language?: string,
  live_status?: ClassLiveStatus,
  livestream?: ?Livestream,
  location?: ?string,
  max_class_size?: number,
  preview_viewers?: UserMany,
  price_usd?: number,
  product_pin_count?: number,
  recap_pin?: ?Pin,
  reminded_users?: $ReadOnlyArray<string>,
  soonest_upcoming_instance?: ?CreatorClassInstance,
  subjects?: $ReadOnlyArray<string>,
  supply_basics?: StoryPinBasics,
  taken_users?: $ReadOnlyArray<string>,
  title?: string,
  type?: "creatorclass",
  users_reminded_count?: number,
  users_taken_count?: number,
  viewing_user_latest_booking?: ?CreatorClassBooking,
|};
export type CreatorClassBooking = {|
  apple_receipt_data?: ?string,
  board?: ?string,
  created_at?: string,
  creator_class_instance?: ?CreatorClassInstance,
  id?: string,
  price_paid_usd?: number,
  refunded_flag?: boolean,
  type?: "creatorclassbooking",
  user?: ?User,
  zoom_meeting_join_info_reveal_date?: string,
  zoom_meeting_password?: ?string,
  zoom_meeting_url?: ?string,
|};
export type CreatorClassBookingMany = $ReadOnlyArray<CreatorClassBooking>;
export type CreatorClassInstance = {|
  creator_class?: ?CreatorClass,
  creator_viewing_user_zoom_start_url?: ?string,
  current_class_size?: number,
  ends_at?: string,
  guest_count?: number,
  id?: string,
  is_viewing_user_reminded?: boolean,
  num_open_spots?: number,
  num_users_reminded?: number,
  preview_guests?: UserMany,
  reminded_users?: UserMany,
  starts_at?: string,
  type?: "creatorclassinstance",
  viewing_user_booking?: ?string,
|};
export type CreatorClassInstanceMany = $ReadOnlyArray<CreatorClassInstance>;
export type CreatorClassMany = $ReadOnlyArray<CreatorClass>;
export type CreatorRecommendationItem = {|
  id?: string,
  interest?: ?Interest,
  interest_id?: string,
  subtitle?: string,
  title?: string,
  type?: "creatorrecommendationitem",
  user?: ?User,
  user_id?: string,
  user_recommendation_reason?: ?CreatorRecommendationReason,
|};
export type CreatorRecommendationItemMany = $ReadOnlyArray<CreatorRecommendationItem>;
export type CreatorRecommendationReason = {|
  reason_description?: string,
  reason_str?: string,
  recommendation_reason_description?: string,
  recommendation_reason_details?: string,
  recommendation_reason_type?: number,
|};
export type Credential = {|
  long_term_token?: string,
  long_term_token_type?: ?string,
  ltt_created_at?: ?number,
  ltt_expiration_at?: ?number,
  password?: string,
  short_term_token?: string,
  short_term_token_type?: ?string,
  stt_created_at?: ?number,
  stt_expiration_at?: ?number,
  username?: string,
|};
export type CredentialMany = $ReadOnlyArray<Credential>;
export type CurrencyTypeEnum =
  | "AED"
  | "AFN"
  | "ALL"
  | "AMD"
  | "ANG"
  | "AOA"
  | "ARS"
  | "AUD"
  | "AWG"
  | "AZN"
  | "BAM"
  | "BBD"
  | "BDT"
  | "BGN"
  | "BHD"
  | "BIF"
  | "BMD"
  | "BND"
  | "BOB"
  | "BRL"
  | "BSD"
  | "BTN"
  | "BWP"
  | "BYN"
  | "BYR"
  | "BZD"
  | "CAD"
  | "CDF"
  | "CHF"
  | "CLP"
  | "CNY"
  | "COP"
  | "CRC"
  | "CUC"
  | "CUP"
  | "CVE"
  | "CZK"
  | "DJF"
  | "DKK"
  | "DOP"
  | "DZD"
  | "EGP"
  | "ERN"
  | "ETB"
  | "EUR"
  | "FJD"
  | "FKP"
  | "GBP"
  | "GEL"
  | "GGP"
  | "GHS"
  | "GIP"
  | "GMD"
  | "GNF"
  | "GTQ"
  | "GYD"
  | "HKD"
  | "HNL"
  | "HRK"
  | "HTG"
  | "HUF"
  | "IDR"
  | "ILS"
  | "IMP"
  | "INR"
  | "IQD"
  | "IRR"
  | "ISK"
  | "JEP"
  | "JMD"
  | "JOD"
  | "JPY"
  | "KES"
  | "KGS"
  | "KHR"
  | "KMF"
  | "KPW"
  | "KRW"
  | "KWD"
  | "KYD"
  | "KZT"
  | "LAK"
  | "LBP"
  | "LKR"
  | "LRD"
  | "LSL"
  | "LYD"
  | "MAD"
  | "MDL"
  | "MGA"
  | "MKD"
  | "MMK"
  | "MNT"
  | "MOP"
  | "MRO"
  | "MUR"
  | "MVR"
  | "MWK"
  | "MXN"
  | "MYR"
  | "MZN"
  | "NAD"
  | "NGN"
  | "NIO"
  | "NOK"
  | "NPR"
  | "NZD"
  | "OMR"
  | "PAB"
  | "PEN"
  | "PGK"
  | "PHP"
  | "PKR"
  | "PLN"
  | "PYG"
  | "QAR"
  | "RON"
  | "RSD"
  | "RUB"
  | "RWF"
  | "SAR"
  | "SBD"
  | "SCR"
  | "SDG"
  | "SEK"
  | "SGD"
  | "SHP"
  | "SLL"
  | "SOS"
  | "SPL"
  | "SRD"
  | "STD"
  | "SVC"
  | "SYP"
  | "SZL"
  | "THB"
  | "TJS"
  | "TMT"
  | "TND"
  | "TOP"
  | "TRY"
  | "TTD"
  | "TVD"
  | "TWD"
  | "TZS"
  | "UAH"
  | "UGX"
  | "USD"
  | "UYU"
  | "UZS"
  | "VEF"
  | "VND"
  | "VUV"
  | "WST"
  | "XAF"
  | "XCD"
  | "XDR"
  | "XOF"
  | "XPF"
  | "YER"
  | "ZAR"
  | "ZMW"
  | "ZWD";
export type DebAllSignals = {|
  deb_ads?: $ReadOnlyArray<SignalDecisionDict>,
  deb_content_quality?: $ReadOnlyArray<SignalDecisionDict>,
  deb_inclusive_product?: $ReadOnlyArray<SignalDecisionDict>,
  deb_shopping?: $ReadOnlyArray<SignalDecisionDict>,
  deb_trust_and_safety?: $ReadOnlyArray<SignalDecisionDict>,
|};
export type DestinationUrlType = 0 | 1 | 2 | 3 | 4;
export type DidItType = 0 | 1;
export type DimensionMetadata = {|
  name?: string,
  type?: "dimensionmetadata",
  values?: $ReadOnlyArray<string>,
|};
export type DimensionMetadataMany = $ReadOnlyArray<DimensionMetadata>;
export type Domain = {|
  access?: $ReadOnlyArray<DomainAccess>,
  client_details?: DomainClientDetails,
  favicon?: string,
  id?: string,
  name?: string,
  official_user?: ?User,
  thumbnails?: $ReadOnlyArray<string>,
  type?: "domain",
|};
export type DomainAccess = "view_analysis";
export type DomainClientDetails = {|
  android?: DomainDeviceClientDetails,
  ios?: DomainDeviceClientDetails,
|};
export type DomainDeviceClientDetails = {|
  id?: string,
  name?: string,
  package_names?: ?string,
  url_suffixes?: $ReadOnlyArray<string>,
|};
export type DomainMany = $ReadOnlyArray<Domain>;
export type DomainTrackingFormat = {|
  base_url_regex?: string,
  query_params?: $ReadOnlyArray<string>,
  type?: number,
|};
export type DynamicAdData = {| assets?: DynamicAdDataAssets |};
export type DynamicAdDataAssets = {|
  cta_text?: string,
  position?: number,
  type?: string,
|};
export type ECommercePlatforms =
  | "ETSY"
  | "MAGENTO"
  | "OPEN_CART"
  | "PRESTA_SHOP"
  | "SHOPIFY"
  | "SQUARESPACE_COMMERCE"
  | "WIX_STORES"
  | "WOO_COMMERCE"
  | "ZEN_CART";
export type Embed = {|
  height?: ?number,
  src?: ?string,
  subtype?: string,
  type?: string,
  width?: ?number,
|};
export type EnumType =
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
  | 3552
  | 3554
  | 3562
  | 3563
  | 3564
  | 3565
  | 3566
  | 3569
  | 3570
  | 3571
  | 3572
  | 3573
  | 3582
  | 3583
  | 3587
  | 3588
  | 3589
  | 3590
  | 3591
  | 3592
  | 3593
  | 3597;
export type Experience = {|
  cacheable_resources?: $ReadOnlyArray<string>,
  display_data?: {| [key: string]: string |},
  experience_id?: number,
  id?: string,
  metadata?: {| [key: string]: string |},
  placement_id?: number,
  triggerable_placed_exps?: $ReadOnlyArray<string>,
  type?: ExperienceType,
|};
export type ExperienceMany = $ReadOnlyArray<Experience>;
export type ExperienceType =
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
  | 25;
export type ExploreArticle = {|
  action?: ?StoryAction,
  author_name?: ?string,
  aux_fields?: ?ArticleAuxFields,
  badge_type?: ?BadgeType,
  content_type?: ContentType,
  cover_images?: $ReadOnlyArray<{| [key: string]: ArticleThumbnail |}>,
  cover_pin?: ?string,
  creators?: UserMany,
  curator?: ?User,
  dominant_colors?: $ReadOnlyArray<string>,
  flat_objects?: ?string,
  flex_grid_style?: ?FlexGridStyle,
  id?: string,
  identifier_icon_type?: ?StoryIcon,
  is_promoted?: ?boolean,
  is_shareable?: ?boolean,
  marked_repeat?: ?boolean,
  num_videos?: ?number,
  object_id?: string,
  read_at?: ?string,
  show_cover?: boolean,
  story_category?: ?StoryCategory,
  subtitle?: ?ArticleTitle,
  title?: ?ArticleTitle,
  type?: "explorearticle",
  video_cover_pin?: ?Pin,
|};
export type ExploreArticleMany = $ReadOnlyArray<ExploreArticle>;
export type FeedLocationConfig = {|
  full_feed_fetch_freq?: number,
  full_feed_fetch_location?: string,
  update_feed_fetch_freq?: number,
  update_feed_fetch_location?: ?string,
|};
export type FeedLocationConfigMany = $ReadOnlyArray<FeedLocationConfig>;
export type FeedPreferredSchedule = {| time?: ?string, timezone?: ?string |};
export type FeedPreferredScheduleMany = $ReadOnlyArray<FeedPreferredSchedule>;
export type FeedProfile = {|
  country?:
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AO"
    | "AQ"
    | "AR"
    | "AS"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BV"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CC"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CR"
    | "CU"
    | "CV"
    | "CW"
    | "CX"
    | "CY"
    | "CZ"
    | "DE"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "FI"
    | "FJ"
    | "FK"
    | "FM"
    | "FO"
    | "FR"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GS"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HM"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IR"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KP"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MH"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MP"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NF"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PS"
    | "PT"
    | "PW"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SD"
    | "SE"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SV"
    | "SX"
    | "SY"
    | "SZ"
    | "TC"
    | "TD"
    | "TF"
    | "TG"
    | "TH"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VI"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "YE"
    | "YT"
    | "ZA"
    | "ZM"
    | "ZW",
  created_at?: ?number,
  credential?: ?Credential,
  default_availability_type?:
    | "IN_STOCK"
    | "OUT_OF_STOCK"
    | "PREORDER"
    | "UNAVAILABLE",
  display_name?: ?string,
  domain?: ?string,
  feed_default_currency?: feedDefaultCurrency,
  feed_format?: "TSV" | "CSV" | "XML" | "SHOPIFY_BULK",
  feed_has_password?: boolean,
  feed_index?: ?number,
  feed_status?:
    | ?"ACTIVE"
    | "NEW_NOT_YET_ACTIVE"
    | "INACTIVE"
    | "TESTING"
    | "DISABLED",
  feed_type?: string,
  feed_username?: ?string,
  host?: ?string,
  id?: string,
  last_successful_ingestion?: ?{|
    [key: string]: number | string | {| [key: string]: number |},
  |},
  locale?: ?string,
  location_config?: ?FeedLocationConfig,
  merchant_feed_id?: string,
  merchant_id?: string,
  preferred_schedule?: ?FeedPreferredSchedule,
  updated_at?: ?number,
|};
export type FeedProfileMany = $ReadOnlyArray<FeedProfile>;
export type FeedProfileValidationResultCodeEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type FeedReport = {|
  display_name?: string,
  feed_profile_id?: string,
  merchant_id?: string,
  workflows?: $ReadOnlyArray<WorkflowStats>,
|};
export type FeedbackOptions = {|
  description?: ?FormattedString,
  options?: OptionMany,
|};
export type FeedbackOptionsMany = $ReadOnlyArray<FeedbackOptions>;
export type FeedbackOptionsWithRecommendationReason = {|
  menu_options?: FeedbackOptions,
  recommendation_reason?: ?string,
|};
export type FlexGridStyle = {|
  aspect_ratio?: number,
  column_width?: number,
  layout?: FlexGridStyleLayout,
|};
export type FlexGridStyleLayout = 1 | 2;
export type FlexGridStyleMany = $ReadOnlyArray<FlexGridStyle>;
export type Font = {|
  default_size?: number,
  id?: string,
  key?: string,
  letter_spacing?: number,
  line_height?: number,
  max_size?: number,
  min_size?: number,
  name?: string,
  offset?: number,
  url?: string,
|};
export type FontMany = $ReadOnlyArray<Font>;
export type FormattedString = {|
  args?: $ReadOnlyArray<GetArgsObject>,
  format?: ?string,
|};
export type FormattedStringMany = $ReadOnlyArray<FormattedString>;
export type FormattedStringWithObjectLinks = {|
  args?: $ReadOnlyArray<GetArgsObject>,
  format?: ?string,
|};
export type FormattedStringWithObjectLinksMany = $ReadOnlyArray<FormattedStringWithObjectLinks>;
export type GalleryItem = {|
  canonical_images?: ?{| [key: string]: Thumbnails |},
  id?: string,
  image_signature?: string,
  media_type?: "image",
  type?: "galleryitem",
|};
export type GalleryItemMany = $ReadOnlyArray<GalleryItem>;
export type GatekeeperExperiment = {| group?: string, key?: string |};
export type GenderEnum = "Female" | "Male" | "Unspecified";
export type GetArgsObject = {|
  action?: ?BackendServerAction,
  link?: ?LinkedObject,
  text?: ?string,
|};
export type HeadingBlock = {|
  block_style?: BlockStyle,
  block_type?: 1,
  id?: string,
  level?: number,
  mentions?: TextTagMany,
  style?: TextStyle,
  text?: string,
  type?: 1 | "story_pin_heading_block",
|};
export type HeadingBlockMany = $ReadOnlyArray<HeadingBlock>;
export type HideInfoText = {|
  action?: ?BackendServerAction,
  args?: $ReadOnlyArray<GetArgsObject>,
  format?: ?string,
  unhide?: boolean,
|};
export type HideInfoTextMany = $ReadOnlyArray<HideInfoText>;
export type HomefeedBrowsingLevel =
  | "BROWSER_28D"
  | "BROWSER_7D"
  | "DEEP_BROWSER_28D"
  | "DEEP_BROWSER_7D"
  | "FREQ_DEEP_BROWSER_28D"
  | "FREQ_DEEP_BROWSER_7D"
  | "LANDER_28D"
  | "LANDER_7D"
  | "OTHER";
export type HoursText = {|
  id?: string,
  is_today?: boolean,
  text?: string,
  type?: "hourstext",
|};
export type HoursTextMany = $ReadOnlyArray<HoursText>;
export type IdeasModules = {| data?: IdeasModulesData, module_type?: string |};
export type IdeasModulesData = {|
  models?: $ReadOnlyArray<string> | TodayArticleMany | InterestMany,
  title?: string,
|};
export type ImageCrop = {| max_y?: number, min_y?: number |};
export type ImageDetails = {|
  dominant_color?: string,
  height?: number,
  type?: string,
  url?: ?string,
  width?: number,
|};
export type ImageDimensions = {| height?: number, width?: number |};
export type ImageMetadata = {|
  canonical_images?: ?{| [key: string]: Thumbnails |},
  image_signature?: ?string,
  media_type?: "image",
  type?: "galleryitem",
|};
export type ImageMetadataMany = $ReadOnlyArray<ImageMetadata>;
export type IngredientBlock = {|
  amt?: ?string,
  block_type?: 5,
  name?: string,
  type?: 5 | "story_pin_ingredient_block",
  unit?: ?string,
|};
export type IngredientBlockMany = $ReadOnlyArray<IngredientBlock>;
export type InsertionStrategy =
  | "insert_at_the_end"
  | "insert_in_place"
  | "none";
export type InstantArticleMetadata = {|
  body?: string,
  byline?: ?string,
  description?: ?string,
  id?: string,
  images?: $ReadOnlyArray<string>,
  site_description?: ?string,
  site_icon?: ?string,
  site_name?: ?string,
  title?: string,
  type?: "instantarticle",
|};
export type InstantArticleMetadataMany = $ReadOnlyArray<InstantArticleMetadata>;
export type InstantContentActionModels =
  | InstantContentPinCreateAction
  | InstantContentURLNavigateAction;
export type InstantContentAttributeRange = {|
  length?: number,
  start?: number,
|};
export type InstantContentAttributeRangeMany = $ReadOnlyArray<InstantContentAttributeRange>;
export type InstantContentBlockModels =
  | InstantContentHeaderBlock
  | InstantContentParagraphBlock
  | InstantContentTextBlock
  | InstantContentHeadingBlock
  | InstantContentImageBlock
  | InstantContentVideoBlock
  | InstantContentTableBlock
  | InstantContentGroupBlock
  | InstantContentOrderedListBlock
  | InstantContentUnorderedListBlock
  | InstantContentSectionBlock
  | InstantContentSeparatorBlock
  | InstantContentUserBlock
  | InstantContentWebBlock
  | InstantContentPromotedWebBlock;
export type InstantContentColor = {|
  alpha?: number,
  blue?: number,
  green?: number,
  red?: number,
|};
export type InstantContentColorMany = $ReadOnlyArray<InstantContentColor>;
export type InstantContentGroupBlock = {|
  blocks?: $ReadOnlyArray<InstantContentBlockModels>,
  type?: "instant_content_group",
|};
export type InstantContentGroupBlockMany = $ReadOnlyArray<InstantContentGroupBlock>;
export type InstantContentHeaderBlock = {|
  cover_image?: ?InstantContentImageBlock,
  description?: ?string,
  subtitle?: ?string,
  title?: string,
  type?: string,
|};
export type InstantContentHeaderBlockMany = $ReadOnlyArray<InstantContentHeaderBlock>;
export type InstantContentHeadingBlock = {|
  text?: string,
  type?: "instant_content_heading",
|};
export type InstantContentHeadingBlockMany = $ReadOnlyArray<InstantContentHeadingBlock>;
export type InstantContentImageBlock = {|
  action?: InstantContentActionModels,
  images?: ?{| [key: string]: Thumbnails |},
  style?: InstantContentImageStyle,
  type?: "instant_content_image",
|};
export type InstantContentImageBlockMany = $ReadOnlyArray<InstantContentImageBlock>;
export type InstantContentImageStyle = {|
  corner_radius?: number,
  is_cover_image?: boolean,
  is_full_width?: boolean,
  type?: "instant_content_style_image",
|};
export type InstantContentImageStyleMany = $ReadOnlyArray<InstantContentImageStyle>;
export type InstantContentMetadata = {|
  blocks?: $ReadOnlyArray<InstantContentBlockModels>,
  id?: string,
  metadata?: InstantContentMetadataField,
  type?: "instant_content",
|};
export type InstantContentMetadataField = {|
  compatible_version?: string,
  from_partner?: boolean,
  google_analytics_key?: string,
  version?: string,
|};
export type InstantContentMetadataFieldMany = $ReadOnlyArray<InstantContentMetadataField>;
export type InstantContentMetadataMany = $ReadOnlyArray<InstantContentMetadata>;
export type InstantContentOrderedListBlock = {|
  blocks?: $ReadOnlyArray<InstantContentBlockModels>,
  type?: "instant_content_ordered_list",
|};
export type InstantContentOrderedListBlockMany = $ReadOnlyArray<InstantContentOrderedListBlock>;
export type InstantContentParagraphBlock = {|
  text?: string,
  type?: "instant_content_paragraph",
|};
export type InstantContentParagraphBlockMany = $ReadOnlyArray<InstantContentParagraphBlock>;
export type InstantContentPinCreateAction = {|
  description?: string,
  image_url?: string,
  source_url?: string,
  type?: string,
|};
export type InstantContentPinCreateActionMany = $ReadOnlyArray<InstantContentPinCreateAction>;
export type InstantContentPromotedWebBlock = {|
  source_name?: string,
  type?: "instant_content_promoter_web",
  web?: InstantContentWebBlock,
|};
export type InstantContentPromotedWebBlockMany = $ReadOnlyArray<InstantContentPromotedWebBlock>;
export type InstantContentSectionBlock = {|
  blocks?: $ReadOnlyArray<InstantContentBlockModels>,
  title?: string,
  type?: "instant_content_section",
|};
export type InstantContentSectionBlockMany = $ReadOnlyArray<InstantContentSectionBlock>;
export type InstantContentSeparatorBlock = {|
  type?: "instant_content_separator",
|};
export type InstantContentSeparatorBlockMany = $ReadOnlyArray<InstantContentSeparatorBlock>;
export type InstantContentTableBlock = {|
  columns?: number,
  data?: $ReadOnlyArray<string>,
  type?: "instant_content_table",
|};
export type InstantContentTableBlockMany = $ReadOnlyArray<InstantContentTableBlock>;
export type InstantContentTextAttribute = {|
  action?: InstantContentActionModels,
  range?: InstantContentAttributeRange,
  style?: InstantContentTextStyle,
|};
export type InstantContentTextAttributeMany = $ReadOnlyArray<InstantContentTextAttribute>;
export type InstantContentTextBlock = {|
  attributes?: InstantContentTextAttributeMany,
  text?: string,
  type?: "instant_content_text",
|};
export type InstantContentTextBlockMany = $ReadOnlyArray<InstantContentTextBlock>;
export type InstantContentTextStyle = {|
  bold?: boolean,
  color?: InstantContentColor,
  italic?: boolean,
  underline?: boolean,
|};
export type InstantContentTextStyleMany = $ReadOnlyArray<InstantContentTextStyle>;
export type InstantContentURLNavigateAction = {|
  type?: "instant_content_action_url_navigate",
  url?: string,
|};
export type InstantContentURLNavigateActionMany = $ReadOnlyArray<InstantContentURLNavigateAction>;
export type InstantContentUnorderedListBlock = {|
  blocks?: $ReadOnlyArray<InstantContentBlockModels>,
  type?: "instant_content_unordered_list",
|};
export type InstantContentUnorderedListBlockMany = $ReadOnlyArray<InstantContentUnorderedListBlock>;
export type InstantContentUserBlock = {|
  action?: InstantContentActionModels,
  style?: InstantContentUserStyle,
  type?: "instant_content_user",
  user?: User,
|};
export type InstantContentUserBlockMany = $ReadOnlyArray<InstantContentUserBlock>;
export type InstantContentUserStyle = {|
  is_compact?: boolean,
  type?: "instant_content_style_user",
|};
export type InstantContentUserStyleMany = $ReadOnlyArray<InstantContentUserStyle>;
export type InstantContentVideoBlock = {|
  cover_image_signature?: string,
  cover_image_url?: string,
  type?: "instant_content_video",
  url?: string,
  video_signature?: string,
|};
export type InstantContentVideoBlockMany = $ReadOnlyArray<InstantContentVideoBlock>;
export type InstantContentWebBlock = {|
  action?: InstantContentActionModels,
  html?: ?string,
  style?: InstantContentWebStyle,
  type?: "instant_content_web",
  url?: string,
|};
export type InstantContentWebBlockMany = $ReadOnlyArray<InstantContentWebBlock>;
export type InstantContentWebStyle = {|
  height?: number,
  is_full_width?: boolean,
  ratio?: number,
  type?: "instant_content_style_web",
  width?: number,
|};
export type InstantContentWebStyleMany = $ReadOnlyArray<InstantContentWebStyle>;
export type Interest = {|
  article_feed_description?: string,
  article_feed_title?: string,
  background_color?: string,
  best_board?: ?BestBoard,
  best_boards?: ?BoardMany,
  best_pins_images?: $ReadOnlyArray<string>,
  breadcrumbs?: ?$ReadOnlyArray<Breadcrumbs>,
  brio_background_color?: string,
  canonical_term?: ?CanonicalTerm,
  canonical_url?: ?string,
  category?: ?string,
  category_title?: string,
  contextual_insertion_strategy?: InsertionStrategy,
  contextual_interests?: ?InterestMany,
  creation_time?: number,
  curated_description?: ?string,
  curated_on_page_title?: ?string,
  curated_title?: ?string,
  cycling_images?: ?$ReadOnlyArray<{| [key: string]: Thumbnails |}>,
  description?: ?string,
  enum_type?: EnumType,
  explore_section?: ?string,
  feed_update_time?: string,
  feed_view_time?: string,
  flow_stats?: number,
  follower_count?: number,
  gender_signal?: ?GenderEnum,
  has_related?: boolean,
  id?: string,
  ideas_hub_modules?: ?$ReadOnlyArray<IdeasModules>,
  image_signature?: string,
  image_size?: InterestSizeType,
  image_source?: InterestImageSource,
  images?: ?{| [key: string]: ImageDetails |},
  interest_stats?: ?SeoTopicsPageStats,
  is_followed?: boolean,
  is_ideas_hub?: ?boolean,
  is_interest?: boolean,
  is_klp_term?: boolean,
  is_new?: boolean,
  is_recommended?: boolean,
  is_taxonomy_topic?: boolean,
  key?: string,
  klp_category?: ?CategoryMap,
  klp_has_related?: boolean,
  log_data?: ?string,
  name?: string,
  p2p_pins_story?: ?StoryForInterest,
  pin_count_by_user?: number,
  pinner_count?: number | boolean,
  recommendation_pins?: $ReadOnlyArray<string>,
  recommendation_source?: InterestRecommendSource,
  seo_breadcrumbs?: ?$ReadOnlyArray<SeoBreadcrumbs>,
  seo_related_interests?: ?$ReadOnlyArray<SeoBreadcrumbs>,
  topic_breadcrumbs?: $ReadOnlyArray<Breadcrumbs>,
  translation_urls?: {| [key: string]: string |},
  trending_searches?: ?$ReadOnlyArray<string>,
  type?: "interest",
  url_name?: string,
|};
export type InterestImageSource = "c" | "g" | "p";
export type InterestMany = $ReadOnlyArray<Interest>;
export type InterestRecommendSource =
  | "annotation"
  | "cm"
  | "default"
  | "fb"
  | "nux"
  | "related"
  | "search"
  | "trending";
export type InterestSizeType = 1 | 2;
export type Interests = {|
  estimate?: number,
  id?: number,
  name?: string,
  score?: string,
  type?: string,
|};
export type InviteCategory = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type InviteChannel =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
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
  | 101;
export type InviteCode = {|
  board?: ?Board,
  created_at?: string,
  email_address?: ?string,
  from_user_id?: ?string,
  id?: string,
  image_url?: ?string,
  invite_category?: ?InviteCategory,
  invite_channel?: ?InviteChannel,
  is_accepted?: boolean,
  sender?: ?User,
  type?: "invitecode",
|};
export type InviteCodeMany = $ReadOnlyArray<InviteCode>;
export type IsConnected = {| is_connected?: boolean |};
export type ItemMetadata = {|
  active_price?: ?string,
  additional_images?: ImageMetadataMany,
  availability?: AvailabilityTypeEnum,
  currency?: CurrencyTypeEnum,
  discount_percent?: ?string,
  display_active_price?: ?string,
  display_price?: ?string,
  display_sale_price?: ?string,
  images?: ImageMetadataMany,
  item_id?: string,
  max_quantity?: number,
  price?: ?string,
  sale_price?: ?string,
  swatch_image?: ?ImageMetadata,
  type?: "itemmetadata",
  variant?: ?VariantMetadata,
|};
export type ItemMetadataMany = $ReadOnlyArray<ItemMetadata>;
export type LabelInfo = {| labels?: ?$ReadOnlyArray<string> |};
export type Layout = {|
  layout_color?: boolean,
  layout_material?: boolean,
  layout_pattern?: boolean,
  layout_size?: boolean,
|};
export type LinkBlock = {|
  block_type?: 4,
  canonical_url?: string,
  image?: ?StoryPinImage,
  image_signature?: string,
  normalized_url?: string,
  src_url?: string,
  text?: string,
  type?: 4 | "story_pin_link_block",
|};
export type LinkBlockMany = $ReadOnlyArray<LinkBlock>;
export type LinkedObject = {|
  image_url?: ?string,
  object?: Pin | Board | User | Interest,
  pin_object?: ?string,
  url?: ?string,
|};
export type LinkedObjectMany = $ReadOnlyArray<LinkedObject>;
export type Livestream = {|
  id?: string,
  ivs_channel_arn?: ?string,
  pinsub_topic?: ?PinSubTopic,
  playback_url?: string,
  preview_viewers?: ?UserMany,
  rtmp_url?: ?string,
  stream_key?: ?string,
  streamer?: ?User,
  total_viewer_count?: number,
  type?: "livestream",
  viewer_count?: number,
|};
export type LivestreamMany = $ReadOnlyArray<Livestream>;
export type LocationMetadata = {|
  id?: string,
  latitude?: ?number,
  longitude?: ?number,
  type?: "locationmetadata",
|};
export type LocationMetadataMany = $ReadOnlyArray<LocationMetadata>;
export type LoginState = 1 | 2;
export type MakeCardTutorialAdditionalData = {|
  favicon_link?: string,
  site_name?: string,
  url?: string,
|};
export type MakeCardTutorialInstructionMetadata = {|
  description?: string,
  headline?: ?string,
  id?: string,
  images?: ?{| [key: string]: Thumbnails |},
  type?: "makecardtutorialinstructionmetadata",
|};
export type MakeCardTutorialInstructionMetadataMany = $ReadOnlyArray<MakeCardTutorialInstructionMetadata>;
export type MakeCardTutorialMetadata = {|
  additional_data?: MakeCardTutorialAdditionalData,
  cost?: ?string,
  description?: string,
  from_aggregated_data?: boolean,
  id?: string,
  images?: ?{| [key: string]: Thumbnails |},
  instructions?: MakeCardTutorialInstructionMetadataMany,
  name?: string,
  partner?: ?User,
  supplies?: MakeCardTutorialSupplyMetadataMany,
  time_required?: ?string,
  type?: "makecardtutorialmetadata",
  yield_amount?: ?string,
|};
export type MakeCardTutorialMetadataMany = $ReadOnlyArray<MakeCardTutorialMetadata>;
export type MakeCardTutorialSupplyMetadata = {|
  amount?: ?string,
  id?: string,
  product?: string,
  type?: "makecardtutorialsupplymetadata",
|};
export type MakeCardTutorialSupplyMetadataMany = $ReadOnlyArray<MakeCardTutorialSupplyMetadata>;
export type MatchReason = 0 | 1 | 2 | 3;
export type MediaUploadSpace = {|
  upload_id?: string,
  upload_parameters?: {| [key: string]: string |},
  upload_url?: string,
|};
export type Merchant = {|
  approval_status?: approvalStatus,
  approval_status_rationale?: string,
  created_at?: ?number,
  customer_service_email?: string,
  customer_service_phone?: string,
  description?: ?string,
  display_name?: ?string,
  external_id?: string,
  favicon_url?: ?string,
  feed_profile?: ?FeedProfile,
  id?: string,
  is_active?: boolean,
  is_product_pin_active?: boolean,
  logo_url?: ?string,
  merchant_stats?: {| [key: string]: string |},
  merchant_url?: string,
  partner_type?: ?partnertype,
  partner_user_id?: string,
  product_pin_approval_status?: ?productPinApprovalStatus,
  product_pin_approval_status_rationale?: ?string,
  product_pin_feed_profile?: ?FeedProfile,
  return_policy_url?: string,
  type?: string,
  updated_at?: ?number,
  user?: ?User,
  user_id?: ?string,
  verticals?: $ReadOnlyArray<merchantvertical>,
|};
export type MerchantMany = $ReadOnlyArray<Merchant>;
export type MerchantMetadata = {|
  domain_whitelist?: boolean,
  feed_ingested_at_least_once?: boolean,
  last_successful_ingestion?: ?WorkflowStats,
  preference_map?: {| [key: string]: boolean | {| [key: string]: boolean |} |},
|};
export type MfaBackupCodes = {| code?: string, used?: boolean |};
export type MinimalModel = {| id?: string |};
export type MobileAppMetadata = {|
  application_id?: ?string,
  developer_name?: ?string,
  id?: string,
  supported_devices?: ?string,
  type?: "mobileappmetadata",
  url?: ?string,
|};
export type MobileAppMetadataMany = $ReadOnlyArray<MobileAppMetadata>;
export type MobileAppView = {|
  app_link_scheme?: ?string,
  application_id?: string,
  icon_url_large?: ?string,
  id?: string,
  supported_devices?: ?string,
  type?: "mobileappmetadata",
|};
export type MobileAppViewMany = $ReadOnlyArray<MobileAppView>;
export type MovieAdditionalData = {|
  favicon_link?: string,
  site_name?: string,
  url?: ?string,
|};
export type MovieMetadata = {|
  actors?: PersonMetadataMany,
  additional_data?: MovieAdditionalData,
  aggregate_rating?: ?AggregateRatingMetadata,
  content_rating?: ?string,
  date_published?: ?string,
  directors?: PersonMetadataMany,
  from_aggregated_data?: boolean,
  id?: string,
  name?: string,
  type?: "moviemetadata",
|};
export type MovieMetadataMany = $ReadOnlyArray<MovieMetadata>;
export type Nags = {| message?: string, type?: string |};
export type NativeFormatTypeEnum =
  | "CAROUSEL"
  | "COLLAGE_PIN"
  | "LENS_IMAGE"
  | "PLACE"
  | "SINGLE_IMAGE"
  | "STORYBOARD"
  | "STORY_PIN"
  | "VIDEO"
  | "VIRTUAL_TRY_ON_IMAGE";
export type NoPromotableReason =
  | "App install Pins may not be promoted."
  | "GIF Pins may not be promoted."
  | "Pin does not have a click-through link."
  | "Pins from secret boards may not be promoted."
  | "Repins of Ads may not be promoted."
  | "Video Pins may not be promoted.";
export type OfferSummary = {|
  all_in_stock?: ?boolean,
  availability?: ?number,
  in_stock?: ?boolean,
  max_price?: ?string,
  min_price?: ?string,
  price?: ?string,
  sale_end_date?: ?string,
  sale_start_date?: ?string,
  standard_price?: ?string,
|};
export type Option = {|
  args?: $ReadOnlyArray<GetArgsObject>,
  element_type?: ?number,
  format?: ?string,
  hide_info_text?: ?HideInfoText,
  hide_info_title?: ?HideInfoText,
  menu_action?: ?FeedbackOptions,
  server_action?: ?BackendServerAction,
|};
export type OptionMany = $ReadOnlyArray<Option>;
export type Origin = string;
export type PageStyle = {|
  background_color?: ?string,
  media_fit?: ?StoryPinMediaFit,
|};
export type PageStyleMany = $ReadOnlyArray<PageStyle>;
export type ParagraphBlock = {|
  block_style?: BlockStyle,
  block_type?: 0,
  id?: string,
  mentions?: ?TextTagMany,
  style?: TextStyle,
  text?: string,
  type?: 0 | "story_pin_paragraph_block",
|};
export type ParagraphBlockMany = $ReadOnlyArray<ParagraphBlock>;
export type ParsedIngredientMetadata = {|
  amt?: ?string,
  id?: string,
  name?: string,
  quantity?: number,
  type?: "parsedingredientmetadata",
  unit?: ?string,
|};
export type ParsedIngredientMetadataMany = $ReadOnlyArray<ParsedIngredientMetadata>;
export type Partner = {|
  account_type?: AccountType,
  advertising_intent?: ?number,
  auto_follow_allowed?: boolean,
  biz_ownership_email?: ?string,
  biz_ownership_status?: ?string,
  business_goals?: ?$ReadOnlyArray<BusinessGoals>,
  business_name?: string,
  business_vertical?: ?string,
  business_vertical_other?: ?string,
  contact_email?: ?string,
  contact_name?: string,
  contact_phone?: string,
  contact_phone_country?: PhoneCountryCode,
  created_at?: string,
  enable_profile_address?: boolean,
  enable_profile_message?: boolean,
  id?: string,
  is_business_agency?: ?boolean,
  is_convert?: ?boolean,
  is_create?: boolean,
  is_linked_business?: boolean,
  is_shopify_installed?: ?boolean,
  number_employees?: ?string,
  profile_place?: ?Place,
  profile_place_id?: number,
  selected_ecommerce_platforms?: $ReadOnlyArray<ECommercePlatforms>,
  third_party_apps?: ?$ReadOnlyArray<ThirdPartyApps>,
  type?: "partner",
|};
export type PartnerMany = $ReadOnlyArray<Partner>;
export type PdsPrimaryColorIntEnum = 0 | 1 | 2 | 3 | 4;
export type PdsPrimaryColorStrEnum =
  | "DARK_GRAY"
  | "GRAY"
  | "LIGHT_GRAY"
  | "RED"
  | "WHITE";
export type PerPinAnalytics = {|
  clickthrough?: number,
  closeup?: number,
  id?: string,
  impression?: number,
  metrics_start?: string,
  repin?: number,
  total_engagement?: number,
  type?: "perpinanalytics",
|};
export type PerPinAnalyticsMany = $ReadOnlyArray<PerPinAnalytics>;
export type PersonMetadata = {|
  id?: string,
  name?: string,
  type?: "personmetadata",
|};
export type PersonMetadataMany = $ReadOnlyArray<PersonMetadata>;
export type PhoneCountryCode = {| code?: string, phone_code?: string |};
export type Pin = {|
  access?: $ReadOnlyArray<PinAccess>,
  activity?: ?ActionType,
  activity_timestamp?: ?number,
  ad_creative_type?: CreativeType,
  ad_destination_url?: ?string,
  ad_match_reason?: ?MatchReason,
  ad_targeting_attribution?: AdTargetingAttribution,
  additional_hide_reasons?: $ReadOnlyArray<RecommendationComplaintReason>,
  affiliate_link?: ?string,
  aggregated_pin_data?: ?AggregatedPinData,
  alt_text?: ?string,
  analytics?: ClicksAnalyticsModel | RepinsAnalyticsModel,
  app_domain?: ?Domain | DomainMany,
  attribution?: ?Attribution,
  auto_alt_text?: ?string,
  board?: ?Board,
  board_activity?: ?BoardActivity,
  buyable_product?: ?string,
  buyable_product_availability?: ?BuyableProductMiniMetadata,
  cacheable_id?: string,
  call_to_create_responses_count?: ?number,
  call_to_create_responses_enabled?: ?CallToCreateAllowResponsesStatus,
  call_to_create_responses_preview_avatars?: ?$ReadOnlyArray<string>,
  call_to_create_responses_preview_image_urls?: ?$ReadOnlyArray<string>,
  call_to_create_source_pin?: ?Pin,
  call_to_create_source_pin_id?: ?string,
  campaign_id?: ?number,
  can_delete_did_it_and_comments?: boolean,
  canonical_merchant_domain?: ?string,
  canonical_merchant_name?: ?string,
  canonical_pin?: ?string,
  carousel_data?: ?PinCarouselData,
  category?: ?BoardCategoriesEnum,
  category_p2i?: ?number,
  cinematic_data?: CinematicData,
  click_through_action?: ClickThroughAction,
  click_through_link_quality?: ?ClickThroughLinkQuality,
  client_id?: ?string,
  closeup_attribution?: ?User,
  closeup_description?: ?string,
  closeup_unified_description?: ?string,
  closeup_unified_title?: ?string,
  closeup_user_note?: ?string,
  collage_pin?: ?CollagePin,
  collage_pin_id?: ?string,
  collection_data_id?: ?string,
  collection_pin?: ?CollectionPin,
  comment_count?: number,
  comments?:
    | CommentMany
    | {| bookmark?: ?string, data: CommentMany, uri: string |},
  comments_disabled?: boolean,
  complementary_pins?: ?PinMany,
  content_sensitivity?: {| [key: string]: boolean |},
  created_at?: ?string,
  creative_types?: ?$ReadOnlyArray<CreativeTypes>,
  creator_analytics?: ?PinAnalyticsStats,
  creator_class?: ?CreatorClass,
  cta_text?: ?string,
  dark_profile_link?: string,
  deb_ads?: ?$ReadOnlyArray<SignalDecisionDict>,
  deb_all_signals?: ?DebAllSignals,
  deb_content_quality?: ?$ReadOnlyArray<SignalDecisionDict>,
  deb_inclusive_product?: ?$ReadOnlyArray<SignalDecisionDict>,
  deb_shopping?: ?$ReadOnlyArray<SignalDecisionDict>,
  deb_trust_and_safety?: ?$ReadOnlyArray<SignalDecisionDict>,
  debug?: ?string | {| [key: string]: string |},
  debug_info_html?: ?string,
  description?: ?string,
  description_html?: string,
  destination_url_type?: ?DestinationUrlType,
  did_it_disabled?: boolean,
  did_its?: ?UserDidItDataMany,
  domain?: string,
  domain_tracking_params?: $ReadOnlyArray<DomainTrackingFormat>,
  dominant_color?: ?string,
  done_by_board_contributors?: boolean,
  done_by_me?: boolean,
  dynamic_ad_data?: DynamicAdData,
  edited_fields?: $ReadOnlyArray<string>,
  embed?: ?Embed,
  favorite_user_count?: number,
  favorited_by_me?: boolean,
  feedback_options?: ?FeedbackOptionsWithRecommendationReason,
  filtered_visual_objects?: $ReadOnlyArray<string>,
  flex_grid_style?: ?FlexGridStyle,
  gallery?: GalleryItemMany,
  grid_description?: ?string,
  grid_title?: string,
  grid_title_ads_experiment?: string,
  has_bad_category?: ?boolean,
  has_been_promoted?: boolean,
  has_male_category?: ?boolean,
  has_required_attribution_provider?: boolean,
  hashtags?: $ReadOnlyArray<string>,
  headline_text?: string,
  highlighted_aggregated_comments?: $ReadOnlyArray<string>,
  highlighted_did_it?: $ReadOnlyArray<string>,
  id?: string,
  image_crop?: ?ImageCrop,
  image_did_it_count?: ?number,
  image_large_size_pixels?: ?ImageDimensions,
  image_large_size_points?: ?ImageDimensions,
  image_large_url?: ?string,
  image_medium_size_pixels?: ?ImageDimensions,
  image_medium_size_points?: ?ImageDimensions,
  image_medium_url?: ?string,
  image_signature?: string,
  image_square_size_pixels?: ?ImageDimensions,
  image_square_size_points?: ?ImageDimensions,
  image_square_url?: ?string,
  images?: {| [key: string]: ImageDetails |},
  influencer_pin_stats?: ?PinAnalyticsStats,
  insertion_id?: ?string,
  is_best_tried_it?: ?boolean,
  is_blocked?: boolean,
  is_call_to_create?: boolean,
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
  is_live_learning_recap_pin?: boolean,
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
  like_count?: number,
  liked_by_me?: boolean,
  link?: ?string,
  link_domain?: ?Domain,
  link_user_website?: ?UserWebsite,
  manual_interest_tags?: ?{| [key: string]: string |},
  matched_user_interest?: ?string,
  meta_title_description?: TitleAndDescription,
  method?: PinMethods,
  mobile_link?: ?string,
  multiple_links?: ?$ReadOnlyArray<string>,
  native_creator?: ?User,
  native_format_type?: NativeFormatTypeEnum,
  native_pin_stats?: ?string,
  native_place?: ?Place,
  not_promotable_reason?: ?NoPromotableReason,
  origin_pin?: ?Pin,
  origin_pinner?: ?User,
  parent_pin?: ?Pin,
  per_pin_analytics?: ?PerPinAnalytics,
  pin360?: ?Pin360Metadata,
  pin_attribution?: ?Attributions,
  pin_join?: ?PinJoin,
  pin_note?: ?PinNote,
  pin_promotion_id?: ?number,
  pin_stats?: ?PinAnalyticsStats,
  pinned_to_board?: ?Board,
  pinner?: ?User,
  place?: ?string,
  place_summary?: ?string,
  prefetch_asset_urls?: $ReadOnlyArray<string>,
  price_currency?: ?"GBP" | "USD",
  price_value?: number,
  privacy?: Privacy,
  product_metadata?: ?ProductMetadata,
  product_pin_data?: ?ProductMetadataV2,
  promote_button?: PromotedButton,
  promoted_android_deep_link?: string,
  promoted_ios_deep_link?: string,
  promoted_is_congruency_enabled?: boolean,
  promoted_is_max_video?: boolean,
  promoted_is_opaque_onetap_enabled?: boolean,
  promoted_is_removable?: boolean,
  promoted_position?: ?number,
  promoter?: ?User,
  quality_state?: PinQualityState,
  reaction_by_me?: ReactionTypeEnum,
  reaction_counts?: ReactionCount,
  recommendation_reason?: ?RecommendationReason,
  related_module?: ?RelatedModule,
  repin_count?: number,
  requires_advertiser_attribution?: boolean,
  rich_merchant_name?: ?string,
  rich_metadata?: ?RichPinDataView,
  rich_recipe_top_ingredients?: $ReadOnlyArray<TopIngredient>,
  rich_summary?: ?RichPinGridData,
  root_pin_id?: string,
  scene_data?: {| [key: string]: string |},
  search_query?: ?string,
  section?: ?BoardSection,
  seo_url?: string,
  shareable_url?: string,
  shopping_flags?: $ReadOnlyArray<number>,
  shopping_rec_disabled?: boolean,
  should_autoplay?: boolean,
  should_prefetch?: boolean,
  should_preload?: boolean,
  should_redirect_id_only_url_to_text_url?: boolean,
  source_interest?: ?Interest,
  source_type?: ?string,
  sponsorship?: ?Sponsorship,
  story_pin_data?: ?StoryPinData,
  story_pin_data_id?: ?string,
  subscribed_to_notifications?: boolean,
  themes?: $ReadOnlyArray<Theme>,
  third_party_pin_owner?: ?User,
  title?: ?string,
  top_interest?: TopInterest,
  total_reaction_count?: number,
  tracked_link?: ?string,
  tracking_params?: ?string,
  type?: "pin",
  unified_user_note?: ?string,
  upsell_audience_size?: ?Interests,
  user_mention_tags?: ?TextTagMany,
  via_pinner?: ?User,
  video_signature?: ?string,
  video_status?: ?VideoStatus,
  video_status_message?: ?VideoStatusMessage,
  videos?: ?Video,
  view_tags?: ?$ReadOnlyArray<ViewTag>,
  virtual_try_on_data?: VirtualTryOnData,
  virtual_try_on_type?: VirtualTryOnPinType,
  visual_objects?: $ReadOnlyArray<StelaVisualObject>,
  visual_search_attrs?: ?{| [key: string]: string |},
|};
export type Pin360Metadata = {| stereo?: string, type?: string |};
export type PinAccess = "delete" | "tag" | "write";
export type PinAnalyticsStats = {|
  "24h"?: CreatorAnalytics,
  "24h_realtime"?: CreatorAnalytics,
  "30d"?: CreatorAnalytics,
  "30d_realtime"?: CreatorAnalytics,
  "30d_realtime_non_hourly"?: CreatorAnalytics,
  "7d"?: CreatorAnalytics,
  "7d_realtime"?: CreatorAnalytics,
  "7d_realtime_non_hourly"?: CreatorAnalytics,
  "90d"?: CreatorAnalytics,
  "90d_realtime"?: CreatorAnalytics,
  "90d_realtime_non_hourly"?: CreatorAnalytics,
  all_time?: CreatorAnalytics,
  all_time_realtime?: CreatorAnalytics,
  all_time_realtime_non_hourly?: CreatorAnalytics,
  type?: string,
|};
export type PinCarouselData = {|
  carousel_slots?: PinCarouselSlotMany,
  id?: string,
  index?: number,
  rich_metadata?: ?RichPinDataViewMany,
  rich_summary?: ?RichPinGridDataMany,
  type?: "pincarouseldata",
|};
export type PinCarouselDataMany = $ReadOnlyArray<PinCarouselData>;
export type PinCarouselSlot = {|
  ad_destination_url?: ?string,
  android_deep_link?: ?string,
  details?: ?string,
  domain?: string,
  id?: string,
  image_signature?: string,
  images?: {| [key: string]: Thumbnails |},
  ios_deep_link?: ?string,
  link?: ?string,
  rich_metadata?: ?RichPinDataView,
  rich_summary?: ?RichPinGridData,
  title?: ?string,
  type?: "pincarouselslot",
|};
export type PinCarouselSlotMany = $ReadOnlyArray<PinCarouselSlot>;
export type PinJoin = {|
  annotations_with_links?: {| [key: string]: AnnotationsWithLinks |},
  breadcrumbs?: ?string,
  canonical_pin?: ?Pin,
  i18n_visual_descriptions?: $ReadOnlyArray<string>,
  id?: string,
  seo_breadcrumbs?: ?$ReadOnlyArray<SeoBreadcrumbs>,
  seo_description?: string,
  seo_related_interests?: ?$ReadOnlyArray<SeoBreadcrumbs>,
  visual_annotation?: $ReadOnlyArray<string>,
  visual_descriptions?: $ReadOnlyArray<string>,
|};
export type PinJoinMany = $ReadOnlyArray<PinJoin>;
export type PinMany = $ReadOnlyArray<Pin>;
export type PinMethods =
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
  | "pinterest_platform"
  | "place"
  | "scraped"
  | "share_extension_android"
  | "share_extension_ios"
  | "unknown"
  | "uploaded"
  | "virtual_try_on_camera";
export type PinNote = {|
  created_at?: string,
  id?: string,
  pin?: ?Pin,
  text?: string,
  type?: string,
  updated_at?: ?string,
|};
export type PinNoteMany = $ReadOnlyArray<PinNote>;
export type PinQualityState = 0 | 1 | 2 | 3 | 4;
export type PinSubTopic = {|
  endpoint?: string,
  id?: string,
  ivs_channel_arn?: ?string,
  topic_type?: string,
  type?: "pinsubtopic",
|};
export type PinSubTopicMany = $ReadOnlyArray<PinSubTopic>;
export type PinTag = {|
  anchor_x?: ?number,
  anchor_y?: ?number,
  annotations?: ?$ReadOnlyArray<string>,
  bbox_height?: number,
  bbox_source?: number,
  bbox_width?: number,
  countries?: $ReadOnlyArray<string>,
  exact_matches?: $ReadOnlyArray<string>,
  hide_reason?: number,
  is_live?: boolean,
  is_verified?: boolean,
  pin_tag_key?: string,
  tag_types?: $ReadOnlyArray<string>,
  visible_in_grid?: boolean,
  x_percent?: number,
  y_percent?: number,
|};
export type PinTagChip = {|
  id?: string,
  image_signature?: string,
  images?: ?{| [key: string]: Thumbnails |},
  link?: ?string,
  price_currency?: ?string,
  price_value?: ?number,
  title?: ?string,
|};
export type PinTypeFilter = {|
  id?: string,
  pin_type?: number,
  text?: string,
  type?: "pintypefilter",
|};
export type PinTypeFilterMany = $ReadOnlyArray<PinTypeFilter>;
export type Place = {|
  access?: $ReadOnlyArray<string>,
  bounds?: ?Bounds,
  category?: string,
  category_join?: ?PlaceCategory,
  country?: ?string,
  extra_street?: ?string,
  from_pin_join?: boolean,
  hero_images?: ?{| [key: string]: Thumbnails |},
  hours?: $ReadOnlyArray<PlaceHours>,
  hours_texts?: HoursTextMany,
  id?: string,
  image?: ?PlaceImage,
  images?: ?PlaceImageMany,
  latitude?: number,
  locality?: ?string,
  longitude?: number,
  name?: string,
  owner?: ?User,
  phone?: ?string,
  postal_code?: ?number | string,
  rating?: ?number,
  rating_signals?: ?number,
  region?: ?string,
  search_id?: string,
  simple_tips?: ?$ReadOnlyArray<string>,
  source_icon?: ?string,
  source_name?: ?SourceName,
  source_url?: ?string,
  street?: ?string,
  type?: "place",
  upsell_images?: ?{| [key: string]: Thumbnails |},
  url?: ?string,
  user_education_images?: ?{| [key: string]: Thumbnails |},
|};
export type PlaceCategory = {|
  icon_url?: ?string,
  id?: string,
  l1_category_name?: string,
  name?: string,
  type?: "placecategory",
|};
export type PlaceCategoryMany = $ReadOnlyArray<PlaceCategory>;
export type PlaceHours = {|
  days?: string,
  open?: $ReadOnlyArray<PlaceHoursOpen>,
|};
export type PlaceHoursOpen = {| end?: string, start?: string |};
export type PlaceImage = {|
  id?: string,
  thumbnails?: {| [key: string]: ImageDetails |},
  type?: "placeimage",
|};
export type PlaceImageMany = $ReadOnlyArray<PlaceImage>;
export type PlaceMany = $ReadOnlyArray<Place>;
export type PlaceMetadata = {|
  address?: ?AddressMetadata,
  description?: ?string,
  geo?: LocationMetadata,
  hours?: $ReadOnlyArray<string>,
  id?: string,
  name?: string,
  phone?: ?string,
  rating?: ?AggregateRatingMetadata,
  type?: "placemetadata",
  url?: ?string,
|};
export type PlaceMetadataMany = $ReadOnlyArray<PlaceMetadata>;
export type Privacy = "public" | "secret";
export type PrivacyPolicyRules = {|
  send_events_to_ad_networks?: boolean,
  send_events_to_facebook?: boolean,
  send_marketing_data?: boolean,
  send_pixel?: boolean,
|};
export type ProductHistoryMetadata = {|
  id?: string,
  products?: RichPinProductMetadataMany,
  type?: "producthistorymetadata",
|};
export type ProductHistoryMetadataMany = $ReadOnlyArray<ProductHistoryMetadata>;
export type ProductMetadata = {|
  description?: string,
  id?: string,
  item_id?: string,
  item_set_id?: string,
  offers?: RichPinOfferMetadataMany,
  product_pin_type?: ProductPinType,
  shipping_info?: ?ShippingInfo,
  site_name?: string,
  title?: string,
  type?: "productmetadata",
|};
export type ProductMetadataMany = $ReadOnlyArray<ProductMetadata>;
export type ProductMetadataV2 = {|
  active_max_price?: ?string,
  active_min_price?: ?string,
  availability?: AvailabilityTypeEnum,
  canonical_merchant_domain?: string,
  currency?: CurrencyTypeEnum,
  description?: ?string,
  discount_percent?: ?string,
  display_active_max_price?: ?string,
  display_active_min_price?: ?string,
  display_max_price?: ?string,
  display_min_price?: ?string,
  display_price?: ?string,
  display_sale_price?: ?string,
  display_shipping_time?: string,
  favicon_link?: ?string,
  has_free_shipping?: boolean,
  has_swatches?: boolean,
  id?: string,
  is_available?: boolean,
  is_head_merchant?: boolean,
  items?: ItemMetadataMany,
  layout?: Layout,
  link?: string,
  max_price?: ?string,
  merchant_badge?: {| [key: string]: string |},
  merchant_id?: string,
  merchant_item_group_id?: string,
  merchant_name?: string,
  merchant_rating?: number,
  min_price?: ?string,
  price?: ?string,
  product_thumbnails?: ImageMetadataMany,
  refund_info?: string,
  return_policy_link?: ?string,
  rich_description?: {| [key: string]: string |},
  sale_price?: ?string,
  short_description?: ?string,
  title?: string,
  type?: "buyableproductmetadata",
  variations?: Variations,
|};
export type ProductMetadataV2Many = $ReadOnlyArray<ProductMetadataV2>;
export type ProductPinType = 1 | 2 | 3;
export type ProductVariant = {|
  additional_images?: ?$ReadOnlyArray<AdditionalImages>,
  checkout_token?: ?string,
  dimensions?: {| [key: string]: string |},
  is_eligible_for_checkout?: boolean,
  item_id?: string,
  item_set_id?: string,
  links?: $ReadOnlyArray<string>,
  merchant_item_id?: string,
  merchant_item_set_id?: string,
  offer_summary?: OfferSummary,
  pin_id?: number,
  shipping_info?: ShippingInfo,
  title?: string,
  type?: "productvariant",
|};
export type ProductVariantMany = $ReadOnlyArray<ProductVariant>;
export type ProductVariantSet = {|
  dimension_metadata?: DimensionMetadataMany,
  primary_dimension?: string,
  type?: "productvariantset",
  variant_reps?: $ReadOnlyArray<number>,
  variants?: ProductVariantMany,
|};
export type ProductVariantSetMany = $ReadOnlyArray<ProductVariantSet>;
export type ProfileCoverSource = {|
  id?: string,
  image_tracking_ids?: {| [key: string]: string |},
  images?: ?{| [key: string]: ImageDetails |},
  source?: string,
  source_id?: ?string,
  type?: "profilecoversource",
  video?: ?Video,
  video_tracking_ids?: {| [key: string]: string |},
|};
export type ProfileCoverSourceMany = $ReadOnlyArray<ProfileCoverSource>;
export type ProfileTab = {|
  id?: string,
  is_default?: boolean,
  name?: string,
  tab_type?: number,
  type?: string,
|};
export type ProfileTabMany = $ReadOnlyArray<ProfileTab>;
export type PromotedButton = {|
  promote_button_destination?: string,
  promote_button_text?: string,
  show_promote_button?: boolean,
|};
export type ReactionCount = {|
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
export type ReactionTypeEnum =
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
export type RecipeAdditionalData = {|
  favicon_link?: string,
  id?: string,
  site_name?: string,
  url?: ?string,
|};
export type RecipeMetadata = {|
  additional_data?: RecipeAdditionalData,
  aggregate_rating?: ?AggregateRatingMetadata,
  categorized_ingredients?: CategorizedIngredientsMetadataMany,
  cook_times?: CookTimes,
  diets?: $ReadOnlyArray<string>,
  display_cook_time?: number,
  from_aggregated_data?: boolean,
  id?: string,
  name?: string,
  servings_summary?: ServingsSummary,
  type?: "recipemetadata",
|};
export type RecipeMetadataMany = $ReadOnlyArray<RecipeMetadata>;
export type RecommendationComplaintReason =
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
export type RecommendationReason = {|
  reason?: string,
  reason_id?: ?string,
  reason_id_str?: ?string,
  reason_image?: string,
  through_interest?: string,
  through_properties?: {| [key: string]: $ReadOnlyArray<string> |},
|};
export type RelatedModule =
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
  | 100;
export type RepinsAnalyticsModel = {|
  id?: string,
  pin?: ?Pin,
  repins?: number,
  type?: "repinsanalyticsmodel",
|};
export type RepinsAnalyticsModelMany = $ReadOnlyArray<RepinsAnalyticsModel>;
export type ResponseStatus = "success" | "failure";
export type ResurrectionInfo = {|
  id?: string,
  resurrection_dt?: ?string,
  type?: string,
|};
export type RichActions = "buy" | "download";
export type RichPinDataView = {|
  aggregate_rating?: AggregateRatingMetadata,
  aggregated_app_link?: AggregatedAppLinkMetadata,
  amp_url?: ?string,
  amp_valid?: boolean,
  apple_touch_icon_images?: ?{| [key: string]: string |},
  apple_touch_icon_link?: ?string,
  article?: ArticleMetadata,
  canonical_url?: ?string,
  description?: ?string,
  favicon_images?: {| [key: string]: string |},
  favicon_link?: string,
  has_price_drop?: boolean,
  id?: string,
  instant_article?: InstantArticleMetadata,
  instant_content?: InstantContentMetadata,
  is_hard_404?: boolean,
  is_product_pin_v2?: boolean,
  is_soft_404?: boolean,
  link_status?: ?number,
  locale?: ?string,
  mobile_app?: ?MobileAppMetadata | MobileAppView,
  movie?: MovieMetadata,
  place?: PlaceMetadata,
  products?: RichPinProductMetadataMany,
  products_history?: ProductHistoryMetadataMany,
  recipe?: RecipeMetadata,
  site_name?: ?string,
  title?: ?string,
  tracker?: ?string,
  tutorial?: MakeCardTutorialMetadata,
  type?: "richpindataview",
  url?: ?string,
|};
export type RichPinDataViewMany = $ReadOnlyArray<RichPinDataView>;
export type RichPinGridData = {|
  actions?: $ReadOnlyArray<RichActions>,
  aggregate_rating?: AggregateRatingMetadata,
  apple_touch_icon_images?: ?{| [key: string]: string |},
  apple_touch_icon_link?: ?string,
  display_cook_time?: number,
  display_description?: string,
  display_name?: string,
  favicon_images?: {| [key: string]: string |},
  favicon_link?: string,
  has_instant_content?: boolean,
  id?: string,
  instant_article?: InstantArticleMetadata,
  instant_content?: InstantContentMetadata,
  is_hard_404?: boolean,
  is_product_pin_v2?: boolean,
  is_soft_404?: boolean,
  mobile_app?: ?MobileAppMetadata,
  products?: RichPinProductMetadataMany,
  site_name?: ?string,
  type?: "richpingriddata",
  type_name?: ?string,
  url?: ?string,
|};
export type RichPinGridDataMany = $ReadOnlyArray<RichPinGridData>;
export type RichPinOfferMetadata = {|
  availability?: ?number,
  id?: string,
  in_stock?: ?boolean,
  name?: ?string,
  price_currency?: string,
  price_value?: ?number,
  type?: "offermetadata",
|};
export type RichPinOfferMetadataMany = $ReadOnlyArray<RichPinOfferMetadata>;
export type RichPinProductMetadata = {|
  additional_images?: ?$ReadOnlyArray<AdditionalImages>,
  has_multi_images?: ?boolean,
  id?: string,
  item_id?: string,
  item_set_id?: string,
  label_info?: LabelInfo,
  name?: ?string,
  offer_summary?: OfferSummary,
  offers?: RichPinOfferMetadataMany,
  purchase_url?: ?string,
  shipping_info?: ShippingInfo,
  type?: "richproductmetadata",
  variant_set?: ?ProductVariantSet,
|};
export type RichPinProductMetadataMany = $ReadOnlyArray<RichPinProductMetadata>;
export type ScheduledPin = {|
  alt_text?: ?string,
  board?: ?Board,
  created_at?: string,
  description?: string,
  id?: string,
  image?: ?{| [key: string]: Thumbnails |},
  image_signature?: string,
  link?: ?string,
  scheduled_ts?: number,
  section?: ?BoardSection,
  title?: ?string,
  type?: "scheduledpin",
  user?: ?User,
  videos?: ?Video,
|};
export type ScheduledPinMany = $ReadOnlyArray<ScheduledPin>;
export type Score = {| count?: number, score?: number |};
export type SectionTitleRecommendationSource = 0 | 1 | 2 | 3;
export type SensitiveTermCategory =
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
  | 19;
export type Sensitivity = {|
  advisory?: ?SensitiveTermCategory,
  id?: string,
  notice?: ?AdvisoryNotice,
  notices?: AdvisoryNoticeMany,
  severity?: ?SeverityLevels,
  type?: "sensitivity",
|};
export type SensitivityAdvisoryNoticeStyleType = 1 | 2;
export type SensitivityMany = $ReadOnlyArray<Sensitivity>;
export type SensitivityScreen = {| reason?: ?string, show_warning?: boolean |};
export type SensitivityScreenMany = $ReadOnlyArray<SensitivityScreen>;
export type SeoBreadcrumbs = {|
  image?: {| [key: string]: Thumbnails |},
  name?: string,
  url?: string,
|};
export type SeoTopicsPageStats = {|
  num_repinners?: number,
  num_tries?: number,
|};
export type ServingsSummary = {|
  serves?: ?string,
  summary?: ?string,
  yields?: ?string,
|};
export type SeverityLevels = 0 | 1 | 2 | 3;
export type ShippingInfo = {|
  free_shipping_price?: ?string,
  free_shipping_value?: ?number,
|};
export type SignalDecisionBackgroundColorEnum =
  | "#767676"
  | "#01A674"
  | "#F23533";
export type SignalDecisionDict = {|
  background_color?: SignalDecisionBackgroundColorEnum,
  icon_url?: SignalDecisionIconEnum,
  more_info_url?: ?string,
  owner_id?: string,
  signal_id?: string,
  signal_message?: string,
|};
export type SignalDecisionIconEnum =
  | "https://s.pinimg.com/redx.png"
  | "https://s.pinimg.com/greencheck.png";
export type SourceName = "1" | "2";
export type Sponsorship = {| creator?: User, sponsor?: User, status?: number |};
export type StelaVisualObject = {|
  detection?: boolean,
  h?: number,
  index?: number,
  is_stela?: boolean,
  label?: string,
  label_id?: ?number,
  label_x?: number,
  label_y?: number,
  max_annotation_num_documents?: number,
  score?: number,
  show_on_closeup?: boolean,
  w?: number,
  x?: number,
  y?: number,
|};
export type Story = {|
  action?: ?StoryAction,
  aux_fields?: ?StoryAuxFields,
  background_colour?: ?string,
  button_text?: ?StoryText,
  closeup_id?: ?string,
  container_type?: ?StoryContainerTypeIntEnum | StoryContainerTypeStrEnum,
  content_ids?: $ReadOnlyArray<string>,
  copy?: {| [key: string]: string |},
  custom_properties?: {| [key: string]: wildcards_OneOfAny |},
  display_options?: ?StoryDisplayOptions,
  dynamic_insertion_options?: {| [key: string]: string |},
  experience?: ?Experience,
  experience_extra_context?: {| [key: string]: string |},
  id?: string,
  mapped_display_options?: {| [key: string]: StoryDisplayOptions |},
  objects?: ?$ReadOnlyArray<
    | Pin
    | Board
    | ExploreArticle
    | User
    | ContextualSearch
    | BoardSectionNameRecommendation
  >,
  referring_source?: ?string,
  related_interests?: {| [key: string]: string |},
  relationships?: {| [key: string]: string |},
  selected_interests?: $ReadOnlyArray<string>,
  slot?: ?number,
  story_type?: ?string,
  subtitle?: ?StoryText,
  title?: ?StoryText,
  tracking_params?: ?string,
  type?: "story",
  user?: ?User,
|};
export type StoryAction = {|
  full_feed_title?: string,
  location?: StoryActionButtonLocationEnum,
  pins_display?: StoryPinsDisplayEnum,
  request_params?: string,
  style?: number,
  text?: string,
  url?: string,
  user?: User,
  view_parameter_type?: number,
|};
export type StoryActionButtonLocationEnum = 0 | 1 | 2 | 3 | 4;
export type StoryAuxFields = {|
  action_url?: string,
  annotation_id?: number,
  module_in_feed?: boolean,
  module_position?: number,
  module_source_id?: number,
  module_style?: string,
|};
export type StoryCategory =
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
  | 101
  | 102
  | 103
  | 104
  | 105
  | 106
  | 107
  | 108
  | 109
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
  | 124;
export type StoryContainerTypeIntEnum =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
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
  | 99
  | 100;
export type StoryContainerTypeStrEnum =
  | "ALL_CALLS_TO_CREATE"
  | "APP_UPSELL"
  | "BANNER"
  | "BLOCK_PATTERN"
  | "BOARD_ORGANIZE_PINS_PREVIEW"
  | "BOARD_ORGANIZE_SECTION_GROUPINGS"
  | "BOARD_SECTION_TEMPLATES"
  | "CAROUSEL"
  | "COMMUNITY_CREATION_MARKETING"
  | "COMMUNITY_TAKES"
  | "CREATORS_INTERSTITIAL"
  | "CREATORS_PORTAL"
  | "CREATOR_BUBBLE_HF_PLACEHOLDER"
  | "CREATOR_BUBBLE_UPSELL"
  | "CREATOR_FOLLOW_PROMPT_ONE_COL"
  | "CREATOR_FOLLOW_PROMPT_TWO_COL"
  | "DINNER_TIME"
  | "DISCOVER_CREATORS_PORTAL"
  | "EDUCATION_BANNER"
  | "EXPLORE_CREATOR_CAROUSEL"
  | "FEATURED_CALLS_TO_CREATE"
  | "FEED_CARD"
  | "FOLLOW_SINGLE_ITEM"
  | "HOME_FEED_EDUCATION_STORY"
  | "IDEAS_CARD"
  | "IDEA_PIN_CREATION_UPSELL"
  | "ITEM_GRID"
  | "LANDING_PAGE"
  | "MULTIPLE_PINS_PROMOTE"
  | "MULTI_BRANDS_COLLAGE"
  | "MULTI_PRODUCTS_CARD"
  | "MULTI_PRODUCTS_COLLAGE"
  | "NEW_IDEAS_PREVIEW_DETAILED"
  | "NEW_IDEAS_PREVIEW_FOOTER"
  | "NONE"
  | "PHOTO_GALLERY_EVALUATION"
  | "PHOTO_GALLERY_RECOMMENDATION"
  | "PHOTO_GALLERY_TOPIC_PICKER"
  | "PINS_PORTAL"
  | "PIN_ARTICLE"
  | "PIN_GAME"
  | "PIN_PREVIEW"
  | "PIN_STACK"
  | "PREVIEW_BANNER"
  | "QUIZ"
  | "RECENTLY_ENGAGED_PINS_PREVIEW"
  | "REDISCOVERY"
  | "RELATED_MODULE_CAPPED_GRID"
  | "RELATED_MODULE_CARD"
  | "RELATED_MODULE_CAROUSEL"
  | "RELATED_MODULE_COLLAGE"
  | "RELATED_SEARCHES_PILLS"
  | "RELATED_SEARCHES_PILLS_ONE_COLUMN"
  | "RELATED_SEARCHES_THREE_SQUARES"
  | "RELATED_TRIED_IT_FEED"
  | "SEARCH_CHUNKS_ROW"
  | "SEARCH_PROMPT"
  | "SEARCH_SURVEY"
  | "SEARCH_TILES_GRID"
  | "SEARCH_TYPING"
  | "SEASONAL_UPSELL"
  | "SECTION_TITLE_RECOMMENDATIONS"
  | "SEPARATOR"
  | "SHOPPING_SQUARE_GRID"
  | "SIMPLE_ACTION"
  | "SIMPLE_FOOTER"
  | "SIMPLE_HEADER"
  | "SINGLE_PIN_PROMOTE"
  | "SNACKBOX"
  | "STL_SINGLE_COLUMN_GRID"
  | "STRUCTURED_FEED_CAROUSEL"
  | "STRUCTURED_FEED_FOOTER"
  | "STRUCTURED_FEED_GRID_SECTION"
  | "STRUCTURED_FEED_HEADER"
  | "STRUCTURED_FEED_SINGLE_IMAGE_UPSELL"
  | "THREE_COLUMN"
  | "TODAY_ARTICLE"
  | "TODAY_ARTICLE_SECTION"
  | "TODAY_TAB_ARTICLE_PORTAL"
  | "TODAY_TAB_ARTICLE_PORTAL_CARD"
  | "TOPIC_GAME"
  | "TOPIC_RENUX"
  | "TRENDING_CALLS_TO_CREATE"
  | "UPSELL_PACKAGED_SHOPPING_IDEA"
  | "UPSELL_PACKAGE_SQUARE"
  | "UPSELL_SINGLE_ITEM"
  | "UPSELL_TODAY_TAB"
  | "USER_PINS"
  | "USE_CASE"
  | "VARIABLE_RENUX_ONE_COL"
  | "VARIABLE_RENUX_ONE_COL_IMG"
  | "VARIABLE_RENUX_TWO_COL"
  | "VARIABLE_RENUX_TWO_COL_FLYING_PINS"
  | "VARIABLE_RENUX_TWO_COL_MED"
  | "VARIABLE_RENUX_TWO_COL_MULTI_ENTRY"
  | "VARIABLE_RENUX_TWO_COL_PINS"
  | "VARIABLE_RENUX_TWO_COL_PROMPT"
  | "VARIABLE_RENUX_TWO_COL_SMALL"
  | "VARIABLE_RENUX_TWO_COL_VIDEO"
  | "VERTICAL_FLEXY_STACK";
export type StoryContentDisplay = {|
  center_content?: ?boolean,
  component_type?: ?number,
  content_visible_item_count?: ?StoryContentVisibleItemCount,
  grid_layout?: ?StoryTilesGridLayout,
  model_type?: ?number,
  pins_display?: ?number,
|};
export type StoryContentDisplayMany = $ReadOnlyArray<StoryContentDisplay>;
export type StoryContentForInterest = {|
  featured_ids?: $ReadOnlyArray<string>,
  objects?: $ReadOnlyArray<string>,
|};
export type StoryContentVisibleItemCount = {|
  mobile?: ?number,
  tablet_landscape?: ?number,
  tablet_portrait?: ?number,
  web?: ?number,
|};
export type StoryContentVisibleItemCountMany = $ReadOnlyArray<StoryContentVisibleItemCount>;
export type StoryDisplayOptions = {|
  action_button_location?: ?number,
  align_image_bottom?: boolean,
  allow_pin_height_trimming?: ?boolean,
  board_view_type?: ?BoardViewType,
  carousel_item_spacing?: ?number,
  container_grid_span?: ?number,
  content_display?: ?StoryContentDisplay,
  corner_radius?: ?number,
  extra_spacing_after?: number,
  extra_spacing_before?: number,
  footer_display?: ?StoryFooterDisplay,
  has_condensed_header?: boolean,
  header_display?: ?StoryHeaderDisplay,
  header_font?: ?string,
  header_hidden?: boolean,
  hide_search_guides_when_visible?: boolean,
  horizontal_full_bleed?: boolean,
  ideas_card_hide_when_offscreen?: boolean,
  identifier_icon_name?: ?number,
  image_only?: ?boolean,
  item_column_span?: ?number,
  item_view_rep_style?: ?StoryItemViewRepStyle,
  num_columns_requested?: number,
  pin_image_ratio?: ?number,
  scale_up?: ?boolean,
  shopping_grid_display?: ?StoryShoppingGridDisplay,
  show_content_follow_buttons?: ?boolean,
  show_dismiss_button?: ?boolean,
  show_follow_buttons?: ?boolean,
  show_product_indicator_overlay?: ?boolean,
  show_simplified_pin?: boolean,
  subtitle_text_color?: ?string,
  tiles_grid_layout?: ?StoryTilesGridLayout,
  title_text_color?: ?string,
  use_plain_text_display_mode?: boolean,
|};
export type StoryDisplayOptionsForInterest = {|
  action_button_location?: string,
  show_action_as_footer?: boolean,
  show_dismiss_button?: boolean,
|};
export type StoryDisplayOptionsMany = $ReadOnlyArray<StoryDisplayOptions>;
export type StoryFooterDisplay = {| bottom_corner_radius?: ?number |};
export type StoryFooterDisplayMany = $ReadOnlyArray<StoryFooterDisplay>;
export type StoryForInterest = {|
  container_type?: string,
  content?: StoryContentForInterest,
  display_options?: StoryDisplayOptionsForInterest,
  id?: string,
  relationships?: StoryRelationshipsForInterest,
  story_type?: string,
  title?: StoryTitleForInterest,
  type?: string,
|};
export type StoryHeaderDisplay = {|
  header_size?: ?number,
  text_alignment?: ?number,
  top_corner_radius?: ?number,
|};
export type StoryHeaderDisplayMany = $ReadOnlyArray<StoryHeaderDisplay>;
export type StoryIcon = -1 | 0 | 1 | 2 | 3 | 4;
export type StoryItemViewRepStyle = {|
  explore_article_rep_style?: ?number,
  user_rep_style?: ?number,
|};
export type StoryItemViewRepStyleMany = $ReadOnlyArray<StoryItemViewRepStyle>;
export type StoryMany = $ReadOnlyArray<Story>;
export type StoryPinAnimatedStickerBlock = {|
  block_type?: 15,
  end_time?: ?number,
  start_time?: ?number,
  sticker_id?: string,
  type?: 15 | "story_pin_animated_sticker_block",
|};
export type StoryPinAnimatedStickerBlockMany = $ReadOnlyArray<StoryPinAnimatedStickerBlock>;
export type StoryPinBasics = {|
  key_value_blocks?: StoryPinKeyValueBlockMany,
  list_blocks?: ?StoryPinListBlockMany,
|};
export type StoryPinBasicsCategories = 0 | 1 | 2;
export type StoryPinBasicsMany = $ReadOnlyArray<StoryPinBasics>;
export type StoryPinCommentReplyBlock = {|
  block_style?: BlockStyle,
  block_type?: 16,
  original_comment_id?: string,
  type?: 16 | "story_pin_comment_reply_block",
|};
export type StoryPinCommentReplyBlockMany = $ReadOnlyArray<StoryPinCommentReplyBlock>;
export type StoryPinDIYDifficultyLevel = 0 | 1 | 2 | 3;
export type StoryPinDIYMetadataField = {|
  difficulty?: StoryPinDIYDifficultyLevel,
|};
export type StoryPinDIYMetadataFieldMany = $ReadOnlyArray<StoryPinDIYMetadataField>;
export type StoryPinData = {|
  has_affiliate_products?: boolean,
  has_product_pins?: boolean,
  id?: string,
  last_edited?: ?string,
  mentioned_users?: ?UserMany,
  metadata?: StoryPinMetadataField,
  page_count?: number,
  pages?: StoryPinPageMany,
  pages_preview?: StoryPinPageMany,
  product_pins?: ?string,
  total_video_duration?: number,
  type?: "storypindata",
|};
export type StoryPinDataMany = $ReadOnlyArray<StoryPinData>;
export type StoryPinImage = {|
  dominant_color?: string,
  images?: {| [key: string]: Thumbnails |},
|};
export type StoryPinImageBlock = {|
  block_style?: BlockStyle,
  block_type?: 2,
  image?: ?StoryPinImage,
  image_signature?: string,
  text?: string,
  tracking_id?: ?string,
  type?: 2 | "story_pin_image_block",
|};
export type StoryPinImageBlockMany = $ReadOnlyArray<StoryPinImageBlock>;
export type StoryPinKeyValueBlock = {|
  block_type?: 8,
  category_type?: ?StoryPinBasicsCategories,
  key?: "Cook time" | "Servings" | "Difficulty",
  type?: 8 | "story_pin_key_value_block",
  value?: ?string,
|};
export type StoryPinKeyValueBlockMany = $ReadOnlyArray<StoryPinKeyValueBlock>;
export type StoryPinLayout = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type StoryPinListBlock = {|
  block_type?: 7,
  blocks?: $ReadOnlyArray<StoryPinsBlocks>,
  heading?: string,
  type?: 7 | "story_pin_list_block",
|};
export type StoryPinListBlockMany = $ReadOnlyArray<StoryPinListBlock>;
export type StoryPinMediaFit = 0 | 1;
export type StoryPinMentionStickerBlock = {|
  block_style?: BlockStyle,
  block_type?: 12,
  end_time?: ?number,
  is_removed?: boolean,
  start_time?: ?number,
  type?: 12 | "story_pin_mention_sticker_block",
  user?: ?User,
  user_id?: string,
|};
export type StoryPinMentionStickerBlockMany = $ReadOnlyArray<StoryPinMentionStickerBlock>;
export type StoryPinMetadataField = {|
  basics?: ?StoryPinBasics,
  compatible_version?: string,
  diy_data?: ?StoryPinDIYMetadataField,
  is_compatible?: boolean,
  is_editable?: boolean,
  pin_image_signature?: ?string,
  pin_title?: ?string,
  recipe_data?: ?StoryPinRecipeMetadataField,
  root_pin_id?: string,
  root_user_id?: string,
  template_type?: ?StoryPinTemplateType,
  version?: string,
|};
export type StoryPinMetadataFieldMany = $ReadOnlyArray<StoryPinMetadataField>;
export type StoryPinMusicBlock = {|
  audio?: ?Audio,
  block_type?: 11,
  provider_recording_id?: string,
  type?: 11 | "story_pin_music_block",
|};
export type StoryPinMusicBlockMany = $ReadOnlyArray<StoryPinMusicBlock>;
export type StoryPinPage = {|
  ad?: ?PinMany,
  blocks?: $ReadOnlyArray<StoryPinsBlocks>,
  id?: string,
  image?: ?StoryPinImage,
  image_adjusted?: ?StoryPinImage,
  image_signature?: ?string,
  image_signature_adjusted?: ?string,
  layout?: StoryPinLayout,
  style?: PageStyle,
  type?: "storypinpage",
  video?: ?StoryPinVideoMetadata,
  video_signature?: ?string,
|};
export type StoryPinPageMany = $ReadOnlyArray<StoryPinPage>;
export type StoryPinProductStickerBlock = {|
  block_style?: BlockStyle,
  block_type?: 13,
  end_time?: ?number,
  is_removed?: boolean,
  pin?: ?string,
  pin_id?: string,
  start_time?: ?number,
  type?: 13 | "story_pin_product_sticker_block",
|};
export type StoryPinProductStickerBlockMany = $ReadOnlyArray<StoryPinProductStickerBlock>;
export type StoryPinRecipeMetadataField = {|
  cooking_time?: number,
  prep_time?: number,
  serving_size?: number,
|};
export type StoryPinRecipeMetadataFieldMany = $ReadOnlyArray<StoryPinRecipeMetadataField>;
export type StoryPinStaticStickerBlock = {|
  block_type?: 14,
  end_time?: ?number,
  start_time?: ?number,
  sticker_id?: string,
  sticker_type?: StoryPinStickerType,
  type?: 14 | "story_pin_static_sticker_block",
|};
export type StoryPinStaticStickerBlockMany = $ReadOnlyArray<StoryPinStaticStickerBlock>;
export type StoryPinStickerType = 0 | 1 | 2;
export type StoryPinTemplateType = 1 | 2;
export type StoryPinTextAlignment = 0 | 1 | 2;
export type StoryPinTextFont =
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
  | 16;
export type StoryPinVerticalAlignment = 0 | 1 | 2;
export type StoryPinVideoBlock = {|
  block_style?: BlockStyle,
  block_type?: 3,
  text?: string,
  tracking_id?: ?string,
  type?: 3 | "story_pin_video_block",
  video?: ?StoryPinVideoMetadata,
  video_signature?: string,
|};
export type StoryPinVideoBlockMany = $ReadOnlyArray<StoryPinVideoBlock>;
export type StoryPinVideoDetail = {|
  duration?: number,
  height?: number,
  thumbnail?: string,
  url?: string,
  width?: number,
|};
export type StoryPinVideoFormats = {|
  V_720P?: StoryPinVideoDetail,
  V_DASH_HEVC?: StoryPinVideoDetail,
  V_EXP1?: StoryPinVideoDetail,
  V_EXP2?: StoryPinVideoDetail,
  V_EXP3?: StoryPinVideoDetail,
  V_EXP4?: StoryPinVideoDetail,
  V_EXP5?: StoryPinVideoDetail,
  V_EXP6?: StoryPinVideoDetail,
  V_EXP7?: StoryPinVideoDetail,
  V_HLSV3?: StoryPinVideoDetail,
  V_HLSV3_EXP?: StoryPinVideoDetail,
  V_HLSV3_MOBILE?: StoryPinVideoDetail,
  V_HLSV3_WEB?: StoryPinVideoDetail,
  V_HLSV4?: StoryPinVideoDetail,
  V_HLS_HEVC?: StoryPinVideoDetail,
|};
export type StoryPinVideoMetadata = {|
  id?: string,
  type?: string,
  video_list?: StoryPinVideoFormats,
|};
export type StoryPinsBlocks =
  | TextBlock
  | ParagraphBlock
  | HeadingBlock
  | LinkBlock
  | IngredientBlock
  | SupplyBlock
  | StoryPinImageBlock
  | StoryPinVideoBlock
  | StoryPinKeyValueBlock
  | StoryPinListBlock
  | StoryPinMusicBlock
  | StoryPinMentionStickerBlock
  | StoryPinProductStickerBlock
  | StoryPinStaticStickerBlock
  | StoryPinAnimatedStickerBlock
  | StoryPinCommentReplyBlock;
export type StoryPinsDisplayEnum = 0 | 1 | 2 | 3;
export type StoryRelationshipsForInterest = {|
  action_override_deep_link?: string,
  action_override_text?: string,
  feedback_ids?: $ReadOnlyArray<string>,
  follow_ids?: $ReadOnlyArray<string>,
  highlighted_id?: string,
  objects?: $ReadOnlyArray<string>,
|};
export type StoryShoppingGridDisplay = {|
  direct_clickthrough_label?: ?string,
  show_direct_clickthrough_button?: ?boolean,
  show_label?: ?boolean,
  show_merchant_domain?: ?boolean,
  show_price?: ?boolean,
  show_ratings_and_count?: ?boolean,
  show_shipping_info?: ?boolean,
  show_title?: ?boolean,
|};
export type StoryShoppingGridDisplayMany = $ReadOnlyArray<StoryShoppingGridDisplay>;
export type StoryText = {|
  args?: $ReadOnlyArray<{| [key: string]: string |}>,
  format?: ?string,
  text?: ?string,
|};
export type StoryTextMany = $ReadOnlyArray<StoryText>;
export type StoryTilesGridLayout = {| cols?: number, rows?: number |};
export type StoryTilesGridLayoutMany = $ReadOnlyArray<StoryTilesGridLayout>;
export type StoryTitleArgForInterest = {|
  id?: string,
  render?: string,
  type?: string,
|};
export type StoryTitleForInterest = {|
  args?: $ReadOnlyArray<StoryTitleArgForInterest>,
  text?: string,
|};
export type SupplyBlock = {|
  amt?: ?string,
  block_type?: 6,
  name?: string,
  type?: 6 | "story_pin_supply_block",
|};
export type SupplyBlockMany = $ReadOnlyArray<SupplyBlock>;
export type TWITTERFieldMappingTypes = {|
  description?: string,
  id?: string,
  location?: string,
  name?: string,
  profile_image_url?: string,
  screen_name?: string,
  url?: string,
|};
export type TagType = 1 | 2 | 3 | 4 | 5 | 6;
export type TextBlock = {|
  block_type?: 9,
  id?: string,
  text?: string,
  type?: 9 | "story_pin_text_block",
|};
export type TextBlockMany = $ReadOnlyArray<TextBlock>;
export type TextStyle = {|
  alignment?: ?StoryPinTextAlignment,
  color?: ?PdsPrimaryColorIntEnum | PdsPrimaryColorStrEnum,
  font?: ?Font,
  font_id?: ?StoryPinTextFont,
  font_size?: ?number,
  hex_color?: ?string,
  highlight_color?: ?string,
  vertical_alignment?: StoryPinVerticalAlignment,
|};
export type TextStyleMany = $ReadOnlyArray<TextStyle>;
export type TextTag = {|
  id?: string,
  length?: number,
  link?: ?string,
  metadata?: ?TextTagMetadata,
  object_id?: ?string,
  offset?: number,
  tag_type?: TagType,
  type?: "texttag",
|};
export type TextTagMany = $ReadOnlyArray<TextTag>;
export type TextTagMetadata = {|
  story_pin_block_id?: number,
  story_pin_page_id?: number,
|};
export type TextTagMetadataMany = $ReadOnlyArray<TextTagMetadata>;
export type Theme = {| id?: string, theme_name?: string |};
export type ThirdPartyApps = "SHOPIFY";
export type Thumbnails = {| height?: number, url?: string, width?: number |};
export type TitleAndDescription = {| description?: string, title?: string |};
export type TodayArticle = {|
  article_creator_user?: ?User,
  article_description?: ?string,
  category?: ?string,
  content_pin?: ?Pin,
  content_pin_official_user?: ?User,
  content_sensitive?: boolean,
  continuation_url?: ?string,
  countries?: $ReadOnlyArray<Countries>,
  cover_pin?: ?Pin,
  cover_pins?: ?PinMany,
  creators?: ?UserMany,
  display_type?: TodayArticleModuleDisplayType,
  dominant_color_css?: ?string,
  feed_source?: TodayArticleFeedSourceType,
  header_pin_id?: string,
  id?: string,
  image_urls?: $ReadOnlyArray<string>,
  is_feed_single_column?: boolean,
  is_story_pin_animated?: boolean,
  language?: ?string,
  latest_schedule_dt?: ?string,
  notification_title?: ?string,
  override_navigation_url?: ?string,
  pins_to_add?: $ReadOnlyArray<string>,
  search_query?: ?string,
  seo_eligible?: boolean,
  seo_title?: ?string,
  show_creator?: ?boolean,
  subtitle?: ?string,
  time_sensitive?: boolean,
  title?: string,
  type?: "todayarticle",
  video_pin?: ?Pin,
|};
export type TodayArticleFeedSourceType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type TodayArticleMany = $ReadOnlyArray<TodayArticle>;
export type TodayArticleModuleDisplayType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type TopIngredient = {| name?: string, slug?: string |};
export type TopInterest =
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
export type USEREmailData = {|
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
  partner?: ?USEREmailData,
  pin_count?: ?number,
  small_image_url?: string,
  url?: string,
  username?: string,
  verified?: ?boolean,
  xlarge_image_url?: string,
|};
export type User = {|
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
  brand?: ?string,
  browsing_level?: ?HomefeedBrowsingLevel,
  businesses?: ?UserMany,
  can_enable_mfa?: boolean,
  can_upload_cover?: boolean,
  canonical_merchant_domain?: ?string,
  ccpa_opted_out?: boolean,
  commerce_module_data?: {| [key: string]: string |},
  community_display_name?: string,
  community_role?: ?CommunityRoleEnum,
  community_roles?: $ReadOnlyArray<CommunityRoleEnum>,
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
  content_claiming_api_access?: boolean,
  country?: ?string,
  created_at?: string,
  custom_gender?: ?string,
  debug?: ?string | {| [key: string]: wildcards_OneOfAny |},
  domain_url?: ?string,
  domain_verified?: boolean,
  dominant_color_css?: ?string,
  dominant_color_rgb?: $ReadOnlyArray<number>,
  eligible_for_stl_tool?: boolean,
  eligible_for_wishlist?: boolean,
  eligible_profile_tabs?: ProfileTabMany,
  email?: ?string,
  exclude_from_search?: boolean,
  experiments?: {| [key: string]: GatekeeperExperiment |},
  explicit_board_following_count?: number,
  explicit_user_following_count?: number,
  explicitly_followed_by_me?: boolean,
  facebook_id?: ?string,
  facebook_publish_stream_enabled?: boolean,
  facebook_timeline_enabled?: boolean,
  facebook_url?: ?string,
  fast_advertiser_info_has_any_managed_advertisers?: ?boolean,
  first_name?: ?string,
  followed_by_me?: boolean,
  follower_count?: number,
  following_count?: number,
  full_name?: string,
  gatekeeper_experiments?: {| [key: string]: GatekeeperExperiment |},
  gender?: string,
  gplus_url?: ?string,
  group_board_count?: number,
  has_catalog?: boolean,
  has_completed_quiz?: boolean,
  has_confirmed_email?: boolean,
  has_custom_board_sorting_order?: boolean,
  has_done_app_install?: boolean,
  has_done_clickthrough?: boolean,
  has_done_closeup?: boolean,
  has_mfa_enabled?: boolean,
  has_password?: boolean,
  has_published_pins?: boolean,
  has_quicksave_board?: boolean,
  has_seen_notifications?: boolean,
  has_shopping_showcase?: boolean,
  has_showcase?: boolean,
  id?: string,
  image_large_url?: ?string,
  image_medium_url?: ?string,
  image_small_url?: ?string,
  image_xlarge_url?: ?string,
  implicitly_followed_by_me?: boolean,
  impressum_url?: ?string,
  indexed?: boolean,
  interest_following_count?: ?number,
  ip_country?: ?string,
  ip_region?: ?string,
  is_any_website_verified?: boolean,
  is_default_image?: boolean,
  is_eligible_for_shop_tab?: boolean,
  is_employee?: boolean,
  is_geo_eligible_for_creator_messaging?: boolean,
  is_high_risk?: boolean,
  is_known_facebook_user?: boolean,
  is_matured_new_user?: boolean,
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
  login_state?: ?LoginState,
  merchant_id?: string,
  mfa_backup_codes?: ?$ReadOnlyArray<MfaBackupCodes>,
  most_recent_board_sort_order?: ?UserBoardFeedSortTypes,
  nags?: $ReadOnlyArray<Nags>,
  native_pin_count?: number,
  obfuscated_email?: string,
  owners?: ?UserMany,
  partner?: ?Partner,
  personalize_from_offsite_browsing?: boolean,
  phone_country?: ?string,
  phone_number?: ?string,
  phone_number_end?: ?string,
  phone_number_without_country?: ?string,
  pin_count?: number,
  pin_thumbnail_urls?: $ReadOnlyArray<string>,
  pins?: ?PinMany,
  pins_done_count?: number,
  popular_product_images?: ?{| [key: string]: $ReadOnlyArray<ImageDetails> |},
  ppa_merchant_id?: string,
  private_pin_count?: number,
  profile_cover?: ?ProfileCoverSource,
  profile_cover_source?: ?ProfileCoverSource,
  profile_discovered_public?: ?boolean,
  profile_reach?: ?number,
  profile_url?: string,
  profile_views?: ?number,
  pronouns?: ?$ReadOnlyArray<string>,
  push_package_user_id?: string,
  recent_pin_images?: ?{| [key: string]: $ReadOnlyArray<ImageDetails> |},
  recent_story_pin_images?: ?{| [key: string]: $ReadOnlyArray<string> |},
  recommendation_reason?: ?string,
  repins_from?: ?UserMany,
  requires_extra_protections?: boolean,
  resurrection_info?: ?ResurrectionInfo,
  save_behavior?: number,
  scheduled_pin_count?: number,
  secret_board_count?: number,
  secret_boards_remaining?: number,
  shopping_rec_disabled?: boolean,
  should_show_creator_bubbles?: ?boolean,
  should_show_homefeed_ads?: boolean,
  should_show_live_sessions_tab?: boolean,
  show_creator_profile?: boolean,
  show_discovered_feed?: ?boolean,
  show_engagement_tab?: boolean,
  show_following_tab?: boolean,
  show_impressum?: boolean,
  show_personal_boutique?: boolean,
  storefront_management_enabled?: boolean,
  storefront_search_enabled?: boolean,
  story_pin_count?: number,
  subscribed_to_notifications?: boolean,
  tag?: ?string,
  third_party_ad_unit_id?: string,
  third_party_ads_config?: {| [key: string]: string |},
  third_party_app_id?: string,
  third_party_marketing_tracking_enabled?: boolean,
  triggerable_experiments?: {| [key: string]: string |},
  twitter_publish_enabled?: boolean,
  twitter_url?: ?string,
  type?: "user",
  unverified_phone_country?: ?string,
  unverified_phone_number?: ?string,
  unverified_phone_number_without_country?: ?string,
  user_following_count?: number,
  user_recommendation_reason?: ?CreatorRecommendationReason,
  username?: string,
  verified_domains?: $ReadOnlyArray<string>,
  verified_identity?: ?VerifiedIdentity,
  verified_user_websites?: $ReadOnlyArray<string>,
  video_pin_count?: number,
  video_upload_allowed?: boolean,
  video_views?: number,
  website_url?: ?string,
|};
export type UserBoard = {| new_board_created?: boolean, pin?: Pin |};
export type UserBoardFeedSortTypes =
  | ""
  | "alpha_protected_boards_at_bottom"
  | "alphabetical"
  | "custom"
  | "group_boards_at_top"
  | "last_pinned_to"
  | "newest"
  | "oldest"
  | "profile";
export type UserDidItData = {|
  comment_count?: number,
  details?: ?string,
  did_it_type?: DidItType,
  dominant_color?: ?string,
  done_at?: string,
  has_recommended?: boolean,
  helpful_count?: number,
  highlighted_by_pin_owner?: boolean,
  id?: string,
  image_signatures?: $ReadOnlyArray<string>,
  images?: $ReadOnlyArray<{| [key: string]: {| [key: string]: Thumbnails |} |}>,
  like_count?: number,
  liked_by_me?: boolean,
  marked_helpful_by_me?: boolean,
  paragraph_blocks?: ParagraphBlockMany,
  pin?: ?Pin,
  privacy?: BoardPrivacyEnum,
  reaction_by_me?: ReactionTypeEnum,
  reaction_counts?: ReactionCount,
  recommend_score?: number,
  recommendation_reason?: RecommendationReason,
  tags?: $ReadOnlyArray<string>,
  type?: "userdiditdata",
  user?: ?User,
  videos?: ?VideoMany,
|};
export type UserDidItDataMany = $ReadOnlyArray<UserDidItData>;
export type UserMany = $ReadOnlyArray<User>;
export type UserWebsite = {|
  domain_name?: string,
  id?: string,
  official_user?: ?User,
  path?: string,
  type?: string,
|};
export type UserWebsiteMany = $ReadOnlyArray<UserWebsite>;
export type User_Agent = string;
export type VariantMetadata = {|
  colors?: ?string,
  material?: ?string,
  pattern?: ?string,
  size?: ?string,
|};
export type VariantMetadataMany = $ReadOnlyArray<VariantMetadata>;
export type Variations = {|
  color?: $ReadOnlyArray<string>,
  material?: $ReadOnlyArray<string>,
  pattern?: $ReadOnlyArray<string>,
  size?: $ReadOnlyArray<string>,
|};
export type VerifiedIdentity = {| name?: string, verified?: boolean |};
export type Video = {|
  annotations?: $ReadOnlyArray<string>,
  cover_image_url?: string,
  duration?: number,
  error?: ?string,
  frame_rate?: number,
  height?: number,
  id?: string,
  keywords?: $ReadOnlyArray<string>,
  signature?: string,
  status_code?: ?string,
  thumbnails_signatures?: $ReadOnlyArray<string>,
  title?: string,
  video_list?: VideoList,
  video_urls?: $ReadOnlyArray<string>,
  width?: number,
|};
export type VideoDetail = {|
  duration?: number,
  height?: number,
  thumbnail?: string,
  url?: string,
  width?: number,
|};
export type VideoList = {|
  V_720P?: VideoDetail,
  V_DASH_HEVC?: VideoDetail,
  V_EXP1?: VideoDetail,
  V_EXP2?: VideoDetail,
  V_EXP3?: VideoDetail,
  V_EXP4?: VideoDetail,
  V_EXP5?: VideoDetail,
  V_EXP6?: VideoDetail,
  V_EXP7?: VideoDetail,
  V_HLSV3?: VideoDetail,
  V_HLSV3_EXP?: VideoDetail,
  V_HLSV3_MOBILE?: VideoDetail,
  V_HLSV3_WEB?: VideoDetail,
  V_HLSV4?: VideoDetail,
  V_HLS_HEVC?: VideoDetail,
|};
export type VideoMany = $ReadOnlyArray<Video>;
export type VideoStatus = 1 | 2 | 3 | 4 | 5 | 6;
export type VideoStatusMessage = {|
  closeup?: string,
  subtitle?: string,
  title?: string,
|};
export type ViewTag = {| id?: string, url?: string |};
export type VirtualTryOnData = {|
  look_metadata?: schemasVirtualTryOnTtypesLookmetadata,
  makeup_eyeshadow?: $ReadOnlyArray<schemasVirtualTryOnTtypesModifacemakeupparams>,
  makeup_lipstick?: schemasVirtualTryOnTtypesModifacemakeupparams,
  pin_type?: number,
  product_metadata?: schemasVirtualTryOnTtypesProductmetadata,
|};
export type VirtualTryOnPinType = 0 | 1 | 2 | 3 | 4;
export type WorkflowStats = {|
  created_at?: number,
  feed_fetch_workflow_id?: string,
  in_stock_product_count?: number,
  ingestion_stats_errors?: CatalogsIngestionStatsErrors,
  ingestion_stats_info?: CatalogsIngestionStatsInfo,
  last_successful_workflow_id?: string,
  original_product_count?: number,
  original_url?: string,
  out_of_stock_product_count?: number,
  preorder_product_count?: number,
  product_count?: number,
  s3_source_url?: string,
  s3_validation_url?: string,
  validation_stats_errors?: CatalogsValidationStatsErrors,
  validation_stats_warnings?: CatalogsValidationStatsWarnings,
  workflow_status?: WorkflowStatusEnum,
|};
export type WorkflowStatusEnum =
  | "QUEUED_FOR_PROCESSING"
  | "PROCESSING"
  | "COMPLETED"
  | "FAILED"
  | "COMPLETED_EARLY";
export type X_Pinterest_AppState = string;
export type X_Pinterest_App_Type = {| $ref: AppType |};
export type X_Pinterest_Force_User_Country = string;
export type X_Pinterest_Force_User_Gender = string;
export type X_Pinterest_Force_User_Locale = string;
export type X_Pinterest_InstallId = {| $ref: AppType |};
export type X_Pinterest_Integration_Test_Mode = string;
export type X_Pinterest_Rid = {| $ref: AppType |};
export type X_Real_Ip = string;
export type add_fields = $ReadOnlyArray<string>;
export type api_error_AccessDenied = ApiErrorEnvelope & {|
  code: 7,
  message: "You are not permitted to access that resource.",
|};
export type api_error_AdvertiserEntityAuthorizationFailed = ApiErrorEnvelope & {|
  code: 1902,
  message: "User is not authorized to access requested advertiser.",
|};
export type api_error_AuthorizationFailed = ApiErrorEnvelope & {|
  code: 3,
  message: "Authorization failed.",
|};
export type api_error_BoardActionBlockedByDeleteError = ApiErrorEnvelope & {|
  code: 2171,
  message: "Please wait until your Pins are finished deleting.",
|};
export type api_error_BoardActionBlockedByMoveError = ApiErrorEnvelope & {|
  code: 2172,
  message: "Please wait until your Pins are finished moving.",
|};
export type api_error_BoardActionBlockedByOtherError = ApiErrorEnvelope & {|
  code: 2173,
  message: "Please wait until the previous board action finishes.",
|};
export type api_error_BoardNotFound = ApiErrorEnvelope & {|
  code: 40,
  message: "Board not found.",
|};
export type api_error_BoardSectionNotFound = ApiErrorEnvelope & {|
  code: 2031,
  message: "Sorry! We couldn't find this board section.",
|};
export type api_error_BoardSectionsPerBoardLimitReachedError = ApiErrorEnvelope & {|
  code: 2034,
  message: "Sorry! You can only have up to 500 sections on a board.",
|};
export type api_error_BoardSlugIncorrectError = ApiErrorEnvelope & {|
  code: 96,
  message: "Invalid board name.",
|};
export type api_error_FeedProfileNotFound = ApiErrorEnvelope & {|
  code: 676,
  message: "Sorry! We couldn't find that feed profile. Please ensure you have access and a valid feed profile id.",
|};
export type api_error_InterestNotFound = ApiErrorEnvelope & {|
  code: 330,
  message: "Interest not found.",
|};
export type api_error_InternalServerError = ApiErrorEnvelope & {|
  code: 12,
  message: "Something went wrong on our end. Sorry about that.",
|};
export type api_error_InvalidParameters = ApiErrorEnvelope & {|
  code: 1,
  message: "Invalid parameters.",
|};
export type api_error_LimitExceeded = ApiErrorEnvelope & {|
  code: 8,
  message: "You have exceeded your rate limit. Try again later.",
|};
export type api_error_MerchantHasNoFeedProfile = ApiErrorEnvelope & {|
  code: 2629,
  message: "Uh oh! This merchant doesn't have a feed profile.",
|};
export type api_error_MerchantNotFound = ApiErrorEnvelope & {|
  code: 650,
  message: "Sorry! We couldn't find that merchant. Please ensure you have access and a valid merchant id.",
|};
export type api_error_PinNotFound = ApiErrorEnvelope & {|
  code: 50,
  message: "Pin not found.",
|};
export type api_error_PinReactionFailure = ApiErrorEnvelope & {|
  code: 2611,
  message: "Sorry! Something went wrong with your reaction.",
|};
export type api_error_PlaceNotFound = ApiErrorEnvelope & {|
  code: 270,
  message: "Place not found.",
|};
export type api_error_ProductGroupFiltersAlreadyExistsError = ApiErrorEnvelope & {|
  code: 2622,
  message: "Uh oh! Product group filters already exists.",
|};
export type api_error_ProductGroupNameAlreadyExistsError = ApiErrorEnvelope & {|
  code: 2621,
  message: "Uh oh! Product group name already exist.",
|};
export type api_error_ProductGroupNotFoundError = ApiErrorEnvelope & {|
  code: 2627,
  message: "Sorry! We couldn't find this product group.",
|};
export type api_error_ProductGroupUnfeatureableError = ApiErrorEnvelope & {|
  code: 2628,
  message: "Sorry! We cannot feature that product group.",
|};
export type api_error_ProductGroupValidationError = ApiErrorEnvelope & {|
  code: 2623,
  message: "Uh oh! Invalid product group request.",
|};
export type api_error_RepinFailure = ApiErrorEnvelope & {|
  code: 200,
  message: "Something went wrong while trying to save this Pin. Please try again.",
|};
export type api_error_UnsupportedBoardTemplateError = ApiErrorEnvelope & {|
  code: 2174,
  message: "Sorry! We don't support performing this action on a board of this type.",
|};
export type api_error_UserFollowFailure = ApiErrorEnvelope & {|
  code: 32,
  message: "Something went wrong while trying to follow this user. Please try again.",
|};
export type api_error_UserNotFound = ApiErrorEnvelope & {|
  code: 30,
  message: "User not found.",
|};
export type approvalStatus =
  | "APPEAL_PENDING"
  | "APPROVED"
  | "DECLINED"
  | "PENDING"
  | "PROD_TEST"
  | "REVOKED"
  | "STAGING";
export type feedDefaultCurrency =
  | "AED"
  | "AFN"
  | "ALL"
  | "AMD"
  | "ANG"
  | "AOA"
  | "ARS"
  | "AUD"
  | "AWG"
  | "AZN"
  | "BAM"
  | "BBD"
  | "BDT"
  | "BGN"
  | "BHD"
  | "BIF"
  | "BMD"
  | "BND"
  | "BOB"
  | "BRL"
  | "BSD"
  | "BTN"
  | "BWP"
  | "BYN"
  | "BYR"
  | "BZD"
  | "CAD"
  | "CDF"
  | "CHF"
  | "CLP"
  | "CNY"
  | "COP"
  | "CRC"
  | "CUC"
  | "CUP"
  | "CVE"
  | "CZK"
  | "DJF"
  | "DKK"
  | "DOP"
  | "DZD"
  | "EGP"
  | "ERN"
  | "ETB"
  | "EUR"
  | "FJD"
  | "FKP"
  | "GBP"
  | "GEL"
  | "GGP"
  | "GHS"
  | "GIP"
  | "GMD"
  | "GNF"
  | "GTQ"
  | "GYD"
  | "HKD"
  | "HNL"
  | "HRK"
  | "HTG"
  | "HUF"
  | "IDR"
  | "ILS"
  | "IMP"
  | "INR"
  | "IQD"
  | "IRR"
  | "ISK"
  | "JEP"
  | "JMD"
  | "JOD"
  | "JPY"
  | "KES"
  | "KGS"
  | "KHR"
  | "KMF"
  | "KPW"
  | "KRW"
  | "KWD"
  | "KYD"
  | "KZT"
  | "LAK"
  | "LBP"
  | "LKR"
  | "LRD"
  | "LSL"
  | "LYD"
  | "MAD"
  | "MDL"
  | "MGA"
  | "MKD"
  | "MMK"
  | "MNT"
  | "MOP"
  | "MRO"
  | "MUR"
  | "MVR"
  | "MWK"
  | "MXN"
  | "MYR"
  | "MZN"
  | "NAD"
  | "NGN"
  | "NIO"
  | "NOK"
  | "NPR"
  | "NZD"
  | "OMR"
  | "PAB"
  | "PEN"
  | "PGK"
  | "PHP"
  | "PKR"
  | "PLN"
  | "PYG"
  | "QAR"
  | "RON"
  | "RSD"
  | "RUB"
  | "RWF"
  | "SAR"
  | "SBD"
  | "SCR"
  | "SDG"
  | "SEK"
  | "SGD"
  | "SHP"
  | "SLL"
  | "SOS"
  | "SPL"
  | "SRD"
  | "STD"
  | "SVC"
  | "SYP"
  | "SZL"
  | "THB"
  | "TJS"
  | "TMT"
  | "TND"
  | "TOP"
  | "TRY"
  | "TTD"
  | "TVD"
  | "TWD"
  | "TZS"
  | "UAH"
  | "UGX"
  | "USD"
  | "UYU"
  | "UZS"
  | "VEF"
  | "VND"
  | "VUV"
  | "WST"
  | "XAF"
  | "XCD"
  | "XDR"
  | "XOF"
  | "XPF"
  | "YER"
  | "ZAR"
  | "ZMW"
  | "ZWD";
export type fields = $ReadOnlyArray<string>;
export type merchantvertical =
  | "BEAUTY"
  | "DIY_ARTS_AND_CRAFTS"
  | "ELECTRONICS"
  | "FASHION_CHILDREN"
  | "FASHION_MEN"
  | "FASHION_WOMEN"
  | "FOOD_AND_DRINK"
  | "HEALTH"
  | "HOME_DECOR"
  | "OTHER"
  | "WEDDINGS";
export type partnertype = 0 | 1;
export type productPinApprovalStatus =
  | "APPEAL_PENDING"
  | "APPROVED"
  | "DECLINED"
  | "PENDING"
  | "PROD_TEST"
  | "REVOKED"
  | "STAGING";
export type render_style = "all_fields" | "detailed" | "summary";
export type schemasVirtualTryOnTtypesLookmetadata = {| skinTone?: number |};
export type schemasVirtualTryOnTtypesModifacemakeupparams = {|
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
export type schemasVirtualTryOnTtypesProductmetadata = {|
  brandName?: string,
  country?: string,
  finish?: string,
  gtin?: string,
  itemId?: string,
  itemSetId?: string,
  layerShadeNames?: $ReadOnlyArray<string>,
  merchantId?: string,
  merchantName?: string,
  productLine?: string,
  productType?: number,
  shadeName?: string,
  sku?: string,
|};
export type wildcards_NullableType = boolean;
export type wildcards_OneOfAny = {| [key: string]: mixed |};
