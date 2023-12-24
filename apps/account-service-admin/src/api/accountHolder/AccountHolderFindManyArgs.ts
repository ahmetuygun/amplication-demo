import { AccountHolderWhereInput } from "./AccountHolderWhereInput";
import { AccountHolderOrderByInput } from "./AccountHolderOrderByInput";

export type AccountHolderFindManyArgs = {
  where?: AccountHolderWhereInput;
  orderBy?: Array<AccountHolderOrderByInput>;
  skip?: number;
  take?: number;
};
