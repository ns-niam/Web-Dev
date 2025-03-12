import { Component, inject } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums',
  imports: [RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss',
})
export class AlbumsComponent {
  albumsService = inject(AlbumsService);

  albums: Album[] = [];

  delete(id: number) {
    this.albums = this.albums.filter((album) => album.id !== id);
    this.albumsService.deleteAlbumById(id).subscribe({
      next: () => {
        console.log(`Album with ID ${id} deleted`);
      },
      error: (err) => console.error('Error:', err),
    });
  }

  ngOnInit() {
    this.albumsService.getAlbums().subscribe((albums: Album[]) => {
      console.log(albums);
      this.albums = albums;
    });
  }
}
