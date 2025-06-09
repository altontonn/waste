import { createContext, useContext, useEffect, useReducer } from "react";

const SkipsContext = createContext();
const BASE_URL = `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`;
const initialState = {
  skips: [],
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "skips/loaded":
      return { ...state, isLoading: false, skips: action.payload };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Uknown action type");
  }
}

function SkipsProvider({ children }) {
  const [{ skips, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchSkips() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        dispatch({ type: "skips/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading skips",
        });
      }
    }
    fetchSkips();
  }, []);
  return (
    <SkipsContext.Provider value={{ skips, isLoading, error }}>
      {children}
    </SkipsContext.Provider>
  );
}

function useSkips() {
  const context = useContext(SkipsContext);
  return context;
}

export { SkipsProvider, useSkips };
