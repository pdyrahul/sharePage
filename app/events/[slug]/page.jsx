import React from 'react'
import EventDetail from '../../../components/EventDetail'

export const metadata = {
  title: 'Event Detail ',
  description: '',
};

export default async function Page({ params }) {
    const slug = (await params).slug
    return (
        <>
        <EventDetail slug={slug} />
        </>
    )
  }