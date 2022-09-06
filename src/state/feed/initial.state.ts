export interface IFeedState {
  data: Array<any>;
  ui: {
    loading: boolean;
    error: string | null;
  };
}

const initialState = {
  data: [],
  ui: {
    loading: false,
    error: false,
  },
} as unknown as IFeedState;

export default initialState;
