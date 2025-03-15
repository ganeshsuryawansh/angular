import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { VariablesComponent } from './components/variables/variables.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { UserComponent } from './user/user.component';
import { UserReactiveComponent } from './user-reactive/user-reactive.component';

export const routes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'variable', component: VariablesComponent },
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'api-call', component: ApiCallComponent },
  { path: 'user', component: UserComponent },
  { path: 'user-reactive', component: UserReactiveComponent }

];
