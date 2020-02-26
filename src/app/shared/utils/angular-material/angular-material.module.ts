import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatTableModule, MatInputModule, MatIconModule, MatButtonModule, MatSortModule, MatToolbarModule, MatDialogModule, MatAutocompleteModule, MatRippleModule, MatListModule, MatCheckboxModule, MatFormFieldModule, MatExpansionModule, MatCardModule, MatProgressBarModule, MatDividerModule, MatSelectModule, MatSnackBarModule, MatTooltipModule, MatPaginatorModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

const MATERIAL_MODULES = [
  FlexLayoutModule,
  MatCardModule,
  MatButtonModule,
  MatProgressBarModule,
  MatDividerModule,
  MatDialogModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSelectModule,
  MatRippleModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  MatCheckboxModule,
  MatSortModule,
  MatTooltipModule,
  MatPaginatorModule,
];
@NgModule({
  imports: [
    ...MATERIAL_MODULES
  ],
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class AngularMaterialModule { }
