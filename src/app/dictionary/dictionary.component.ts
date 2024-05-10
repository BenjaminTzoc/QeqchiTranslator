import { Component } from '@angular/core';
import { title } from 'process';
import { Router } from '@angular/router';
import path from 'path';

interface Card {
  title: string;
  URL: string;
  translation: string;
  route: object;
}

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css'
})
export class DictionaryComponent {

  searchQuery: string = ''; 

  searchResults: any[] = [  
    { id: 1, title: 'Rax', description: 'verde' },
    { id: 2, title: 'Kaq', description: 'Rojo' },
    { id: 3, title: 'Qan', description: 'Amarillo' }
 
  ];
  filteredResults: any[] = []; 
  cards: Card[] = [
    {title: 'Animales', URL: 'assets/card-image/cangrejo.png', translation: `Eb' li xul`, route: ['/animals']},
    {title: 'Números', URL: 'assets/card-image/numero.png', translation: `Eb' li xul`, route: ['/numbers']}
  ];

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4, "autoplay": true, "autoplaySpeed": 4000};

  constructor(private router: Router){
    
  }

  search(event: Event){
    event.preventDefault();
    this.filterResults();
    this.searchResults = this.filteredResults; 
    console.log('Search term:', this.filteredResults);
  }
  
  filterResults() {
    if (this.searchQuery.trim() !== '') {
      this.filteredResults = this.searchResults.filter(result =>
        result.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredResults = [];
    }
  }
  
  redirectFromCard(route: any){
    console.log(route); 
    this.router.navigate(route);
  }

}
