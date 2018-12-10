import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroes/heroe.component";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroeComponent, KeysPipe],
  imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
