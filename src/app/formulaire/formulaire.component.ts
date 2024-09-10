import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HomeComponent } from "../home/home.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    HeaderComponent
],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss'
})
export class FormulaireComponent {
onSubmitForm() {
throw new Error('Method not implemented.');
}
objetForm!: FormGroup;

}
