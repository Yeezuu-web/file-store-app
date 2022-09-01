// ** Icon imports
import { AccountOutline, 
  GoogleCirclesExtended, 
  CreditCardOutline, 
  AccountCogOutline, 
  HomeOutline, 
  FormatLetterCase, 
  CubeOutline, 
  Table
} from 'mdi-material-ui'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'Users Manager',
      icon: AccountOutline,
      path: '/users'
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation




// {
//   sectionTitle: 'Pages'
// },
// {
//   title: 'Login',
//   icon: Login,
//   path: '/auth/login',
//   openInNewTab: true
// },
// {
//   title: 'Register',
//   icon: AccountPlusOutline,
//   path: '/auth/register',
//   openInNewTab: true
// },
// {
//   title: 'Error',
//   icon: AlertCircleOutline,
//   path: '/auth/error',
//   openInNewTab: true
// },