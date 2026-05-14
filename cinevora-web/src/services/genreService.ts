import fetchApi from './fetchApi'; 

// API endpoint
const API_URL = '/genres'; 

export const getGenres = async () => {
  try {
    const response = await fetchApi.get(API_URL); 
    return response.data;  
  } catch (error) {
    throw new Error('Không thể lấy danh sách thể loại');
  }
};

export const getGenreById = async (id: number) => {
  try {
    const response = await fetchApi.get(`${API_URL}/${id}`); 
    return response.data;  // Trả về thể loại phim theo ID
  } catch (error) {
    throw new Error('Không thể lấy thể loại');
  }
};