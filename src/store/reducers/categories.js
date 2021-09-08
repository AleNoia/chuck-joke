export function categoriesReducers(state, action) {
  switch (action.type) {
    case "CHANGE_SWITCH":
      return { ...state, jokeCategory: action.payload };
    default:
      return state;
  }
}
