import { Fragment } from 'react'

const info = [
  { title: 'Full name', content: 'Nguyen Van A' },
  { title: 'Date of birth', content: '29/02/2002' },
  { title: 'Age', content: '23' },
  { title: 'Phone number', content: '0123456789' },
  { title: 'Address', content: 'Nam Dinh' },
  { title: 'Email', content: 'thanghn2503@gmail.com' },
]

function CommonInfo() {
  return (
    <div className="grid gap-y-2">
      {info.map((item, index) => {
        return (
          <div key={index} className="grid grid-cols-2 items-center">
            <h2 className="text-base font-bold">{item.title}</h2>
            <p>{item.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CommonInfo
