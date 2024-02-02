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

export type T_Profile = {
  image: T_ContentfulFile;
  name: string;
  role: string;
  introduction: string;
  information: string;
  linkedin: string;
  github: string;
  email: string;
  resume: T_ContentfulFile;
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
