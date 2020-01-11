import { Component, OnInit } from "@angular/core";
import { Heroe } from "../../interfaces/heroe";
import { HeoesService } from "../../services/heoes.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[];
  loading: boolean = true;
  constructor(private heroeService: HeoesService) {
    heroeService.getHeroes().subscribe(data => {
      console.log(JSON.parse(data["_body"]));
      this.heroes = JSON.parse(data["_body"]);
      this.loading = false;
    });
  }

  ngOnInit() {}

  borrarHeroe(key$: string) {
    this.heroeService.borrarHeroe(key$).subscribe(data => {
      console.log(data);
      delete this.heroes[key$];
    });
  }
}
