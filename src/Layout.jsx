import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <div>
      <Announcement />
      <Navbar />
      {/* <Footer /> */}
    </div>
  );
}
