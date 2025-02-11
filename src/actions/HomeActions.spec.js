import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { HomeActions, HomeActionTypes } from '@actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Home action tests', () => {
  test('Map test', async () => {
    const store = mockStore();

    const expectedActions = [
      {
        payload: {
          version: 2
        },
        type: HomeActionTypes.SetReducer
      }
    ];

    store.dispatch(
      HomeActions.Map({
        version: 2
      })
    );

    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Reset test', async () => {
    const store = mockStore({
      home: {
        version: 1
      }
    });

    const expectedActions = [
      {
        type: HomeActionTypes.ResetReducer
      }
    ];

    store.dispatch(HomeActions.Reset());

    expect(store.getActions()).toEqual(expectedActions);
  });

  test('GetApod test', async () => {
    const store = mockStore({});

    const expectedActions = [
      {
        payload: {
          image: {
            copyright: 'Pankod',
            date: '2019-05-23',
            explanation: '',
            hdurl: '',
            media_type: '',
            service_version: '',
            title: '',
            url: ''
          }
        },
        type: HomeActionTypes.SetReducer
      }
    ];

    // eslint-disable-next-line
		await store.dispatch(HomeActions.GetApod({ params: { hd: true } }));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
