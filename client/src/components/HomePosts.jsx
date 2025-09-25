import React from 'react'
import { NavLink } from 'react-router-dom'
const data = [{
    img: "https://max-themes.net/demos/grungy/images/post1.jpg",
    title: "Tech Talk: Advancements in Science and Tech",
    description: "Tech Talk: Advancements in Science and Tech",
    date: "26-5-8520",
    addedby: "mrrobot",
}, {
    img: "https://max-themes.net/demos/grungy/images/post2.jpg",
    title: "Tech Talk: Advancements in Science and Tech",
    description: "Tech Talk: Advancements in Science and Tech",
    date: "26-5-8520",
    addedby: "mrrobot",
}, {
    img: "https://max-themes.net/demos/grungy/images/post3.jpg",
    title: "Tech Talk: Advancements in Science and Tech",
    description: "Tech Talk: Advancements in Science and Tech",
    date: "26-5-8520",
    addedby: "mrrobot",
}, {
    img: "https://max-themes.net/demos/grungy/images/post7.jpg",
    title: "Tech Talk: Advancements in Science and Tech",
    description: "Tech Talk: Advancements in Science and Tech",
    date: "26-5-8520",
    addedby: "mrrobot",
}, {
    img: "https://max-themes.net/demos/grungy/images/post10.jpg",
    title: "Tech Talk: Advancements in Science and Tech",
    description: "Tech Talk: Advancements in Science and Tech",
    date: "26-5-8520",
    addedby: "mrrobot",
}]
const HomePosts = () => {
    return (
        <>
            <div className="card-section">
                <div className="container">
                    {data.map((d, index) => {
                        return <div className="row mb-3" key={index}>
                            <div className="col-lg-5 p-0">
                                <img src={d.img} alt="" className="card-img" />
                            </div>
                            <div className="col-lg-7 p-0">
                                <div className="card-desc-section">
                                    <h2 className="title">{d.title}</h2>
                                    <p className='description'>{d.description}</p>
                                    <div className="d-flex">
                                        <p className="date">{d.date}</p>
                                        <p className="addedby">{d.addedby}</p>
                                    </div>
                                    <NavLink>ReadPost</NavLink>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default HomePosts