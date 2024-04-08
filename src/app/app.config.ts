import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()), provideHttpClient(withInterceptors([errorHandlerInterceptor]))
  ]
};
