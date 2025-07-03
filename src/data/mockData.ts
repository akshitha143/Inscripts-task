import type { User } from "../types";

export const mockData: User[] = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Editor',
    status: 'Inactive',
  },
];
