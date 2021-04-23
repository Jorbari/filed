import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryHeaderComponent } from './primary-header/primary-header.component';
import { PrimaryFooterComponent } from './primary-footer/primary-footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PrimaryHeaderComponent, PrimaryFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PrimaryHeaderComponent, PrimaryFooterComponent]
})
export class SharedModule { }
