import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditorialDetailComponent } from '../editorial/editorial-detail/editorial-detail.component';
import { EditorialListComponent } from '../editorial/editorial-list/editorial-list.component';

const routes: Routes = [

  {
    path: 'editorials',
    children: [{
      path: 'list',
      component: EditorialListComponent
    },
    {
      path: ':id',
      component: EditorialDetailComponent,
      outlet: 'detail'
    }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }