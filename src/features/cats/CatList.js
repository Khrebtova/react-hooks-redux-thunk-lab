import React from 'react';

const CatList = ({catPics}) => {
            
    return (
        <div>
            {catPics.map((catPic) => <img src={catPic.url} alt="cat" key={catPic.id}/>)}
        </div>
    )
}

export default CatList;