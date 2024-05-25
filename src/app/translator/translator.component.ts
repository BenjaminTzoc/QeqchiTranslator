import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import nlp from 'es-compromise';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrl: './translator.component.css'
})
export class TranslatorComponent implements OnInit{
  translateSubject = new Subject<string>();
  textToTranslate: string = "";
  textTranslation: string = "";

  constructor(private translateService: TranslateService){}

  ngOnInit(): void {
    this.translateSubject.pipe(
      debounceTime(500),
    ).subscribe(textToTranslate => {
      const tokenizedSentence = this.analizeSentence(textToTranslate);
      this.textTranslation = '';
      tokenizedSentence[0].terms.map(async (term: any) => {
        console.log(term.text);
        console.log(term.tags);
        this.translateService.searchWordWithCategories(term.text, term.tags).subscribe(res => {
          console.log(res)
          this.textTranslation += res[0].Translations[0].Term + ' ';
        });
      })
      console.log(this.textTranslation);
    });
  }

  analizeSentence(textToAnalize: string){
    const doc = nlp(textToAnalize);
    
    const tokens = doc.out('json');

    return tokens.map((token: any) => {
      return token;
    });
  }

  onTranslate(event: Event): void {
    const textareaElement = event.target as HTMLInputElement;
    if (textareaElement) {
      this.translateSubject.next(textareaElement.value);
    }
  }
}
