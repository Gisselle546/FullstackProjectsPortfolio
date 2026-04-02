import type { Message } from "../types/message";
import { fetchPost } from "../utils/fetch";
import React, { createContext, useReducer, useContext } from "react";

type ActionType = "CREATEMESSAGE";

const initialState: State = {
  messages: [],
};

interface Action {
  type: ActionType;
  payload?: any;
}

interface State {
  messages: Message[];
}

const reducer: React.Reducer<State, Action> = (
  state: State,
  action: Action,
) => {
  switch (action.type) {
    case "CREATEMESSAGE":
      return {
        ...state,
        messages: action.payload,
      };
    default:
      throw new Error();
  }
};

const MessageContext = createContext<{
  state: State;
  createMessage: (data: any) => Promise<any>;
}>({
  state: initialState,
  createMessage: async () => {},
});

export const MessageProvider = (props: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createMessage = async (data: any) => {
    try {
      const result = await fetchPost<Message>("/newmessage", data);
      dispatch({ type: "CREATEMESSAGE", payload: result });
      return result;
    } catch (error) {
      throw new Error();
    }
  };

  return (
    <MessageContext.Provider value={{ state, createMessage }}>
      {props.children}
    </MessageContext.Provider>
  );
};

export const useStore = () => useContext(MessageContext);
