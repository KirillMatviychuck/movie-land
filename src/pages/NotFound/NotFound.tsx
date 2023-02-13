import React from 'react';
import {motion} from 'framer-motion';

const NotFound = () => {
    return (
        <motion.div
            style={{marginTop: '20px'}}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 0.5}}}
            exit={{opacity: 0}}
        >
            Sorry but this page wasn't found.
        </motion.div>
    );
};

export default NotFound;