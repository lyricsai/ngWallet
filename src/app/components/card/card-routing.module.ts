import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDeleteComponent } from './card-delete.component';
import { CardDetailComponent } from './card-detail.component';
import { CardEditComponent } from './card-edit.component';
import { CardListComponent } from './card-list.component';
import { CardComponent } from './card.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
    children: [
      {
        path: '',
        component: CardListComponent,
        data: {
          title: 'Cards',
        },
      },
      {
        path: 'add',
        component: CardEditComponent,
        data: {
          title: 'Add',
        },
      },
      {
        path: ':id/edit',
        component: CardEditComponent,
        data: {
          title: 'Edit',
        },
        pathMatch: 'full',
      },
      {
        path: ':id/delete',
        component: CardDeleteComponent,
        data: {
          title: 'Delete',
        },
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: CardDetailComponent,
        data: {
          title: 'Detail',
        },
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
