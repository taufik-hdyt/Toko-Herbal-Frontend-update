import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispath } from "../redux/store";

export const useAppDispatch: () => AppDispath = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
