'use client';

export default function ErrorWarning({error}: {error: Error}) {
    return (
        <h1>Error {error.message}</h1>
    )
}