import { Observable } from '@nativescript/core';

export class HelloWorldModel extends Observable {
  private _isLiked: boolean = false;

  constructor() {
    super();
  }

  get isLiked(): boolean {
    return this._isLiked;
  }

  onLikeTap() {
    this._isLiked = !this._isLiked;
    this.notifyPropertyChange('isLiked', this._isLiked);
  }

  onShareTap() {
    const memoryDetails = {
      location: 'Paris, France',
      date: 'April 06,, 2025',
      note: 'I feel (Eiffel) towery around you :))',
      author: 'Neha Gade'
    };
    console.log('Sharing Travel Memory:', memoryDetails);
  }
}