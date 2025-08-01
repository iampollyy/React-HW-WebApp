import { useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '@store/store'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default useAppSelector