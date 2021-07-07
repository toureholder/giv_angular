export const assert = (value: boolean) => {
  expect(value).toBeTruthy();
};

export interface UseValueProvider {
  provide: any;
  useValue: any;
}
