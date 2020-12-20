import { Injectable } from '@angular/core';
import { Arbre } from '../model/arbre.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class ArbreService {

  apiURL: string = 'http://localhost:8080/arbres/api';
  arbres : Arbre[];
  arbre: Arbre;

  constructor(private http : HttpClient) { 




    // this.arbres = [
    //   {idArbre : 1, nomArbre : "Olivier", prixArbre : 8000.600, dateCreation : new Date("01/14/2011")},
    //   {idArbre : 2, nomArbre : "Orangier", prixArbre : 3000.600, dateCreation : new Date("12/18/2010")},
    //   {idArbre : 3, nomArbre : "Poivrier", prixArbre : 1000.600, dateCreation : new Date("01/14/2020")}
    // ];
  }
  listeArbres():Observable<Arbre[]> {
    return this.http.get<Arbre[]>(this.apiURL);
  }
  ajouterArbre( arb: Arbre):Observable<Arbre>{
    return this.http.post<Arbre>(this.apiURL, arb, httpOptions);
    }
  supprimerArbre(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
    }
    consulterArbre(id: number): Observable<Arbre> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Arbre>(url);
      }
      trierArbres(){
        this.arbres = this.arbres.sort((n1,n2) => {
        if (n1.idArbre > n2.idArbre) {
        return 1;
        }
        if (n1.idArbre < n2.idArbre) {
        return -1;
        }
        return 0;
        });
        }
        


        updateArbre(arb :Arbre) : Observable<Arbre>
        {
        return this.http.put<Arbre>(this.apiURL, arb, httpOptions);
        }
}
