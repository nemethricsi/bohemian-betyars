import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import { ReactNode } from 'react';

export default async function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
