import { createSlice } from '@reduxjs/toolkit';

// state의 초기값 (유저 정보)
const initialState = {
  id: '',
  name: '',
  nickname: '',
  mode: '',
};

// 유저 Slice 생성
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.nickname = action.payload.nickname;
      state.mode = action.payload.mode;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

// actions
//dispatch로 액션을 전달해 상태를 어떻게 변화시킬지를 결정함
export const { setUser, setMode } = userSlice.actions;

//reducer
export default userSlice.reducer;
