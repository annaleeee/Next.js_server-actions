'use client';

import { createUser } from './actions';

export default function Login() {
    return (
        <form action={createUser}>
            <input type="text" name="password" />
            <button>Submit</button>
        </form>
    )
}