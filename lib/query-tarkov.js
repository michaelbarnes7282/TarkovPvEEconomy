import { request, gql } from 'graphql-request';

export function queryTarkovDev(body) {
  const query = gql`{ ${body} }`;

  request('https://api.tarkov.dev/graphql', query).then(data => {
    console.log(`data: ${data}`);
    return data;
  });
}
