import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BreedComponent } from './breed/breed.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'breed',
        component: BreedComponent
    },
    {
        path: 'post',
        component: PostComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
