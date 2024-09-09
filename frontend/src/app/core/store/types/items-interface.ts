import { Item } from '../../models/items.model';

export interface ItemsStateInterface {
  areItemsLoaded: boolean;
  isLoading: boolean;
  items: Item[];
  error: string | null;
}
