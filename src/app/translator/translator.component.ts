import { Component } from '@angular/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrl: './translator.component.css'
})
export class TranslatorComponent {
  textToTranslate: string = "";
  textTranslation: string = "";
}
