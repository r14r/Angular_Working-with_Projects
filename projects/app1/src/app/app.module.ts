import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';

import { View1Component } from './components/view1/view1.component';
import { View2Component } from './components/view2/view2.component';

import { CodeFormatterModule } from 'projects/code-formatter/src/public-api';

@NgModule({
	declarations: [AppComponent, View1Component, View2Component, NavComponent],
	imports: [BrowserModule, AppRoutingModule, CodeFormatterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
