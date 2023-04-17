import { Message } from "yup";
import customFetch from "@/utils/axios";
import React, {createContext, useReducer, useContext } from 'react';

enum ActionType{
     CREATEMESSAGE = 'CREATEMESSAGE' 
}

const initialState: State = {
    messages: []
};

interface Action {
    type: ActionType;
    payload?: any
}

interface State {
    messages: Message[];
}

const reducer: React.Reducer<State, Action> = (state: State, action: Action) => {
    switch(action.type){
        case ActionType.CREATEMESSAGE:
            return{
                ...state,
                sites: action.payload
            }
        default:
            throw new Error()
    }
};

const MessageContext = createContext<{
state: State,
createMessage: (data: any) => Promise<any>;
}>({
    state: initialState,
    createMessage: async () => {}
})

export const MessageProvider = (props: {children: any}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const createMessage = async (data: any) => {
        try {
          const response = await customFetch.post("/newmessage", data);
          dispatch({ type: ActionType.CREATEMESSAGE, payload: response.data });
          return response.data;
        } catch (error) {
          throw new Error();
        }
      };
    

return(
    <MessageContext.Provider value={ {state, createMessage}}>
        {props.children}
    </MessageContext.Provider>
  )
}

export const useStore = () => useContext(MessageContext)
