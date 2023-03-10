import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.swipeable || initialState;

export const selectOpen = createSelector(
  [selectDomain],
  swipeableState => swipeableState.open,
);
