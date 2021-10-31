import Commerce from '@chec/commerce.js';
// Initialize new store
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);