export const clearResults = () => ({ type: "CLEAR_RESULTS" });

export const setResults = (searchResults) => {
  return {
    type: "SET_RESULTS",
    data: {
      searchResults,
    },
  };
};

export const setError = (errorMessage) => {
  return {
    type: "SET_ERROR",
    data: {
      errorMessage,
    },
  };
};

export const clearError = () => ({ type: "CLEAR_ERROR" });

export const setLoading = (isLoading) => {
  return {
    type: "SET_LOADING",
    data: {
      isLoading,
    },
  };
};

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_RESULTS":
      const { searchResults } = action.data;
      return { ...state, searchResults, isLoading: false, error: false };
    case "CLEAR_RESULTS":
      return {
        ...state,
        searchResults: [],
        isLoading: false,
        error: false,
        errorMessage: "",
      };
    case "SET_LOADING":
      const { isLoading } = action.data;
      return { ...state, isLoading };
    case "SET_ERROR":
      const { errorMessage } = action.data;
      return {
        ...state,
        searchResults: [],
        isLoading: false,
        error: true,
        errorMessage,
      };
    case "CLEAR_ERROR":
      return { ...state, error: false, errorMessage: "" };
    default:
      return state;
  }
};

export default searchReducer;
