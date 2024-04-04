import React from 'react';

const ListRender = () => {
    const stunames=["Vamsi","meera","vinay","Shaid","roopa","sujitha"]
    return (
        <div>
            {
                stunames.map((Sname)=><li>{Sname}</li>)
            }
        </div>
    );
};

export default ListRender;