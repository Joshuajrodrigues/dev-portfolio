"use client"
import Button from '@/components/button'
import React from 'react'
import { signOut } from '../login/actions'

const Page = () => {
    return (
        <>
            <div>Auth only</div>
            <Button ariaLabel='sign out' onClick={async () => {
                await signOut()
            }}>Log out</Button>
        </>
    )
}

export default Page