import BreathMagician from "./breathMagician/breathMagician";
import ForWhoPractic from "./forWhoPractic/forWhoPractic";
import Result from "./Result/Result";
import Expert from "./Expert/Expert";
import HowItWork from "./howItWork/howItWork";
import Video from './Video/Video';
import Variants from './Variants/Variants';
import HowItWIll from "./HowItWIll/HowItWIll";
import Installment from "./Installment/Installment";
import ReviewsSlider from './ReviewsSlider/ReviewsSlider';
import FAQ from './../FAQ/FAQ';
import { useState } from 'react';
import OrderModal from "../../module/OrderModal/OrderModal";

const PracticComponent = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <>
            <BreathMagician setIsOpen={setIsOpen} />
            <ForWhoPractic />
            <Result />
            <Expert />
            <HowItWork />
            <Video />
            <Variants setIsOpen={setIsOpen}  />
            <HowItWIll/>
            <Installment setIsOpen={setIsOpen}/>
            <ReviewsSlider/>
            <FAQ setIsOpen ={setIsOpen}/>
            {isOpen && <OrderModal close={setIsOpen}/>}
        </>
    );
};

export default PracticComponent;