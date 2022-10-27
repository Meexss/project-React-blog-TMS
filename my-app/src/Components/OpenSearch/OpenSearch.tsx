import React, {FC} from 'react';
import classes from './searchOpen.module.css'

interface Props {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLElement>;
}

const OpenSearch: React.FC<Props> = ({children, ...props}) => {
    return (
        <div className={children ? classes.search  :  classes.not_active}>
            <input
                className={classes.input_style}
                onChange={e => e.target.value}
                type="text"
                placeholder="Search..."
            />
            <button {...props} className={classes.btn_close}>X</button>
        </div>
    );
};

export default OpenSearch;