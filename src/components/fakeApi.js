

const db = {
    invoices: [
        {
            id: '17721',
            recipient: 'Jacob Mercer',
            account: '1',
            total: 77867,
            date: {
                created: '2011-10-05T14:48:00.000Z',
                due: '2011-10-12T00:00:00.000Z',
            },
        },
        {
            id: '72735',
            recipient: 'Conor McGregor',
            account: '3591',
            total: 7637,
            date: {
                created: `2011-10-05T14:48:00.000Z`,
                due: '2011-10-12T00:00:00.000Z'
            },
        },
        {
            id: '97545',
            recipient: 'John Conor',
            account: '541616',
            total: 745,
            date: {
                created: `2774-10-05T14:48:00.000Z`,
                due: '2275-10-12T00:00:00.000Z',
            },
        },
        {
            id: '77534',
            recipient: 'Sara Conor',
            account: '5416',
            total: 10525,
            date: {
                created: `2011-10-05T14:48:00.000Z`,
                due: '2011-10-12T00:00:00.000Z',
            },
        },
        {
            id: '75534',
            recipient: 'Chert Vasechkin',
            account: '89984495',
            total: 500,
            date: {
                created: `2011-10-05T14:48:00.000Z`,
                due: '2011-10-12T00:00:00.000Z',
            },
        },
    ]
}

export const getInvoices = () => {
    return Promise.resolve(db.invoices);
};

export const getInvoiceById = invoiceId => {
    return Promise.resolve(db.invoices.find(invoice => invoice.id === invoiceId));
}