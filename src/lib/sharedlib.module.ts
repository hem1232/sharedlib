import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedlibComponent } from './sharedlib.component';
import { SharedlibService } from './sharedlib.service';

@NgModule({
  declarations: [
    SharedlibComponent
  ],
  imports: [
  ],
  exports: [
    SharedlibComponent
  ]
})
export class SharedlibModule {
    static forRoot(): ModuleWithProviders<SharedlibModule> {
      return {
        ngModule: SharedlibModule,
        providers: [SharedlibService],
      };
    }
 }
