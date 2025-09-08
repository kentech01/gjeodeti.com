export type Contact = {
  phone: string;
  email: string;
  addressLines: string[];
};

export type WorkDay = {
  label: string;
  hours: string;
};

export type WorkingHours = {
  days: WorkDay[];
};
