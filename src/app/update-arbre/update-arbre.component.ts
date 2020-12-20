import { Component, OnInit } from '@angular/core';

import  { ActivatedRoute, Router } from '@angular/router';
import  { ArbreService } from '../services/arbre.service';
import { Arbre } from '../model/arbre.model';
 


@Component({
  selector: 'app-update-arbre',
  templateUrl: './update-arbre.component.html',
  styles: [
  ]
})
export class UpdateArbreComponent implements OnInit {

  currentArbre = new Arbre();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private arbreService: ArbreService) { }

    ngOnInit() {
      this.arbreService.consulterArbre(this.activatedRoute.snapshot.params.id).
       subscribe( arb =>{ this.currentArbre = arb; } ) ;
      }
      

      updateArbre() {
        this.arbreService.updateArbre(this.currentArbre).subscribe(arbs => {
        this.router.navigate(['arbres']);
        },(error) => { alert("Problème lors de la modification !"); }
        );
        }

}
