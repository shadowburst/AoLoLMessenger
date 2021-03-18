import { IObservable, IObserver } from '../interfaces';

export default class Observable implements IObservable {
  private observers: IObserver[];

  constructor() {
    this.observers = [];
  }

  addObserver(o: IObserver): void {
    this.observers.push(o);
  }

  deleteObserver(o: IObserver): void {
    const index = this.observers.indexOf(o);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    this.observers.forEach((o) => o.update(this));
  }
}
