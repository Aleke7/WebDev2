import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, AlbumPhotos } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private client: HttpClient
  ) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>('https://jsonplaceholder.typicode.com/albums', album);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<AlbumPhotos[]> {
    return this.client.get<AlbumPhotos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
