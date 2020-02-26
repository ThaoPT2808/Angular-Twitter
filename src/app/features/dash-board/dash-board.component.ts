import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  links = ['Hashtag search', 'User search'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;
  isHashtagsTab: boolean = true;
  
  constructor() { }
  ngOnInit() {
  }
  // get the currently selected tab
  // then pass the variable for selected tab to the content-tweet component for displaying the tweet
  getCurrentTab(tab) {
    this.activeLink = tab;
    if (this.activeLink === "User search") {
      this.isHashtagsTab = false;
    } else {
      this.isHashtagsTab = true;
    }
  }
}
