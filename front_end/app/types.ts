export interface Work {
  tags: string[];
  imgUrl: string; // Assuming imgUrl is a string
  name: string; // Assuming name is a string
  projectLink: string; // Assuming projectLink is a string
  codeLink: string; // Assuming codeLink is a string
  title: string; // Assuming title is a string
  description: string; // Assuming description is a string
}

export interface Experimenting {
  year: number;
  works: {
    name: string;
    company: string;
    desc: string;
  }[];
}

export interface skills {
  name: string,
  icon: string,
  imgUrl: string,
}

export interface barnds {
  _id : any,
  name: string,
  imgUrl: string,
}

export interface testimonials {
  name: string,
  imgurl: string,
  company: string,
  feedback: string,
}