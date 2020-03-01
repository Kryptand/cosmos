import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Photo } from './entities/photo';

@Injectable()
export class PhotoSelector {
  selectedPhotos$: BehaviorSubject<Photo[]> = new BehaviorSubject([]);
}
