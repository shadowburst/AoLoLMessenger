import IObservable from './IObservable';

export default interface IObserver {
  update(o: IObservable): void;
}
