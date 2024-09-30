import { request, gql } from 'graphql-request';

const DEFAULT_FIELDS = 'lang: en, gameMode: pve';
const ITEM_ARG = `
  buyFor {
    priceRUB
  },
  iconLink,
  lastLowPrice,
  name
`;
const CONTAINED_ITEMS_ARG = `
  count,
  item {${ITEM_ARG}}
`;
const CRAFT_ARGS = `
  duration,
  level,
  requiredItems {${CONTAINED_ITEMS_ARG}},
  rewardItems {${CONTAINED_ITEMS_ARG}},
  station {
    name
  },
  taskUnlock {
    wikiLink
  }
`;
const CASH_OFFERS_ARGS = `
  cashOffers {
    buyLimit,
    item {${ITEM_ARG}},
    minTraderLevel,
    priceRUB,
    taskUnlock {
      wikiLink
    }
  }
`;
const BARTER_ARGS = `
  buyLimit,
  level,
  requiredItems {${CONTAINED_ITEMS_ARG}},
  rewardItems {${CONTAINED_ITEMS_ARG}},
  taskUnlock {
    wikiLink
  },
  trader {
    name
  }
`;

export function queryTarkovDev(body) {
  const query = gql`{ ${body} }`;
  console.log(`query: ${query}`);  // TODO - only log with verbose flag?

  request('https://api.tarkov.dev/graphql', query).then(data => {
    console.log(`data: ${data}`); // TODO - only log with verbose flag?
    return data;  // WIP - needs to return data asynchronously to not have a null value
  });
}

export function queryBarterItems() {
  const barters = queryTarkovDev(`
    barters(${DEFAULT_FIELDS}) {${BARTER_ARGS}}
  `);
  console.log(`barters: ${barters}`); // TODO - only log with verbose flag?
  return barters;
}

export function queryCraftItems() {
  const crafts = queryTarkovDev(`
    crafts(${DEFAULT_FIELDS}) {${CRAFT_ARGS}}
  `);
  console.log(`crafts: ${crafts}`); // TODO - only log with verbose flag?
  return crafts;
}

export function queryResaleItems() {
  const resales = queryTarkovDev(`
    traders(${DEFAULT_FIELDS}) {${CASH_OFFERS_ARGS}}
  `);

  console.log(`resales: ${resales}`); // TODO - only log with verbose flag?
  return resales;
}
