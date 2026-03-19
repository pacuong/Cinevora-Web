import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='w-full md:w-[720px] lg:w-[1140px] mx-auto flex justify-center'>{children}</div>
  );
};

export default Layout;