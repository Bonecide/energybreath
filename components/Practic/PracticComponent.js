import BreathMagician from "./breathMagician/breathMagician";
import ForWhoPractic from "./forWhoPractic/forWhoPractic";
import Result from "./Result/Result";
import Expert from "./Expert/Expert";
import HowItWork from "./howItWork/howItWork";
import Video from './Video/Video';
import Variants from './Variants/Variants';
import HowItWIll from "./HowItWIll/HowItWIll";
import Installment from "./Installment/Installment";

const PracticComponent = () => {
    return (
        <>
            <BreathMagician />
            <ForWhoPractic />
            <Result />
            <Expert />
            <HowItWork />
            <Video />
            <Variants   />
            <HowItWIll/>
            <Installment/>
        </>
    );
};

export default PracticComponent;