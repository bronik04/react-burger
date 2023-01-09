import {RootState} from "../store";

export const selectFillings = (state: RootState) => state.burger.fillings;
export const selectBun = (state: RootState) => state.burger.bun;
export const selectBurger = (state: RootState) => state.burger;
