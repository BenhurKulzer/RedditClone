interface PostDataDTO {
  data: any;
  created: Date;
  permalink: string;
  title: string;
  thumbnail: string;
  author: string;
  score: number;
  num_comments: number;
}

export interface PostDTO {
  data: PostDataDTO;
}
