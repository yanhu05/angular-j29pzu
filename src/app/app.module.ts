import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BinarySearchComponent } from './array/binary-search.component';
import { AnagramComponent } from './array/anagram.component';
import { TreeDepthComponent } from './Tree/tree-depth.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AnagramComponent, BinarySearchComponent,TreeDepthComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
