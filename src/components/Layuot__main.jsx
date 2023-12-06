import { useState } from 'react'
import './layout__main.scss'
import particles from '../assets/svg/particles.svg'
import bobur from '../assets/images/Bobur.png'
import schedule from '../assets/svg/schedule.svg'
import image from '../assets/svg/image.svg'
import gif from '../assets/svg/gif.svg'
import stats from '../assets/svg/stats.svg'
import smile from '../assets/svg/smile.svg'
import man1 from '../assets/images/man-1.png'
import man_glasses from '../assets/images/man-with-galsses.png'
import man_kebab from '../assets/images/man-kebab.png'
import comment from '../assets/svg/comment.svg'
import repost from '../assets/svg/repost.svg'
import heart from '../assets/svg/like.svg'
import upload from '../assets/svg/upload.svg'
import rate from '../assets/svg/rate.svg'
import kebab from '../assets/images/kebab.png'
import heart_red from '../assets/svg/heart-red.svg'


const Layuot__main = () => {
    const [like, setLike] = useState('like')
    const [count, setCount] = useState(5)
    const [img, setImg] = useState(heart)
    const [retwit, setRetwit] = useState('retwit')
    const [counRetwit, setCountRetwit] = useState(2)
    

    const clickOnLike = () =>{
        if(like == 'like'){
            setLike('like-active')
            setCount(count + 1)
            setImg(heart_red)
        }else{
            setLike('like')
            setCount(count - 1)
            setImg(heart)
        }
    }
    const clickOnRetwit = () =>{
        if(retwit == 'retwit'){
            setRetwit('retwit-active')
            setCountRetwit(counRetwit + 1)
        }else{
            setRetwit('retwit')
            setCountRetwit(counRetwit - 1)
        }
    }

  return (
    <section>
     <div className="layout__main">
        <div className="title">
            <h1>Home</h1>
            <img src={particles} alt="particles" />
        </div>
        <div className="post">
            <div className="post__header">
                <img src={bobur} alt="Bobur" />
                <div className="post__header-content">
                    <h2>What’s happening</h2>
                    <div className="post__header-content-imgs">
                        <img src={image} alt="image" />
                        <img src={gif} alt="GIF" />
                        <img src={stats} alt="stats" />
                        <img src={smile} alt="image" />
                        <img src={schedule} alt="schedule" />
                    </div>
                </div>
            </div>
            <button className='post__btn'>Tweet</button>
        </div>
        <div className="tweet">
            <div className="tweet__header">
                <img src={man1} alt="user" />
                <div className="tweet__header-content">
                    <h2>Designsta</h2><span>@inner · 25m</span>
                    <p>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                </div>
            </div>
            <div className="tweet__icons">
                <div>
                <img src={comment} alt="comment" />
                10
                </div>
                <div className={retwit}>
                <img onClick={clickOnRetwit} src={repost} alt="repost" />
                {counRetwit}
                </div> 
                <div className={like}>
                <img onClick={clickOnLike} src={img} alt="like" />
                {count}   
                </div> 
                <div>
                <img src={upload} alt="upload" />
                </div> <div>
                <img src={rate} alt="rate" />
                
                </div>
            </div>
        </div>
        <div className="tweet">
            <div className="tweet__header">
                <img src={man_glasses} alt="user" />
                <div className="tweet__header-content">
                    <h2>cloutexhibition</h2><span>@RajLahoti · 22m</span>
                    <p>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
                </div>
            </div>
            <div className="tweet__icons">
                <div>
                <img src={comment} alt="comment" />
                
                </div>
                <div className={retwit}>
                <img onClick={clickOnRetwit} src={repost} alt="repost" />
                {counRetwit}
                </div> 
                <div className={like}>
                <img onClick={clickOnLike} src={img} alt="like" />
                {count}   
                </div>
                <div>
                <img src={upload} alt="upload" />
                </div> <div>
                <img src={rate} alt="rate" />
                
                </div>
            </div>
        </div>
        <div className="tweet">
            <div className="tweet__header">
                <img src={man_kebab} alt="user" />
                <div className="tweet__header-content">
                    <h2>CreativePhoto</h2><span>@cloutexhibition · 1h</span>
                    <p>Обетда..... <br />
Кечиринглар</p>
                </div>
            </div>
                <img src={kebab} alt="kebab" className='kebab-img' />
            <div className="tweet__icons">
                <div>
                <img src={comment} alt="comment" />
                10
                </div>
                <div className={retwit}>
                <img onClick={clickOnRetwit} src={repost} alt="repost" />
                {counRetwit}
                </div> <div className={like}>
                <img onClick={clickOnLike} src={img} alt="like" />
                {count}   
                </div> <div>
                <img src={upload} alt="upload" />
                </div> <div>
                <img src={rate} alt="rate" />
                
                </div>
            </div>
        </div>
     </div>
    </section>
  )
}

export default Layuot__main
