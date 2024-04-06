import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{
  lightThemeEnabled: boolean = false; 

  constructor(private router: Router){
    
  }

  ngOnInit(): void {
    this.router.navigate(['/translator']);
  }

  toggleTheme(){
    this.lightThemeEnabled = !this.lightThemeEnabled; 
    console.log(this.lightThemeEnabled);
  }

  redirectToComponent(translatorRedirect: any){
    console.log('a')
    this.router.navigate(translatorRedirect);
  }
}

