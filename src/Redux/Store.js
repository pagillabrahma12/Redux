

import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "./CombinedReducer";
import { composeWithDevTools } from "redux-devtools-extension";





export const reduxStore=legacy_createStore(rootReducer,composeWithDevTools())


//redux-thunk: instead of returning a single action we can return a function (ehic can make https services)
//with in that function we can perform multiple action dispatch
//redux thunk is a middle ware it is a 3rd party libaray