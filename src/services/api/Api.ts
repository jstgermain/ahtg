import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3001/api',
  headers: { Accept: 'application/json' },
});

// export const getHospitals = api.get('/hospitals');
// console.log(response.ok); // yay!

export const getHospitals = async () => {
  const response = await api.get(`/hospitals`);

  if (!response.ok) {
    return 'error';
  }

  return response.data;
};

//   return { kind: 'ok', catalog_types: response.data.catalog_types };
// }

// async hotel(manufacturerId): Promise<any> {
//   const response: ApiResponse<any> = await this.apisauce.get(
//     `/manufacturer/${manufacturerId}/types`
//   );

//   if (!response.ok) {
//     const problem = getGeneralApiProblem(response);
//     if (problem) return problem;
//   }

//   return {
//     kind: 'ok',
//     manufacturer_types: response.data.manufacturer_types,
//   };
// }
