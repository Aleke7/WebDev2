import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { ALBUMS } from '../fake-db';
import { Album } from '../models';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  loaded!: boolean;
  newAlbumName!: string;
  constructor(
    private albumsService: AlbumsService
  ) { 
    this.newAlbumName = '';
   }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {});
  }

  addAlbum() {
    const album = {
      title: this.newAlbumName
    };
    this.loaded = false;
    this.albumsService.addAlbum(album as Album).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbumName = '';
      this.loaded = true;
    });
  }

}
