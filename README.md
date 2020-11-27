https://tree-rn-server.herokuapp.com/authentication/login-action

const inputs = useMemo(() => ([
  { name: 'username_email', label: t('global.email'), ref: createRef() },
  { name: 'password', label: t('global.password'), ref: createRef(), type: 'password' }
]), [])

https://tree-rn-server.herokuapp.com/authentication/signup-action

const inputs = useMemo(() => ([
  { name: 'name', label: t('global.name'), ref: createRef() },
  { name: 'surname', label: t('global.surname'), ref: createRef() },
  { name: 'email', label: t('global.email'), ref: createRef() },
  { name: 'password', label: t('global.password'), ref: createRef(), type: 'password' },
  { name: 'password_confirmation', label: t('global.confirm_password'), ref: createRef(), type: 'password' },
  { name: 'info_country', label: t('global.country'), ref: createRef() },
  { name: 'info_company', label: t('global.company'), ref: createRef() }
]), [])

https://colorhunt.co/