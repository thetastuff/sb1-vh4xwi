export interface Objection {
  id: number;
  title: string;
  videoId: string;
  isPro: boolean;
}

export interface Category {
  name: string;
  description: string;
  objections: Objection[];
}

export interface ObjectionsData {
  categories: Category[];
}