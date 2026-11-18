export type Challenge = {
  pathname: string;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
};

export type Route = {
  pathname: string;
  title: string;
};


export const HOME: Route = {
  pathname: '/',
  title: 'Home'
};

export const NOT_FOUND: Route = {
  pathname: '*',
  title: '404'
};


export const challenges: Challenge[] = [
  {
    pathname: '/dark-mode',
    title: 'Dark Mode',
    difficulty: 'easy'
  },
  {
    pathname: '/accordion',
    title: 'Accordion',
    difficulty: 'easy'
  },
  {
    pathname: '/progress-bar',
    title: 'Progress Bar',
    difficulty: 'easy'
  },
  {
    pathname: '/input-focus',
    title: 'Input Focus',
    difficulty: 'easy'
  },
  {
    pathname: '/api-data-fetching',
    title: 'API Data Fetching',
    difficulty: 'easy'
  },
  {
    pathname: '/file-explorer',
    title: "File Explorer",
    difficulty: "hard"
  },
  {
    pathname: "/timer",
    title: "Timer",
    difficulty: "easy"
  },
  {
    pathname: "/modal",
    title: "Modal",
    difficulty: "easy"
  },
  {
    pathname: "/rating",
    title: "Rating",
    difficulty: "easy"
  },
  {
    pathname: "/pagination",
    title: "Pagination",
    difficulty: "medium"
  },
  {
    pathname: "/otp",
    title: "OTP Input",
    difficulty: "medium"
  },
  {
    pathname: "/todo-list",
    title: "TODO List",
    difficulty: "medium"
  },
  {
    pathname: "/tabs",
    title: "Tabs",
    difficulty: "easy"
  },
  {
    pathname: "/test",
    title: "Test",
    difficulty: "medium"
  }
];