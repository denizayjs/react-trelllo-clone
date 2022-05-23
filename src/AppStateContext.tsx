import { v4 as uuid } from "uuid";
import React, { createContext, useReducer, useContext } from "react";
import { findItemIndexById } from "./utils/findItemIndexById";

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);
interface Task {
  id: string;
  text: string;
}
interface List {
  id: string;
  text: string;
  tasks: Task[];
}
interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "1", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "2", text: "Begin to use static typing" }],
    },
  ],
};

//Define actions
type Action =
  | { type: "ADD_LIST"; payload: string }
  | { type: "ADD_TASK"; payload: { text: string; taskId: string } };

// Define reducer
const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: uuid(), text: action.payload, tasks: [] },
        ],
      };
    }
    case "ADD_TASK": {
      const targetLaneIndex = findItemIndexById(
        state.lists,
        action.payload.taskId
      );
      state.lists[targetLaneIndex].tasks.push({
        id: uuid(),
        text: action.payload.text,
      });
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
export interface AppState {
  lists: List[];
}
export const useAppState = () => {
  return useContext(AppStateContext);
};
export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
