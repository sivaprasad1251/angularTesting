import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketReservationComponent } from './ticket-reservation.component';

xdescribe('TicketReservationComponent', () => {
  let component: TicketReservationComponent;
  let fixture: ComponentFixture<TicketReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

xdescribe('Ticket Reservation', ()=>{

  //Arrange 
  let Reservation: TicketReservationComponent;
  
  beforeEach(() => { //beforeEach used for initialize or setup
    
    Reservation= new TicketReservationComponent(); //to reduce redundency we write it for each test case
  })

  afterEach(()=> { // nullfy or teardown every test case after completion
    
     Reservation = null;
    
  })
  
  beforeAll(()=> {})// execute only once before all test cases

  afterAll(()=> {})// executes after all test cases completed





 /* it('testing for reservation done or not ' ,()=>{
    //Arrange
    let Reservation= new TicketReservationComponent();

    //Act
    let isReserved = Reservation.reserveSeat();

    //assert
    expect(isReserved).toBeTruthy();
  })*/

  it('Reserve & Increment the people count by 1 ' ,()=>{
    //Arrange
    //let Reservation= new TicketReservationComponent(); 

    //Act
    let peopcount = Reservation.reserveSeat();

    //Assert 
    expect(peopcount).toEqual(21);
   })

   it('cancel & decrement the people count by 1 ' ,()=>{
    //Arrange
    //let Reservation= new TicketReservationComponent();

    //Act
    let peopcount = Reservation.cancelSeat();

    //Assert 
    expect(peopcount).toEqual(19);
   })


})