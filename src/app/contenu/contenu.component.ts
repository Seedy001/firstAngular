import { Component, OnInit } from '@angular/core';
import { objetVente } from '../models/objet-model';
import { ContenuService } from '../services/contenu.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contenu',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './contenu.component.html',
  styleUrl: './contenu.component.scss'
})
export class ContenuComponent implements OnInit{
objetventes:objetVente[] = []
constructor(private contenuservie: ContenuService){}

ngOnInit(): void {
  this.contenuservie.getobjetVente().subscribe(objetventes => this.objetventes = objetventes);
}
}
