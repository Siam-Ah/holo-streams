import { createContext, useContext, useState } from "react";

const ResultContext = createContext();

export function ResultProvider({ children }) {
  const [resultCount, setResultCount] = useState(0);

  return (
    <ResultContext.Provider value={{ resultCount, setResultCount }}>
      {children}
    </ResultContext.Provider>
  );
}

export function useResultContext() {
  return useContext(ResultContext);
}
