//import { Component, OnInit } from '@angular/core';
import {Component, ViewContainerRef, Input,ViewChild, ReflectiveInjector, OnInit,ComponentFactoryResolver} from '@angular/core';  
import {LoginComponent} from '../login/login.component';  
 import {ForgotComponent} from '../forgot/forgot.component';


@Component({
  selector: 'app-dynamic',
  entryComponents: [LoginComponent, ForgotComponent],
  template: `
    <div #dynamicComponentContainer></div>
  `
})

export class DynamicComponent implements OnInit {

  currentComponent = null;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
  }
   @Input() set componentData(data: {component: any, inputs: any }) {
    if (!data) {
      return;
    }

    // Inputs need to be in the following format to be resolved properly
    //let inputProviders = Object.keys(data.inputs).map((inputName) => {return {provide: inputName, useValue: data.inputs[inputName]};});
    //let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

    // We create an injector out of the data we want to pass down and this components injector
    //let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(data.component);

    // We create the component using the factory and the injector
    let component = factory.create(this.dynamicComponentContainer.parentInjector);

    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);

    // Destroy the previously created component
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;

}

}
