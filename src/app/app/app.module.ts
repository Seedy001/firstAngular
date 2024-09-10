import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
// import { ProfilComponent } from '../profil/profil.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContenuService } from '../services/contenu.service';
import { ContenuComponent } from '../contenu/contenu.component';
import { FormulaireComponent } from '../formulaire/formulaire.component';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    HomeComponent,
    ContenuComponent,
    AppRoutingModule,
    FormulaireComponent
  ],
  providers:[
    ContenuService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
