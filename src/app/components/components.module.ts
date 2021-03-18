import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';

const PAGES = [
  MyfirstcomponentComponent
]

@NgModule({
  declarations: PAGES,
  exports: PAGES,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
