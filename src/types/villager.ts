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
}
