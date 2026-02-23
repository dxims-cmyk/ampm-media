"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/config"

export function FloatingNav() {
    const [isHovered, setIsHovered] = useState(false)
    const pathname = usePathname()

    return (
        <>
            {/* LEFT: Static Home Link */}
            <div className="fixed top-8 left-8 z-50 mix-blend-difference">
                <Link href="/" className="text-white font-display font-bold tracking-tight text-lg hover:opacity-80 transition-opacity">
                    AM:PM Media
                </Link>
            </div>

            {/* RIGHT: Expandable Pill */}
            <div className="fixed top-8 right-8 z-50 flex justify-end">
                <motion.nav
                    initial={false}
                    animate={{
                        width: isHovered ? "auto" : "48px",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full overflow-hidden shadow-2xl relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="flex items-center h-12">
                        {/* The Toggle (Always Visible when closed, hidden when open? Or stays as anchor?) 
                 Actually, user wants it to expand. Let's keep the ":" visible or replace it.
                 User said: "on the right it says ':' and when you hover it opens left"
             */}

                        <AnimatePresence mode="wait">
                            {!isHovered ? (
                                <motion.div
                                    key="trigger"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, width: 0 }}
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                >
                                    <span className="text-white pb-1 font-display font-bold text-xl leading-none">:</span>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>

                        {/* Links Container */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="flex items-center px-2"
                                >
                                    <ul className="flex flex-row items-center gap-1">
                                        {navLinks.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className={cn(
                                                        "block px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors",
                                                        pathname === link.href
                                                            ? "bg-white text-navy font-bold"
                                                            : "text-white/70 hover:text-white hover:bg-white/10"
                                                    )}
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.nav>
            </div>
        </>
    )
}
