import React from 'react'

const Counter = ({className}) => {
  return (
    <div className='container bg-slate-100 rounded-md pt-8 '>
        <div className={`counter-block ${className}`}>
            <div className='grid xl:grid-cols-4 grid-cols-2 gap-y-8'>
                <div className='item'>
                    <div className='flex flex-col items-center'>
                        <div className='count-block flex items-center'>
                            <div className='counter heading3 '>
                                2.5
                            </div>
                            <span className='heading3'>K</span>
                        </div>
                        <div className='body1 text-secondary text-center'>
                            Buissness Setup Growth 
                        </div>
                    </div>
                </div>

                <div className='item'>
                    <div className='flex flex-col items-center'>
                        <div className='count-block flex items-center'>
                            <div className='counter heading3 '>
                                1.77
                            </div>
                            <span className='heading3'>K</span>
                        </div>
                        <div className='body1 text-secondary text-center'>
                            Buissness Problem Solving
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='flex flex-col items-center'>
                        <div className='count-block flex items-center'>
                            <div className='counter heading3 '>
                                298
                            </div>
                            <span className='heading3'>K</span>
                        </div>
                        <div className='body1 text-secondary text-center'>
                            Goal achiever
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='flex flex-col items-center'>
                        <div className='count-block flex items-center'>
                            <div className='counter heading3 '>
                                246
                            </div>
                            <span className='heading3'>K</span>
                        </div>
                        <div className='body1 text-secondary text-center'>
                            passive income earners
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter
