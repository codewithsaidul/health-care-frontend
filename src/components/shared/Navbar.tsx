"use client";

import { Button } from "@/components/ui/button";
import { checkAuthStatus } from "@/utils/auth";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const { user } = await checkAuthStatus();
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { role } = user || { role: "guest" };

  const navItems = [
    { href: "#", label: "Consultation" },
    { href: "#", label: "Health Plans" },
    { href: "#", label: "Medicine" },
    { href: "#", label: "Diagnostics" },
    { href: "#", label: "NGOs" },
  ];

  if (role === "ADMIN") {
    navItems.push({ href: "/dashboard/admin", label: "Admin Dashboard" });
  }

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

          {/* Desktop Auth Buttons */}
          {/* <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="lg">
              <Link href="/login">Login</Link>
            </Button>
            <Button size="lg">
              <Link href="/register">Sign Up</Link>
            </Button>
          </div> */}

          {/* Auth && Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Button variant="default" size="sm" className="flex-1">
              <Link href="/auth/login">Login</Link>
            </Button>
            <span
              className="lg:hidden flex-1 bg-transparent font-bold text-primary rounded-lg transition-colors cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </span>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-background border-t border-border shadow-lg absolute left-0 top-16 w-full"
            >
              <div className="flex flex-col items-center space-y-2 p-4">
                {navItems.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
