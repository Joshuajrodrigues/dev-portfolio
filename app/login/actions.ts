'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signInWithGithub() {

    console.log("cliked med 2");

    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
            redirectTo: `https://joshuarodrigues.dev/login/callback`,
        },
    })

    if (data.url) {
        redirect(data.url) // use the redirect API for your server framework
    }

}

export async function signOut() {
    const supabase = createClient()

    const { error } = await supabase.auth.signOut()
    redirect('/')
}


// export async function signInWithEmail(email: string) {
//     const supabase = createClient()

//     const { data, error } = await supabase.auth.signInWithOtp({
//         email: email,// 'example@email.com',
//         options: {
//             // set this to false if you do not want the user to be automatically signed up
//             shouldCreateUser: true,
//             emailRedirectTo: 'https://example.com/welcome',  
//         },
//     })
// }



