import { combineReducers } from "redux";
import { ProfileReducer } from "./Profile/reducer";
import { reducer } from "./Reducer";
import { ProductReducer } from "./product/reducer";




 export const rootReducer=combineReducers(
    {
        profile : ProfileReducer,
        ticket:reducer,
        productListing:ProductReducer
    }
)