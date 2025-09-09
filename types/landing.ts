export type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  features: string[];
};

export type TeamMember = {
  name: string;
  role: string;
};
