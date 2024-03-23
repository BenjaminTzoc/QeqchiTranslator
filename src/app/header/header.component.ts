import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
lightThemeEnabled: boolean = false; 

toggleTheme(){
  this.lightThemeEnabled = !this.lightThemeEnabled; 
  console.log(this.lightThemeEnabled);
}
}
