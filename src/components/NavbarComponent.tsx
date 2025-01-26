
"use client";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
} from "@heroui/react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LogoArialog = () => {
    return (
        <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 31.9927L10.6097 31.9927L25.2259 10.4645L19.1629 24.7986L27.6151 23.8672L29.7515 0L0 31.9927ZM27.154 29.0179L16.9687 29.9862L16.12 31.9927L26.8878 31.9927L27.154 29.0179Z" fill="#F66060" />
            <path d="M9.75684 32H26.8437L27.4504 27.6019L10.6668 30.2812L9.75684 32Z" fill="#F66060" />
        </svg>
    );
}

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {
            label: "About Me",
            href: "/",
        },
        {
            label: "Project",
            href: "/project",
        },
        {
            label: "Blog",
            href: "/blog",
        }
    ];

    const pathname = usePathname();
    return (
        <Navbar maxWidth="xl">
            <NavbarBrand className="p-0 m-0">
                <Link href="/" className="flex items-center gap-2">
                    <LogoArialog />
                    <p className="text-lg font-bold text-red-500">ARIALOG.</p>
                </Link>
            </NavbarBrand>
            <NavbarContent justify="end" >
                {menuItems.map((item, index) => {
                    return (
                        <NavbarItem key={index}>
                            <Link className={`${pathname == item.href ? 'text-red-500 font-medium' : ''} p-4`} href={item.href}>
                                {item.label}
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>
        </Navbar >
    )
}

export default NavbarComponent