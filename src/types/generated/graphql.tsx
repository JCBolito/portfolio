export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  profileCollection?: Maybe<ProfileCollection>;
  projectsCollection?: Maybe<ProjectsCollection>;
  stackCollection?: Maybe<StackCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsProfileCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsStackCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** Personal information listed on the profile section of the portfolio. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/profile) */
export type Profile = Entry & _Node & {
  __typename?: 'Profile';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  information?: Maybe<Scalars['String']['output']>;
  introduction?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ProfileLinkingCollections>;
  linkedin?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  resume?: Maybe<Asset>;
  role?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Personal information listed on the profile section of the portfolio. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/profile) */
export type ProfileEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Personal information listed on the profile section of the portfolio. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/profile) */
export type ProfileGithubArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Personal information listed on the profile section of the portfolio. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/profile) */
export type ProfileImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Personal information listed on the profile section of the portfolio. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/profile) */
export type ProfileInformationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Personal information listed on the profile section of the portfolio. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/profile) */
export type ProfileIntroductionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Personal information listed on the profile section of the portfolio. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/profile) */
export type ProfileLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Personal information listed on the profile section of the portfolio. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/profile) */
export type ProfileLinkedinArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Personal information listed on the profile section of the portfolio. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/profile) */
export type ProfileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Personal information listed on the profile section of the portfolio. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/profile) */
export type ProfileResumeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Personal information listed on the profile section of the portfolio. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/profile) */
export type ProfileRoleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileCollection = {
  __typename?: 'ProfileCollection';
  items: Array<Maybe<Profile>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProfileFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProfileFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProfileFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  github?: InputMaybe<Scalars['String']['input']>;
  github_contains?: InputMaybe<Scalars['String']['input']>;
  github_exists?: InputMaybe<Scalars['Boolean']['input']>;
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  github_not?: InputMaybe<Scalars['String']['input']>;
  github_not_contains?: InputMaybe<Scalars['String']['input']>;
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  information?: InputMaybe<Scalars['String']['input']>;
  information_contains?: InputMaybe<Scalars['String']['input']>;
  information_exists?: InputMaybe<Scalars['Boolean']['input']>;
  information_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  information_not?: InputMaybe<Scalars['String']['input']>;
  information_not_contains?: InputMaybe<Scalars['String']['input']>;
  information_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  introduction?: InputMaybe<Scalars['String']['input']>;
  introduction_contains?: InputMaybe<Scalars['String']['input']>;
  introduction_exists?: InputMaybe<Scalars['Boolean']['input']>;
  introduction_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  introduction_not?: InputMaybe<Scalars['String']['input']>;
  introduction_not_contains?: InputMaybe<Scalars['String']['input']>;
  introduction_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  linkedin_contains?: InputMaybe<Scalars['String']['input']>;
  linkedin_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkedin_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkedin_not?: InputMaybe<Scalars['String']['input']>;
  linkedin_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkedin_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  resume_exists?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_exists?: InputMaybe<Scalars['Boolean']['input']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ProfileLinkingCollections = {
  __typename?: 'ProfileLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProfileLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProfileOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  IntroductionAsc = 'introduction_ASC',
  IntroductionDesc = 'introduction_DESC',
  LinkedinAsc = 'linkedin_ASC',
  LinkedinDesc = 'linkedin_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Some of the projects I developed throughout the years. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/projects) */
export type Projects = Entry & _Node & {
  __typename?: 'Projects';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  dateCompleted?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ProjectsLinkingCollections>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  technologies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  urlRepository?: Maybe<Scalars['String']['output']>;
  urlWebsite?: Maybe<Scalars['String']['output']>;
};


/** Some of the projects I developed throughout the years. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/projects) */
export type ProjectsDateCompletedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Some of the projects I developed throughout the years. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/projects) */
export type ProjectsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Some of the projects I developed throughout the years. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/projects) */
export type ProjectsImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Some of the projects I developed throughout the years. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/projects) */
export type ProjectsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Some of the projects I developed throughout the years. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/projects) */
export type ProjectsStartDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Some of the projects I developed throughout the years. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/projects) */
export type ProjectsTechnologiesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Some of the projects I developed throughout the years. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/projects) */
export type ProjectsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Some of the projects I developed throughout the years. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/projects) */
export type ProjectsUrlRepositoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Some of the projects I developed throughout the years. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/projects) */
export type ProjectsUrlWebsiteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectsCollection = {
  __typename?: 'ProjectsCollection';
  items: Array<Maybe<Projects>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProjectsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dateCompleted?: InputMaybe<Scalars['DateTime']['input']>;
  dateCompleted_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dateCompleted_gt?: InputMaybe<Scalars['DateTime']['input']>;
  dateCompleted_gte?: InputMaybe<Scalars['DateTime']['input']>;
  dateCompleted_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  dateCompleted_lt?: InputMaybe<Scalars['DateTime']['input']>;
  dateCompleted_lte?: InputMaybe<Scalars['DateTime']['input']>;
  dateCompleted_not?: InputMaybe<Scalars['DateTime']['input']>;
  dateCompleted_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  technologies_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  technologies_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  technologies_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  technologies_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlRepository?: InputMaybe<Scalars['String']['input']>;
  urlRepository_contains?: InputMaybe<Scalars['String']['input']>;
  urlRepository_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlRepository_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlRepository_not?: InputMaybe<Scalars['String']['input']>;
  urlRepository_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlRepository_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlWebsite?: InputMaybe<Scalars['String']['input']>;
  urlWebsite_contains?: InputMaybe<Scalars['String']['input']>;
  urlWebsite_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlWebsite_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlWebsite_not?: InputMaybe<Scalars['String']['input']>;
  urlWebsite_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlWebsite_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectsLinkingCollections = {
  __typename?: 'ProjectsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProjectsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProjectsOrder {
  DateCompletedAsc = 'dateCompleted_ASC',
  DateCompletedDesc = 'dateCompleted_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlRepositoryAsc = 'urlRepository_ASC',
  UrlRepositoryDesc = 'urlRepository_DESC',
  UrlWebsiteAsc = 'urlWebsite_ASC',
  UrlWebsiteDesc = 'urlWebsite_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  profile?: Maybe<Profile>;
  profileCollection?: Maybe<ProfileCollection>;
  projects?: Maybe<Projects>;
  projectsCollection?: Maybe<ProjectsCollection>;
  stack?: Maybe<Stack>;
  stackCollection?: Maybe<StackCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryProfileArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProfileCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProfileOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProfileFilter>;
};


export type QueryProjectsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProjectsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectsFilter>;
};


export type QueryStackArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryStackCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StackOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StackFilter>;
};

/** I use the following technologies to develop most of my projects. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/stack) */
export type Stack = Entry & _Node & {
  __typename?: 'Stack';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<StackLinkingCollections>;
  logo?: Maybe<Asset>;
  sys: Sys;
  technology?: Maybe<Scalars['String']['output']>;
};


/** I use the following technologies to develop most of my projects. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/stack) */
export type StackDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** I use the following technologies to develop most of my projects. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/stack) */
export type StackLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** I use the following technologies to develop most of my projects. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/stack) */
export type StackLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** I use the following technologies to develop most of my projects. [See type definition](https://app.contentful.com/spaces/dgo3cebd9t92/content_types/stack) */
export type StackTechnologyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type StackCollection = {
  __typename?: 'StackCollection';
  items: Array<Maybe<Stack>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type StackFilter = {
  AND?: InputMaybe<Array<InputMaybe<StackFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StackFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  technology?: InputMaybe<Scalars['String']['input']>;
  technology_contains?: InputMaybe<Scalars['String']['input']>;
  technology_exists?: InputMaybe<Scalars['Boolean']['input']>;
  technology_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  technology_not?: InputMaybe<Scalars['String']['input']>;
  technology_not_contains?: InputMaybe<Scalars['String']['input']>;
  technology_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StackLinkingCollections = {
  __typename?: 'StackLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type StackLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum StackOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TechnologyAsc = 'technology_ASC',
  TechnologyDesc = 'technology_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', name?: string | null, role?: string | null, introduction?: string | null, information?: string | null, linkedin?: string | null, github?: string | null, email?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null, resume?: { __typename?: 'Asset', url?: string | null } | null } | null };

export type GetTechnologiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTechnologiesQuery = { __typename?: 'Query', stackCollection?: { __typename?: 'StackCollection', items: Array<{ __typename?: 'Stack', technology?: string | null, description?: string | null, logo?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'Query', projectsCollection?: { __typename?: 'ProjectsCollection', items: Array<{ __typename?: 'Projects', title?: string | null, urlWebsite?: string | null, urlRepository?: string | null, startDate?: any | null, dateCompleted?: any | null, technologies?: Array<string | null> | null, description?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };
