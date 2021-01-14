import { NowRequest, NowResponse } from '@vercel/node';

export default (request: NowRequest, response: NowResponse) => {
  response.status(200).json({
    requestStr: JSON.stringify(request),
    responseStr: JSON.stringify(response),
    response,
    request,
  });
};
