const INITIAL_STATE = {
  mood: "ᕕ( ᐛ )ᕗ",
};

const moodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MOOD_HAPPY":
      return { ...state, mood: action.payload };
    case "MOOD_SAD":
      return { ...state, mood: action.payload };
    case "MOOD_ANGRY":
      return { ...state, mood: action.payload };
    case "MOOD_CONFUSED":
      return { ...state, mood: action.payload };
    default:
      return state;
  }
};
