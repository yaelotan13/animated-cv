import React from "react";
import { useMachine } from "@xstate/react";
import chatMachine from "../chat-machine";
import MainActions from "./MainActions";
import SubActions from "./SubActions";
import "../ChatBot.css";
import BotResponse from "./BotResponse";
import UserResponse from "./UserResponse";

export default function Conversation({ startTime }) {
  const [state, send] = useMachine(chatMachine);

  const { conversations, actions } = state.context;
  const shouldShowFirstMainActions =
    conversations.length === 1 && !conversations[0]?.action;

  return (
    <>
      <BotResponse
        text={
          <span>
            Hey there my name is Pal ❤️ <br /> How can I help you?
          </span>
        }
        shortDelay={false}
        startTime={startTime}
      />
      {shouldShowFirstMainActions && (
        <MainActions actions={actions} send={send} />
      )}
      {conversations.map((conversation, index) => {
        return (
          <div key={index}>
            {conversation.action && (
              <>
                <UserResponse
                  text={conversation.action.action}
                  startTime={startTime}
                />
                <BotResponse
                  text={
                    <span>
                      {" "}
                      I'll be happy to help 💪🏽 <br /> Choose from the following
                      option
                    </span>
                  }
                  startTime={startTime}
                />
                {!conversation.subAction && (
                  <SubActions
                    subActions={conversation.action.subActions}
                    send={send}
                  />
                )}
                {conversation.subAction && (
                  <>
                    <UserResponse
                      text={conversation.subAction.action}
                      startTime={startTime}
                    />
                    <BotResponse
                      text={conversation.subAction.response}
                      startTime={startTime}
                    />
                    <BotResponse
                      text="Can I help with anything else? 🌈"
                      startTime={startTime}
                    />
                  </>
                )}
                {state.matches("waitForMainAction") && (
                  <>
                    {index === state.context.conversations.length - 2 && (
                      <MainActions actions={actions} send={send} />
                    )}
                  </>
                )}
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
