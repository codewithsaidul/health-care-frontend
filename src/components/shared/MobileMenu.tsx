"use client";

import { navItems } from "@/data/navItem";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden flex-1 bg-transparent font-bold text-primary rounded-lg transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
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
    </>
  );
}
