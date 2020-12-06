import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { HeaderComponent } from './components/header/header.component';
import { DateparsePipe } from './shared/pipes/dateparse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    HeaderComponent,
    DateparsePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
