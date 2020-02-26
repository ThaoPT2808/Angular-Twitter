import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { TweetTemplate, TweetPaginator } from '../../models/tweet';
import { TweetsService } from '../../services/tweets.service';
import { MomentService } from '../../utils/angular-material/moment.service';
const ELEMENT_DATA = [];
const TOTAL_ELEMENT = 500;
@Component({
  selector: 'app-content-tweet',
  templateUrl: './content-tweet.component.html',
  styleUrls: ['./content-tweet.component.scss'],
})
export class ContentTweetComponent implements OnInit {
  displayedColumns: string[] = ['tweet', 'likes', 'replies', 'retweets', 'hashtags', 'date'];
  dataSource = new MatTableDataSource<TweetTemplate>(ELEMENT_DATA);
  tweetsInit: TweetTemplate[];
  pageIndex = 0;
  isRefreshSearchBar: boolean = false;
  paginatorConfig = { length: 0, pageSize: 10, pageSizeOptions: [10] };
  isLoadingData: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() isHashtagsTab: boolean;
  constructor(private tweetsService: TweetsService, private momentService: MomentService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isHashtagsTab !== undefined) {
      this.isRefreshSearchBar = true;
      this.paginator.pageIndex = 0;
      this.getTweets(this.isHashtagsTab, this.pageIndex);
    }
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  // when click to the pagination
  // call the API to get the data following the page Index
  onPageChanged(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.getTweets(this.isHashtagsTab, this.pageIndex);
  }

  // search Tweets by Hasgtag
  searchHashtag(event) {
    this.isLoadingData = true;
    if (event === null) {
      event = "";
    } else {
      event = event.trim();
    }
    this.isRefreshSearchBar = false;
    let tempDataSource = [...this.tweetsInit];
    if (event !== "" && tempDataSource) {
      tempDataSource = tempDataSource.filter(ele => ele.hashtags.includes(event));
      this.dataSource.data = tempDataSource;
      this.paginator.pageIndex = 0;
      this.paginator.length = this.paginatorConfig.pageSize;
      this.isLoadingData = false;
    } else {
      this.dataSource.data = this.tweetsInit;
      this.paginator.length = TOTAL_ELEMENT;
      this.isLoadingData = false;
    }
  }

  // get the valiable for the selected tab
  // then get the data from server
  getTweets(isHashtagsLink, pageIndex) {
    this.isLoadingData = true;
    if (isHashtagsLink === true) {
      this.tweetsService.get_tweets_by_Hashtag(pageIndex).subscribe(rs => {
        this.convertDataSource(rs);
      })
    } else {
      this.tweetsService.get_tweets_by_User(pageIndex).subscribe(rs => {
        this.convertDataSource(rs);
      })
    }
  }

  // validation the data source before displaying
  convertDataSource(data: TweetPaginator) {
    this.tweetsInit =  data.results;
    data.results.forEach(ele => {
      ele.text = this.convertExceedText(ele.text);
      ele.likes = this.convertNullValue(ele.likes);
      ele.replies = this.convertNullValue(ele.replies);
      ele.retweets = this.convertNullValue(ele.retweets);
      ele.date = this.momentService.convertDateTime(ele.date);
      ele.hashtags = this.convertExceedArray(ele.hashtags);
    })
    this.dataSource = new MatTableDataSource(data.results);
    this.paginator.length = TOTAL_ELEMENT;
    this.isLoadingData = false;
  }

  // validation for the Likes, Replies, Retweets text to display "-" character 
  convertNullValue(text) {
    if (text == "0") {
      return "-"
    } else {
      return text
    }
  }

  // validation for the Tweet text to display only 50 characters 
  convertExceedText(tweet) {
    if (tweet.length > 50) {
      return tweet.substr(0, 50) + "..."
    } else {
      return tweet
    }
  }

  // validation for Hashtag array to display only two element
  convertExceedArray(array: Array<string>) {
    if (array.length > 2) {
      array = array.splice(0, 2)
      return array
    } else {
      return array
    }
  }
}
