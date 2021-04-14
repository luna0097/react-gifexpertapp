import { useEffect, useState } from 'react'
import { getGitfs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {
        getGitfs(category)
            .then( imgs => { 
                setState({
                    data: imgs,
                    loading: false,
                })
            });
    }, [category]);

    return state;
}
