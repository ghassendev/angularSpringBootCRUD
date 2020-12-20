import { Component, OnInit } from '@angular/core';
import { Arbre } from '../model/arbre.model';
import { ArbreService } from '../services/arbre.service';
import  { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-arbres',
  templateUrl: './arbres.component.html',
  styleUrls: ['./arbres.component.css']
})
export class ArbresComponent implements OnInit {

  arbres : Arbre[];
  constructor( private activatedRoute: ActivatedRoute,
    private router :Router,
    private arbreService: ArbreService ) {
   
   
   
    // this.arbres = arbreService.listeArbres();



    // this.arbres = [
    //   {idArbre : 1, nomArbre : "Olivier", prixArbre : 8000.600, dateCreation : new Date("01/14/2011")},
    //   {idArbre : 2, nomArbre : "Orangier", prixArbre : 3000.600, dateCreation : new Date("12/18/2010")},
    //   {idArbre : 3, nomArbre : "Poivrier", prixArbre : 1000.600, dateCreation : new Date("01/14/2020")}
 
    // ];
   }

  ngOnInit(): void {
    this.arbreService.listeArbres().subscribe(arbs => {
      console.log(arbs);
      this.arbres = arbs;
      });
  }
  supprimerArbre(a: Arbre)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.arbreService.supprimerArbre(a.idArbre).subscribe(() => {
  console.log("Arbre supprimé");
  this.SuprimerArbreDuTableau(a);
  });
  this.router.navigate(['arbres']).then(() => {
  window.location.reload();
  });
  }
  SuprimerArbreDuTableau(arb : Arbre) {
    this.arbres.forEach((cur, index) => {
    if(arb.idArbre=== cur.idArbre) {
    this.arbres.splice(index, 1);
    }
    });
    }
}
