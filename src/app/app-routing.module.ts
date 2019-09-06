import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { MasterOneComponent } from './master-one/master-one.component';



const routes: Routes = [//{path:'',redirectTo:'/app',pathMatch:'full'},
                        {path: 'Master1',component: MasterOneComponent},
                        {path: 'fileManager',component: FileManagerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponent=[FileManagerComponent,AppComponent]