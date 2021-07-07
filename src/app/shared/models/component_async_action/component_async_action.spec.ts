import {
  ComponentAsyncAction,
  AsyncActionState,
} from './component_async_action';

describe('ComponentAsyncAction', () => {
  let action: ComponentAsyncAction;

  beforeEach(() => {
    action = new ComponentAsyncAction();
  });

  it('should start in READY state', () => {
    expect(action.state).toBe(AsyncActionState.READY);
  });

  it('#isReady should be true only if action is in READY state', () => {
    expect(action.isReady).toBe(true);

    expect(action.isLoading).toBe(false);
    expect(action.isSuccess).toBe(false);
    expect(action.isError).toBe(false);
  });

  it('#isLoading should be true only if action is in LOADING state', () => {
    // When
    action.state = AsyncActionState.LOADING;

    // THen
    expect(action.isLoading).toBe(true);

    expect(action.isReady).toBe(false);
    expect(action.isSuccess).toBe(false);
    expect(action.isError).toBe(false);
  });

  it('#isSuccess should be true only if action is in SUCCESS state', () => {
    // When
    action.state = AsyncActionState.SUCCESS;

    // THen
    expect(action.isSuccess).toBe(true);

    expect(action.isLoading).toBe(false);
    expect(action.isReady).toBe(false);
    expect(action.isError).toBe(false);
  });

  it('#isError should be true only if action is in ERROR state', () => {
    // When
    action.state = AsyncActionState.ERROR;

    // THen
    expect(action.isError).toBe(true);

    expect(action.isLoading).toBe(false);
    expect(action.isReady).toBe(false);
    expect(action.isSuccess).toBe(false);
  });
});
