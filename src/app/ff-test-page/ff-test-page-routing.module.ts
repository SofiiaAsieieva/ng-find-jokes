import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { FfTestPageComponent } from './ff-test-page.component';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class FfTestPageRoutingModule {}
