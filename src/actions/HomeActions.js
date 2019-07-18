import { PlanetaryService } from '@services';

export const HomeActionTypes = {
  ResetReducer: 'Home_ResetReducer',
  SetReducer: 'Home_SetReducer'
};

export const HomeActions = {
  Map: payload => ({
    payload,
    type: HomeActionTypes.SetReducer
  }),

  Reset: () => ({
    type: HomeActionTypes.ResetReducer
  }),

  GetApod: payload => async dispatch => {
    const result = await PlanetaryService.GetPlanetImage({
      params: payload.params
    });

    dispatch({
      payload: {
        image: result
      },
      type: HomeActionTypes.SetReducer
    });
  }
};
