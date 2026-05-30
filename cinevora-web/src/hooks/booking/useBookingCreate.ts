import { CreateBookingRequest } from "@/src/interfaces/api/createBookingApi";
import { createBooking } from "@/src/services/bookingApi";
import { useMutation } from "@tanstack/react-query";

export const useCreateBooking = () => {
  const { mutate, data, isPending, isError } = useMutation({
    mutationFn: (data: CreateBookingRequest) => createBooking(data),
  });

  return {
    createBooking: mutate,
    isCreatingBooking: isPending,
    isCreateBookingError: isError,
    bookingData: data,
  };
};
