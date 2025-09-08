import type { SVGProps } from "react";

export type IconType = React.ComponentType<SVGProps<SVGSVGElement>>;

export type Service = {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  equipment: string[];
  duration: string;
  price: string;
  image: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};
