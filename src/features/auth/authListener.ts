import { useEffect } from 'react';
import  auth  from '@config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from '@features/auth/authSlice';
import { mapFirebaseUser }  from '@utils/firebaseHelper';
import  useAppDispatch  from '@hooks/useAppDispatch';

const useAuthListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) return;
      dispatch(setUser(mapFirebaseUser(user)));
    });

    return () => unsubscribe();
  }, [dispatch]);
};

export default useAuthListener;