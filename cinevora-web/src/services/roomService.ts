import fetchApi from "./fetchApi";

export interface RoomFromBE {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export const getRooms = async (): Promise<RoomFromBE[]> => {
  const { data } = await fetchApi.get<RoomFromBE[]>("/rooms");
  return data;
};