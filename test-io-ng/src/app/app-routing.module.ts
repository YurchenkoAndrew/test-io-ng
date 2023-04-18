import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FolderPage} from "./folder/folder.page";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id', component: FolderPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
