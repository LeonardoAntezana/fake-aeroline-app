import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { Flight } from "../models";

export const flightAdapter = (data: QuerySnapshot): Flight[] => {
  let adapterData: DocumentData = data.docs.map(doc => doc.data())
  let flights: Flight[] = adapterData.map((doc: Flight) => doc)
  return flights;
}