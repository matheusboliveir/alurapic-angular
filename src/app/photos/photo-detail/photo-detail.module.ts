import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailComponent } from './photo-detail.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentComponent } from './photo-comment/photo-comment.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';



@NgModule({
  declarations: [
    PhotoDetailComponent,
    PhotoCommentComponent,
    PhotoOwnerOnlyDirective
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule,
    ShowIfLoggedModule
  ],
  exports: [
    PhotoDetailComponent,
    PhotoCommentComponent
  ]
})
export class PhotoDetailModule { }
