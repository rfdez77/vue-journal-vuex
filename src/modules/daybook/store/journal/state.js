
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vitae velit eveniet magni totam voluptas delectus est in adipisci ipsam nostrum, exercitationem praesentium perspiciatis, eaque voluptate quaerat vel placeat hic.m',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Laudantium vitae velit eveniet magni totam voluptas delectus est in adipisci ipsam nostrum, exercitationem praesentium perspiciatis, eaque voluptate quaerat vel placeat hic.mLorem ipsum dolor sit amet consectetur adipisicing elit.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Adipisci ipsam nostrum, exercitationem praesentium perspiciatis, eaque voluptate quaerat vel placeat hic.mLorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vitae velit eveniet magni totam voluptas delectus est in.',
            picture: null
        }
    ]
})