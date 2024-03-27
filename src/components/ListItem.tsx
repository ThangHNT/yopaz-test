'use client'

import { listItem } from '@/data/data'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
function ListItem() {
  const [hide, setHide] = useState<number[]>([])
  const itemRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (itemRefs.current.length > 0) {
      itemRefs.current.forEach((item, index) => {
        const height = item.getBoundingClientRect().height
        if (height >= 400) {
          setHide((pre) => [...pre, index])
        }
      })
    }
  }, [])

  const handleShow = (idx: number, action: 'show' | 'collapse') => {
    console.log(idx, action)
    if (action === 'show') {
      setHide((pre) => {
        return (pre = pre.splice(idx, 1))
      })
    } else {
      setHide((pre) => [...pre, idx])
    }
  }

  return (
    <div className="w-full flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold">Profile Detail</h1>
      <div className=" gap-y-10 grid w-full px-10 mt-8">
        {listItem.map((item, index) => {
          const itemHeight =
            itemRefs?.current[index]?.getBoundingClientRect().height
          const list = item.list ?? null
          return (
            <div key={index}>
              <h2 className="text-center font-medium mb-3 text-red-400">
                {item.title}
              </h2>
              {list && (
                <div
                  ref={(el) => {
                    if (el) {
                      itemRefs.current[index] = el
                    }
                  }}
                  className={twMerge(
                    'grid gap-y-5 transition-all duration-200 ease-linear',
                    `${!hide.includes(index) ? 'h-auto' : 'h-[400px] overflow-hidden'}`
                  )}
                >
                  {list?.map((el, id) => {
                    return (
                      <div key={id} className="">
                        {el.item.map((el2, indx) => {
                          return (
                            <div key={indx} className="flex items-center">
                              <h3 className="text-base font-medium min-w-[120px]">
                                {el2.title}:
                              </h3>
                              <p className="text-sm">{el2.content}</p>
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
              )}
              <p className="text-sm whitespace-pre-line">{item.content}</p>
              {hide.includes(index) && itemHeight >= 400 && (
                <p
                  onClick={() => handleShow(index, 'show')}
                  className="text-sm text-center cursor-pointer text-blue-400 mt-3"
                >
                  show more
                </p>
              )}
              {!hide.includes(index) && itemHeight >= 400 && (
                <p
                  onClick={() => handleShow(index, 'collapse')}
                  className="text-sm text-center cursor-pointer text-blue-400 mt-3"
                >
                  collapse
                </p>
              )}
            </div>
          )
        })}
      </div>
      <Link href="/" className="mt-14 text-[#8b8b8b] hover:underline">
        Back to home
      </Link>
    </div>
  )
}

export default ListItem
