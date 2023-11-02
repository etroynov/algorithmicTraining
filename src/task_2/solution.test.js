const categorizeSimilarTransactions = require('./solution');

const initialData = [
  {
    id: 'a001bb66-6f4c-48bf-8ae0-f73453aa8dd5',
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -620,
    time: '2021-04-10T10:30:00Z',
  },
  {
    id: 'bfd6a11a-2099-4b69-a7bb-572d8436cf73',
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -350,
    category: 'eating_out',
    time: '2021-03-12T12:34:00Z',
  },
];

describe('categorizeSimilarTransactions()', () => {
  // These are example tests. Please add your own tests if needed
  it('should returns empty array if transactions list is empty', () => {
    expect(categorizeSimilarTransactions([])).toEqual([]);
  });

  it('should enhances categorization when there are similar transactions', () => {
    const result = categorizeSimilarTransactions(initialData);

    expect(result).toEqual([
      {
        id: 'a001bb66-6f4c-48bf-8ae0-f73453aa8dd5',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        category: 'eating_out',
        amount: -620,
        time: '2021-04-10T10:30:00Z',
      },
      {
        id: 'bfd6a11a-2099-4b69-a7bb-572d8436cf73',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -350,
        category: 'eating_out',
        time: '2021-03-12T12:34:00Z',
      },
    ]);
  });

  it('should keep order of transactions', () => {
    const ids = categorizeSimilarTransactions([
      ...initialData,
      {
        id: 'a001bb66-6f4c-48bf-8ae0-f73453aa8dd3',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -220,
        time: '2021-04-10T10:30:00Z',
      },
    ]).map((t) => t.id);

    expect(ids).toEqual([
      'a001bb66-6f4c-48bf-8ae0-f73453aa8dd5',
      'bfd6a11a-2099-4b69-a7bb-572d8436cf73',
      'a001bb66-6f4c-48bf-8ae0-f73453aa8dd3',
    ]);
  });

  it('should not enhances categorization when there are no similar transactions', () => {
    const data = [
      {
        id: 'a001bb66-6f4c-48bf-8ae0-f73453aa8dd5',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        category: 'eating_out',
        amount: -620,
        time: '2021-04-10T10:30:00Z',
      },
      {
        id: 'bfd6a11a-2099-4b69-a7bb-572d8436cf73',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -350,
        category: 'eating_out',
        time: '2021-03-12T12:34:00Z',
      },
      {
        id: 'a8170ced-1c5f-432c-bb7d-867589a9d4b8',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -1690,
        time: '2021-04-12T08:20:00Z',
      },
    ];

    const result = categorizeSimilarTransactions(data);

    expect(result).toEqual(data);
  });

  it('should not update the category with similar transaction but different targetAccount', () => {
    const result = categorizeSimilarTransactions([
      ...initialData,
      {
        id: 'a8170ced-1c5f-432c-bb7d-867589a9d4b8',
        sourceAccount: 'my_account',
        targetAccount: 'other',
        amount: -590,
        time: '2021-04-12T08:20:00Z',
      },
    ]);

    expect(result).toEqual([
      {
        id: 'a001bb66-6f4c-48bf-8ae0-f73453aa8dd5',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        category: 'eating_out',
        amount: -620,
        time: '2021-04-10T10:30:00Z',
      },
      {
        id: 'bfd6a11a-2099-4b69-a7bb-572d8436cf73',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -350,
        category: 'eating_out',
        time: '2021-03-12T12:34:00Z',
      },
      {
        id: 'a8170ced-1c5f-432c-bb7d-867589a9d4b8',
        sourceAccount: 'my_account',
        targetAccount: 'other',
        amount: -590,
        time: '2021-04-12T08:20:00Z',
      },
    ]);
  });
});
