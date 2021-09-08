import { nameReducers } from "./name";
import { categoriesReducers } from "./categories";

export default function reducers(state, action) {
  const newState = categoriesReducers(state, action);
  return nameReducers(newState, action);
}
