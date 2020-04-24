import React from 'react'

export default function ErrorMessage(props) {
    return (
        <div>
            No data
            <h3>{props.error}</h3>
        </div>
    )
}
