import React, {useState} from 'react';
import classes from "./search.module.css";
import icon from '/public/images/icons8-search-50.png'

const Search = ({...props}) => {



    return (
        <div {...props} className={classes.search__wrapper }>
            {<img className={classes.img} src='/search 1.png' alt={'search'}/>}
        </div>
    );
};

export default Search;