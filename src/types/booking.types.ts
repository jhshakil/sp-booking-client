import { TFacility } from "./facility.types";

export type TSlot = {
  startTime: string;
  endTime: string;
};

export type TBooking = {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
  isPayment: boolean;
  payableAmount: number;
  facility: TFacility;
};
