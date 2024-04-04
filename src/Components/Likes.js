import React,{ useState}from 'react';

const Likes = () => {
    const[Likes,setLikes]=useState(0);
    return (
        <div>
            <h2>Likes:{Likes}</h2>
            <button onClick={()=>setLikes(Likes+1)}>Likes</button>
            <button onClick={()=>setLikes(Likes-1)}>Dislike</button>
            <button onClick={()=>setLikes(Likes+5)}>5Likes</button>
        </div>
    );}


export default Likes;