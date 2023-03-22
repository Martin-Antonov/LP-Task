import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AudiencesComponent } from './pages/audiences/audiences.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { PageLayoutComponent } from './shared/components/page-layout/page-layout.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { UserSelectComponent } from './pages/audiences/user-select/user-select.component';
import { UserContentComponent } from "./pages/audiences/user-content/user-content.component";
import { UserInfoBoxComponent } from "./pages/audiences/user-content/user-info-box/user-info-box.component";
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AudiencesComponent,
    CampaignsComponent,
    PageLayoutComponent,
    NavigationComponent,
    UserSelectComponent,
    UserContentComponent,
    UserInfoBoxComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
