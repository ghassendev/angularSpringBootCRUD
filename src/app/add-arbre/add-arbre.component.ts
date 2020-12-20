import { Component, OnInit } from '@angular/core';
import { Arbre } from '../model/arbre.model';
import { ArbreService } from '../services/arbre.service';
import  { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-arbre',
  templateUrl: './add-arbre.component.html',
  styleUrls: ['./add-arbre.component.css']
})
export class AddArbreComponent implements OnInit {

  newArbre =new Arbre();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private arbreService: ArbreService) { 
    
  }

  ngOnInit(): void {
  }
  addArbre(){
    this.arbreService.ajouterArbre(this.newArbre)
    .subscribe(arbs => {
    console.log(arbs);
    });
    this.router.navigate(['arbres']);
    }
}
