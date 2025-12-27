const UserData = [
    {
        first_name: "saurav",
        last_name: "sharma",
        email_id: "saurav@gmail.com",
        password: "saurav@123",
        phone_no: 9876543210,
        records: [
            {
                date: new Date("2025-07-01"),
                data: 14.5,
            },
        ],
    },
    {
        first_name: "rupa",
        last_name: "darling",
        email_id: "rupali@nepali@gmail.com",
        password: "rupa@123",
        phone_no: 8765493210,
        records: [
            {
                date: new Date("2025-06-02"),
                data: 12,
            },
        ],

    },
    {
        first_name: "vasu",
        last_name: "reddi",
        email_id: "vasu@reddi@gmail.com",
        password: "vasu@123",
        phone_no: 8796543210,
        records: [
            {
                date: new Date("2025-05-03"),
                data: 13.5,
            },
        ],
    },
];

module.exports = { data: UserData };