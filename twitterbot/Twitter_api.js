
const twitter = { key : "bidule"};
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

export async function getTweetsFromIdUser(id_user){

    var requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    
    fetch("https://api.twitter.com/1.1/statuses/user_timeline.json?user_id="+id_user, requestOptions)
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
            author: "Ayoub",
            content: "Worl hello, i am a #bot",
            hastag: ["bot", "truc"]
        }
    ];


}
