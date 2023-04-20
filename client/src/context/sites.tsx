import { Site } from '@/types/site';
import customFetch from '@/utils/axios';
import React, { createContext, useReducer, useEffect, useContext, useCallback } from 'react';

enum ActionType {
  GETSITES = 'GETSITES',
  GETSITE = 'GETSITE',
}

const initialState: State = {
  sites: [],
  site: {} as Site,
};

interface Action {
  type: ActionType;
  payload?: any;
}

interface State {
  sites: Site[];
  site: Site;
}

const reducer: React.Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.GETSITES:
      return {
        ...state,
        sites: action.payload,
      };
    case ActionType.GETSITE:
      return {
        ...state,
        site: action.payload,
      };
    default:
      throw new Error();
  }
};

const SiteContext = createContext<{
  state: State;
  getSites: () => void;
}>({
  state: initialState,
  getSites: () => {},
});

export const SiteProvider = (props: {children: any}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getSites = useCallback(async () => {
    // Fetch sites here, and then dispatch the action with the sites data
    // Example:
    // fetchSites().then((sites) => {
    //   dispatch({ type: ActionType.GETSITES, payload: sites });
    // });
    try {
      const response = await customFetch.get('/getsites');
      const sites = response.data;
      dispatch({ type: ActionType.GETSITES, payload: sites });
    } catch (error) {
      throw(error)
    }
  }, []);

  

  
  return (
    <SiteContext.Provider value={{ state, getSites }}>
      {props.children}
    </SiteContext.Provider>
  );
};

export const useStore = () => useContext(SiteContext);