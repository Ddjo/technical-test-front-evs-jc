import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, filter, map, mergeMap, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { ItemsService } from '../../services/item.service';
import { ItemsActions } from './items.actions';
import { routerNavigationAction } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { areItemsLoaded } from './items.selectors';
import { AppStateInterface } from '../types/app-state.interface';
import { Router } from '@angular/router';

export abstract class Wrapper {
    constructor(protected readonly actions$: Actions) {}
  }

@Injectable()
export class ItemsEffects extends Wrapper {

  // Effect on navigating to items list page
  getAllItemsOnItemsRoute$ = createEffect(() => { 
    return this.actions$.pipe(
      ofType(routerNavigationAction),   
      filter(({ payload }) =>payload.routerState.url === '/items'),
      switchMap(() => this.store.pipe(select(areItemsLoaded)).pipe(
        // If items list not already loaded, load it
        filter(areItemsLoaded => !areItemsLoaded),
        map(ItemsActions.getAllItems)
      ))
    )
  });

  getAllItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.getAllItems),
      exhaustMap(() =>
        this.itemsService.getAllItems().pipe(
          map(items => ItemsActions.getAllItemsSuccess({ items })),
          catchError(error => of(ItemsActions.getAllItemsFailure({ error })))
        )
      ) 
    )
  );

  createItem$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ItemsActions.createItem),
        exhaustMap(action =>
          this.itemsService.createItem(action.item).pipe(
            map(item => {
              this.router.navigate(['/items']);
              return ItemsActions.createItemSuccess({ item });
            }),
            catchError(error => of(ItemsActions.createItemFailure({ error })))
          )
        )
      )
    );
  
    constructor(actions$: Actions, 
      private itemsService : ItemsService, 
      private router: Router,
      private store:  Store<AppStateInterface>) {
      super(actions$);
  }

}