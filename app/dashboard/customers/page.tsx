import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

interface PageProps {
  params: { [key: string]: string | string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: PageProps) {
  const query = typeof searchParams.query === 'string' ? searchParams.query : '';
  
  const customers = await fetchFilteredCustomers(query);
  
  return <CustomersTable customers={customers} />;
}