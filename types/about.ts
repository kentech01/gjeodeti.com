import type { SVGProps } from "react";

export type IconType = React.ComponentType<SVGProps<SVGSVGElement>>;

export type Stat = {
  number: string;
  label: string;
  icon: IconType;
};

export type ValueItem = {
  title: string;
  description: string;
  icon: IconType;
};

export type TeamMember = {
  name: string;
  role: string;
  image?: string;
};
