import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BuiltInPipesDemoComponent } from './built-in-pipes-demo/built-in-pipes-demo.component';
import { CustomPipeDemoComponent } from './custom-pipe-demo/custom-pipe-demo.component';

import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesDemoComponent,
    CustomPipeDemoComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
