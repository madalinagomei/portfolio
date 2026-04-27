export type SectionName =
  | "Home"
  | "About"
  | "Work"
  | "Gallery"
  | "Skills"
  | "Experience"
  | "Contact";

export type WorkAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type WorkImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type WorkItem = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl?: WorkImage;
  actions?: readonly WorkAction[];
};
