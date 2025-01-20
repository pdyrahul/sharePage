import React from 'react'
import EventDetail from '../../../components/EventDetail'
export default async function Page({ params }) {
    const slug = (await params).slug
    return (
        <>
        <EventDetail slug={slug} />
        </>
    )
  }