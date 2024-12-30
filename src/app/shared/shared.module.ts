import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzGridModule} from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    NzGridModule
  ]
})
export class SharedModule {
}
