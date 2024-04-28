import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltInPipesDemoComponent } from './built-in-pipes-demo/built-in-pipes-demo.component';

const routes: Routes = [
  { path: 'builtInPipes', component: BuiltInPipesDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
