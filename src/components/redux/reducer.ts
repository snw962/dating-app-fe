import { useSelector } from "react-redux";
import { Action } from "./action";
import { ActionType } from "./action-types";
import { AppState } from "./app-state";

export function reduce(oldAppState: AppState = { id : 0 }, action: Action): AppState {

    const newAppState = { ...oldAppState };
   
   
    switch (action.type) {
       

    }
    console.log(newAppState)
    return newAppState;
}