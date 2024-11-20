import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IPopupDelete {
 id: string;
 isActive: boolean;
}

const initialState: IPopupDelete = {
 id: '',
 isActive: false,
};

const PopupDeleteSlice = createSlice({
 name: 'popupDelete',
 initialState,
 reducers: {
  addId: (state, action: PayloadAction<string>) => {
   state.id = action.payload;
   state.isActive = true;
  },
  closePopupDelete: (state) => {
   state.isActive = false;
  },
 },
});

export const { addId, closePopupDelete } = PopupDeleteSlice.actions;

export default PopupDeleteSlice.reducer;
