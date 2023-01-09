import {RootState} from "../store";

export const selectOrderNumber = (state: RootState) => state.order.number;
export const selectOrderError = (state: RootState) => state.order.error;
