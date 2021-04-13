import permutationAlgorithm from "../permutationAlgorithm";

function reducer(state, action) {
  switch (action.type) {
    case "generate":
      let res = permutationAlgorithm(action.word);
    
      return { ...state, data: res,  };
    case "print":
        console.log('hello')
        return {...state,input:action.input}
    default:
      return {...state};
  }
}

export default reducer;
