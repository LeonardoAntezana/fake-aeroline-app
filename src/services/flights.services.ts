import { collection, getDocs, getFirestore } from "firebase/firestore"
import { appFirestore } from "../firebase/config";
import { flightAdapter } from "../adapters";
import { Flight } from "../models";

// GET ALL FLIGHTS
export const getFlights = async () : Promise<Flight[]> => {
  let db = getFirestore(appFirestore);
  let snapshot = await getDocs(collection(db, 'flights'));
  return flightAdapter(snapshot);
}