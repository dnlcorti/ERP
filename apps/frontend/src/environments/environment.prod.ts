export const environment = {
  production: true,
  apiUrl: process.env['NG_APP_API_URL'] || '',
  jwtPublicKey: process.env['NG_APP_JWT_PUBLIC_KEY'] || ''
};
