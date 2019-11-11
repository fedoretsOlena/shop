import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private defaultSettings = {
    lang: 'en'
  };
  private readonly STORAGE_KEY = 'app-settings';

  constructor(
    private http: HttpClient,
    @Inject(localStorage) private localStorage: LocalStorageService
  ) {}

  getSettings(): Promise<{ lang: string }> {
    const settings = this.localStorage.getItem(this.STORAGE_KEY);

    return settings ? Promise.resolve(settings) : this.getSettingsFromFile();
  }

  private getSettingsFromFile(): Promise<object> {
    return this.http.get('./assets/app-settings.json')
      .pipe(
        retry(2),
        catchError(() => of(this.defaultSettings))
      ).toPromise()
      .then(settings => {
        this.localStorage.setItem(this.STORAGE_KEY, settings);
        return settings;
      });
  }
}
