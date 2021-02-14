import React from "react"
import {
    useHistory
} from "react-router-dom"

import { useCreate } from "../hooks/index"

const CreateNew = (props) => {
    const content = useCreate('text')
    const author = useCreate('text')
    const info = useCreate('text')
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`submitted ${content}`)
        props.addNew({
            content: content.value,
            author: author.value,
            info: info.value,
            votes: 0
        })
        history.push("/")
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
                    <input {...content} />
                </div>
                <div>
                    author
                    <input {...author} />
                </div>
                <div>
                    url for more info
                    <input {...info} />
                </div>
                <button>create</button>
            </form>
        </div>
    )

}

export default CreateNew;