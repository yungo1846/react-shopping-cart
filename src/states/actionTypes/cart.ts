import { AxiosError } from 'axios';

export interface cartRequestAction {
  type: typeof REQUEST;
}

export interface cartSuccessAction {
  type: typeof REQUEST_SUCCESS;
  payload?: CartItem[] | any;
}

export interface cartFailureAction {
  type: typeof REQUEST_FAILURE;
  error: AxiosError;
}

export interface cartChangeQuantity {
  type: typeof CHANGE_QUANTITY;
  payload?: CartItem[] | any;
}
export interface cartSelectItem {
  type: typeof SELECT_CART_ITEM;
  payload?: CartItem[] | any;
}

export type CartAction =
  | cartRequestAction
  | cartSuccessAction
  | cartFailureAction
  | cartChangeQuantity
  | cartSelectItem;

export const REQUEST = 'cart/REQUEST';
export const REQUEST_SUCCESS = 'cart/REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'cart/REQUEST_FAILURE';
export const CHANGE_QUANTITY = 'cart/CHANGE_QUANTITY';
export const SELECT_CART_ITEM = 'cart/SELECT_CART_ITEM';
export const SELECT_ALL_CART_ITEMS = 'cart/SELECT_ALL_CART_ITEMS';
