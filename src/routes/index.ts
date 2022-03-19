import Loading from '../pages/Loading'
import Loadable from 'react-loadable'

export const FormPage = Loadable({
  loader: () => import('../pages/FormPage'),
  loading: Loading
})

export const PreviewPage = Loadable({
  loader: () => import('../pages/PreviewPage'),
  loading: Loading
})

export const NoMatch = Loadable({
  loader: () => import('../pages/NoMatchPage'),
  loading: Loading
})
