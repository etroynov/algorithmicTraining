/**
 * Check if the time is included in the specified period
 *
 * @param {string} time
 * @param {string} start
 * @param {string} end
 * @returns {boolean}
 */
const isItInTimeRange = (time, start, end) => {
  const current = Date.parse(time);
  const from = Date.parse(start);
  const to = Date.parse(end);

  return current >= from && current < to;
};

/**
 * Calculate the balance in each requested category within the specified time period.
 *
 * @typedef {Object} Transaction
 * @property {string} id
 * @property {string} sourceAccount
 * @property {string} itargetAccount
 * @property {number} amount
 * @property {string} currency
 * @property {string} category
 * @property {Date} time
 *
 * @param {Transaction[]} transactions
 * @param {string[]} categories
 * @param {string} start
 * @param {string} end
 */
const getBalanceByCategoryInPeriod = (transactions, categories, start, end) => {
  if (!Array.isArray(categories)) {
    throw new Error('Categories should be an array');
  }

  const res = categories.reduce((obj, prop) => {
    obj[prop] = 0;
    return obj;
  }, {});

  return transactions.reduce((acc, curr) => {
    if (
      categories.includes(curr.category) &&
      isItInTimeRange(curr.time, start, end)
    ) {
      acc[curr.category] += curr.amount;
    }

    return acc;
  }, res);
};

module.exports = getBalanceByCategoryInPeriod;
