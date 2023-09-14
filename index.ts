import type {
  createClient,
  GetListDetailRequest,
  GetListRequest,
  MicroCMSImage,
  MicroCMSListContent as MicroCMSListContent_,
  MicroCMSListResponse as MicroCMSListResponse_,
  MicroCMSQueries,
} from "microcms-js-sdk";
import type { AnyhowResult } from "@totto2727/result";
import { fail, succeed } from "@totto2727/result";

export type MicroCMSClientInstance = ReturnType<typeof createClient>;

const richEditoerSymbol: unique symbol = Symbol();

export type MicroCMSPrimitiveField = string | number | boolean;

export type MicroCMSImageField = MicroCMSImage;

export type MicroCMSRichEditorCompiledField = string & {
  [richEditoerSymbol]: "rich-editor";
};

export type MicroCMSSingleSelectedField<T extends string> = [T];

export type MicroCMSMultiSelectedField<T extends string> = T[];

export type MicroCMSSelectedField<T extends string = string> =
  | MicroCMSMultiSelectedField<T>
  | MicroCMSSingleSelectedField<T>;

export type MicroCMSBaseField =
  | MicroCMSImageField
  | MicroCMSRichEditorCompiledField
  | MicroCMSSelectedField;

export type MicroCMSCustomFieldOnlyId<T extends string = string> = {
  fieldId: T;
};

export type MicroCMSRepeatedField<
  T extends MicroCMSCustomFieldOnlyId = MicroCMSCustomFieldOnlyId,
> = T[];

export type MicroCMSCustomFieldValue =
  | MicroCMSPrimitiveField
  | MicroCMSBaseField
  | MicroCMSRepeatedField;

export type MicroCMSCustomField<
  T extends string = string,
  U extends Record<string, MicroCMSCustomFieldValue> = {},
> = MicroCMSCustomFieldOnlyId<T> & Omit<U, "fieldId">;

export type MicroCMSContent<T> = T extends Record<
  string,
  | MicroCMSPrimitiveField
  | MicroCMSBaseField
  | MicroCMSRepeatedField
  | MicroCMSCustomField
  | undefined
>
  ? T
  : undefined;

// export type MicroCMSListContent<T> = T extends MicroCMSContent<infer _>
//   ? T & MicroCMSListContent_
//   : never;

// export type MicroCMSQueriesWithoutFields = Omit<MicroCMSQueries, "fields">;

// export type GetListRequestWithoutFields = Omit<GetListRequest, "queries"> & {
//   queries?: Omit<MicroCMSQueries, "fields">;
// };

// export type GetListDetailRequestWithoutFields = Omit<
//   GetListDetailRequest,
//   "queries"
// > & { queries?: Omit<MicroCMSQueries, "fields"> };

// export type MicroCMSListResponse<T> = Omit<
//   MicroCMSListResponse_<T>,
//   "contents"
// > & {
//   contents: T[];
// };

// export async function getList<
//   T extends object,
//   const U extends readonly (keyof T)[],
// >(
//   client: MicroCMSClientInstance,
//   fields: U,
//   { queries, ...getListRequest }: GetListRequestWithoutFields,
// ): Promise<AnyhowResult<MicroCMSListResponse<Pick<T, U[number]>>>> {
//   return await client
//     .getList<Pick<T, U[number]>>({
//       ...getListRequest,
//       queries: { ...queries, fields: fields as unknown as string[] },
//     })
//     .then((v) => succeed(v))
//     .catch((e) => fail(e));
// }

// export async function getListDetail<
//   T extends object,
//   const U extends readonly (keyof T)[],
// >(
//   client: MicroCMSClientInstance,
//   fields: U,
//   { queries, ...getRequest }: GetListDetailRequestWithoutFields,
// ): Promise<AnyhowResult<Pick<T, U[number]>>> {
//   return await client
//     .getListDetail<Pick<T, U[number]>>({
//       ...getRequest,
//       queries: { ...queries, fields: fields as unknown as string[] },
//     })
//     .then((v) => succeed(v))
//     .catch((e) => fail(e));
// }
