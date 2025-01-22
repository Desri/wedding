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
  upload: {
    image: 'https://api.cloudinary.com/v1_1/doebhykyu/image/upload',
  },
  event: {
    createEvent: '/api/event/create-event',
    listEvent: '/api/event/list',
    detailEvent: '/api/event',
    updateSlideshow: '/api/event/slideshow-event',
    updateModeration: '/api/event/moderation',
    updateAppearance: '/api/event/appearance',
    updateWelcomeScreen: '/api/event/welcome-screen',
    updateGeneral: '/api/event/general',
  },
  album: {
    uploadImage: '/api/album/create-album',
    listAlbum: '/api/album',
    removeAlbum: '/api/album/remove'
  }
};
