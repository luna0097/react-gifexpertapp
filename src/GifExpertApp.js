import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const title = 'GifExpertApp';

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
        // setCategories(['HunterXHunter', ...categories]);
        // setCategories( cats =>  ['HunterXHunter', ...cats]);
    // };

    return (
        <>
            <h2>{title}</h2>
            <AddCategory setCategory={setCategories}/>
            <hr></hr>

            <ol>
                {
                    categories.map( categorie => 
                        <GifGrid key={categorie} category={categorie}/>
                    )
                }
            </ol>
        </>
    );
}

// export default GifExpertApp;