import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { FfTestPageComponent } from './ff-test-page.component';
import { ListComponent } from '@app/ff-test-page/components/list/list.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'ff-test-page',
      component: FfTestPageComponent,
      data: { title: marker('ff-test-page') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgbPaginationModule, CommonModule],
  exports: [RouterModule, ListComponent],
  providers: [],
  declarations: [ListComponent],
})
export class FfTestPageRoutingModule {}
