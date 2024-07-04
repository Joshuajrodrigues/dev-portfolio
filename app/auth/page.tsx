"use client"
import Button from '@/components/button'
import React from 'react'
import { signInWithGithub } from '../login/actions'

const page = () => {
    return (
        <div>

            <Button ariaLabel='login' onClick={async () => {

                console.log("clicked");

                await signInWithGithub()
            }} >Login</Button>



        </div>
    )
}

export default page