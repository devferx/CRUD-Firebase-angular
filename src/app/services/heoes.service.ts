import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Heroe } from "../interfaces/heroe";
import { environment } from "./../../environments/environment.prod";
@Injectable({
  providedIn: "root"
})
export class HeoesService {
  heroesUrl = environment.heroesUrl;
  heroeUrl = environment.heroeUrl;
  constructor(private http: Http) {}

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http.post(this.heroesUrl, body, { headers: headers });
  }

  ActualizarHeroe(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.put(url, body, { headers: headers });
  }

  getHeroe(key$: string) {
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.get(url);
  }
  getHeroes() {
    return this.http.get(this.heroesUrl);
  }
  borrarHeroe(key$: string) {
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.delete(url);
  }
}
