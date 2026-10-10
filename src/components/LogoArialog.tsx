"use client";

import { motion } from "framer-motion";

const LogoArialog = ({ className }: { className?: string }) => {
  return (
    <motion.svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      className={`fill-current ${className ?? ""}`}
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

export default LogoArialog;
