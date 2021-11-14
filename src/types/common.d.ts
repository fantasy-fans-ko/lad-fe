type ApiRes<T> = {
  timestamp?: number;
  status: number;
  statusText: string;
  success: boolean;
  code: string;
  message: string;
  errors?: unknown[];
  data?: T;
  totalPages?: number;
  pagination?: {
    page_number: number;
    page_size: number;
    sort: string;
    total_page: number;
    total_elements: number;
  };
};
