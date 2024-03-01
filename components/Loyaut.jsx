// components/Layout.js
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div>
        <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;