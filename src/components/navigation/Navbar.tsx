import { NAV_LINKS } from "@/constants/navigation";
import NavbarClient from "./NavbarClient";

/**
 * Server component wrapper for Navbar
 * Handles data fetching and passes data to the client component
 */
export default function Navbar(): JSX.Element {
  // You can add server-side data fetching here if needed
  // For example: const navLinks = await fetchNavigationFromCMS();

  return <NavbarClient links={NAV_LINKS} />;
}
