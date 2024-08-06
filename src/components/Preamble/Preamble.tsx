import { PropsWithChildren } from "react";

export const Preamble: React.FC<PropsWithChildren> = ({ children }) => {
  return <p>{children}</p>;
};
