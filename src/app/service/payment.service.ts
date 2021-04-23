import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryModel } from 'src/app/models/country.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<CountryModel[]> {

    return of(
    [
      {
        short_name: 'NG',
        long_name: 'Nigeria'
      },
      {
        short_name: 'GH',
        long_name: 'Ghana'
      },
      {
        short_name: 'USA',
        long_name: 'America'
      },
      {
        short_name: 'BS',
        long_name: 'Bahamas'
      },
      {
        short_name: 'RU',
        long_name: 'Russia'
      },
      {
        short_name: 'RO',
        long_name: 'Romania'
      },
      {
        short_name: 'JP',
        long_name: 'Japan'
      },
      {
        short_name: 'IL',
        long_name: 'Israel'
      },
    ]
    )
  }

  public saveUserInformation(payload: any): Observable<any> {
   return of(true);

  }

}
