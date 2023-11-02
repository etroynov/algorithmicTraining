const getBalanceByCategoryInPeriod = require('./solution');

const data = [
  {
    id: '11ff73b5-e771-441c-886a-498d93b5093d',
    sourceAccount: 'my_account',
    targetAccount: 'restaurant',
    amount: -4600,
    currency: 'EUR',
    category: 'eating_out',
    time: '2021-04-08T05:15:56.905Z',
  },
  {
    id: '8c3ec38d-1821-4d49-aef1-2385cb3c2b1b',
    sourceAccount: 'my_account',
    targetAccount: 'cinema',
    amount: -5700,
    currency: 'EUR',
    category: 'entertainment',
    time: '2021-04-07T21:16:57.819Z',
  },
  {
    id: 'd1c77d7c-ccda-453c-ac01-444e9d5abca3',
    sourceAccount: 'my_account',
    targetAccount: 'book_store',
    amount: -7400,
    currency: 'EUR',
    category: 'entertainment',
    time: '2021-04-07T22:46:44.071Z',
  },
  {
    id: '837127ab-f523-4b11-bed3-ae488be4545d',
    sourceAccount: 'my_account',
    targetAccount: 'fitness_club',
    amount: -9200,
    currency: 'EUR',
    category: 'sports',
    time: '2021-04-05T01:50:16.646Z',
  },
  {
    id: '837127ab-f523-4b11-bed3-ae488be4545d',
    sourceAccount: 'my_account',
    targetAccount: 'fitness_club',
    amount: -400,
    currency: 'EUR',
    category: 'sports',
    time: '2021-04-05T01:55:16.646Z',
  },
];

describe('getBalanceByCategoryInPeriod()', () => {
  it('should throw an error if categories is not an array', () => {
    expect(() => getBalanceByCategoryInPeriod(data)).toThrow();
  });

  it('should returns 0 if there are no transactions matching a category in specified period', () => {
    const result = getBalanceByCategoryInPeriod(
      data,
      ['shopping'],
      new Date('2021-03-01'),
      new Date('2021-03-30')
    );

    expect(result).toEqual({ shopping: 0 });
  });

  describe('should returns the correct balance matching a category', () => {
    it('in specified period', () => {
      const result = getBalanceByCategoryInPeriod(
        data,
        ['sports', 'entertainment'],
        new Date('2021-04-01'),
        new Date('2021-04-30')
      );

      expect(result).toEqual({ sports: -9600, entertainment: -13100 });
    });

    it('in specified period,  start time (inclusive) and end time (exclusive)', () => {
      const result = getBalanceByCategoryInPeriod(
        data,
        ['sports'],
        new Date(data[data.length - 2].time),
        // .at(-1) :'(
        new Date(data[data.length - 1].time)
      );

      expect(result).toEqual({ sports: -9200 });
    });
  });
});
