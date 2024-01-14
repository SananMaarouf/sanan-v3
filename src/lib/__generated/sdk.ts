import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentRichImageCollection?: Maybe<ComponentRichImageCollection>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageAboutMeCollection?: Maybe<PageAboutMeCollection>;
  postEntryCollection?: Maybe<PostEntryCollection>;
};


export type AssetLinkingCollectionsComponentRichImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageAboutMeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPostEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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

/** describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentRichImage) */
export type ComponentRichImage = Entry & {
  __typename?: 'ComponentRichImage';
  caption?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  fullWidth?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentRichImageLinkingCollections>;
  sys: Sys;
};


/** describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentRichImage) */
export type ComponentRichImageCaptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentRichImage) */
export type ComponentRichImageFullWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentRichImage) */
export type ComponentRichImageImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentRichImage) */
export type ComponentRichImageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentRichImage) */
export type ComponentRichImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentRichImageCollection = {
  __typename?: 'ComponentRichImageCollection';
  items: Array<Maybe<ComponentRichImage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentRichImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentRichImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentRichImageFilter>>>;
  caption?: InputMaybe<Scalars['String']>;
  caption_contains?: InputMaybe<Scalars['String']>;
  caption_exists?: InputMaybe<Scalars['Boolean']>;
  caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  caption_not?: InputMaybe<Scalars['String']>;
  caption_not_contains?: InputMaybe<Scalars['String']>;
  caption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fullWidth?: InputMaybe<Scalars['Boolean']>;
  fullWidth_exists?: InputMaybe<Scalars['Boolean']>;
  fullWidth_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentRichImageLinkingCollections = {
  __typename?: 'ComponentRichImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentRichImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentRichImageOrder {
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentSeo) */
export type ComponentSeo = Entry & {
  __typename?: 'ComponentSeo';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentSeoLinkingCollections>;
  nofollow?: Maybe<Scalars['Boolean']>;
  noindex?: Maybe<Scalars['Boolean']>;
  pageDescription?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  shareImagesCollection?: Maybe<AssetCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentSeo) */
export type ComponentSeoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentSeo) */
export type ComponentSeoNofollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentSeo) */
export type ComponentSeoNoindexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentSeo) */
export type ComponentSeoPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentSeo) */
export type ComponentSeoPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/componentSeo) */
export type ComponentSeoShareImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ComponentSeoCollection = {
  __typename?: 'ComponentSeoCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSeoLinkingCollections = {
  __typename?: 'ComponentSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  postEntryCollection?: Maybe<PostEntryCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPostEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPostEntryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentSeoLinkingCollectionsPageLandingCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPostEntryCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentSeoOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NofollowAsc = 'nofollow_ASC',
  NofollowDesc = 'nofollow_DESC',
  NoindexAsc = 'noindex_ASC',
  NoindexDesc = 'noindex_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/**
 * About you page.
 * Write who you are, what you do, how long you've done it and a picture of you [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/pageAboutMe)
 */
export type PageAboutMe = Entry & {
  __typename?: 'PageAboutMe';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<PageAboutMeDescription>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<PageAboutMeLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/**
 * About you page.
 * Write who you are, what you do, how long you've done it and a picture of you [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/pageAboutMe)
 */
export type PageAboutMeDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/**
 * About you page.
 * Write who you are, what you do, how long you've done it and a picture of you [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/pageAboutMe)
 */
export type PageAboutMeImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * About you page.
 * Write who you are, what you do, how long you've done it and a picture of you [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/pageAboutMe)
 */
export type PageAboutMeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/**
 * About you page.
 * Write who you are, what you do, how long you've done it and a picture of you [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/pageAboutMe)
 */
export type PageAboutMeTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageAboutMeCollection = {
  __typename?: 'PageAboutMeCollection';
  items: Array<Maybe<PageAboutMe>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageAboutMeDescription = {
  __typename?: 'PageAboutMeDescription';
  json: Scalars['JSON'];
  links: PageAboutMeDescriptionLinks;
};

export type PageAboutMeDescriptionAssets = {
  __typename?: 'PageAboutMeDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageAboutMeDescriptionEntries = {
  __typename?: 'PageAboutMeDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageAboutMeDescriptionLinks = {
  __typename?: 'PageAboutMeDescriptionLinks';
  assets: PageAboutMeDescriptionAssets;
  entries: PageAboutMeDescriptionEntries;
  resources: PageAboutMeDescriptionResources;
};

export type PageAboutMeDescriptionResources = {
  __typename?: 'PageAboutMeDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type PageAboutMeFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageAboutMeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageAboutMeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageAboutMeLinkingCollections = {
  __typename?: 'PageAboutMeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageAboutMeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageAboutMeOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/pageLanding) */
export type PageLanding = Entry & {
  __typename?: 'PageLanding';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageLandingLinkingCollections>;
  seoFields?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/pageLanding) */
export type PageLandingInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/pageLanding) */
export type PageLandingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/pageLanding) */
export type PageLandingSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageLandingCollection = {
  __typename?: 'PageLandingCollection';
  items: Array<Maybe<PageLanding>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageLandingFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageLandingLinkingCollections = {
  __typename?: 'PageLandingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLandingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageLandingOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntry = Entry & {
  __typename?: 'PostEntry';
  contentfulMetadata: ContentfulMetadata;
  coverImage?: Maybe<Asset>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<PostEntryDescription>;
  embeddedImageCollection?: Maybe<AssetCollection>;
  embeddedVideo?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PostEntryLinkingCollections>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  seoFields?: Maybe<ComponentSeo>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  technologiesCollection?: Maybe<PostEntryTechnologiesCollection>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntryCoverImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntryDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntryDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntryEmbeddedImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntryEmbeddedVideoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntryInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntryPublishedDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntrySeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntrySlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntrySubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntryTechnologiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PostEntryTechnologiesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TechnologiesFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/postEntry) */
export type PostEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PostEntryCollection = {
  __typename?: 'PostEntryCollection';
  items: Array<Maybe<PostEntry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PostEntryDescription = {
  __typename?: 'PostEntryDescription';
  json: Scalars['JSON'];
  links: PostEntryDescriptionLinks;
};

export type PostEntryDescriptionAssets = {
  __typename?: 'PostEntryDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PostEntryDescriptionEntries = {
  __typename?: 'PostEntryDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PostEntryDescriptionLinks = {
  __typename?: 'PostEntryDescriptionLinks';
  assets: PostEntryDescriptionAssets;
  entries: PostEntryDescriptionEntries;
  resources: PostEntryDescriptionResources;
};

export type PostEntryDescriptionResources = {
  __typename?: 'PostEntryDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type PostEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<PostEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PostEntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  coverImage_exists?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  embeddedImageCollection_exists?: InputMaybe<Scalars['Boolean']>;
  embeddedVideo_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedDate?: InputMaybe<Scalars['DateTime']>;
  publishedDate_exists?: InputMaybe<Scalars['Boolean']>;
  publishedDate_gt?: InputMaybe<Scalars['DateTime']>;
  publishedDate_gte?: InputMaybe<Scalars['DateTime']>;
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedDate_lt?: InputMaybe<Scalars['DateTime']>;
  publishedDate_lte?: InputMaybe<Scalars['DateTime']>;
  publishedDate_not?: InputMaybe<Scalars['DateTime']>;
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  technologies?: InputMaybe<CfTechnologiesNestedFilter>;
  technologiesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PostEntryLinkingCollections = {
  __typename?: 'PostEntryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PostEntryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PostEntryOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PostEntryTechnologiesCollection = {
  __typename?: 'PostEntryTechnologiesCollection';
  items: Array<Maybe<Technologies>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PostEntryTechnologiesCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentRichImage?: Maybe<ComponentRichImage>;
  componentRichImageCollection?: Maybe<ComponentRichImageCollection>;
  componentSeo?: Maybe<ComponentSeo>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageAboutMe?: Maybe<PageAboutMe>;
  pageAboutMeCollection?: Maybe<PageAboutMeCollection>;
  pageLanding?: Maybe<PageLanding>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  postEntry?: Maybe<PostEntry>;
  postEntryCollection?: Maybe<PostEntryCollection>;
  technologies?: Maybe<Technologies>;
  technologiesCollection?: Maybe<TechnologiesCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentRichImageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentRichImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentRichImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentRichImageFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryPageAboutMeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageAboutMeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageAboutMeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageAboutMeFilter>;
};


export type QueryPageLandingArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageLandingFilter>;
};


export type QueryPostEntryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPostEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PostEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostEntryFilter>;
};


export type QueryTechnologiesArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTechnologiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TechnologiesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TechnologiesFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  type: Scalars['String'];
  urn: Scalars['String'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** name of tech i have used in a programming project [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/technologies) */
export type Technologies = Entry & {
  __typename?: 'Technologies';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TechnologiesLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** name of tech i have used in a programming project [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/technologies) */
export type TechnologiesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** name of tech i have used in a programming project [See type definition](https://app.contentful.com/spaces/rxqss14ckb97/content_types/technologies) */
export type TechnologiesNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TechnologiesCollection = {
  __typename?: 'TechnologiesCollection';
  items: Array<Maybe<Technologies>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TechnologiesFilter = {
  AND?: InputMaybe<Array<InputMaybe<TechnologiesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TechnologiesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TechnologiesLinkingCollections = {
  __typename?: 'TechnologiesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  postEntryCollection?: Maybe<PostEntryCollection>;
};


export type TechnologiesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TechnologiesLinkingCollectionsPostEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TechnologiesLinkingCollectionsPostEntryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TechnologiesLinkingCollectionsPostEntryCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TechnologiesOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type _Node = {
  _id: Scalars['ID'];
};

export type CfComponentSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfTechnologiesNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTechnologiesNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTechnologiesNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ImageFieldsFragment = { __typename: 'Asset', title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } };

export type AboutMeFieldsFragment = { __typename?: 'PageAboutMe', title?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'PageAboutMeDescription', json: any } | null, image?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type PageAboutMeQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageAboutMeQuery = { __typename?: 'Query', pageAboutMeCollection?: { __typename?: 'PageAboutMeCollection', items: Array<{ __typename?: 'PageAboutMe', title?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'PageAboutMeDescription', json: any } | null, image?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null };

export type ReferencePageBlogPostFieldsFragment = { __typename: 'PostEntry', slug?: string | null, publishedDate?: any | null, title?: string | null, subtitle?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, coverImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, technologiesCollection?: { __typename?: 'PostEntryTechnologiesCollection', items: Array<{ __typename?: 'Technologies', name?: string | null } | null> } | null };

export type PageBlogPostFieldsFragment = { __typename: 'PostEntry', internalName?: string | null, slug?: string | null, publishedDate?: any | null, title?: string | null, subtitle?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, seoFields?: (
    { __typename?: 'ComponentSeo' }
    & SeoFieldsFragment
  ) | null, coverImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, description?: { __typename?: 'PostEntryDescription', json: any, links: { __typename?: 'PostEntryDescriptionLinks', entries: { __typename?: 'PostEntryDescriptionEntries', block: Array<(
          { __typename?: 'ComponentRichImage' }
          & RichImageFieldsFragment
        ) | { __typename?: 'ComponentSeo' } | { __typename?: 'PageAboutMe' } | { __typename?: 'PageLanding' } | { __typename?: 'PostEntry' } | { __typename?: 'Technologies' } | null> } } } | null, embeddedImageCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', fileName?: string | null, url?: string | null, width?: number | null, height?: number | null, size?: number | null } | null> } | null, technologiesCollection?: { __typename?: 'PostEntryTechnologiesCollection', items: Array<{ __typename?: 'Technologies', name?: string | null } | null> } | null };

export type PostEntryQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PostEntryQuery = { __typename?: 'Query', postEntryCollection?: { __typename?: 'PostEntryCollection', items: Array<(
      { __typename?: 'PostEntry' }
      & PageBlogPostFieldsFragment
    ) | null> } | null };

export type PostEntryCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<PostEntryOrder>> | InputMaybe<PostEntryOrder>>;
  where?: InputMaybe<PostEntryFilter>;
}>;


export type PostEntryCollectionQuery = { __typename?: 'Query', postEntryCollection?: { __typename?: 'PostEntryCollection', items: Array<(
      { __typename?: 'PostEntry' }
      & PageBlogPostFieldsFragment
    ) | null> } | null };

export type PageLandingFieldsFragment = { __typename: 'PageLanding', internalName?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, seoFields?: (
    { __typename?: 'ComponentSeo' }
    & SeoFieldsFragment
  ) | null };

export type PageLandingQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageLandingQuery = { __typename?: 'Query', pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<(
      { __typename?: 'PageLanding' }
      & PageLandingFieldsFragment
    ) | null> } | null };

export type PageLandingCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageLandingCollectionQuery = { __typename?: 'Query', pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<(
      { __typename?: 'PageLanding' }
      & PageLandingFieldsFragment
    ) | null> } | null };

export type RichImageFieldsFragment = { __typename: 'ComponentRichImage', internalName?: string | null, caption?: string | null, fullWidth?: boolean | null, sys: { __typename?: 'Sys', id: string }, image?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type SeoFieldsFragment = { __typename: 'ComponentSeo', pageTitle?: string | null, pageDescription?: string | null, nofollow?: boolean | null, noindex?: boolean | null, shareImagesCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & ImageFieldsFragment
    ) | null> } | null };

export type SitemapPagesFieldsFragment = { __typename?: 'Query', postEntryCollection?: { __typename?: 'PostEntryCollection', items: Array<{ __typename?: 'PostEntry', slug?: string | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null, pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<{ __typename?: 'PageLanding', sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null };

export type SitemapPagesQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type SitemapPagesQuery = (
  { __typename?: 'Query' }
  & SitemapPagesFieldsFragment
);

export const AboutMeFieldsFragmentDoc = gql`
    fragment AboutMeFields on PageAboutMe {
  sys {
    id
  }
  title
  description {
    json
  }
  image {
    sys {
      id
    }
    url
    width
    height
    title
  }
}
    `;
export const ImageFieldsFragmentDoc = gql`
    fragment ImageFields on Asset {
  __typename
  sys {
    id
  }
  title
  description
  width
  height
  url
  contentType
}
    `;
export const ReferencePageBlogPostFieldsFragmentDoc = gql`
    fragment ReferencePageBlogPostFields on PostEntry {
  __typename
  sys {
    id
    spaceId
  }
  slug
  publishedDate
  title
  subtitle
  coverImage {
    ...ImageFields
  }
  technologiesCollection {
    items {
      name
    }
  }
}
    `;
export const SeoFieldsFragmentDoc = gql`
    fragment SeoFields on ComponentSeo {
  __typename
  pageTitle
  pageDescription
  nofollow
  noindex
  shareImagesCollection(limit: 3, locale: $locale) {
    items {
      ...ImageFields
    }
  }
}
    `;
export const RichImageFieldsFragmentDoc = gql`
    fragment RichImageFields on ComponentRichImage {
  __typename
  internalName
  sys {
    id
  }
  image {
    ...ImageFields
  }
  caption
  fullWidth
}
    `;
export const PageBlogPostFieldsFragmentDoc = gql`
    fragment PageBlogPostFields on PostEntry {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  seoFields {
    ...SeoFields
  }
  slug
  publishedDate
  title
  subtitle
  coverImage {
    ...ImageFields
  }
  description {
    json
    links {
      entries {
        block {
          ...RichImageFields
        }
      }
    }
  }
  embeddedImageCollection(limit: 6) {
    items {
      fileName
      url
      width
      height
      size
    }
  }
  technologiesCollection {
    items {
      name
    }
  }
}
    `;
export const PageLandingFieldsFragmentDoc = gql`
    fragment PageLandingFields on PageLanding {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  seoFields {
    ...SeoFields
  }
}
    `;
export const SitemapPagesFieldsFragmentDoc = gql`
    fragment sitemapPagesFields on Query {
  postEntryCollection(limit: 5, locale: $locale) {
    items {
      slug
      sys {
        publishedAt
      }
    }
  }
  pageLandingCollection(limit: 1, locale: $locale) {
    items {
      sys {
        publishedAt
      }
    }
  }
}
    `;
export const PageAboutMeDocument = gql`
    query pageAboutMe($locale: String, $preview: Boolean) {
  pageAboutMeCollection(locale: $locale, preview: $preview) {
    items {
      sys {
        id
      }
      title
      description {
        json
      }
      image {
        url
        width
        height
      }
    }
  }
}
    `;
export const PostEntryDocument = gql`
    query postEntry($slug: String!, $locale: String, $preview: Boolean) {
  postEntryCollection(
    limit: 1
    where: {slug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      ...PageBlogPostFields
    }
  }
}
    ${PageBlogPostFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${RichImageFieldsFragmentDoc}`;
export const PostEntryCollectionDocument = gql`
    query postEntryCollection($locale: String, $preview: Boolean, $limit: Int, $order: [PostEntryOrder], $where: PostEntryFilter) {
  postEntryCollection(
    limit: $limit
    locale: $locale
    preview: $preview
    order: $order
    where: $where
  ) {
    items {
      ...PageBlogPostFields
    }
  }
}
    ${PageBlogPostFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${RichImageFieldsFragmentDoc}`;
export const PageLandingDocument = gql`
    query pageLanding($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const PageLandingCollectionDocument = gql`
    query pageLandingCollection($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 10, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const SitemapPagesDocument = gql`
    query sitemapPages($locale: String!) {
  ...sitemapPagesFields
}
    ${SitemapPagesFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    pageAboutMe(variables?: PageAboutMeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageAboutMeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageAboutMeQuery>(PageAboutMeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageAboutMe', 'query');
    },
    postEntry(variables: PostEntryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PostEntryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostEntryQuery>(PostEntryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'postEntry', 'query');
    },
    postEntryCollection(variables?: PostEntryCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PostEntryCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostEntryCollectionQuery>(PostEntryCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'postEntryCollection', 'query');
    },
    pageLanding(variables?: PageLandingQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageLandingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingQuery>(PageLandingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageLanding', 'query');
    },
    pageLandingCollection(variables?: PageLandingCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageLandingCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingCollectionQuery>(PageLandingCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageLandingCollection', 'query');
    },
    sitemapPages(variables: SitemapPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SitemapPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SitemapPagesQuery>(SitemapPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sitemapPages', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;