import { request, gql } from 'graphql-request';

// WIP
const CRAFT_FIELDS = "";
const RESALE_FIELDS = "";
const BARTER_FIELDS = "";

export function queryTarkovDev(body) {
  const query = gql`{ ${body} }`;

  request('https://api.tarkov.dev/graphql', query).then(data => {
    console.log(`data: ${data}`);
    return data;
  });
}

export function queryItems(itemNames, fields) {
  return queryTarkovDev(`
    items(names: [${itemNames}], gameMode: pve) {${fields}}
  `);
};
