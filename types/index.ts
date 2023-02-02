export interface ILink {
  title: string;
  url: string;
  icon?: string;
}

export interface ISocial extends ILink {
  icon: string;
}

export interface ILinksResponse {
  name: string;
  avatar: string;
  links: ILink[];
  socials: ISocial[];
}
