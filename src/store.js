import rootReducer from "./reducers/upDown";
import { StoreCreator } from "redux";

const store = StoreCreator(rootReducer);

export default store;

