import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/AuthGuard.service';


const routes: Routes = [
  {
    path: 'folder',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./auth/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./auth/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./auth/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  /*{
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },*/
  {
    path: 'type',
    loadChildren: () => import('./modals/type/type.module').then(m => m.TypePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'device',
    loadChildren: () => import('./device/device.module').then(m => m.DevicePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'customer',
    loadChildren: () => import('./modals/customer/customer.module').then(m => m.CustomerPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'item',
    loadChildren: () => import('./modals/item/item.module').then(m => m.ItemPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'itemprice',
    loadChildren: () => import('./modals/itemprice/itemprice.module').then(m => m.ItempricePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sale',
    loadChildren: () => import('./sale/sale.module').then(m => m.SalePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sales',
    loadChildren: () => import('./sales/sales.module').then( m => m.SalesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'customerprice/:id/:name',
    loadChildren: () => import('./customerprice/customerprice.module').then( m => m.CustomerpricePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule),
    canActivate: [AuthGuard]
  },
  /*{
    path: 'resultlist/:id',
    loadChildren: () => import('./resultlist/resultlist.module').then( m => m.ResultlistPageModule)
  },*/
  {
    path: 'luckyprice',
    loadChildren: () => import('./luckyprice/luckyprice.module').then( m => m.LuckypricePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'lucky',
    loadChildren: () => import('./modals/lucky/lucky.module').then( m => m.LuckyPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'winners',
    loadChildren: () => import('./winners/winners.module').then( m => m.WinnersPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'winner',
    loadChildren: () => import('./modals/winner/winner.module').then( m => m.WinnerPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'category',
    loadChildren: () => import('./modals/category/category.module').then( m => m.CategoryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'editlucky',
    loadChildren: () => import('./modals/editlucky/editlucky.module').then( m => m.EditluckyPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
