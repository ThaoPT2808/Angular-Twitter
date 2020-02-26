import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';
import { MatDatepickerModule, MAT_DATE_FORMATS, MatTableModule, MatGridListModule, MatInputModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatDialogModule, MatAutocompleteModule, MatRippleModule, MatListModule, MatCheckboxModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import { ShareModule } from 'src/app/shared/share.module';
const dashboard: Routes = [
  { path: '', redirectTo: "Hashtags", pathMatch: "full" },
  {
    path: "Hashtags",
    component: DashBoardComponent
  },
];
@NgModule({
  declarations: [DashBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboard),
    HttpClientModule,
    RouterModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSortModule,
    MatDatepickerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatExpansionModule,
    ShareModule
  ],
  providers: [
    MatDatepickerModule,
    {
      provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          dateInput: 'YYYY-MM-DD',
        },
        display: {
          dateInput: 'YYYY-MM-DD',
          monthYearLabel: 'YYYY MMM',
          dateA11yLabel: 'YYYY-MM-DD',
          monthYearA11yLabel: 'YYYY MMMM ',
        },
      }
    }
  ],
  exports: [
    RouterModule
  ]
})
export class  DashBoardModule{ }
