import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Musician } from './musician.model';

@Injectable({ providedIn: 'root' })
export class MusiciansService {
  getAll(): Observable<Musician[]> {
    return of(musiciansMock).pipe(delay(1_000));
  }
}

const musiciansMock: Musician[] = [
  {
    id: 1,
    name: 'Adele',
    photoUrl: '/assets/musicians/adele.jpg',
  },
  {
    id: 2,
    name: 'Umm Kulthum',
    photoUrl: '/assets/musicians/umm.jpg',
  },
  {
    id: 3,
    name: 'Sia',
    photoUrl: '/assets/musicians/sssjpg.jpg',
  },
  {
    id: 4,
    name: 'Hussain Aljassmi',
    photoUrl: '/assets/musicians/huu.jpg',
  },
  {
    id: 5,
    name: 'Billie Eilish',
    photoUrl: '/assets/musicians/blljpg.jpg',
  },
  {
    id: 6,
    name: 'Amr Diab',
    photoUrl: '/assets/musicians/amr.jpg',
  },
];
