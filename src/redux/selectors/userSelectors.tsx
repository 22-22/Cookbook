import { RootStateOrAny } from 'react-redux';

export const selectAuth = (state: RootStateOrAny) => state.user.isAuthenticated;
export const selectError = (state: RootStateOrAny) => state.user.errorInfo;
export const selectUserInfo = (state: RootStateOrAny) => state.user.userInfo;
export const selectUserId = (state: RootStateOrAny) => state.user.userInfo.uid;