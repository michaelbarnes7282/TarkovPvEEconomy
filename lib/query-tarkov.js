import { request, gql } from 'graphql-request';

// WIP - add required fields to build out tables
const CRAFT_FIELDS = "";
const RESALE_FIELDS = "";
const BARTER_FIELDS = "";

export function queryTarkovDev(body) {
  const query = gql`{ ${body} }`;
  console.log(`query: ${query}`);

  request('https://api.tarkov.dev/graphql', query).then(data => {
    console.log(`data: ${data}`);
    return data;
  });
}

export function queryItems(ids, fields) {
  return queryTarkovDev(`
    items(ids: [${ids}], gameMode: pve) {${fields}}
  `);
};

export function queryBarterItems() {
  barterIds = queryTarkovDev(`
    barters(gameMode: pve) {
      id
    }
  `);

  return queryItems(barterIds, BARTER_FIELDS);
}

export function queryCraftItems() {
  craftIds = queryTarkovDev(`
    crafts(gameMode: pve) {
      id
    }
  `);

  return queryItems(craftIds, CRAFT_FIELDS);
}

export function queryResaleItems() {
  resaleIds = ""; // WIP - figure out how to query only items that are sold by traders

  return queryItems(resaleIds, RESALE_FIELDS);
}
