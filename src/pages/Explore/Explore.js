import React from 'react';
import pedal1 from '../Explore/images/pedal1.png'
import pedal2 from '../Explore/images/pedal2.png'
import pedal9 from '../Explore/images/pedal10.png'
import pedal4 from '../Explore/images/pedal4.png'
import pedal5 from '../Explore/images/pedal5.png'
import pedal6 from '../Explore/images/pedal6.png'
import pedal7 from '../Explore/images/pedal7.png'
import pedal8 from '../Explore/images/pedal8.png'


const Explore = () => {
    return (
        // <div className="m-5 p-5" sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
        //     <ImageList variant="masonry" cols={3} gap={8}>
        //         {itemData.map((item) => (
        //             <ImageListItem key={item.img}>
        //                 <img
        //                     src={`${item.img}?w=248&fit=crop&auto=format`}
        //                     srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        //                     alt={item.title}
        //                     loading="lazy"
        //                 />
        //                 <ImageListItemBar position="below" title={item.author} />
        //             </ImageListItem>
        //         ))}
        //     </ImageList>
        // </div>

        <div >
            <div className="d-flex justify-content-between">
                <div class="card bg-light text-white">
                    <img className="img-fluid p-5" src={pedal1}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
                <div class="card bg-light text-white">
                    <img className="img-fluid p-5" src={pedal2}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div class="card bg-ligh text-white">
                    <img className="img-fluid p-5" src={pedal9}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
                <div class="card bg-ligh text-white">
                    <img className="img-fluid p-5" src={pedal4}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div class="card bg-ligh text-white">
                    <img className="img-fluid p-5" src={pedal5}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
                <div class="card bg-ligh text-white">
                    <img className="img-fluid p-5" src={pedal6}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div class="card bg-ligh text-white">
                    <img className="img-fluid p-5" src={pedal7}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
                <div class="card bg-ligh text-white">
                    <img src={pedal8}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Explore;