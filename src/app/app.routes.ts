import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlnumDetailsComponent } from './alnum-details/alnum-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { resolveGuard } from './resolve.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'albums',component:AlbumsComponent},
    {path:'albums/:id',component:AlnumDetailsComponent,data:{message:'data is heavy'},
    resolve:{album:resolveGuard}},
    {path:'notfound',component:NotfoundComponent},
    {path:'**',component:NotfoundComponent}
];
