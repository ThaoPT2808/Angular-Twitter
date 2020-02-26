import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TweetTemplate, TweetPaginator } from '../models/tweet';
import { ApiEndpoints } from 'src/app/configs/api.endpoitns';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private httpClient: HttpClient) {
   }
   //get tweets by a Hashtag
   get_tweets_by_Hashtag(offset: number): Observable<TweetPaginator> {
    let url = ApiEndpoints.getTweetsByHashtag + "offset=" + offset;
    return this.httpClient.get<TweetPaginator>(url).pipe()
  }
   //get tweets by a User
  get_tweets_by_User(offset: number): Observable<TweetPaginator> {
    let url = ApiEndpoints.getUserTweets + "offset=" + offset;
    return this.httpClient.get<TweetPaginator>(url).pipe()
  }
}
