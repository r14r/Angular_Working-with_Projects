import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { View1Component } from './components/view1/view1.component';
import { View2Component } from './components/view2/view2.component';

const routes: Routes = [
    { path: 'app1/view1', component: View1Component },
    { path: 'app1/view2', component: View2Component },
    { path: 'app1', redirectTo: 'app1/view1' }
    /* { path: '**', redirectTo: 'app1/view1' } */
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
