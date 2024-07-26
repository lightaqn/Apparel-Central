"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

type Props = {
  children: any;
  innerHeight?: number;
  setInnerHeight?: () => void | any;

  show?: boolean;
  setShow?: () => void | any;
};

const ScrollContext = createContext<any>({});

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

const ScrollProvider = ({ children }: Props) => {
  const [innerHeight, setInnerHeight] = useState(0);
  const [show, setShow] = useState("");

  const handleTransform = useCallback(() => {
    setInnerHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    handleTransform();
    window.addEventListener("transform", handleTransform, { passive: true });
    return () => window.removeEventListener("transform", handleTransform);
  }, [handleTransform]);

  const toggleScrollToSearch = () => {
    const moveToSearch = Math.round(innerHeight * 0.75);
    if (moveToSearch) {
      setTimeout(() => {
        window.scrollTo({
          top: moveToSearch,
          behavior: "smooth",
        });
      }, 500);
    }
  };

  return (
    <ScrollContext.Provider value={{ toggleScrollToSearch, show, setShow }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
