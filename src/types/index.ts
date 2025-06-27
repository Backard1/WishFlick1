export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  level: number;
  following: number;
  followers: number;
  isPublic: boolean;
}

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  url?: string;
  source: 'link' | 'partner' | 'ar-scan';
  contributedAmount: number;
  contributors: number;
}

export interface Wishlist {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  owner: User;
  totalGoal: number;
  currentAmount: number;
  items: WishlistItem[];
  isPublic: boolean;
  tags: string[];
  createdAt: string;
  contributors: number;
}

export interface Post {
  id: string;
  user: User;
  wishlist: Wishlist;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  createdAt: string;
  isLiked: boolean;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  createdAt: string;
  likes: number;
}