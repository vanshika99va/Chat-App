import React from "react";
// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  //   const chatProps = useMultiChatLogic(
  //     "c6635c32-fb5a-47f2-9413-2819b5884d9d",
  //     props.user.username,
  //     props.user.secret
  //   );
  //   return (
  // <div style={{ height: "100vh" }}>
  //   <MultiChatSocket {...chatProps} />
  //   <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
  // </div>
  //   );

  return (
    <div className="background">
      <PrettyChatWindow
        projectId="c6635c32-fb5a-47f2-9413-2819b5884d9d"
        username={props.user.username}
        secret={props.user.secret}
        // style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
