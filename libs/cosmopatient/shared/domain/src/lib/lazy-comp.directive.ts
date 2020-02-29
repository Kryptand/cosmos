import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  Type,
  ViewContainerRef
} from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[lazyComp]'
})
export class LazyCompDirective {
  private subscription = new Subscription();
  private compRef: ComponentRef<any>;

  constructor(private vcr: ViewContainerRef, private resolver: ComponentFactoryResolver) {
  }

  private _inputs;

  @Input() set inputs(data) {
    if (this.compRef) {
      this.refreshInputs(data);
      this.compRef.hostView.detectChanges();
    } else {
      this._inputs = data;
    }
  }

  private _outputs;

  @Input() set outputs(data) {
    this._outputs = data;
  }

  @Input('lazyComp') set comp(type: Type<any>) {
    if (type) {
      const factory = this.resolver.resolveComponentFactory(type);
      this.compRef = this.vcr.createComponent(factory);
      this.refreshInputs(this._inputs);
      Object.keys(this._outputs).forEach(output => {
        this.subscription.add((this.compRef.instance[output] as EventEmitter<any>).subscribe(this._outputs[output]));
      });
    }
  }

  ngOnDestroy() {
    this.compRef = null;
    this.subscription.unsubscribe();
  }

  private refreshInputs(inputs) {
    Object.keys(inputs).forEach(inputName => this.compRef.instance[inputName] = inputs[inputName]);
  }
}
