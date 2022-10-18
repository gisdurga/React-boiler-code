import { combineReducers } from "redux";
import { signReducer } from "./loginReducer";

const Reducers = combineReducers({
  signReducer,
});
export type ApplicationState = ReturnType<typeof Reducers>;

export default Reducers;
