import { Injectable } from '@angular/core';
import { album } from './interface/app-interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor() { }
  public albums:album[]=[
    {
      id:1,
    name:'the piper at the gates of down',
    albumArt:'/assets/images/1.jpg',
    year:1967,
    songs:[
      {
      trackNumber:1,
   name:"piper",
   duration:"4:17"
  },
   {
    trackNumber:2,
    name:"piper2",
    duration:"3:05"
   }
    ]

    },
    {
      id:2,
      name:'animals',
      albumArt:'/assets/images/2.jpg',
      year:1977,
      songs:[
        {
        trackNumber:1,
     name:"shape",
     duration:"4:17"
    },
     {
      trackNumber:2,
      name:"choom",
      duration:"3:05"
     }
      ]
    },
    {
      id:3,
      name:'flowers',
      albumArt:'/assets/images/3.jpg',
      year:1957,
      songs:[
        {
        trackNumber:1,
     name:"rose",
     duration:"2:17"
    },
     {
      trackNumber:2,
      name:"mina",
      duration:"3:30"
     }
      ]
    },
    {
      id:4,
      name:'things',
      albumArt:'/assets/images/4.jpg',
      year:1987,
      songs:[
        {
        trackNumber:1,
     name:"things1",
     duration:"4:17"
    },
     {
      trackNumber:2,
      name:"things2",
      duration:"3:51"
     }
      ]
    }
  ]
}
