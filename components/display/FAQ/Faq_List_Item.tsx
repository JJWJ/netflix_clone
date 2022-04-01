import React, { useState } from 'react'

interface AppProps {
    buttonText: string
    contentMain: string
    contentSecondary?: string
}

const Faq_List_Item = (appProps: AppProps) => {
    const [open, setOpen] = useState(false)

    const onClick = (): void => {
        setOpen(!open)
    }

    return (
        <li onClick={onClick}>
            <button className={open ? "flex justify-between rounded-sm bg-neutral-600 w-full p-2 mb-[1px]" : "flex justify-between rounded-sm bg-neutral-600 w-full p-2 mb-4"}>{appProps.buttonText}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </button>
            <div className={open ? 'bg-neutral-600 mb-2' : 'max-h-0 overflow-hidden'}>
                <span>
                    {appProps.contentMain}
                    <br />
                    <br />
                    {appProps.contentSecondary}
                </span>
            </div>
        </li>
    )
}

export default Faq_List_Item