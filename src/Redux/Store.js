

import { legacy_createStore } from "redux";
import { reducer } from "./Reducer";



export const reduxStore=legacy_createStore(reducer)
