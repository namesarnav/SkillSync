import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/dashboard',
    authorizationParams: {
      connection: 'github', 
      prompt: 'login',
    },
  }),
  signup: handleLogin({
    returnTo: '/onboarding',
    authorizationParams: {
      screen_hint: 'signup',
    },
  }),
});