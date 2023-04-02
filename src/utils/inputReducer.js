import FixDate from "../utils/formatDate";

export const initialState = {
  value: {
    todo: "",
    description: "",
    dueAt: new FixDate(Date.now()).formatDate(),
  },
  btnEnable: false,
};

// Input field Reducer
export const inputReducer = (state, action) => {
  if (action.type === "EDIT-TODO") {
    return {
      value: { ...state.value, todo: action.payload },
      btnEnable: state.btnEnable,
    };
  }

  if (action.type === "EDIT-DESCRIPTION") {
    return {
      value: { ...state.value, description: action.payload },
      btnEnable: state.btnEnable,
    };
  }

  if (action.type === "EDIT-DATE") {
    return {
      value: { ...state.value, dueAt: action.payload },
      btnEnable: state.btnEnable,
    };
  }

  if (action.type === "ENABLE_BTN") {
    const { description, dueAt, todo } = state.value;
    if (description && dueAt && todo) {
      return {
        value: state.value,
        btnEnable: true,
      };
    } else {
      return {
        value: state.value,
        btnEnable: false,
      };
    }
  }
  return initialState;
};
