import { describe, expect, test } from "bun:test";
import {
  MicroCMSContent,
  MicroCMSCustomField,
  MicroCMSImageField,
  MicroCMSMultiSelectedField,
  MicroCMSRepeatedField,
  MicroCMSRichEditorCompiledField,
  MicroCMSSingleSelectedField,
} from ".";

type A = MicroCMSContent<{
  id: string;
  number: number;
  boolean: boolean;
  optional?: string;
  image: MicroCMSImageField;
  singleSelect: MicroCMSSingleSelectedField<"single">;
  multiSelect: MicroCMSMultiSelectedField<"multi1" | "multi2">;
  richEditorCompiled: MicroCMSRichEditorCompiledField;
  repeate: MicroCMSRepeatedField<
    MicroCMSCustomField<"repeate", { repeat: string }>
  >;
  custom: MicroCMSCustomField<
    "custom",
    {
      a: string;
    }
  >;
}>;

const a: A = {
  id: "id",
  number: 0,
  boolean: true,
  optional: undefined,
  image: {
    url: "",
  },
  singleSelect: ["single"],
  multiSelect: ["multi1", "multi2"],
  richEditorCompiled: "<div>rich</div>" as MicroCMSRichEditorCompiledField,
  repeate: [{ fieldId: "repeate", repeat: "string" }],
  custom: {
    fieldId: "custom",
    a: "",
  },
};

describe("describe", () => {
  test("test", () => {
    expect(1).toBe(1);
  });
});
