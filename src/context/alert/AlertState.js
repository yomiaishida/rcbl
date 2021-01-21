import React, { useReducer } from "react";
import AlertReducer from "./alertReducer";
import AlertContext from "./alertContext";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  // Remove Alert

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;