import type { SVGProps } from "react";

export type IconType = React.ComponentType<SVGProps<SVGSVGElement>>;

export type Category = {
  id: "all" | "residential" | "commercial" | "infrastructure" | "industrial";
  name: string;
};

export type Project = {
  id: number | string;
  title: string;
  category: Category["id"];
  location: string;
  year: string;
  client: string;
  description: string;
  services: string[];
  area: string;
  duration: string;
  status: "Përfunduar" | "Në Progres";
  image: string;
  challenges?: string[];
};

export type Stat = {
  number: string;
  label: string;
  icon: IconType;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  project: string;
};
