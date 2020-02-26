import { Injectable } from '@angular/core';
import * as moment from "moment";
const DATE_TIME_FORMAT =' LL';
@Injectable({
  providedIn: 'root'
})
export class MomentService {

  constructor() { }
  convertDateTime(timeStamp) {
    return moment(timeStamp).format(DATE_TIME_FORMAT);
  }
}
