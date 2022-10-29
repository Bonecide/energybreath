import React, { useState } from 'react';
import WhatWeFeel from "./WhatWeFeel/WhatWeFeel";
import ViciousCircle from "./ViciousCircle/ViciousCircle";
import OrderModal from './../../module/OrderModal/OrderModal';

const ChaosComponent = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <>
            <WhatWeFeel />
            <ViciousCircle setIsOpen={setIsOpen} />
            
            {isOpen && <OrderModal close={setIsOpen}/>}
        </>
    );
};

export default ChaosComponent;