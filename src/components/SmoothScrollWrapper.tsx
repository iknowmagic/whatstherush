"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

// 🎯 LENIS SCROLL CONTROLS
const SCROLL_SPEED = 0.8; // Wheel multiplier (0.1 = very slow, 2 = fast)
const SMOOTHNESS = 0.1; // Lerp intensity (0.02 = very smooth, 0.2 = snappy)
const DURATION = 1.2; // Animation duration when lerp is not used

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({
  children,
}) => {
  useEffect(() => {
    // Initialize Lenis with current v1.3.3 API
    const lenis = new Lenis({
      lerp: SMOOTHNESS, // Linear interpolation intensity
      duration: DURATION, // Duration when lerp not defined
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      wheelMultiplier: SCROLL_SPEED, // Mouse wheel speed multiplier
      touchMultiplier: 2, // Touch scroll speed
      infinite: false, // Disable infinite scroll
      autoRaf: true, // Automatically run RAF loop
    });

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollWrapper;
