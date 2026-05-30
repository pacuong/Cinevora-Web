import { CreateBookingRequest } from "@/src/interfaces/api/createBookingApi";
import fetchApi from "@/src/services/fetchApi";
import { useAuthSlice } from "@/src/stores/useAuth";

export const createBooking = async (data: CreateBookingRequest) => {
  const token = useAuthSlice.getState().userAuthentication?.accessToken;

  const response = await fetchApi.post("/bookings", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
