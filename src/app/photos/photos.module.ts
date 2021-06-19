import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoDetailModule } from './photo-detail/photo-detail.module';


@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        HttpClientModule,
        PhotoDetailModule,
        CommonModule
    ],
})

export class PhotosModule {}