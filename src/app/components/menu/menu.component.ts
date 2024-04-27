import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  showLogout: boolean = true;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) {
    // Listen to changes in the route
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Now TypeScript knows `event` is definitely a NavigationEnd event
      // Hide logout button on specific pages
      this.showLogout = !event.url.includes('');
      this.showLogout = !event.url.includes('login');
    });
  }

  logout() {
    this.firebaseService.logout();
  }
}
