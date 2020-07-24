const search_result = {
    id: 0,
    name: "Simon",
    content: ""
};
export async function searchUser(query){

    fetch( "url?query="+query )
        .then(response => response.json())
        .catch(error => console.warn("error", error));

    return search_result;
}

export async function getTweetsFromIdUser(user_id){

    var requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    
    fetch("https://api.twitter.com/1.1/statuses/user_timeline.json?user_id="+user_id, requestOptions)
        .then(response => response.json())
        .catch(error => console.log("error", error));
    return [
        {
            id: 0,
            author : "Simon",
            content : "Hello world"
        },
        {
            id: 1,
            author: "Simon",
            content: "Worl hello, i am a #bot",
            hastag: ["bot", "truc"]
        }
    ];
}

export async function postTweet(user_id, tweet){

    fetch("url?user_id="+user_id+"tweet="+tweet)
        .then(response => response.json())
        .catch(error => console.log("error", error));


}
