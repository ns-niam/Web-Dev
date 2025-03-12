import { Component, inject } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-details',
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  albumsService = inject(AlbumsService);
  route = inject(ActivatedRoute);
  isEditing: boolean = false;
  album?: Album;

  titleName = new FormControl('');

  onEdit() {
    this.isEditing = !this.isEditing;
  }

  save() {
    if (!this.album) return;

    this.album.title = this.titleName.value || '';
    this.isEditing = false;

    this.albumsService.updateAlbumById(this.album).subscribe({
      next: (updatedAlbum) => {
        this.album = updatedAlbum;
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumById(id).subscribe((album: Album) => {
      this.album = album;
      this.titleName.setValue(album.title);
    });
  }
}
