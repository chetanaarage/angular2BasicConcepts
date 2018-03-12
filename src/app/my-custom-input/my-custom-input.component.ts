import { Component,Input,ContentChild, 
          AfterContentInit } from '@angular/core';

import {InputReference} from './input-reference.directive';
@Component({
  selector: 'app-my-custom-input',
  templateUrl: './my-custom-input.component.html',
  styleUrls: ['./my-custom-input.component.css']
})
export class MyCustomInputComponent implements AfterContentInit {

  constructor() { }

   @Input() label;

  // ngOnInit() {
  // }
   @ContentChild(InputReference) // not using 'input' selector here
  injectedInput: InputReference; // not of type HTMLInputElement anymore

   ngAfterContentInit(){
    console.log('*************');
    console.log('injectedInput:', this.injectedInput);
    console.log('*************');
  }
}
