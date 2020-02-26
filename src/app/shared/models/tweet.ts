export class AccountTemplate {
    constructor(
        public fullname: string,
        public href: string,
        id: number) {}
}
export class TweetTemplate extends AccountTemplate {
    account: AccountTemplate;
    date: string;
    hashtags: Array<string>;
    likes: string;
    replies: string;
    retweets: string;
    text: string;
}

export class TweetPaginator extends TweetTemplate {
    count: number; 
    offset: number;
    results: TweetTemplate[];
}