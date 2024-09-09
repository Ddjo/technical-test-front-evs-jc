import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../types/app-state.interface';


export const selectFeature = (state: AppStateInterface) => state.items;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const areItemsLoaded = createSelector(
    selectFeature,
    (state) => state.areItemsLoaded
  );

export const itemsSelector = createSelector(
  selectFeature,
  (state) => state.items
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
