import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AudiencesComponent } from './pages/audiences/audiences.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { PageLayoutComponent } from './shared/components/page-layout/page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AudiencesComponent,
    CampaignsComponent,
    PageLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
