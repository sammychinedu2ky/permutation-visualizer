import permutationAlgorithm from "../permutationAlgorithm";

function reducer(state, action) {
  switch (action.type) {
    case "generate":
      let word = action.word;
      let wordLength = word.length;
      let factorial = (n) => (n === 1 ? 1 : n * factorial(n - 1));
      let res = permutationAlgorithm(word);
      let permutation = factorial(wordLength);
      return { ...state, data: res, possible: permutation };
    case "input":
      return { ...state, input: action.input };
    default:
      return { ...state };
  }
}

export default reducer;
