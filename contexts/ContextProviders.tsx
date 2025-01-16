'use client';
import React, { createContext, useReducer } from 'react';

interface UserProfile {
  Id: string;
  Email: string;
  Fullname: string;
  Plan: string;
}

interface ListEvent {
  title: string;
  eventType: string;
  date: string;
  plan: any;
  _id: string;
}

interface PopupPlan {
  Status: boolean;
  Plan: string;
}

interface AppState {
  profile: UserProfile | null;
  showListEvent: ListEvent[];
  showDetailEvent: any;
  showPopupEvent: boolean;
  showPopupPayment: PopupPlan | null;
  showPopupWelcomeScreen: boolean;
  showPopupBackgroundText: boolean;
  showPopupColorPlate: boolean;
  colorPlate: any;
}

const initialState = {
  profile: null,
  showListEvent: [],
  showDetailEvent: null,
  showPopupEvent: false,
  showPopupPayment: null,
  showPopupWelcomeScreen: false,
  showPopupBackgroundText: false,
  showPopupColorPlate: false,
  colorPlate: null
};

type AppAction =
  | { type: 'SET_PROFILE'; value: UserProfile }
  | { type: 'SET_LIST_EVENT'; value: [] }
  | { type: 'SET_DETAIL_EVENT'; value: any }
  | { type: 'SET_POPUP_EVENT'; value: boolean }
  | { type: 'SET_POPUP_PAYMENT'; value: PopupPlan }
  | { type: 'SET_POPUP_WELCOME_SCREEN'; value: boolean }
  | { type: 'SET_POPUP_BACKGROUND_TEXT'; value: boolean }
  | { type: 'SET_POPUP_COLOR_PLATE'; value: boolean }
  | { type: 'SET_COLOR_PLATE'; value: any };

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
    case 'SET_POPUP_PAYMENT':
      return { ...state, showPopupPayment: action.value };
    case 'SET_POPUP_WELCOME_SCREEN':
      return { ...state, showPopupWelcomeScreen: action.value };
    case 'SET_POPUP_BACKGROUND_TEXT':
      return { ...state, showPopupBackgroundText: action.value };
    case 'SET_POPUP_COLOR_PLATE':
      return { ...state, showPopupColorPlate: action.value };
    case 'SET_COLOR_PLATE':
      return { ...state, colorPlate: action.value };
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
