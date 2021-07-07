export class ComponentAsyncAction {
  state: AsyncActionState;

  constructor() {
    this.state = AsyncActionState.READY;
  }

  public get isReady(): boolean {
    return this.state === AsyncActionState.READY;
  }

  public get isLoading(): boolean {
    return this.state === AsyncActionState.LOADING;
  }

  public get isSuccess(): boolean {
    return this.state === AsyncActionState.SUCCESS;
  }

  public get isError(): boolean {
    return this.state === AsyncActionState.ERROR;
  }
}

export enum AsyncActionState {
  READY,
  LOADING,
  SUCCESS,
  ERROR,
}
