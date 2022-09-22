import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { InlineComponent } from './inline/inline.component';
import { SelectorTypesComponent } from './selector-types/selector-types.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InlineComponent,
    SelectorTypesComponent,
    InterpolationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
