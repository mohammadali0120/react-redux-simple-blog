import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  message: string;
}
const initialState: State = {
  message:
    "سلام شما در صفحه اصلی هستید لطفا برای جابجایی بین صفحات از منوی بالا استفاده کنید.",
};

export const homeSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    changeMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const { changeMessage } = homeSlice.actions;
export default homeSlice.reducer;
