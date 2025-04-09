export interface MaintenanceRequest {
  id: string;
  title: string;
  description: string;
  property: string;
  unit: string;
  tenant: string;
  priority: string;
  status: string;
  dateSubmitted: string;
  assignedTo: string;
} 