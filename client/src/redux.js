import rootReducer from "./store/reducers/rootReducer";
import {createStore} from "redux";
import { persistStore } from "redux-persist";
const reduxStore = () => {
  const store = createStore(rootReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
export default reduxStore;
