import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent, PoliticsComponent, TermsConditionComponent} from './pages';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'terms-condition',
    component: TermsConditionComponent
  },
  {
    path: 'politics',
    component: PoliticsComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
