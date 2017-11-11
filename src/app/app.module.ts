import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeroesComponent } from './heroes/component/heroes.component';
import { MessageService } from './message/service/message.service';
import { MessageComponent } from './message/component/message.component';
import { HeroDetailComponent } from './heroes/shared/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
