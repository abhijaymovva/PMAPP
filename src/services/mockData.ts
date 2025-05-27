import { Tenant, Property, Unit, MaintenanceRequest, RentPayment } from '../types';

// Mock Properties
export const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Sunset Apartments',
    address: '123 Sunset Blvd, Los Angeles, CA 90028',
    units: [],
    totalUnits: 20,
    occupiedUnits: 15,
    monthlyRevenue: 45000,
  },
  {
    id: '2',
    name: 'Mountain View Complex',
    address: '456 Mountain View Ave, San Francisco, CA 94105',
    units: [],
    totalUnits: 30,
    occupiedUnits: 28,
    monthlyRevenue: 75000,
  },
];

// Mock Units
export const mockUnits: Unit[] = [
  {
    id: '1',
    number: '101',
    propertyId: '1',
    tenantId: '1',
    rentAmount: 2500,
    status: 'occupied',
  },
  {
    id: '2',
    number: '102',
    propertyId: '1',
    tenantId: '2',
    rentAmount: 2300,
    status: 'occupied',
  },
  {
    id: '3',
    number: '201',
    propertyId: '2',
    tenantId: '3',
    rentAmount: 3000,
    status: 'occupied',
  },
];

// Mock Tenants
export const mockTenants: Tenant[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '(555) 123-4567',
    propertyId: '1',
    unitNumber: '101',
    leaseStart: '2024-01-01',
    leaseEnd: '2025-01-01',
    rentAmount: 2500,
    status: 'active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    phone: '(555) 234-5678',
    propertyId: '1',
    unitNumber: '102',
    leaseStart: '2024-02-01',
    leaseEnd: '2025-02-01',
    rentAmount: 2300,
    status: 'active',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@email.com',
    phone: '(555) 345-6789',
    propertyId: '2',
    unitNumber: '201',
    leaseStart: '2024-03-01',
    leaseEnd: '2025-03-01',
    rentAmount: 3000,
    status: 'active',
  },
];

// Mock Maintenance Requests
export const mockMaintenanceRequests: MaintenanceRequest[] = [
  {
    id: '1',
    propertyId: '1',
    unitId: '1',
    tenantId: '1',
    title: 'Leaky Faucet',
    description: 'Kitchen faucet is leaking and needs repair',
    priority: 'medium',
    status: 'pending',
    createdAt: '2024-03-20T10:00:00Z',
    updatedAt: '2024-03-20T10:00:00Z',
  },
  {
    id: '2',
    propertyId: '2',
    unitId: '3',
    tenantId: '3',
    title: 'AC Not Working',
    description: 'Air conditioning unit is not cooling properly',
    priority: 'high',
    status: 'in_progress',
    createdAt: '2024-03-19T15:30:00Z',
    updatedAt: '2024-03-20T09:00:00Z',
  },
];

// Mock Rent Payments
export const mockRentPayments: RentPayment[] = [
  {
    id: '1',
    tenantId: '1',
    propertyId: '1',
    unitId: '1',
    amount: 2500,
    date: '2024-03-01',
    status: 'paid',
    paymentMethod: 'bank_transfer',
  },
  {
    id: '2',
    tenantId: '2',
    propertyId: '1',
    unitId: '2',
    amount: 2300,
    date: '2024-03-01',
    status: 'paid',
    paymentMethod: 'credit_card',
  },
  {
    id: '3',
    tenantId: '3',
    propertyId: '2',
    unitId: '3',
    amount: 3000,
    date: '2024-03-01',
    status: 'late',
    paymentMethod: 'pending',
  },
]; 