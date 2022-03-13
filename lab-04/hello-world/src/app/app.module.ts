import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.services';

@NgModule({
  declarations: [AppComponent, CoursesComponent],
  imports: [BrowserModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
