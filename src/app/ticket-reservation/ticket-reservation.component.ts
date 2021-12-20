import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-reservation',
  templateUrl: './ticket-reservation.component.html',
  styleUrls: ['./ticket-reservation.component.css']
})
export class TicketReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public busCapacity = 50;
  public peopleCount = 20;
  

  /*reserveSeat():boolean {
    let seatReserved = false;

    if(this.peopleCount<=this.busCapacity){
      this.peopleCount++;
      seatReserved = true;
    }
    return seatReserved;


  }*/

  reserveSeat(){
    return ++this.peopleCount;
  }


  cancelSeat(){
    return --this.peopleCount;
  }

}
