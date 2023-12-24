import { AccountHolder as TAccountHolder } from "../api/accountHolder/AccountHolder";

export const ACCOUNTHOLDER_TITLE_FIELD = "id";

export const AccountHolderTitle = (record: TAccountHolder): string => {
  return record.id?.toString() || String(record.id);
};
