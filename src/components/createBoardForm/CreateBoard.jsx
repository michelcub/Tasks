'use client'

import { useState } from "react"
import { Page3 } from "./page3"
import {Page2} from './page2'
import { Page1 } from "./page1"
import { Steps } from "./Steps"
import { Page4 } from "./page4"

import useBoards from "../../Contexts/Boards"
export const CreateBoard = () => {

    const {steps, setSteps} = useBoards()
    
    return (
        <div className="h-[60vh] flex flex-col justify-start mt-5 item-center px-[3rem] space-y-7">
            <div>
                <Steps/>
            </div>
            {Number(steps) === 1 ?<Page1/> : ''}
            {Number(steps) === 2 ?<Page2/> : ''}
            {Number(steps) === 3 ?<Page3/> : ''}
            {Number(steps) === 4 ?<Page4/> : ''}
        </div>
    )
}