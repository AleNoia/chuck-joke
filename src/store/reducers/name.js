export function nameReducers(state, action) {
  const firstNamePayload = action.payload.firstName;
  const lastNamePayload = action.payload.newLastName;

  switch (action.type) {
    case "ADD_NAME":
      return { ...state, name: `${state.name} ${action.payload}` };
    case "CHANGE_NAME":
      return {
        ...state,
        firstName: firstNamePayload,
        lastName: lastNamePayload,
      };
    default:
      return state;
  }
}
