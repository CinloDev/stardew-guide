export interface Villager {
  id: string;
  name: string;
  birthday: string;
  lovedGifts: string[];
  likedGifts: string[];
  image?: string;
  marriageable: boolean;
  address: string;
  family: string[];
  hatedGifts?: string[];
  clinicDay?: string;
  movies?: {
    loved: string[];
    lovedConcessions: string[];
  };
  heartEvents?: Array<{
    hearts: number;
    trigger: string;
  }>;
}
