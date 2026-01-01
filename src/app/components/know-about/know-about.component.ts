import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { GodDetails } from '../../models/god-details';
import { GodDetailsService } from '../../services/god-details.service';

@Component({
    selector: 'app-know-about',
    imports: [AsyncPipe, JsonPipe],
    templateUrl: './know-about.component.html',
    styleUrl: './know-about.component.css'
})
export class KnowAboutComponent {
  activatedRoute = inject(ActivatedRoute);
  godDetailsSvc = inject(GodDetailsService);
  
  GodName: Observable<string>;
  Details: Observable<GodDetails | undefined>;
  
  constructor(){
    this.GodName = this.activatedRoute.params.pipe(
      map((data)=>{
        return data['about'];
      })
    );
    this.Details = this.GodName.pipe(map(n => this.godDetailsSvc.GetDetailsOf(n)))

    
  }


}


