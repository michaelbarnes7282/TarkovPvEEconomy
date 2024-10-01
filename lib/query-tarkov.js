import { request, gql } from 'graphql-request';
// graphql-request documentation found here: https://www.npmjs.com/package/graphql-request

// tarkov-dev graphql endpoint docs found here: https://api.tarkov.dev (click book icon at the top left)
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

// tarkov-dev docs found here: https://tarkov.dev/api
export async function queryTarkovDev(body) {
  const query = gql`{ ${body} }`;

  return await request('https://api.tarkov.dev/graphql', query).then(data => data);
}

export async function queryBarterItems() {
  const barters = await queryTarkovDev(`
    barters(${DEFAULT_FIELDS}) {${BARTER_ARGS}}
  `);
  console.log('barters: ', barters); // TODO - only log with verbose flag?
  return barters;
}

export async function queryCraftItems() {
  const crafts = await queryTarkovDev(`
    crafts(${DEFAULT_FIELDS}) {${CRAFT_ARGS}}
  `);
  console.log('crafts: ', crafts); // TODO - only log with verbose flag?
  return crafts;
}

export async function queryResaleItems() {
  const resales = await queryTarkovDev(`
    traders(${DEFAULT_FIELDS}) {${CASH_OFFERS_ARGS}}
  `);

  console.log('resales: ', resales); // TODO - only log with verbose flag?
  return resales;
}
