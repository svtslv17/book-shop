export interface BookModel {
  name: string;
  description: string;
  price: number;
  createDate: number;
  isAvailable: boolean;
  category: Category;
}
export enum Category {
  Fiction,
  NonFiction,
  LightFiction,
  ChickLit,
  ScienceFiction,
  Fantasy,
  Business,
  Politics,
  Travel,
  Autobiography,
  History,
  Thriller,
  Romance,
  Satire,
  Horror,
  Religious,
  Health,
  CookBooks,
  ChildrensBooks,
  Dictionary,
  Encyclopedia,
  Series,
  Anthology,
}
