export interface NavItem {
  label: string;
  href: string;
}

export interface Book {
  title: string;
  author: string;
  coverUrl: string;
  description?: string;
}
