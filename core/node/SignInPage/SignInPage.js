"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignInPage = SignInPage;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Alert = _interopRequireDefault(require("@mui/material/Alert"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _Container = _interopRequireDefault(require("@mui/material/Container"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Typography2 = _interopRequireDefault(require("@mui/material/Typography"));
var _LoadingButton = _interopRequireDefault(require("@mui/lab/LoadingButton"));
var _GitHub = _interopRequireDefault(require("@mui/icons-material/GitHub"));
var _Password = _interopRequireDefault(require("@mui/icons-material/Password"));
var _Fingerprint = _interopRequireDefault(require("@mui/icons-material/Fingerprint"));
var _Apple = _interopRequireDefault(require("@mui/icons-material/Apple"));
var _styles = require("@mui/material/styles");
var _Google = _interopRequireDefault(require("./icons/Google"));
var _Facebook = _interopRequireDefault(require("./icons/Facebook"));
var _Twitter = _interopRequireDefault(require("./icons/Twitter"));
var _Instagram = _interopRequireDefault(require("./icons/Instagram"));
var _TikTok = _interopRequireDefault(require("./icons/TikTok"));
var _LinkedIn = _interopRequireDefault(require("./icons/LinkedIn"));
var _Slack = _interopRequireDefault(require("./icons/Slack"));
var _Spotify = _interopRequireDefault(require("./icons/Spotify"));
var _Twitch = _interopRequireDefault(require("./icons/Twitch"));
var _Discord = _interopRequireDefault(require("./icons/Discord"));
var _Line = _interopRequireDefault(require("./icons/Line"));
var _Auth = _interopRequireDefault(require("./icons/Auth0"));
var _MicrosoftEntra = _interopRequireDefault(require("./icons/MicrosoftEntra"));
var _Cognito = _interopRequireDefault(require("./icons/Cognito"));
var _GitLab = _interopRequireDefault(require("./icons/GitLab"));
var _Keycloak = _interopRequireDefault(require("./icons/Keycloak"));
var _Okta = _interopRequireDefault(require("./icons/Okta"));
var _FusionAuth = _interopRequireDefault(require("./icons/FusionAuth"));
var _context = require("../shared/context");
var _jsxRuntime = require("react/jsx-runtime");
var _Typography;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const mergeSlotSx = (defaultSx, slotProps) => {
  if (Array.isArray(slotProps?.sx)) {
    return [defaultSx, ...slotProps.sx];
  }
  if (slotProps?.sx) {
    return [defaultSx, slotProps?.sx];
  }
  return [defaultSx];
};
const getCommonTextFieldProps = (theme, baseProps = {}) => ({
  required: true,
  fullWidth: true,
  ...baseProps,
  slotProps: {
    ...baseProps.slotProps,
    htmlInput: {
      ...baseProps.slotProps?.htmlInput,
      sx: mergeSlotSx({
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
      }, typeof baseProps.slotProps?.htmlInput === 'function' ? {} : baseProps.slotProps?.htmlInput)
    },
    inputLabel: {
      ...baseProps.slotProps?.inputLabel,
      sx: mergeSlotSx({
        lineHeight: theme.typography.pxToRem(12),
        fontSize: theme.typography.pxToRem(14)
      }, typeof baseProps.slotProps?.inputLabel === 'function' ? {} : baseProps.slotProps?.inputLabel)
    }
  }
});
const IconProviderMap = new Map([['github', /*#__PURE__*/(0, _jsxRuntime.jsx)(_GitHub.default, {}, "github")], ['credentials', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Password.default, {}, "credentials")], ['google', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Google.default, {}, "google")], ['facebook', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Facebook.default, {}, "facebook")], ['passkey', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fingerprint.default, {}, "passkey")], ['twitter', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Twitter.default, {}, "twitter")], ['apple', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Apple.default, {}, "apple")], ['instagram', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Instagram.default, {}, "instagram")], ['tiktok', /*#__PURE__*/(0, _jsxRuntime.jsx)(_TikTok.default, {}, "tiktok")], ['linkedin', /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkedIn.default, {}, "linkedin")], ['slack', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Slack.default, {}, "slack")], ['spotify', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Spotify.default, {}, "spotify")], ['twitch', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Twitch.default, {}, "twitch")], ['discord', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Discord.default, {}, "discord")], ['line', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Line.default, {}, "line")], ['auth0', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Auth.default, {}, "auth0")], ['microsoft-entra-id', /*#__PURE__*/(0, _jsxRuntime.jsx)(_MicrosoftEntra.default, {}, "microsoft-entra-id")], ['cognito', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Cognito.default, {}, "cognito")], ['gitlab', /*#__PURE__*/(0, _jsxRuntime.jsx)(_GitLab.default, {}, "gitlab")], ['keycloak', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Keycloak.default, {}, "keycloak")], ['okta', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Okta.default, {}, "okta")], ['fusionauth', /*#__PURE__*/(0, _jsxRuntime.jsx)(_FusionAuth.default, {}, "fusionauth")]]);
/**
 *
 * Demos:
 *
 * - [Sign-in Page](https://mui.com/toolpad/core/react-sign-in-page/)
 *
 * API:
 *
 * - [SignInPage API](https://mui.com/toolpad/core/api/sign-in-page)
 */
function SignInPage(props) {
  const {
    providers,
    signIn,
    slots,
    slotProps,
    sx
  } = props;
  const theme = (0, _styles.useTheme)();
  const branding = React.useContext(_context.BrandingContext);
  const router = React.useContext(_context.RouterContext);
  const passkeyProvider = providers?.find(provider => provider.id === 'passkey');
  const credentialsProvider = providers?.find(provider => provider.id === 'credentials');
  const emailProvider = providers?.find(provider => provider.id === 'nodemailer');
  const [{
    loading,
    selectedProviderId,
    error,
    success
  }, setFormStatus] = React.useState({
    selectedProviderId: undefined,
    loading: false,
    error: '',
    success: ''
  });
  const callbackUrl = router?.searchParams.get('callbackUrl') ?? '/';
  const singleProvider = React.useMemo(() => providers?.length === 1, [providers]);
  const isOauthProvider = React.useCallback(provider => provider && provider !== 'credentials' && provider !== 'nodemailer' && provider !== 'passkey', []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    sx: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      ...sx
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      component: "main",
      maxWidth: "xs",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.paper',
          borderRadius: 1,
          p: 4,
          border: '1px solid',
          borderColor: (0, _styles.alpha)(theme.palette.grey[400], 0.4),
          boxShadow: theme.shadows[4]
        },
        children: [branding?.logo, slots?.title ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.title, {}) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography2.default, {
          variant: "h5",
          color: "textPrimary",
          sx: {
            my: theme.spacing(1),
            textAlign: 'center',
            fontWeight: 600
          },
          children: ["Sign in ", branding?.title ? `to ${branding.title}` : null]
        }), slots?.subtitle ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.subtitle, {}) : _Typography || (_Typography = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography2.default, {
          variant: "body2",
          color: "textSecondary",
          gutterBottom: true,
          textAlign: "center",
          children: "Welcome, please sign in to continue"
        })), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            mt: theme.spacing(1),
            width: '100%'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack.default, {
            spacing: 1,
            children: [error && isOauthProvider(selectedProviderId) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
              severity: "error",
              children: error
            }) : null, Object.values(providers ?? {}).filter(provider => isOauthProvider(provider.id)).map(provider => {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
                onSubmit: async event => {
                  event.preventDefault();
                  setFormStatus({
                    error: '',
                    selectedProviderId: provider.id,
                    loading: true
                  });
                  const oauthResponse = await signIn?.(provider, undefined, callbackUrl);
                  setFormStatus(prev => ({
                    ...prev,
                    loading: oauthResponse?.error ? false : prev.loading,
                    error: oauthResponse?.error
                  }));
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingButton.default, {
                  variant: "outlined",
                  type: "submit",
                  fullWidth: true,
                  size: "large",
                  disableElevation: true,
                  name: "provider",
                  color: "inherit",
                  loading: loading && selectedProviderId === provider.id,
                  value: provider.id,
                  startIcon: IconProviderMap.get(provider.id),
                  sx: {
                    textTransform: 'capitalize'
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                    children: ["Sign in with ", provider.name]
                  })
                }, provider.id)
              }, provider.id);
            })]
          }), passkeyProvider ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
            children: [singleProvider ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {
              sx: {
                mt: 2,
                mx: 0,
                mb: 1
              },
              children: "or"
            }), error && selectedProviderId === 'passkey' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
              sx: {
                my: 2
              },
              severity: "error",
              children: error
            }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
              component: "form",
              onSubmit: async event => {
                setFormStatus({
                  error: '',
                  selectedProviderId: passkeyProvider.id,
                  loading: true
                });
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const passkeyResponse = await signIn?.(passkeyProvider, formData, callbackUrl);
                setFormStatus(prev => ({
                  ...prev,
                  loading: false,
                  error: passkeyResponse?.error
                }));
              },
              children: [slots?.emailField ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.emailField, {
                ...slotProps?.emailField
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
                ...getCommonTextFieldProps(theme, {
                  label: 'Email',
                  placeholder: 'your@email.com',
                  id: 'email-passkey',
                  name: 'email',
                  type: 'email',
                  autoComplete: 'email-webauthn',
                  autoFocus: singleProvider,
                  ...slotProps?.emailField
                })
              }), slots?.submitButton ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.submitButton, {
                ...slotProps?.submitButton
              }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_LoadingButton.default, {
                type: "submit",
                fullWidth: true,
                size: "large",
                variant: "outlined",
                disableElevation: true,
                startIcon: IconProviderMap.get(passkeyProvider.id),
                color: "inherit",
                loading: loading && selectedProviderId === passkeyProvider.id,
                sx: {
                  mt: 3,
                  mb: 2,
                  textTransform: 'capitalize'
                },
                ...slotProps?.submitButton,
                children: ["Sign in with ", passkeyProvider.name || 'Passkey']
              })]
            })]
          }) : null, emailProvider ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
            children: [singleProvider ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {
              sx: {
                mt: 2,
                mx: 0,
                mb: 1
              },
              children: "or"
            }), error && selectedProviderId === 'nodemailer' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
              sx: {
                my: 2
              },
              severity: "error",
              children: error
            }) : null, success && selectedProviderId === 'nodemailer' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
              sx: {
                my: 2
              },
              severity: "success",
              children: success
            }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
              component: "form",
              onSubmit: async event => {
                event.preventDefault();
                setFormStatus({
                  error: '',
                  selectedProviderId: emailProvider.id,
                  loading: true
                });
                const formData = new FormData(event.currentTarget);
                const emailResponse = await signIn?.(emailProvider, formData, callbackUrl);
                setFormStatus(prev => ({
                  ...prev,
                  loading: false,
                  error: emailResponse?.error,
                  success: emailResponse?.success
                }));
              },
              children: [slots?.emailField ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.emailField, {
                ...slotProps?.emailField
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
                ...getCommonTextFieldProps(theme, {
                  label: 'Email',
                  placeholder: 'your@email.com',
                  name: 'email',
                  id: 'email-nodemailer',
                  type: 'email',
                  autoComplete: 'email-nodemailer',
                  autoFocus: singleProvider,
                  ...slotProps?.emailField
                })
              }), slots?.submitButton ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.submitButton, {
                ...slotProps?.submitButton
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingButton.default, {
                type: "submit",
                fullWidth: true,
                size: "large",
                variant: "outlined",
                disableElevation: true,
                id: "submit-nodemailer",
                color: "inherit",
                loading: loading && selectedProviderId === emailProvider.id,
                sx: {
                  mt: 3,
                  mb: 2,
                  textTransform: 'capitalize'
                },
                ...slotProps?.submitButton,
                children: "Sign in with Email"
              })]
            })]
          }) : null, credentialsProvider ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
            children: [singleProvider ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {
              sx: {
                mt: 2,
                mx: 0,
                mb: 1
              },
              children: "or"
            }), error && selectedProviderId === 'credentials' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
              sx: {
                my: 2
              },
              severity: "error",
              children: error
            }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
              component: "form",
              onSubmit: async event => {
                setFormStatus({
                  error: '',
                  selectedProviderId: credentialsProvider.id,
                  loading: true
                });
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const credentialsResponse = await signIn?.(credentialsProvider, formData, callbackUrl);
                setFormStatus(prev => ({
                  ...prev,
                  loading: false,
                  error: credentialsResponse?.error
                }));
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack.default, {
                direction: "column",
                spacing: 2,
                sx: {
                  mb: 2
                },
                children: [slots?.emailField ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.emailField, {
                  ...slotProps?.emailField
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
                  ...getCommonTextFieldProps(theme, {
                    label: 'Email',
                    placeholder: 'your@email.com',
                    id: 'email',
                    name: 'email',
                    type: 'email',
                    autoComplete: 'email',
                    autoFocus: singleProvider,
                    ...slotProps?.emailField
                  })
                }), slots?.passwordField ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.passwordField, {
                  ...slotProps?.passwordField
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
                  ...getCommonTextFieldProps(theme, {
                    name: 'password',
                    type: 'password',
                    label: 'Password',
                    id: 'password',
                    placeholder: '*****',
                    autoComplete: 'current-password',
                    ...slotProps?.passwordField
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack.default, {
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
                spacing: 1,
                sx: {
                  justifyContent: 'space-between'
                },
                children: [slots?.rememberMe ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.rememberMe, {
                  ...slotProps?.rememberMe
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
                  control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
                    name: "remember",
                    value: "true",
                    color: "primary",
                    sx: {
                      padding: 0.5,
                      '& .MuiSvgIcon-root': {
                        fontSize: 20
                      }
                    }
                  }),
                  label: "Remember me",
                  ...slotProps?.rememberMe,
                  slotProps: {
                    typography: {
                      color: 'textSecondary',
                      fontSize: theme.typography.pxToRem(14)
                    },
                    ...slotProps?.rememberMe?.slotProps
                  }
                }), slots?.forgotPasswordLink ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.forgotPasswordLink, {
                  ...slotProps?.forgotPasswordLink
                }) : null]
              }), slots?.submitButton ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.submitButton, {
                ...slotProps?.submitButton
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingButton.default, {
                type: "submit",
                fullWidth: true,
                size: "large",
                variant: "contained",
                disableElevation: true,
                color: "primary",
                loading: loading && selectedProviderId === credentialsProvider.id,
                sx: {
                  mt: 3,
                  mb: 2,
                  textTransform: 'capitalize'
                },
                ...slotProps?.submitButton,
                children: "Sign in"
              }), slots?.signUpLink ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
                sx: {
                  display: 'flex',
                  justifyContent: 'center'
                },
                children: slots?.signUpLink ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.signUpLink, {
                  ...slotProps?.signUpLink
                }) : null
              }) : null]
            })]
          }) : null]
        })]
      })
    })
  });
}
process.env.NODE_ENV !== "production" ? SignInPage.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The list of authentication providers to display.
   * @default []
   */
  providers: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired
  })),
  /**
   * Callback fired when a user signs in.
   * @param {AuthProvider} provider The authentication provider.
   * @param {FormData} formData The form data if the provider id is 'credentials'.\
   * @param {string} callbackUrl The URL to redirect to after signing in.
   * @returns {void|Promise<AuthResponse>}
   * @default undefined
   */
  signIn: _propTypes.default.func,
  /**
   * The props used for each slot inside.
   * @default {}
   * @example { emailField: { autoFocus: false } }
   * @example { passwordField: { variant: 'outlined' } }
   * @example { emailField: { autoFocus: false }, passwordField: { variant: 'outlined' } }
   */
  slotProps: _propTypes.default.shape({
    emailField: _propTypes.default.object,
    forgotPasswordLink: _propTypes.default.object,
    passwordField: _propTypes.default.object,
    rememberMe: _propTypes.default.object,
    signUpLink: _propTypes.default.object,
    submitButton: _propTypes.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   * @example { forgotPasswordLink: <Link href="/forgot-password">Forgot password?</Link> }
   * @example { signUpLink: <Link href="/sign-up">Sign up</Link> }
   */
  slots: _propTypes.default.shape({
    emailField: _propTypes.default.elementType,
    forgotPasswordLink: _propTypes.default.elementType,
    passwordField: _propTypes.default.elementType,
    rememberMe: _propTypes.default.elementType,
    signUpLink: _propTypes.default.elementType,
    submitButton: _propTypes.default.elementType,
    subtitle: _propTypes.default.elementType,
    title: _propTypes.default.elementType
  }),
  /**
   * The prop used to customize the styles on the `SignInPage` container
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
} : void 0;