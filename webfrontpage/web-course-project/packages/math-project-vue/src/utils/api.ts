import type { ZhihuHotItem } from '../types';

// 模拟知乎热榜数据
export const mockZhihuHotData: ZhihuHotItem[] = [
  {
    id: 1,
    title: "如何看待最新人工智能GPT-4的发布？",
    url: "https://www.zhihu.com/question/123456789",
    excerpt: "OpenAI发布了新一代人工智能模型GPT-4，在多个领域展现出惊人能力...",
    metrics: {
      answer_count: 1245,
      comment_count: 3678,
      follower_count: 9821,
      vote_count: 45672
    },
    type: "digital",
    rank: 1
  },
  {
    id: 2,
    title: "中国航天最新突破意味着什么？",
    url: "https://www.zhihu.com/question/123456790",
    excerpt: "中国航天科技集团宣布成功实现了一项关键技术突破，这将大幅提升我国太空探索能力...",
    metrics: {
      answer_count: 876,
      comment_count: 2345,
      follower_count: 6543,
      vote_count: 32109
    },
    type: "science",
    rank: 2
  },
  {
    id: 3,
    title: "世界杯冠军阿根廷队回国受到热烈欢迎",
    url: "https://www.zhihu.com/question/123456791",
    excerpt: "阿根廷队夺得世界杯冠军后返回国内，受到球迷热烈欢迎，场面感人...",
    metrics: {
      answer_count: 765,
      comment_count: 1987,
      follower_count: 5432,
      vote_count: 28765
    },
    type: "sports",
    rank: 3
  },
  {
    id: 4,
    title: "最新科幻电影《星际穿越2》首映口碑爆棚",
    url: "https://www.zhihu.com/question/123456792",
    excerpt: "诺兰导演的《星际穿越2》在全球首映后获得观众和影评人的一致好评...",
    metrics: {
      answer_count: 543,
      comment_count: 1654,
      follower_count: 4321,
      vote_count: 21543
    },
    type: "entertainment",
    rank: 4
  },
  {
    id: 5,
    title: "研究发现每天喝咖啡可能延长寿命",
    url: "https://www.zhihu.com/question/123456793",
    excerpt: "一项长达10年的研究发现，适量饮用咖啡与较低的全因死亡率相关...",
    metrics: {
      answer_count: 432,
      comment_count: 1432,
      follower_count: 3765,
      vote_count: 18765
    },
    type: "science",
    rank: 5
  }
];

// 获取知乎热榜数据
export const fetchZhihuHotList = (): Promise<ZhihuHotItem[]> => {
  return new Promise((resolve) => {
    // 模拟API请求延迟
    setTimeout(() => {
      resolve(mockZhihuHotData);
    }, 800);
  });
};