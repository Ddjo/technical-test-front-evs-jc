import { createReducer, on } from '@ngrx/store';
import { ItemsStateInterface } from '../types/items-interface';
import { ItemsActions } from './items.actions';

export const initialState: ItemsStateInterface = {
  areItemsLoaded: false,
  isLoading: false,
  items: [],
  error: null,
};


export const itemsReducer = createReducer(
  initialState,
  on(ItemsActions.getAllItems, (state) => ({ ...state, isLoading: true })),
  on(ItemsActions.getAllItemsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    areItemsLoaded: true,
    items: action.items,
  })),
  on(ItemsActions.getAllItemsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(ItemsActions.createItem, (state) => ({ ...state, isLoading: true })),
  on(ItemsActions.createItemSuccess, (state, { item }) =>    { 

    if (state.items.map(item => item.id).indexOf(item.id) > -1) return state;
    
    return {
      ...state,
      isLoading: false,
      items: [...state.items, item]
    }
  }),
  on(ItemsActions.getAllItemsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
);