import { Routes, Route } from 'react-router-dom'
import GamingLogin from './gamingLogin'
import RealGamingForum from './realGamingForum'
import './gamingForum.css'

export default function GamingForum () {
    return (
        <main className='gamingForumPage'>
            <Routes>
                <Route path='/login' element={<GamingLogin/>} />
                <Route path='/forum' element={<RealGamingForum/>} />
            </Routes>
        </main>
    )
}