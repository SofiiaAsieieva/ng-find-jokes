import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FfTestPageRoutingModule } from '../ff-test-page/ff-test-page-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FfTestPageRoutingModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
