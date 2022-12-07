export const loginPending = () => ({
  type: 'login-pending',
});

export const loginFullfill = (data) => ({
  type: 'login-fullfill',
  payload: data,
});

export const loginError = () => ({
  type: 'login-error',
});

export const logout = () => ({
  type: 'logout',
})