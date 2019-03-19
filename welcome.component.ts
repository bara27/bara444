import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomDataService } from '../service/data/welcom-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessageFromService:string;
  name='samson'
  constructor(private route: ActivatedRoute, private service:WelcomDataService) { }

  ngOnInit() {
    this.name= this.route.snapshot.params['name'];
  }
  getWelcomeMessage()
  {
 console.log(this.service.executeHelloWorldBeanService());
 this.service.executeHelloWorldBeanService().subscribe(
   response=>this.handleSuccessfulResponse(response),
   error=>this.handleErrorResponse(error)
 );
  console.log("last line of Get welcome message")
}
handleSuccessfulResponse(response)
{
  this.welcomeMessageFromService=response.message
  //console.log(response.message);
}
handleErrorResponse(error)
{
  this.welcomeMessageFromService=error.error.message
}
getWelcomeMessageWithParameter(name)
  {
 console.log(this.service.executeHelloWorldBeanService());
 this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
   response=>this.handleSuccessfulResponse(response),
   error=>this.handleErrorResponse(error)
 );
  console.log("last line of Get welcome message")
}

  
}
