import React from 'react'

export default function Header(props) {
    const mainh1 = props.mainh1
    const bolder = props.bolder
    const mainh2 = props.mainh2
  return (
    <div>
                        <h3 className="fs-5 text-center mb-0">
                            {mainh1}
                        </h3>
                        <h1 className="display-6 text-center mb-4">
                            <b>{bolder} </b> {mainh2}
                        </h1>
                        <hr className='w-25 mx-auto' />
    </div>
  )
}
