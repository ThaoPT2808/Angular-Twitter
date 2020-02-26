import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTweetComponent } from './content-tweet.component';

describe('ContentTweetComponent', () => {
  let component: ContentTweetComponent;
  let fixture: ComponentFixture<ContentTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
