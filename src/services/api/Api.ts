import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3001/api',
  headers: { Accept: 'application/json' },
});

export const getHospitals = async () => await api.get(`/hospitals`);
