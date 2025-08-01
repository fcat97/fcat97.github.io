
"use client"

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { type EmblaOptionsType } from "embla-carousel-react";

type Options = Parameters<typeof Autoplay>[0];

export function useAutoplayCarousel(options: Options = { delay: 2000, stopOnInteraction: true }) {
  const plugin = React.useRef(
    Autoplay(options)
  );

  return { plugin };
}
