export interface DefaultResponse<T> {
  Count: number;
  Message: string;
  SearchCriteria?: any;
  Results: T;
}
