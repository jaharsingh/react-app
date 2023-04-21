import React from 'react'

export default function TextForm() {
    return (
        <div>
             <h1>Hello word</h1>
            <div className="mb-3">
                <label for="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" id="myBox" rows="10"></textarea>
            </div>
        </div>
    )
}
