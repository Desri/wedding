'use client';
import React, { createContext, useReducer } from 'react';

interface UserProfile {
  Email: string;
  Fullname: string;
}

interface ListEvent {
  title: string;
  eventType: string;
  date: string;
  _id: string;
}

interface AppState {
  profile: UserProfile | null;
  showListEvent: ListEvent[];
}

const initialState = {
  profile: null,
  showListEvent: []
};

type AppAction =
  | { type: 'SET_PROFILE'; value: UserProfile }
  | { type: 'SET_LIST_EVENT'; value: [] };

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_PROFILE':
      return { ...state, profile: action.value };
    case 'SET_LIST_EVENT':
      return { ...state, showListEvent: action.value };
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProviders;
