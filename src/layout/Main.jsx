import Logo from "../components/Logo/Logo";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";

export default function Main() {
  // Variable
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <>
      {/* Logo */}
      <Logo />

      {/* Nav */}
      <Nav />

      {/* Loading */}
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center text-white mt-5">
          Chargement...
        </div>
      ) : (
        //Children
        <Outlet />
      )}

      {/* Footer */}
      <Footer />
    </>
  );
}
