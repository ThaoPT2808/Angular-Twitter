import { environment } from "src/environments/environment";

export class ApiEndpoints {
    public static BASE_URL_ENV: string = environment.apiBaseUrl;
    //get hashtags tweets
    public static getTweetsByHashtag = ApiEndpoints.BASE_URL_ENV + '/hashtags/python?'
    //get user tweets
    public static getUserTweets = ApiEndpoints.BASE_URL_ENV + '/users/anymindgroup?'
}
