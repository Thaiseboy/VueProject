// InspectionModel.js
export default class InspectionModel {
  constructor(inspectionData) {
    this.inspection_id = inspectionData.inspection_id;
    this.date = inspectionData.date;
    this.location = inspectionData.location;
    this.inspector = inspectionData.inspector;
    this.result = inspectionData.result;
    this.comments = inspectionData.comments;
    this.options = {
      damage: inspectionData.options?.damage || false,
      maintenance: inspectionData.options?.maintenance || false,
      installations: inspectionData.options?.installations || false,
      modifications: inspectionData.options?.modifications || false,
    };
  }
}
