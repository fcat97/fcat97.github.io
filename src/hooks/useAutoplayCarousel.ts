"use client"

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];
type Options = Parameters<typeof Autoplay>[0];

export function useAutoplayCarousel(options: Options = { delay: 2000, stopOnInteraction: true }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(options)]);

  return { carouselRef: emblaRef, plugin: emblaApi };
}
