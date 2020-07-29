import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <div>
            <div>Hello World! This is the {{ title }} app.</div>
            <button (click)='getLazy1()'>lazy 1</button>
            <button (click)='getLazy2()'>lazy 2</button>
            <ng-template #quizContainer></ng-template>
          </div>    
  `,
  styles: []
})
export class AppComponent {
  title = 'lazy-demo';

  @ViewChild('quizContainer', {read: ViewContainerRef}) quizContainer: ViewContainerRef;
  
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  async getLazy1() {
    this.quizContainer.clear();

    const { Lazy1Component } = await import('./lazy1.component');

    this.quizContainer.createComponent(this.cfr.resolveComponentFactory(Lazy1Component));
  }

  async getLazy2() {
    this.quizContainer.clear();

    const { Lazy2Component } = await import('./lazy2.component');

    this.quizContainer.createComponent(this.cfr.resolveComponentFactory(Lazy2Component));
  }
}
