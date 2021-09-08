export function addName(dispatch, name) {
  dispatch({ type: "ADD_NAME", payload: name });
}

export function changeName(dispatch, name) {
  dispatch({ type: "CHANGE_NAME", payload: name });
}
