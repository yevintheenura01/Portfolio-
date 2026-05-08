import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function DownloadIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export function Toast({ message, type = "success" }) {
  if (!message) return null;

  const isSuccess = type === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
        isSuccess
          ? "dark:bg-green-500/20 dark:text-green-200 dark:border dark:border-green-500/40 bg-green-100 text-green-700 border border-green-200"
          : "dark:bg-red-500/20 dark:text-red-200 dark:border dark:border-red-500/40 bg-red-100 text-red-700 border border-red-200"
      }`}
    >
      {isSuccess ? (
        <CheckIcon />
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <span>{message}</span>
    </motion.div>
  );
}

export function ResumeButton({ showToast }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      // Create a simple download link
      const link = document.createElement("a");
      link.href = "/YevinTheenuraResume.pdf"; // Path to your resume file in public folder
      link.download = "Yevin-Theenura-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast("Resume downloaded successfully!");
      setIsLoading(false);
    } catch (error) {
      showToast("Failed to download resume", "error");
      setIsLoading(false);
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isLoading}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 rounded-full border transition-all duration-300 px-6 py-3 font-semibold dark:border-cyan-300/40 dark:bg-cyan-300/15 dark:text-cyan-100 dark:hover:bg-cyan-300/25 border-emerald-300 bg-emerald-100 text-emerald-700 hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </motion.span>
          <span>Downloading...</span>
        </>
      ) : (
        <>
          <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <DownloadIcon />
          </motion.span>
          <span>Download Resume</span>
        </>
      )}
    </motion.button>
  );
}
