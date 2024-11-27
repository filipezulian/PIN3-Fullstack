  const tokenStore: Record<number, string> = {};
  
  export const setToken = (userId: number, accessToken: string): void => {
    tokenStore[userId] = accessToken;
  };
  
  export const getToken = (userId: number): string | null => {
    return tokenStore[userId] || null;
  };
  
  export const deleteToken = (userId: number): void => {
    delete tokenStore[userId];
  };
  
  export const getTokenStore = (): Record<number, string> => {
    return tokenStore;
  };