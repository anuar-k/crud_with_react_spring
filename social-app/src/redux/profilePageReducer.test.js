import profilePageReducer, {addPostActionCreator} from "./profilePageReducer";

let initialState = {
    newPostText: "default text",
    profile: null,
    posts: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 4
        },
        {
            id: 2,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 10
        },
        {
            id: 3,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 5
        },
        {
            id: 4,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 12
        },
        {
            id: 5,
            message: "tt",
            likesCount: 90
        }
    ],
    index: 10,
    status: null
};

it('posts length should be', () => {
    const action = addPostActionCreator("testText")
    const newState = profilePageReducer(initialState, action)
    expect(newState.posts.length).toBe(6)
});


it('posts should contains text', () => {
    const action = addPostActionCreator("testText")
    const newState = profilePageReducer(initialState, action)
    expect(newState.posts[newState.posts.length - 1].message).toBe("testText")
});


// it('post should be deleted', () => {
//     const action = deletePostActionCreator(6)
    // const newState = profilePageReducer(initialState, action)
    // expect(newState.posts[newState.posts.length - 1].message).toBe("testText")
// });