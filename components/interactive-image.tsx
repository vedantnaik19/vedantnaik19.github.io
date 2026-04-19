"use client";

import Zoom from "react-medium-image-zoom";
import Image, { ImageProps } from "next/image";

import "react-medium-image-zoom/dist/styles.css";

export function InteractiveImage(props: ImageProps) {
  return (
    <Zoom zoomMargin={40}>
      <Image {...props} />
    </Zoom>
  );
}
