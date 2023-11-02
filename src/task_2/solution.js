/**
 * Categorize similar transactions
 *
 * @typedef {Object} Transaction
 * @property {string} id
 * @property {string} sourceAccount
 * @property {string} targetAccount
 * @property {number} amount
 * @property {string} currency
 * @property {string?} category
 * @property {Date} time
 *
 *
 * @param {Transaction[]} transactions
 * @returns {Transaction[]}
 */
const categorizeSimilarTransactions = (transactions) => {
  // A copy is not necessary, it is just a protection against modification of the original array
  const copy = [...transactions];
  const cat = copy.filter((t) => t.category);
  const uncat = copy.filter((t) => !t.category);

  for (const ut of uncat) {
    let min = Infinity;

    for (const t of cat) {
      if (t.targetAccount === ut.targetAccount) {
        const diff = Math.abs(t.amount - ut.amount);

        if (diff < min && diff < 1000) {
          min = diff;
          ut.category = t.category;
        }
      }
    }
  }

  return copy;
};

module.exports = categorizeSimilarTransactions;
