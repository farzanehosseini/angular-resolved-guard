import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import{album}from'../interface/app-interface'
@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  constructor(private albumsservice:AlbumsService){}
  albums:album[]=[];
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
this.albums=this.albumsservice.albums;
  }

}
