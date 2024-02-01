import { EntrySkeletonType } from "contentful";

export type T_Stack = {
  technology: string;
  logo: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  description: string;
}[];
