import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppModule } from './app.module';

const providers = [];

@NgModule({})
export class App2SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppModule,
            providers
        };
    }
}
