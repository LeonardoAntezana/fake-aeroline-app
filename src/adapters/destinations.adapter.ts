import { QuerySnapshot, DocumentSnapshot } from "firebase/firestore";
import { Destination } from "../models";

export const destinationsAdapter = (data: QuerySnapshot) => {
  let adapterData: Destination[] = data.docs.map((doc: DocumentSnapshot) => ({ ...doc.data() }))
  return adapterData;
}