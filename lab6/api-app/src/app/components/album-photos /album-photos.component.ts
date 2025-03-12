import { Component, inject } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { ActivatedRoute } from '@angular/router';
import { AlbumPhotos } from '../../models/album.photos';
import { catchError, of, retry } from 'rxjs';

@Component({
  selector: 'app-album-photos',
  imports: [],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.scss',
})
export class AlbumPhotosComponent {
  albumsService = inject(AlbumsService);
  route = inject(ActivatedRoute);

  photos: AlbumPhotos[] = [];

  ngOnInit() {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));

    console.log(id);
    this.albumsService
      .getAlbumPhotosById(id)
      .pipe(
        retry(3), 
        catchError((err) => {
          console.error('Ошибка после 3 попыток:', err);
          return of([]);
        })
      )
      .subscribe((photos) => {
        console.log('Данные пришли:', photos);
        this.photos = photos;
      });
  }
}
