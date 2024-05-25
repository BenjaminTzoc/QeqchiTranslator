import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private apiUrl = 'http://localhost:3000/translate';

  constructor(private http: HttpClient) { }

  searchWordWithCategories(word: string, categories: string[]): Observable<any> {
    const formattedCategories = categories.map(category => ({ Name: category }));

    return this.http.post<any>(`${this.apiUrl}/${word}`, { grammaticalCategories: formattedCategories });
  }
}
