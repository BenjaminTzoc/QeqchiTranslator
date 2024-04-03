import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  lightThemeEnabled: boolean = false; 

  constructor(private router: Router){
    
  }

  toggleTheme(){
    this.lightThemeEnabled = !this.lightThemeEnabled; 
    console.log(this.lightThemeEnabled);
  }

  redirectToComponent(){
    console.log('a')
    this.router.navigate(['/dictionary']);
  }
}
