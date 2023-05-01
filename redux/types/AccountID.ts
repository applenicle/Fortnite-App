type error = {
  code: string;
};

export interface AccountID {
  account_id: string;
  error?: error;
  result: boolean;
}
