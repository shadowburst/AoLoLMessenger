import IObserver from './IObserver';

export default interface IObservable {
  addObserver(o: IObserver): void;
  deleteObserver(o: IObserver): void;
  notifyObservers(): void;
}
