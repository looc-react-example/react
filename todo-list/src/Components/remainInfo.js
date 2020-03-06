import React from 'react'

export default function remainInfo({minItemCount, maxItemCount}) {
    return (
        <div>
            [{minItemCount} of {maxItemCount} remaining]
        </div>
    )
}
