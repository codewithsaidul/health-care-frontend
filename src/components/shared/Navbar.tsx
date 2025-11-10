import { Button } from "@/components/ui/button";
import { navItems } from "@/data/navItem";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { getCookie } from "@/service/auth/cookieHandle";
import LogOutBtn from "./LogOutBtn";

export async function Navbar() {
  const accessToken = await getCookie("accessToken");

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container z-60 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">
                H
              </span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">
              HealthCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Auth  */}
            {accessToken ? (
              <LogOutBtn />
            ) : (
              <Button variant="default" size="sm">
                <Link href="/auth/login">Login</Link>
              </Button>
            )}

            {/* Mobile Navigation */}
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
