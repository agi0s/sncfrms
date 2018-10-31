import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { SocketsComponent } from './sockets/sockets.component';
import { MasterInterviewComponent } from './master-interview/master-interview.component';
import { AdminComponent } from './modules/admin/admin.component';

const routes: Routes = [
    { path: 'candidate', component: SocketsComponent },
    { path: 'master', component: MasterInterviewComponent },
    { path: 'admin', component: AdminComponent }
]
@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}