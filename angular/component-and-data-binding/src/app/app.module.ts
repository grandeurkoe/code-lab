import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumComponent } from './sum/sum.component';
import { ListComponent } from './list/list.component';
import { ImageComponent } from './image/image.component';
import { EventsumComponent } from './eventsum/eventsum.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SumComponent,
    ListComponent,
    ImageComponent,
    EventsumComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
