import { Flight } from ".";

export interface DataFirestore {
  id: string;
  data(): Flight;
} 