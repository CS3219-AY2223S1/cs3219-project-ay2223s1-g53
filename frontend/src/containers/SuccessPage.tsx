import CodeEditor from "../components/CodeEditor/CodeEditor";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useSyncedStore } from "@syncedstore/react";
import { store } from "../components/CodeEditor/store";
export default function SuccessPage() {
  const history: any = useLocation();
  const [roomId, setRoomId] = useState<string>("");
  useEffect(() => {
    setRoomId(history.state);
  }, []);
  const state = useSyncedStore(store);
  return (
    <>
      <CodeEditor roomId={roomId} />
      <input
        type="text"
        // onChange={(event) => (state.codeText.text = event.target.value)}
      />
    </>
  );
}
