import { createMomoPayment } from "@/src/services/paymentApi";
import { useMutation } from "@tanstack/react-query";

export const useMomoPayment = () => {
  const { mutate, data, isPending, isError } = useMutation({
    mutationFn: (bookingId: number) => createMomoPayment(bookingId),
  });

  return {
    createMomoPayment: mutate,
    isCreatingMomoPayment: isPending,
    isErrorMomoPayment: isError,
    momoPaymentData: data,
  };
};
