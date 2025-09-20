import { useMutation } from '@tanstack/react-query';

import { PredictApi } from '@/api';

export const usePredictController = () => {
  return useMutation({
    mutationFn: PredictApi.predict.bind(PredictApi),
  });
};
