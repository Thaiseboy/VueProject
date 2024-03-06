// models/InspectionModel.js
export default class InspectionModel {
  constructor(inspectionData) {
    // Eigenschappen van InspectionModel
    this.inspection_id = inspectionData.inspection_id;
    this.date = inspectionData.date;
    this.location = inspectionData.location;
    this.inspector = inspectionData.inspector;
    this.result = inspectionData.result;
    this.comments = inspectionData.comments;
  }
}