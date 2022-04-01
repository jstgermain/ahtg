import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3001/api',
  headers: { Accept: 'application/json' },
});

// TODO: Add abulity to pass current page and paginate instead of returning all results
export const getHospitals = async () => await api.get(`/hospitals`);

export const getHospital = async (id: any) => await api.get(`/hospitals/${id}`);

export const removeHospital = async (id: any) =>
  await api.delete(`/hospitals/${id}`);
