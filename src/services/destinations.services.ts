import { collection, getDocs, getFirestore } from "firebase/firestore"
import { appFirestore } from "../firebase/config";
import { destinationsAdapter } from "../adapters";

// GET ALL DESTINATIONS
export const getDestinations =async () => {
  let db = getFirestore(appFirestore);
  let snapshot = await getDocs(collection(db, 'destinations'));
  return destinationsAdapter(snapshot);
}