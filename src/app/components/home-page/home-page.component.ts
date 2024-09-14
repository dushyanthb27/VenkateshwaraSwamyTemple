import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MainGodComponent } from "../main-god/main-god.component";
import { SecondaryGodsComponent } from "../secondary-gods/secondary-gods.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet, MainGodComponent, SecondaryGodsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  

}
