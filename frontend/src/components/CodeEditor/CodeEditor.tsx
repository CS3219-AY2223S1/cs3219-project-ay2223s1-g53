import { CodeEditorProps } from "./interface";
import Editor from "@monaco-editor/react";
import { store } from "./store";
import { useSyncedStore } from "@syncedstore/react";

export default function CodeEditor({ roomId }: CodeEditorProps) {
  const state = useSyncedStore(store);

  return (
    <Editor
      language="javascript"
      value={state.codeTextStore[roomId]}
      onChange={(value) => (state.codeTextStore[roomId] = value)}
      height="600px"
      theme="vs-dark"
      width="600px"
    />
  );
}
