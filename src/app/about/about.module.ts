import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FfTestPageRoutingModule } from '../ff-test-page/ff-test-page-routing.module';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from '@app/about/about-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
