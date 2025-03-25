import { ILayoutProps } from "../interfaces";

export const DefaultLayout: React.FC<ILayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};
