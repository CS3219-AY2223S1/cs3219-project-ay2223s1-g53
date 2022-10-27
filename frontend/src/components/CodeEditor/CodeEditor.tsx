import { CodeEditorProps } from "./interface";
import Editor from "@monaco-editor/react";
import { store } from "./store";
import { useState } from "react";
import { useSyncedStore } from "@syncedstore/react";

export default function CodeEditor({ roomId }: CodeEditorProps) {
  const [editorValues, getEditorValues] = useState<string>("");
  console.log(roomId);
  const state = useSyncedStore(store);

  return (
    <Editor
      language="javascript"
      value={state.codeTextStore[roomId]}
      onChange={(value) => (state.codeTextStore[roomId] = value)}
      height="600px"
      width="600px"
    />
  );
}
