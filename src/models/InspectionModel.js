// models/InspectionModel.js
// data model
export default class InspectionModel {
  constructor(inspectionData) {
    this.inspection_id = inspectionData.inspection_id;
    this.date = inspectionData.date;
    this.location = inspectionData.location;
    this.inspector = inspectionData.inspector;
    this.result = inspectionData.result;
    this.comments = inspectionData.comments;
  }
}
