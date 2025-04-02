import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

interface PageProps {
  params: { [key: string]: string | string[] };
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: PageProps) {
  // Await the searchParams if it's a Promise
  const resolvedSearchParams = searchParams instanceof Promise ? await searchParams : searchParams;
  
  // Now safely access the query property
  const queryParam = resolvedSearchParams.query;
  const query = typeof queryParam === 'string' ? queryParam : 
                Array.isArray(queryParam) ? queryParam[0] || '' : '';
  
  const customers = await fetchFilteredCustomers(query);
  
  return <CustomersTable customers={customers} />;
}