import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { ComponentExampleComponent } from './components/component-example/component-example.component';
import { PageExampleComponent } from './pages/page-example/page-example.component';
import { InitialPageExampleComponent } from './pages/initial-page-example/initial-page-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentExampleComponent,
    PageExampleComponent,
    InitialPageExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
