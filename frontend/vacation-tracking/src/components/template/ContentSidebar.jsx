import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { VacationRequest } from '../../vacationTrackingProcess/components/vacationRequest/VacationRequest'
// import { RouterManager } from '../routing/RouterManager'

export const ContentSidebar = () => (
    <Routes>
        <Route path="solicitud-vacaciones" element={<VacationRequest />} exact />
    </Routes>
)

