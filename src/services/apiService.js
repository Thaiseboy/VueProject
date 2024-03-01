// services/apiService.js
import axios from 'axios';
import InspectionModel from '@/models/InspectionModel'; 

const apiUrl = 'https://api.jsonserve.com/3vZtRk';

export const fetchInspections = async () => {
  try {
    const response = await axios.get(apiUrl);
    const inspectionsData = response.data.inspections;

    // Map de gegevens naar InspectionModel
    const inspections = inspectionsData.map(inspectionData => new InspectionModel(inspectionData));

    return inspections;
  } catch (error) {
    console.error('Fout bij het ophalen van inspectiegegevens:', error);
    throw error;
  }
};
