import { Airline, Airplane } from ".";

export interface Flight {
  flightId: string;
  origin: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  airline: Airline;
  airplane: Airplane;
  price: number;
}