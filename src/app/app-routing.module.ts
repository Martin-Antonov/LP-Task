import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiencesComponent } from "./pages/audiences/audiences.component";
import { CampaignsComponent } from "./pages/campaigns/campaigns.component";


const routes: Routes = [
  {path: '', redirectTo: 'audiences', pathMatch: 'full'},
  {path: 'audiences', component: AudiencesComponent},
  {path: 'campaigns', component: CampaignsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
