export interface Work {
  tags: string[];
  imgUrl: string; // Assuming imgUrl is a string
  name: string; // Assuming name is a string
  projectLink: string; // Assuming projectLink is a string
  codeLink: string; // Assuming codeLink is a string
  title: string; // Assuming title is a string
  description: string; // Assuming description is a string
}

export interface experimenting{
  year: number,
  work: string,
  description: string,
  imgUrl: string,
  works: any,
}

export interface skills {
  name: string,
  icon: string,
  imgUrl: string,
}

export interface barnds {
  _id : string,
  name: string,
  imgUrl: string,
}

export interface testimonials {
  name: string,
  imgUrl: string,
  company: string,
  feedback: string,
}