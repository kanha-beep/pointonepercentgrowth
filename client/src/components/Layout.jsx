import Footer from "./Footer";
import Header from "./Header";
import StatusBanner from "./StatusBanner";

function Layout({ children, content, navigate, pathname, status, loading }) {
  return (
    <div className="min-h-screen">
      <Header content={content} navigate={navigate} pathname={pathname} />
      <StatusBanner loading={loading} status={status} />
      <main>{children}</main>
      <Footer content={content} navigate={navigate} />
    </div>
  );
}

export default Layout;
