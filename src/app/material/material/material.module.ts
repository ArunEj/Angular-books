import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';

const moduleList = [
  MatCardModule,
  MatButtonModule,
  MatBadgeModule,
  MatMenuModule
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
