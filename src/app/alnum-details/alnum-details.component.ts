import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { album } from '../interface/app-interface';
import { ActivatedRoute,Data,Router, mapToResolve } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alnum-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alnum-details.component.html',
  styleUrl: './alnum-details.component.css'
})
export class AlnumDetailsComponent implements OnInit {
  constructor(private albumsservice:AlbumsService,private route:ActivatedRoute,private router:Router){}
  warningmessage:string|undefined;
  album:album={ id:0,
    name:"",
    albumArt:"",
    year:1985,
    songs:
    []};
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
// this.route.params.subscribe((res) => {
//      let selectedId: number =+res ['id'];
//       setTimeout(() => {
//      this.album= (this.albumsservice.albums.find(
//        (album) => album.id === selectedId
//         ))!;
//          if (!this.album) {
//          this.router.navigate(['/notfound']);
//         }
//      }, 2000);
  //   });
    // this.warningmessage=this.route.snapshot.data['message'];
this.route.data.subscribe((data: Data)=>{
  this.album=data['album'];
  
});
}

}
