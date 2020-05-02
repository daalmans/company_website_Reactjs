import React from 'react'
import Card from "./components/Card";

import img1 from "./img/Dog.jpg";

export const Blog = () => (
    <div>
        <h2>Recent posts</h2>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div>
            <div className='d-flex justify-content-center p-3'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card imgsrc={img1} title='Title 1' />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img1} title='Title 2' />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img1} title='Title 3' />
                    </div>
                </div>
            </div>
        </div>
    </div>
)