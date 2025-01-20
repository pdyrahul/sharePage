import React from 'react'
export default async function Page({ params }) {
    const slug = (await params).slug
    return (
       
        <EventView slug={slug} />
       
    )
  }