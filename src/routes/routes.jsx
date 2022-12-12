import React from 'react'
import { Routes, Route } from 'react-router-dom'
import JoinMembership from '../pages/Join/JoinMembership'
import ProfileSetting from '../pages/Join/ProfileSetting'

export default function routes() {
    return (
        <Routes>
            <Route path="/join" element= {<JoinMembership />} />
            <Route path="/profile" element= {<ProfileSetting />} />
        </Routes>
    )
}
