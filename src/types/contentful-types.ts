type T_ContentfulFile = {
  fields: {
    file: {
      url: string;
    };
  };
};

export type T_ModelData = {
  name: string;
  description: string;
};

export type T_Stack = {
  technology: string;
  logo: T_ContentfulFile;
  description: string;
}[];

export type T_Projects = {
  title: string;
  startDate: Date | string;
  dateCompleted: Date | string;
  technologies: string[];
  description: string;
  urlWebsite?: string;
  urlRepository?: string;
  image: T_ContentfulFile;
}[];
