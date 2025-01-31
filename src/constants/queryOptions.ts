import { UseQueryOptions } from "react-query";

export const queryOptions: UseQueryOptions = {
  staleTime: 1000 * 60 * 5,
};