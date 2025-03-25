import { ILayoutProps } from "../interfaces";

export const DefaultLayout: React.FC<ILayoutProps> = ({ children }) => {
  return <main className="min-h-screen w-screen">{children}</main>;
};
