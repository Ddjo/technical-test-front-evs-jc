import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Item } from '../../models/items.model';

export const ItemsActions = createActionGroup({
  source: 'Items',
  events: {
    'Get All Items':  emptyProps(), 
    'Get All Items Success': props<{ items: Item[] }>(),
    'Get All Items Failure': props<{ error: string }>(),
    'Create Item': props<{ item:Item }>(),
    'Create Item Success': props<{ item : Item }>(),
    'Create Item Failure': props<{  error: string  }>(),
  },
});