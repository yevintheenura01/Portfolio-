import { useEffect } from "react";
import { usePageContext } from "../context/PageContext.jsx";

export function useKeyboardNavigation() {
  const { nextPage, prevPage, currentPage, pages } = usePageContext();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowRight") {
        nextPage();
      } else if (event.key === "ArrowLeft") {
        prevPage();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextPage, prevPage]);
}

export default useKeyboardNavigation;
