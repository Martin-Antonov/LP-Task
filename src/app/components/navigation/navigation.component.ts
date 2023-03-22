import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isInAudiences: boolean = true;

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((ev: RouterEvent) => {
        this.isInAudiences = !ev.url.includes('campaigns');
      });
  }
}
