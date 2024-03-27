'use client'

import { listItem } from '@/data/data'
import { useEffect, useRef, useState } from 'react'
function ListItem() {
  const [show, setShow] = useState<number>(-1)
  const itemRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (itemRefs.current.length > 0) {
      itemRefs.current.forEach((item) => {
        const height = item.getBoundingClientRect().height
        console.log(height)
        // if()
      })
    }
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-4">Profile Detail</h1>
      <div className=" gap-y-5 grid w-full px-4 mt-8">
        {listItem.map((item, index) => {
          const itemHeight =
            itemRefs.current[index].getBoundingClientRect().height
          return (
            <div key={index} className="">
              <h2 className="text-center font-medium">{item.title}</h2>
              <div
                ref={(el) => {
                  if (el) {
                    itemRefs.current[index] = el
                  }
                }}
                className="grid gap-y-5"
              >
                {item?.list?.map((el, index) => {
                  return (
                    <div key={index} className="">
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
              <p>{item.content}</p>
              {itemHeight >= 400 && itemHeight < 500 && (
                <p className="text-sm text-center cursor-pointer text-blue-400 mt-3">
                  show more
                </p>
              )}
              {itemHeight > 500 && (
                <p className="text-sm text-center cursor-pointer text-blue-400 mt-3">
                  collapse
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListItem
