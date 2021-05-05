import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HeaderComponent } from './header/header.component';
import { RsideComponent } from './rside/rside.component';
import { LsideComponent } from './lside/lside.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HeaderComponent,
    RsideComponent,
    LsideComponent,
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
