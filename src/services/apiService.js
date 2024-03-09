// services/apiService.js
import axios from 'axios';
import InspectionModel from '@/models/InspectionModel';

const apiUrl = '/data/rapportages.json';

export const fetchInspections = () => {
  return axios.get(apiUrl)
    .then(response => {
      if (response.data && response.data.inspections) {
        return response.data.inspections.map(inspectionData => new InspectionModel(inspectionData));
      } else {
        console.error('Invalid response format:', response);
        throw new Error('Invalid response format');
      }
    })
    .catch(error => {
      console.error('Error fetching inspection data:', error);
      throw error;
    });
};
