import { NgModule } from '@angular/core';
import { HeroFilterPipe } from '../app/pipes/hero-filter.pipe';

@NgModule({
    declarations: [
      HeroFilterPipe
    ],
    exports: [
      HeroFilterPipe
    ]
  })

  export class PipesModule { };