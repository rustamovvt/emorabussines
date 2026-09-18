export type SiteMode = "basic" | "ai" | "pro";

export type Site = {
  id: string;
  ownerId: string;
  mode: SiteMode;
  category: string;
  templateId?: string;
  slug: string;
  customDomain?: string;
  title: string;
  content: Record<string, unknown>;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AICommand = {
  siteId: string;
  message: string;
};

export const categories = [
 "birthday","wedding","love","sorry","surprise","resume","portfolio",
 "graduation","anniversary","invitation","baby","family","business","event"
];
