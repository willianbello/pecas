import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMatMenuModule } from 'ngx-mat-menu';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxMatMenuModule,
    FlexLayoutModule,
  ],
  exports: [
    NgxMatMenuModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
