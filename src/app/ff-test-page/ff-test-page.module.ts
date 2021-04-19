import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FfTestPageComponent } from './ff-test-page.component';
import { FfTestPageRoutingModule } from '@app/ff-test-page/ff-test-page-routing.module';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, TranslateModule, FfTestPageRoutingModule, NgbButtonsModule],
  declarations: [FfTestPageComponent],
})
export class FfTestPageModule {}
