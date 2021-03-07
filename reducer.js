const initialState = {
  cars: ["BMW"],
};

export default function (state = initialState, action, args) {
  console.log("🚀 ~ file: reducer.js ~ line 6 ~ action", { action, args });
  switch (action) {
    case "ADD": {
      return {
        ...state,
        cars: [...state.cars, ...args],
      };
    }
    default:
      return state;
  }
}
