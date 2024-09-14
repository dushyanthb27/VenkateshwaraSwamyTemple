import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/common/header/header.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { FooterComponent } from "./components/common/footer/footer.component";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomePageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  router = inject(Router);
  viewportScroller = inject(ViewportScroller);
  title = 'LordVenkateshwaraSwamyTemple';
  
  constructor(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0,0]);
      }
    });
  }
}
