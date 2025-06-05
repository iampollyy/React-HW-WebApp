import { useEffect } from 'react';
import { auth } from '@config';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from '@features';
import { mapFirebaseUser } from '@utils';
import { useAppDispatch } from '@hooks';

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