import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Heroe } from "../../interfaces/heroe";
import { HeoesService } from "../../services/heoes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent implements OnInit {
  //variable conectada con el formulario HTML
  heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  };
  //Variables de tipo ID
  id: string;
  idN: string;
  constructor(
    private activedRoute: ActivatedRoute,
    private _heroeService: HeoesService,
    private router: Router
  ) {
    this.activedRoute.params.subscribe(params => {
      this.idN = params["id"];
      if (this.idN !== "nuevo") {
        this._heroeService.getHeroe(this.idN).subscribe((data: any) => {
          this.heroe = JSON.parse(data._body);
        });
      }
    });
  }

  ngOnInit() {}

  guardar() {
    if (this.idN == "nuevo") {
      this._heroeService.nuevoHeroe(this.heroe).subscribe(data => {
        //convertimos de string a JSON
        this.id = JSON.parse(data["_body"]).name;
        this.router.navigate(["/heroe", this.id]);
      });
    } else {
      this._heroeService
        .ActualizarHeroe(this.heroe, this.id)
        .subscribe(data => {
          console.log(data);
        });
    }
  }

  agregarNuevo(form: NgForm) {
    this.router.navigate(["/heroe", "nuevo"]);
    form.reset({
      casa: "Marvel"
    });
  }
}
