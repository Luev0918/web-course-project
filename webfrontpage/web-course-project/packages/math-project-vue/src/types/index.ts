export interface ZhihuHotItemMetrics {
  answer_count: number;
  comment_count: number;
  follower_count: number;
  vote_count: number;
}

export interface ZhihuHotItem {
  id: number;
  title: string;
  url: string;
  excerpt: string;
  metrics: ZhihuHotItemMetrics;
  type: string;
  rank: number;
}

export interface ThemeType {
  primaryColor: string;
  bgColor: string;
  textColor: string;
  cardBg: string;
  borderColor: string;
}