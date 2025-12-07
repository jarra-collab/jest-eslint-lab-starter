const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('Utility Functions', () => {

    test('capitalizeWords should capitalize the first letter of each word', () => {
        const result = capitalizeWords("hello world");
        expect(result).toBe("Hello World");
    });

    test('filterActiveUsers should return only active users', () => {
        const users = [
            { name: "Alice", isActive: true },
            { name: "Bob", isActive: false },
            { name: "Carol", isActive: true }
        ];

        const result = filterActiveUsers(users);
        expect(result).toEqual([
            { name: "Alice", isActive: true },
            { name: "Carol", isActive: true }
        ]);
    });

    test('logAction should return a message containing username and action', () => {
        const result = logAction("login", "Alice");

        expect(result).toMatch(/^User Alice performed login at .+/);
    });

});


