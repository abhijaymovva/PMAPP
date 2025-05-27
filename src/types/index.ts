export interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyId: string;
  unitNumber: string;
  leaseStart: string;
  leaseEnd: string;
  rentAmount: number;
  status: 'active' | 'past_due' | 'inactive';
}

export interface Property {
  id: string;
  name: string;
  address: string;
  units: Unit[];
  totalUnits: number;
  occupiedUnits: number;
  monthlyRevenue: number;
}

export interface Unit {
  id: string;
  number: string;
  propertyId: string;
  tenantId?: string;
  rentAmount: number;
  status: 'occupied' | 'vacant' | 'maintenance';
}

export interface MaintenanceRequest {
  id: string;
  propertyId: string;
  unitId: string;
  tenantId: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface RentPayment {
  id: string;
  tenantId: string;
  propertyId: string;
  unitId: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'late';
  paymentMethod: string;
} 