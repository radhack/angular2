import {Component, OnInit} from '@angular/core';
import {HellosignService} from '../services/hellosign.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

 public title = 'It\'s Up and Stuff!';

  constructor(private hellosignService: HellosignService) {
    this.hellosignService.startHelloSign( "d7219512693825facdd9241f458decf2", "https://app.hellosign.com/editor/embeddedSign?signature_id=a2084ce5fa2edc1e780e4efd5490f6de&token=6ebdc154daa90a8bead927ec42fb246e");
  }

  public ngOnInit() {
  }
}
