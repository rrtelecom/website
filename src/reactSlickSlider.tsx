import type { ComponentType, ReactNode } from "react";
import RSlider from "react-slick";
import type { Settings } from "react-slick";

export type ReactSlickSliderProps = Settings & {
  className?: string;
  children?: ReactNode;
};

/** Default export typings are incompatible with React 18 JSX; safe at runtime. */
export const Slider: ComponentType<ReactSlickSliderProps> = RSlider as unknown as ComponentType<ReactSlickSliderProps>;
