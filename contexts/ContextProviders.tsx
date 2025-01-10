'use client';
import React, { createContext, useReducer } from 'react';

interface UserProfile {
  Email: string;
  Fullname: string;
  Plan: string;
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
  showDetailEvent: any;
  showPopupEvent: boolean;
}

const initialState = {
  profile: null,
  showListEvent: [],
  showDetailEvent: null,
  showPopupEvent: false
};

type AppAction =
  | { type: 'SET_PROFILE'; value: UserProfile }
  | { type: 'SET_LIST_EVENT'; value: [] }
  | { type: 'SET_DETAIL_EVENT'; value: any }
  | { type: 'SET_POPUP_EVENT'; value: boolean };

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_PROFILE':
      return { ...state, profile: action.value };
    case 'SET_LIST_EVENT':
      return { ...state, showListEvent: action.value };
    case 'SET_DETAIL_EVENT':
      return { ...state, showDetailEvent: action.value };
    case 'SET_POPUP_EVENT':
      return { ...state, showPopupEvent: action.value };
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
