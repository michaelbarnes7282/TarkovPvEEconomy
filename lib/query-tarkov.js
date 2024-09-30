import { request, gql } from 'graphql-request';

// WIP
export const CRAFT_FIELDS = "";
export const RESALE_FIELDS = "";
export const BARTER_FIELDS = "";

export function queryTarkovDev(body) {
  const query = gql`{ ${body} }`;
  console.log(`query: ${query}`);

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
