export type Leader = {
  name: string;
  position: string;
  education: string;
  experience: string;
  specialization: string;
  email: string;
  phone?: string;
  image: string;
  linkedinUrl?: string;
};

export type TeamMember = {
  name: string;
  position: string;
  education: string;
  experience: string;
  specialization: string;
  email: string;
  image: string;
  linkedinUrl?: string;
};

export type JobOpening = {
  title: string;
  type: "Full-time" | "Part-time" | string;
};
