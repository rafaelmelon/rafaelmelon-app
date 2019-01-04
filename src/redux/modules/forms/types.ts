export const enum FormsActionTypes {
  FORM_RESET = '@@forms/FORM_RESET',
  FORM_REQUEST = '@@forms/FORM_REQUEST',
  FORM_SUCCESS = '@@forms/FORM_SUCCESS',
  FORM_FAILURE = '@@forms/FORM_FAILURE',
}

export interface FormsState {
  readonly success: string | null;
  readonly error: any;
  readonly sending: boolean;
}
