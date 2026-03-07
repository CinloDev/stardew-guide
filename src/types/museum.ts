export type MuseumCategory = "artifact" | "mineral";

export interface MuseumItem {
  id: string;
  name: string;
  category: MuseumCategory;
  locationHint: string;
  description: string;
  image?: string;
}

export interface MuseumProgress {
  found: string[];
  donated: string[];
}
