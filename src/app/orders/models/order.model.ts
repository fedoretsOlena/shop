import { Status } from './status.enum';

export interface IOrderModel {
  id?: number;
  userId: number;
  status?: Status;
  totalAmount: number;
  creationDate?: Date;
  products: number[];
}

export class OrderModel implements IOrderModel {
  constructor(
    options: IOrderModel,
    public id: number = options.id || +new Date(),
    public userId: number = options.userId || null,
    public status: Status = options.status || Status.MODERATING,
    public totalAmount: number = options.totalAmount || null,
    public creationDate: Date = options.creationDate || new Date(),
    public products: number[] = options.products || [],
  ) {
  }
}
