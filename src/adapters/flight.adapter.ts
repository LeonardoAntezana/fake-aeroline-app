import { QuerySnapshot } from "firebase/firestore";
import { Flight } from "../models"

export const flightAdapter = (data: QuerySnapshot) => {
  // let adapt: Flight[];
  // data.forEach(doc => adapt.push({ flightId: doc.id, ...doc.data() }) )
  data.forEach(doc => console.log(doc.data().airline))
} 