interface Jokes {
  result: {
    icon_url: string;
    id: string;
    value: string;
    url: string;
  }[];
  total: string;
}

interface Joke {
  icon_url: string;
  id: string;
  value: string;
  url: string;
}
