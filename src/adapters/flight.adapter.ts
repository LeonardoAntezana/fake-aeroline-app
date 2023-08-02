import { QuerySnapshot, DocumentSnapshot } from "firebase/firestore";
import { Flight } from "../models";

export const flightAdapter = (data: QuerySnapshot): Flight[] => {
  let adapterFlights: Flight[] = data.docs.map((doc: DocumentSnapshot) => ({ ...doc.data() })) 
  return adapterFlights;
}