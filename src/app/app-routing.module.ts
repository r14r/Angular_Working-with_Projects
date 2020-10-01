import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { App1SharedModule } from 'projects/app1/src/app/app.shared.module';
import { App2SharedModule } from 'projects/app2/src/app/app.shared.module';

const routes: Routes = [
    { path: 'app1', component: App1SharedModule },
    { path: 'app2', component: App2SharedModule },
    { path: '**', redirectTo: 'app1/view1' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true }),
        App1SharedModule.forRoot(),
        App2SharedModule.forRoot()
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
