import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { AppTranslateLoader } from './app/app-translate-loader';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

const createTranslateLoader = (http: HttpClient) => {
  return new AppTranslateLoader(http);
};

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([]),
    importProvidersFrom(
      HttpClientModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      })
    ),
  ],
}).then((ref) => {
  const translate = ref.injector.get(TranslateService);
  translate.addLangs(['ru', 'kk']);
  translate.setDefaultLang('ru');
  const browserLang = translate.getBrowserLang();
  translate.use(browserLang?.match(/ru|kk/) ? browserLang : 'ru');
});
