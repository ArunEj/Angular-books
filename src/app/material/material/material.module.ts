import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { NgKnifeModule } from 'ng-knife';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

const moduleList = [
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  NgKnifeModule,
  MatSelectModule,
  MatSliderModule,
  MatButtonModule,
  MatDividerModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    moduleList
  ],
  exports: [
    moduleList
  ],
  providers: [
    
  ]
})
export class MaterialModule { }
