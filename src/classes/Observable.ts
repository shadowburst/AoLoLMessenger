import { IObservable, IObserver } from '../interfaces';

export default abstract class Observable implements IObservable {
  private observers: IObserver[];

  constructor() {
    this.observers = [];
  }

  public getObservers() {
    return this.observers;
  }

  public addObserver(o: IObserver): void {
    this.observers.push(o);
  }

  public deleteObserver(o: IObserver): void {
    const index = this.observers.indexOf(o);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(content: any): void {
    this.observers.forEach((o) => o.update(this, content));
  }
}
