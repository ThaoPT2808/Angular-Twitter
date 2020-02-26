import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchField: FormControl;
  private REQUEST_DELAY: number = 1000;
  @Output() searchHashtag = new EventEmitter<any>();
  @Input() isRefreshSearchBar: boolean;
  @Input() isHashtagsTab: boolean;
  titleSearchInput: string;
  placeholderInput: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isHashtagsTab && changes.isHashtagsTab.currentValue === true) {
      this.titleSearchInput = "Hashtag search";
      this.placeholderInput = "Search by Hashtag";
    } else if (changes.isHashtagsTab && changes.isHashtagsTab.currentValue === false) {
      this.titleSearchInput = "User search";
      this.placeholderInput = "Search by User";
    }

    if (this.searchField && changes.isRefreshSearchBar && changes.isRefreshSearchBar.currentValue === true) {
      this.searchField.reset();
    }
  }
  ngOnInit() {
    this.searchField = new FormControl();
    this.searchingTweet();
  }
  // on click event to the icon search
  onClickSearching() {
    this.searchingTweet();
  }

  // When the search text is typed on the input
  // delay about 1s then submit the value for calling the data
  searchingTweet() {
    this.searchField.valueChanges.pipe(
      debounceTime(this.REQUEST_DELAY),
      distinctUntilChanged()
    ).subscribe(rs => {
      this.searchHashtag.emit(rs);
    });
  }
}
