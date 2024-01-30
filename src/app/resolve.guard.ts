import {  ResolveFn, Router } from '@angular/router';
import { album } from './interface/app-interface';
import { AlbumsService } from './albums.service';
import { inject } from '@angular/core';
import {  delay, of, tap } from 'rxjs';
 

export const resolveGuard: ResolveFn<album|null> = (route, state)=> {

 const id=route.paramMap.get('id');

 const router=inject(Router);

 let album=inject(AlbumsService).albums.find(album=>album.id===+id!);
 if(!album)
 {
  return of(null).pipe(delay(1000),
    tap(()=> router.navigate(['/notfound'])),
    
  );
 }
  else{
    return of(album).pipe(delay(2000));
  }
// return of(album).pipe(delay(album?2000:1000),
// switchMap(foundalbum=>{if(foundalbum){return of (foundalbum);}
// else{router.navigate(['/notfound']);
// return of (null)}}))
 }

