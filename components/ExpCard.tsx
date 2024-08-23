import React from 'react'
import background from '../components/images/NASIA.png'

type Props = {}

export default function ExpCard({}: Props) {
  return (
        <article>
            <img className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" src="{background}" alt="" />
        </article>
  )
}