import { AfterViewInit, Component, ViewChild} from '@angular/core';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'QeqchiTranslator';
  lightThemeEnabled: boolean = false; 
  @ViewChild(HeaderComponent) header:any; 

  ngAfterViewInit(): void {
    this.lightThemeEnabled = this.header.lightThemeEnabled; 
    console.log(this.lightThemeEnabled); 
  }
}
