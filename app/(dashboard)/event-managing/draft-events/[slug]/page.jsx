import React from 'react'
import EventView from '../../../../../components/EventView'
export default async function Page({ params }) {
    const slug = (await params).slug
    return (
        <EventView slug={slug} />
 )
  }