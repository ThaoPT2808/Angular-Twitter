import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTweetComponent } from './components/content-tweet/content-tweet.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './utils/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ContentTweetComponent, SearchBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  exports: [ContentTweetComponent, SearchBarComponent]
})
export class ShareModule { }
