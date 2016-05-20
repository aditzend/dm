AccountsTemplates.configure({
  //defaultTemplate: 'myCustomFullPageAtForm',
  defaultLayout: 'AT_layout',
  defaultLayoutType: 'blaze',
  defaultLayoutRegions: {},
  defaultContentRegion: 'main'
});

T9n.setLanguage('es');

AccountsTemplates.configure({
  // Behavior
  confirmPassword: false,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: false,
  focusFirstInput: true,

  // Appearance
  showAddRemoveServices: false,
  showForgotPasswordLink: true,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,

  // Client-side Validation
  continuousValidation: true,
  negativeFeedback: true,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,

  // Privacy Policy and Terms of Use
  privacyUrl: 'privacy',
  termsUrl: 'terms-of-use',

  // Redirects
  homeRoutePath: '/',
  redirectTimeout: 4000,

  // Hooks
  /*onLogoutHook: myLogoutFunc,
  onSubmitHook: mySubmitFunc,
  preSignUpHook: myPreSubmitFunc,
  postSignUpHook: myPostSubmitFunc,*/

  // Texts
  /*texts: {
    button: {
        signUp: "Register Now!"
    },
    socialSignUp: "Register",
    socialIcons: {
        "meteor-developer": "fa fa-rocket"
    },
    title: {
        forgotPwd: "Recover Your Password"
    },
  },*/
});
