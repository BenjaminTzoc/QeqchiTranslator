import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Router } from '@angular/router';
import path from 'path';
import { CategoriesService } from '../services/categories.service';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { SearchService } from '../services/search.service';

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
export class DictionaryComponent implements OnInit {

  searchSubject = new Subject<string>();
  searchQuery: string = '';
  categories: any;

  filteredResults: any[] = []; 

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private searchService: SearchService
  ){ }

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(query => this.searchService.search(query))
    ).subscribe(results => {
      this.filteredResults = results.map((result: any) => {
        return {
          word: result.Word,
          translations: result.Translations.map((translation: any) => { return {term: translation.Term} }),
        }
      });
      console.log(this.filteredResults);
    });

    this.categoriesService.getCategories().subscribe(category => {
      this.categories = category;
      console.log(this.categories);
    });
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.searchSubject.next(inputElement.value);
    }
  }
  
  redirectFromCard(route: any){
    console.log(route); 
    this.router.navigate(route);
  }

}
