import {
  Directive,
  HostBinding,
  HostListener } from '@angular/core';

@Directive({
	selector:"[c-highlight]"
})

export class AppDirective{
	@HostBinding('style.color')  color:string;
	@HostBinding('style.border-color')  borderColor:string;

	@HostListener('mouseenter') onmouseEnter(){
		this.color='yellow';
	}

	@HostListener('mouseleave') onmouseLeave(){
		this.color='hotpink';
	}
}