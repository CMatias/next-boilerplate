import { HomeActionTypes } from '@actions';

import { HomeReducer } from './home';

describe('home reducer', () => {
  it('should return the initial state', () => {
    expect(HomeReducer(undefined, {})).toEqual({
      home: {
        version: 1
      }
    });
  });

  it('should handle SetReducer', () => {
    expect(
      HomeReducer([], {
        type: HomeActionTypes.SetReducer,
        payload: {
          version: 2
        }
      })
    ).toEqual({
      version: 2
    });
  });

  it('should handle ResetReducer', () => {
    expect(
      HomeReducer([], {
        type: HomeActionTypes.ResetReducer
      })
    ).toEqual({
      home: {
        version: 1
      }
    });
  });
});
