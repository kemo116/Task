import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  isSignedIn=false;
  constructor(public firebaseService:FirebaseService,public router: Router){}
  navigateToLogin() {
    console.log("Navigating to login");
    this.router.navigateByUrl('/login');
  }
  
  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
    

  }
  async onSignup( email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn=true
    
  }
  async onSignin( email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn=true
    
  }
  handlelogout() {
    this.isSignedIn = false;
    this.router.navigateByUrl(''); // Navigate back to signup page
  }
  
}
