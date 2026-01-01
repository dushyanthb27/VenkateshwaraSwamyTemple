import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-secondary-gods',
    imports: [NgTemplateOutlet, RouterLink],
    templateUrl: './secondary-gods.component.html',
    styleUrl: './secondary-gods.component.css'
})
export class SecondaryGodsComponent {

}
