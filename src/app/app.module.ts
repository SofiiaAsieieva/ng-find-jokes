import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AuthModule } from '@app/auth';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FfTestPageComponent } from './ff-test-page/ff-test-page.component';
import { ListComponent } from './ff-test-page/components/list/list.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    AuthModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, FfTestPageComponent, ListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
