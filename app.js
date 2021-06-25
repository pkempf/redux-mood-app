const store = Redux.createStore(moodReducer);
const mood = document.getElementById("mood");

document.getElementById("happy").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_HAPPY", payload: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧" });
});

document.getElementById("sad").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_SAD", payload: "｡ﾟ･ (>﹏<) ･ﾟ｡" });
});

document.getElementById("angry").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_ANGRY", payload: "(╬ Ò﹏Ó)" });
});

document.getElementById("confused").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_CONFUSED", payload: "(◎_◎)ゞ" });
});

const showMood = () => {
  mood.innerHTML = store.getState().mood;
};

showMood();
store.subscribe(showMood);
