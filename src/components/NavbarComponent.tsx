
"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
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

const LogoArialog = () => {
  return (
    <motion.svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      {/* Path pertama (stroke animasi) */}
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 31.9927L10.6097 31.9927L25.2259 10.4645L19.1629 24.7986L27.6151 23.8672L29.7515 0L0 31.9927ZM27.154 29.0179L16.9687 29.9862L16.12 31.9927L26.8878 31.9927L27.154 29.0179Z"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="transparent"
        variants={{
          hidden: { pathLength: 0, fillOpacity: 0 },
          visible: {
            pathLength: 1,
            fillOpacity: 1,
            transition: { duration: 2.5, ease: "easeInOut" }
          },
        }}
      />

      {/* Path kedua (stroke animasi) */}
      <motion.path
        d="M9.75684 32H26.8437L27.4504 27.6019L10.6668 30.2812L9.75684 32Z"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="transparent"
        variants={{
          hidden: { pathLength: 0, fillOpacity: 0 },
          visible: {
            pathLength: 1,
            fillOpacity: 1,
            transition: { duration: 2.5, ease: "easeInOut" }
          },
        }}
      />

      {/* Path untuk fill yang muncul setelah animasi selesai */}
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 31.9927L10.6097 31.9927L25.2259 10.4645L19.1629 24.7986L27.6151 23.8672L29.7515 0L0 31.9927ZM27.154 29.0179L16.9687 29.9862L16.12 31.9927L26.8878 31.9927L27.154 29.0179Z"
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.5 } }}
      />

      <motion.path
        d="M9.75684 32H26.8437L27.4504 27.6019L10.6668 30.2812L9.75684 32Z"
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.5, duration: 0.5 } }}
      />
    </motion.svg>
  );
}

const NavbarComponent = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "About Me",
      href: "/",
      status: "ready"
    },
    {
      label: "Show Case",
      href: "/show-case",
      status: "ready"
    },
    {
      label: "Blog",
      href: "/blog",
      status: "soon"
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
                    <span className=" bg-pink-500 px-2 py-1 text-white rounded-full text-sm">soon</span>
                  </Link>
                }
              </NavbarItem>
            )
          })}
          <ThemeSwitcher />
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
                          <span className=" bg-pink-500 px-2 py-1 text-white rounded-full text-sm">soon</span>
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