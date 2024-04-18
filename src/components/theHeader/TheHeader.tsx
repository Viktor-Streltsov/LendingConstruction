import Navigation from "./navigation/Navigation";
import Link from "next/link";
import Logo from "../icons/Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" }
];


const TheHeader = () => {
  return (
    <header className="wrapperHeader">
      <div><Logo /></div>
      <nav>
        <Navigation navLinks={navItems} />
      </nav>
      <Link href="../theFooter/TheFooter.tsx">
        Contact Us
      </Link>
    </header>
  );
};

export { TheHeader };
