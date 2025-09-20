import { PredictRequest, PredictResponse } from '@/types';

import { AxiosResponse } from 'axios';

import { createInstance } from './create-instance';

export class PredictApi {
  private static instance = createInstance('/predict');

  public static predict(
    data: PredictRequest,
  ): Promise<AxiosResponse<PredictResponse>> {
    return this.instance.post('/', data);
  }
}
