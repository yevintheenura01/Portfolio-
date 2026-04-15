import { createContext, useContext, useState } from "react";

const PageContext = createContext();

export function PageProvider({ children }) {
  const pages = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "services",
    "contact",
  ];
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (pageIndexOrName) => {
    if (typeof pageIndexOrName === "string") {
      const index = pages.indexOf(pageIndexOrName);
      if (index !== -1) setCurrentPage(index);
    } else {
      setCurrentPage(Math.max(0, Math.min(pageIndexOrName, pages.length - 1)));
    }
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <PageContext.Provider
      value={{
        pages,
        currentPage,
        goToPage,
        nextPage,
        prevPage,
        currentPageName: pages[currentPage],
        isFirstPage: currentPage === 0,
        isLastPage: currentPage === pages.length - 1,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within PageProvider");
  }
  return context;
}
