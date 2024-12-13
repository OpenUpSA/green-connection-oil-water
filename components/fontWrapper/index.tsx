"use client";

import { ReactNode, useEffect } from "react";

interface FontWrapperProps {
  children: ReactNode;
}

const FontWrapper = ({ children }: FontWrapperProps) => {
  useEffect(() => {
    document.fonts.ready.then((a) => {
      document.documentElement.classList.add("font-loaded");
    });
  }, []);

  return <>{children}</>;
};

export default FontWrapper;
