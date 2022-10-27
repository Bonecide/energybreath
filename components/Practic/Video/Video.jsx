import ReactPlayer from 'react-player/lazy'
import s from './Video.module.scss'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function Video() {

    return(
        <div className={s.container}>
                <h1>Попробуйте вместе со мной, всего за 7 минут</h1>
                <div className={s.video}>
                <ReactPlayer url={'https://www.youtube.com/watch?v=Swkqd-cbVMA&ab_channel=__Vlad__'} 
                className='react-player'
                playing={true}
                light={true}
                controls={true}
                playIcon={
                <div className={s.PlayCircle}>
                    <PlayArrowIcon className={s.PlayArrow}/>
                </div>}
            />
                </div>
        </div>
    )
}   