import fetchApi from "@/src/services/fetchApi";
import { useAuthSlice } from "@/src/stores/useAuth";

export const createMomoPayment = async (bookingId: number) => {
  const token = useAuthSlice.getState().userAuthentication?.accessToken;

  const response = await fetchApi.post(
    "/payments/momo",
    {
      bookingId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log("response momo:", response);
  return response.data;
};
