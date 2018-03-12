import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app/app.component';
import { AppDirective} from './app/app.directive';
import { AppChildComponent } from './app-child/app-child.component';
import {HighlightDirective} from './app/app.highlight.directive';
import {FilterPipe} from './app/filter.pipe';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { MyCustomInputComponent } from './my-custom-input/my-custom-input.component';
import {InputReference} from './my-custom-input/input-reference.directive';

@NgModule({
  declarations: [
     AppComponent,
     AppChildComponent,
     AppDirective,
     HighlightDirective,
     FilterPipe,
     LoginComponent,
     ForgotComponent,
     LoginComponent,
     ForgotComponent,
     DynamicComponent,
     MyCustomInputComponent,
     InputReference
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

