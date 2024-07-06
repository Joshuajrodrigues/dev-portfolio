"use client"
import Button from '@/components/button'
import React from 'react'
import { signOut } from '../login/actions'
import Tiptap from '@/components/editor/tiptap'
import Link from 'next/link'

const Page = () => {
    return (
        <>
            <div>Auth only</div>
            {/* <Tiptap /> */}
            <Link href={'/create-new'} >New post</Link>


        </>
    )
}

export default Page