export interface IBaseResponse<T> {
  status: number;
  message: string;
  success: boolean;
  data?: T;
}
