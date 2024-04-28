import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsyncPipeDemoComponent } from './async-pipe-demo/async-pipe-demo.component';
import { BuiltInPipesDemoComponent } from './built-in-pipes-demo/built-in-pipes-demo.component';
import { CustomPipeDemoComponent } from './custom-pipe-demo/custom-pipe-demo.component';

const routes: Routes = [
  { path: 'builtInPipes', component: BuiltInPipesDemoComponent },
  { path: 'customPipe', component: CustomPipeDemoComponent },
  { path: 'asyncPipe', component: AsyncPipeDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
