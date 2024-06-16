import { HelloServiceClient } from './proto/hello_grpc_web_pb';
import { HelloRequest } from './proto/hello_pb';

const client = new HelloServiceClient('http://localhost:8080', null, null);

export const sayHello = (name) => {
  return new Promise((resolve, reject) => {
    const request = new HelloRequest();
    request.setName(name);

    client.sayHello(request, {}, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.getMessage());
      }
    });
  });
};

