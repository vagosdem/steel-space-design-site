
export interface BlogContentSection {
  title: string;
  content: string[];
}

export interface BlogContent {
  intro: string;
  sections: BlogContentSection[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  tagline: string;
  aspectRatio: string;
  additionalImages: string[];
  content: BlogContent;
}
