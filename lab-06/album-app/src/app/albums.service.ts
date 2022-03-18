import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ALBUMS } from './mock-data';
import { Album, AlbumPhoto } from './models';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) {}

  // getAlbums() {
  //   return of(ALBUMS);
  // }

  // getAlbum(id: number) {
  //   const album = ALBUMS.find((album) => album.id === id);
  //   return of(album);
  // }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.API_URL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.API_URL}/albums/${id}`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.API_URL}/albums`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.API_URL}/albums/${id}`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.API_URL}/albums/${album.id}`, album);
  }

  getAlbumPhotos(id: number): Observable<AlbumPhoto[]> {
    return this.client.get<AlbumPhoto[]>(`${this.API_URL}/albums/${id}/photos`);
  }
}
