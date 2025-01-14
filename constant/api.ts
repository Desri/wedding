export const api = {
  auth: {
    login: '/api/auth/signin',
    register: '/api/auth/signup',
    forgotPassword: '/api/auth/forgot-password',
    profile: '/api/profile',
    plan: 'api/add-plan',
    // verifyOtp: '/patient/otp/auth/verify',
    // resendOtp: '/patient/otp/auth/resend',
    // connect: '/patient/connect',
    // referralCode: '/referral/check',
  },
  event: {
    createEvent: '/api/event/create-event',
    listEvent: '/api/event/list',
    detailEvent: '/api/event',
    updateSlideshow: '/api/event/slideshow-event',
    updateModeration: '/api/event/moderation',
    updateAppearance: '/api/event/appearance',
    updateWelcomeScreen: '/api/event/welcome-screen'
  }
};
