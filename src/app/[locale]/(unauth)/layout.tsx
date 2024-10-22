import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { FC, PropsWithChildren } from 'react';

const SearchLayout: FC<PropsWithChildren> = ({ children }) => {
  return  (
    <div className='fixed w-full h-screen overflow-y-scroll bg-gradient-to-br from-indigo-50 via-white to-cyan-100'>
      <Header />
        {children}
      <Footer />
    </div>
  )
};

export default SearchLayout;
