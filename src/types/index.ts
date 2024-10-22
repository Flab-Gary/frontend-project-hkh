export type { CustomError } from './error'

export type RankTier =
  | 'IRON'
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'PLATINUM'
  | 'DIAMOND'
  | 'MASTER'
  | 'GRANDMASTER'
  | 'CHALLENGER'
  | 'UNRANKED';

export type TierImages = {
  [key in RankTier]: string;
};

export type Images = TierImages & {
  logo: string;
  ICON: string;
  CHAMPION: string;
  ITEM: string;
  SPELL: string;
  RUNE: string;
  BLUR: string;
  DEFAULT: string;
};
