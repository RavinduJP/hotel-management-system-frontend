export interface Room {
  id: string;
  name: string;
  price: number;
  capacity: number;
  amenities: string[];
  images: string[];
  description: string;
}

export interface BookingPayload {
  roomId: string;
  adults: number;
  children: number;
  checkIn: Date;
  checkOut: Date;
}
