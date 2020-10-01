import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { View1Component } from './components/view1/view1.component';
import { View2Component } from './components/view2/view2.component';

const routes: Routes = [
    { path: 'app2/view1', component: View1Component },
    { path: 'app2/view2', component: View2Component },
    { path: 'app2', redirectTo: 'app2/view2' }
    /* { path: '**', redirectTo: 'app2/view2' } */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
