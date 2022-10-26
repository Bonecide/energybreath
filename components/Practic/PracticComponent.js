import BreathMagician from "./breathMagician/breathMagician";
import ForWhoPractic from "./forWhoPractic/forWhoPractic";
import Result from "./Result/Result";
import Expert from "./Expert/Expert";
import HowItWork from "./howItWork/howItWork";
import Video from "./Video/Video";

const PracticComponent = () => {
    return (
        <>
            <BreathMagician />
            <ForWhoPractic />
            <Result />
            <Expert />
            <HowItWork />
            <Video />
        </>
    );
};

export default PracticComponent;