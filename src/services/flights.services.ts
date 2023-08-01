import { collection, getDocs, getFirestore } from "firebase/firestore"
import { appFirestore } from "../firebase/config";
import { flightAdapter } from "../adapters/flight.adapter";

export const getFlights = async () => {
  let db = getFirestore(appFirestore);
  let snapshot = await getDocs(collection(db, 'flights'))
  const flights = flightAdapter(snapshot);
}