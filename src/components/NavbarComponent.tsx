
"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Modal,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { motion } from "framer-motion";
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { useLanguage } from "@/context/LanguageContext";
import LogoArialog from "./LogoArialog";
import { FiGlobe } from "react-icons/fi";

const NavbarComponent = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { lang, toggleLang } = useLanguage();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      blog: "Blog",
      soon: "soon"
    },
    id: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      blog: "Blog",
      soon: "segera"
    }
  };
  const t = translations[lang];

  const menuItems = [
    {
      label: t.home,
      href: "/",
      status: "ready"
    },
    {
      label: t.blog,
      href: "/blog",
      status: "ready"
    },
  ];

  const pathname = usePathname();
  return (
    <div className="fixed w-full sm:top-0 sm:bottom-auto bottom-0 z-20">
      <Navbar
        maxWidth="xl"
        disableAnimation
        className="bg-white/0 dark:bg-[#111]/50 h-fit"
        isBlurred={true}>
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <LogoArialog />
            <motion.p
              initial={{ opacity: 0, x: -1 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ duration: 5, type: "spring" }}
              className="text-lg font-bold">ARIALOG.</motion.p>
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          {menuItems.map((item, index) => {
            return (
              <NavbarItem className="hidden sm:block" key={index}>
                {item.status == "ready" ?
                  <Link className={`${pathname == item.href ? 'font-medium shadow-xl shadow-gray-400 border-gray-500 dark:border-gray bg-gradient-to-tr from-gray-100 to-gray-500 dark:from-gray-500 dark:to-gray-1000 text-foreground duration-300' : 'text-gray-1000 hover:text-foreground border-transparent duration-300'} border rounded-lg py-2 px-3 duration-300`} href={item.href}>
                    {item.label}
                  </Link> :
                  <Link href="#" className="cursor-not-allowed text-gray-900">
                    {item.label}{"  "}
                    <span className=" bg-pink-500 px-2 py-1 text-white rounded-full text-sm">{t.soon}</span>
                  </Link>
                }
              </NavbarItem>
            )
          })}
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 font-bold text-sm bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <FiGlobe className="text-pink-500" />
              {lang === 'en' ? 'ID' : 'EN'}
            </button>
            <ThemeSwitcher />
          </div>
          <button
            onClick={onOpen}
            className="sm:hidden"
          >
            <div className={`transition-transform duration-300 transform ${isOpen ? "rotate-90" : ""}`}>
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </div>
          </button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className="w-full">
              {(
                <>
                  <ModalHeader className="flex gap-2 items-center">
                    <LogoArialog />
                    <p className="text-lg font-bold">ARIALOG.</p>
                  </ModalHeader>
                  <ModalBody>
                    {menuItems.map((item, index) => (
                      item.status == "ready" ?
                        <Link
                          key={index}
                          className={`${pathname == item.href ?
                            'font-medium shadow-xl shadow-gray-400 border-gray-500 dark:border-gray bg-gradient-to-tr from-gray-100 to-gray-500 dark:from-gray-500 dark:to-gray-1000 text-foreground duration-300' :
                            'text-gray-1000 hover:text-foreground border-transparent duration-300'} border rounded-lg py-2 px-3 duration-300`}
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                        :
                        <p
                          key={index}
                          className={'rounded-lg py-2 px-3 text-gray-1000'}
                        >
                          <span>
                            {item.label}
                          </span>
                          <span className=" bg-pink-500 px-2 py-1 text-white rounded-full text-sm">{t.soon}</span>
                        </p>
                    ))}
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </NavbarContent>
      </Navbar >
    </div >
  )
}

export default NavbarComponent