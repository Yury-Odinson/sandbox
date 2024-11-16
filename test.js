const users = [
    {
        name: "user1",
        id: 23
    },
    {
        name: "user2",
        id: 1
    },
    {
        name: "user3",
        id: 15
    }
];

function getSortedUsers(arr) {
    const sorted = arr.sort((a, b) => a.id - b.id);
    const result = {};

    Object.defineProperty(result, "getSorted", {
        value: [...sorted],
        writable: false
    })
    return result;
}

const result = getSortedUsers(users);

console.log(result.getSorted);
