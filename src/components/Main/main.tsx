import { PropsWithChildren } from "react";

export const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};
