
"use client"

import React from "react";
import Autoplay from "embla-carousel-autoplay";

type Options = Parameters<typeof Autoplay>[0];

export function useAutoplayCarousel(options: Options = { delay: 2000, stopOnInteraction: true }) {
  const plugin = React.useRef(
    Autoplay(options)
  );

  return { plugin };
}

