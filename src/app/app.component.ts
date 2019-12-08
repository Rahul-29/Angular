import { Component, OnInit, HostListener, Renderer2, ViewChild } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherEntity } from './models/weather.model';
import { Weather, ListEntity } from './models/weather-entity.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weatherData: WeatherEntity = new WeatherEntity(null, null, null, null, null, null);
  bulkWeatherData = new Weather(null, null);
  todayDate = new Date().getDate().toString();
  dropDownOpen = false;
  selectedCity: string = null;
  averageTemperature = 0;
  windStrength = 0;
  currentWeather = 'default';
  status = '';
  @ViewChild('ForecastComponent', {static: false}) forecastComponent;

  constructor(private weatherService: WeatherService, private renderer: Renderer2) { }

  ngOnInit() {
    // this.getData('London,UK');
    // this.getFiveDaysData();
  }

  getData(location: string): void {
    this.weatherService.getWeatherData(location).subscribe(
      data => {
        this.weatherData = data;
        this.selectedCity = location.split(',')[0];
        this.averageTemperature = this.kelvinToCelcius(this.weatherData.main.temp);
        this.windStrength = this.weatherData.wind.speed;
        this.currentWeather = this.weatherData.details[0].main;
        this.setWeatherStatus(this.currentWeather);
      }
    );
  }

  setWeatherStatus(status) {
    if (status === 'Clouds' || status === 'Cloud') {
      this.status = 'Its cloudy!';
    } else if (status === 'Rain' || status === 'Drizzle') {
      this.status = 'Its rainy!';
    } else if (status === 'Clear') {
      this.status = 'Clear Sky!'
    }
  }

  getFiveDaysData(location: string) {
    this.weatherService.getFiveDaysData(location).subscribe(
      data => this.bulkWeatherData = data
    );
  }


  // toggled(event: boolean) {
  //   return this.dropDownOpen = event ? true : false;
  // }

  // checkWeather(data: ListEntity) {
  //   let weather;
  //   if (data.date.getHours() === 6) {
  //       weather = this.bulkWeatherData.list[0].weather[0].main;
  //     } else if (data.date.getHours() === 9) {
  //       weather = this.bulkWeatherData.list[1].weather[0].main;
  //     }  else if (data.date.getHours() === 12) {
  //       weather = this.bulkWeatherData.list[2].weather[0].main;
  //     }  else if (data.date.getHours() === 15) {
  //       weather = this.bulkWeatherData.list[3].weather[0].main;
  //     }  else if (data.date.getHours() === 18) {
  //       weather = this.bulkWeatherData.list[4].weather[0].main;
  //     }  else if (data.date.getHours() === 21) {
  //       weather = this.bulkWeatherData.list[5].weather[0].main;
  //     }  else if (data.date.getHours() === 0) {
  //       weather = this.bulkWeatherData.list[6].weather[0].main;
  //     }
  //   // const bodyElement = document.getElementsByName('body');
  //   // if (weather === 'Clouds') {
  //   //     this.renderer.addClass(document.getElementsByName('body'), 'cloud');

  //   //   } else if (weather === 'Rain') {
  //   //     this.renderer.removeClass(bodyElement, 'cloud'); // get applied classes from DOM ?
  //   //     this.renderer.addClass(bodyElement, 'rain');
  //   //   } else if (weather === 'Clear') {
  //   //     this.renderer.removeClass(bodyElement, 'rain');
  //   //     this.renderer.addClass(bodyElement, 'clear');
  //   //   }
  //     // based on weather change background
  // }

  // clickDropdown() {
  //   document.getElementById('myDropdown').classList.toggle('show');
  //   this.dropDownOpen = true;
  // }

  // @HostListener('window:click', ['$event'])
  // closeDropdownOnWindowClick($event: Event) {
  //   const dropdownElement = document.getElementsByClassName('dropbtn')[0];
  //   // document.getElementById('myDropdown').classList.toggle('show');
  //   if ($event && $event.target === dropdownElement && this.dropDownOpen) {
  //     // const dropdowns = document.getElementsByClassName('dropdown-content');
  //       const listElement = document.getElementById('myDropdown');
  //       if (listElement.classList.contains('show')) {
  //         this.renderer.removeClass(listElement, 'show');
  //       }
  //   }
  // }

  changeCity($event: Event) {
    console.log($event['selectedOptions'][0].innerText);
    this.selectedCity = $event['selectedOptions'][0].innerText;
    // display name, average temperature and wind strength on changing city
    this.getData(this.getLocation(this.selectedCity));
  }

  private getLocation(city: string) {
    if (city === 'Amsterdam') {
      return city + ',NL';
    } else if (city === 'London') {
      return city + ',UK';
    }
  }

  forecast() {
    this.getFiveDaysData(this.getLocation(this.selectedCity));
  }

  private kelvinToCelcius(kelvin: number): number {
    return kelvin - 273.15;
  }
}
