import {Routes} from '@angular/router';

const appRoutes: Routes = [

  {
    path: 'dash-board',
    loadChildren: './features/dash-board/dash-board.module#DashBoardModule',
  },
  {
    path: '',
    redirectTo: 'dash-board',
    pathMatch: 'full',
  },
];


export {
  appRoutes
}