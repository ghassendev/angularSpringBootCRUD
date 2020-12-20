import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArbreComponent } from './add-arbre/add-arbre.component';
import { ArbresComponent } from './arbres/arbres.component';
import { UpdateArbreComponent } from './update-arbre/update-arbre.component';


const routes: Routes = [
  {path: "arbres", component : ArbresComponent},
  {path: "add-arbre", component : AddArbreComponent},
  {path: "update-arbre", component : UpdateArbreComponent},
  {path: "", redirectTo: "arbres", pathMatch: "full" }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
