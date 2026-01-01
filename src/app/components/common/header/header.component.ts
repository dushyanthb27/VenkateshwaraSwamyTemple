import { NgClass } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [NgClass, RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
  renderer = inject(Renderer2);
  isMenuOpened = false;
  menuIcon = String.fromCharCode(MenuEnum.open);
  
  ToggleMenuBar(menu: HTMLDivElement){
    if(this.isMenuOpened)
    {
      this.renderer.addClass(menu, 'hidden');
      this.menuIcon = String.fromCharCode(MenuEnum.open);
    }
    else{
      this.renderer.removeClass(menu, 'hidden');
      this.menuIcon = String.fromCharCode(MenuEnum.close);
    }
    this.isMenuOpened = !this.isMenuOpened;
  }

}

//10999, 11000

enum MenuEnum{
  "open" = 8788,
  "close" = 8789,

}
