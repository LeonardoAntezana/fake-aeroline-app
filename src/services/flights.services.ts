import { collection, getDocs, getFirestore } from "firebase/firestore"
import { appFirestore } from "../firebase/config";
import { flightAdapter } from "../adapters";

export const getFlights = async () => {
  let db = getFirestore(appFirestore);
  let snapshot = await getDocs(collection(db, 'flights'))
  return flightAdapter(snapshot);
}