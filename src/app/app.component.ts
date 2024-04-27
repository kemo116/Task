import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title='TASK';
  
}
