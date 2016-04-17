import {Page, Platform} from 'ionic-angular';
import {AboutPage} from '../about/about';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  public name;
  private platform;
  aboutPage = AboutPage;

  constructor(platform: Platform) {
    this.name = "Glenn";
    this.platform = platform;
  }

  checkNetwork() {
    
    console.log('test');
    this.name = 'testar';
    
    this.platform.ready().then(() => {

      var networkState = navigator.connection.type;
      var states = {};

      states[Connection.UNKNOWN] = 'Unknown Connection';
      states[Connection.ETHERNET] = 'Ethernet Connection';
      states[Connection.WIFI] = 'Wifi Connection';
      states[Connection.CELL_2G] = '2G Connection';
      states[Connection.CELL_3G] = '3G Connection';
      states[Connection.CELL_4G] = '4G Connection';
      states[Connection.CELL] = 'Cell generic Connection';
      states[Connection.NONE] = 'No Connection';

      this.name = states[networkState];

      // this.popup.alert({
      //     title: "Connection status",
      //     template: states[networkState],
      //     cssClass: "my-alert"
      // }).then(() => {
      //     console.log('alert closed');
      // })
    })

  }
}
