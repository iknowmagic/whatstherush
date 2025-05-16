"use client";

// Give the imports specific variable names to avoid any confusion
import {
  motion as m,
  useScroll as us,
  useTransform as ut,
  AnimatePresence as ap,
} from "framer-motion";

// Re-export with explicit naming (no comments in the export block)
export const motion = m;
export const useScroll = us;
export const useTransform = ut;
export const AnimatePresence = ap;
