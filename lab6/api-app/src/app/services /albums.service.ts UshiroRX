import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { AlbumPhotos } from '../models/album.photos';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private http = inject(HttpClient);

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  getAlbumPhotosById(id: number): Observable<AlbumPhotos[]> {
    return this.http.get<AlbumPhotos[]>(`${this.apiUrl}/${id}/photos`);
  }

  updateAlbumById(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album);
  }

  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.apiUrl, album);
  }

  patchAlbumById(id: number, updateData: Partial<Album>): Observable<Album> {
    return this.http.patch<Album>(`${this.apiUrl}/${id}`, updateData);
  }

  deleteAlbumById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
