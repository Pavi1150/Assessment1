import React, { useState } from 'react';
import './design.css'
import { GoMail } from "react-icons/go"
import { MdWifiCalling3 } from "react-icons/md";
import { TiSocialGooglePlusCircular } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { BiBasketball } from "react-icons/bi";
import img1 from './assets/img1.png'
import family1 from './assets/family1.jpeg'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'
import line from './assets/line.png'
import b1 from './assets/b1.jpg'
import b2 from './assets/b2.jpg'
import b4 from './assets/b4.jpg'
import b6 from './assets/b6.png'
import b11 from './assets/b11.jpg'
import b21 from './assets/b21.jpg'
import b31 from './assets/b31.jpg'
import b41 from './assets/b41.jpg'
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { BsSquare } from "react-icons/bs";
import { TiArrowRepeat } from "react-icons/ti";
import { BsHeart } from "react-icons/bs";
import { BiMessageRoundedAdd } from "react-icons/bi";
import man from './assets/man.jpg';
import sign from './assets/sign.png';
import { ImQuotesLeft } from "react-icons/im";
import person1 from './assets/person1.jpg'
import person2 from './assets/person2.jpg'
import person3 from './assets/person3.jpg'
import person4 from './assets/person4.jpg'
import person5 from './assets/person5.jpg'
import nrmal from './assets/nrmal.png'
import think from './assets/think.png'
import { TiSocialDribbbleCircular } from "react-icons/ti";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { VscDebugStackframeDot } from "react-icons/vsc";


function Design() {
    return (
        <div>
            <div class="nav-bar">
                <div class="gp">
                    <GoMail class="isize1" size="33" />sample@sample.com
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <MdWifiCalling3 class="isize2" size="33" />00 1234 5678
                    <TiSocialGooglePlusCircular className="isize3" size="40" />&nbsp;
                    <TiSocialPinterestCircular className='isize4' size="40" />&nbsp;
                    <TiSocialTwitterCircular className='isize5' size="40" />&nbsp;
                    <TiSocialFacebookCircular className='isize6' size="40" />&nbsp;
                    <BiBasketball className='isize7' size="38" />

                </div>
            </div>
            <div class="topnavv">
                <div class="img1">

                    <img src={img1} class="imgg" />

                    <div class="topnavvv">

                        <a class="active" href="#home" className='top1'>HOME</a>
                        <a href="#about" className='top2'>ABOUT</a>
                        <a href="#agents" className='top3'>AGENTS</a>
                        <a href="#properties" className='top4'>PROPERTIES</a>
                        <a href="#blog" className='top5'>BLOG</a>
                        <a href="#contact" className='top6'>CONTACT</a>
                    </div>

                </div>
            </div>

            <div>

                <img src={family1} class="img-fluid" alt="Responsive image"></img>
                <div class="text-block">
                    <span>if you can dream,we can create it</span>

                </div >
                <div class="text-block1">
                    <span>Find your house without <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;any difficulties</span>


                </div>
                <div class="know">
                    <center><h6 class="km">Know more</h6></center>
                </div>
                <div class="text-block2">

                    <p class="num1">01 | <span class="num2">05 </span>......&lt;&nbsp;&nbsp;&gt;</p>
                </div>
            </div>

            <br />


            <div class="table table-bordered border border-light">
                <table class="img5">
                    <tr>
                        <td><img src={img3} width="200" height="auto" /></td>
                        <td><img src={img4} width="200" height="auto" /></td>
                        <td><img src={img5} width="200" height="auto" /></td>
                        <td><img src={img6} width="200" height="auto" /></td>
                        <td><img src={img7} width="200" height="auto" /></td>
                    </tr>
                </table>
            </div>
            <br />
            <br />
            <br/>
            <br/>

            <div>
                <img src={img1} class="imga" />
            </div>
            <div>
                <span class="prop">Properties</span><br />
                <span class="home">Home for sale</span>
            </div>
            <br />

            <div>
                <center><img src={b6} class="b1" /></center>

            </div>
            <div class="blockk">
                <h5 class="font">Scandinavian style apartment</h5>
                <p class="font1">94-98 Ingrahan St,Brooklyn,NY 11234,USA</p>
                <br />
                <br />
                <IoBedOutline />Beds:3
                &nbsp;
                <BiBath class="bat" />Baths:2
                &nbsp;
                <BsSquare class="sq" />Sq Ft:900

                <h6>_____________________________________________________________</h6>
                <h5>For Rent<span><TiArrowRepeat class="reverse" /><BsHeart /></span></h5>
                <h4>$54,000</h4>

            </div>
            <br />
            <center>
                <table class="tablee">
                    <tr>
                        <td>
                            <img src={b2} class="b2" />
                            <h5 class="font">Scandinavian style apartment</h5>
                            <p class="font1">94-98 Ingrahan St,Brooklyn,NY 11234,USA</p>
                        </td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><img src={b1} class="b4" />
                            <h5 class="font">Lovelace Road Greenfield</h5>
                            <p class="font1">120 N St SW Thomaston,Georgia(GA),30286</p>
                        </td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td>
                            <img src={b4} class="b4" />
                            <h5 class="font">Building Complex Apartments</h5>
                            <p class="font1">319 Brookmade Way Lawrencevile,Georgia(GA),30043</p>
                        </td>
                    </tr>
                </table>
                <h6>_____________________________________________________________________________________________________________________________________________________
                </h6>
                <BiMessageRoundedAdd size="33" />
                <h6>V I E W M O R E</h6>
            </center>
            <div>
                <img src={man} class="bman" />
                <div>
                    <span class="mann">Beautifully designed inside <br />and out,Studio looks every bit <br />as powerful it is</span><br /><br /><br />
                    <span class="mann1">This is Photoversion of Lorem ipsum.Proin gravida nibh vel auctor aliquet.<br />Anean sollicitudin,lorem quis bibendum auctor,nisi elit consequat ipsum,nec sagittis sem<br />nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit mauris.</span>
                    <img src={sign} class="sign" />
                </div>
            </div>
            <br />
            <div>
                <span class="client">Our <strong>Clients Review</strong></span><br /><br /><br />
                <span class="name">Duane Neal</span><br />
                <span class="role">Product Designer,USA</span>
            </div>
            <br /><br />
            <div>

                <ImQuotesLeft size="20" class="quote" />&nbsp;&nbsp;I'm a freelance fashion designer who specialises in print designs and combining fabrics.My designs have been sold all over Europe and <br />
                <span class="movetext"> the USA ans I have worked with some of the biggest designers in the industry.I'm alse currently working with a big supermarket to</span>
                <br /><span class="movetxt">develop a gorgeous,yet affordable</span>
            </div>
            <img src={line} class="linbend" />
            <div class="space">
                <img src={person1} class="person1" />
                <img src={person2} class="person2" />
                <img src={person5} class="person3" />
                <img src={person4} class="person4" />
                <img src={person3} class="person5" />
            </div>
            <div class="dot">
                <label><VscDebugStackframeDot size="20" /></label>
                <label><VscDebugStackframeDot size="20" /></label>
                <label><VscDebugStackframeDot size="20" color="blue" /></label>
                <label><VscDebugStackframeDot size="20" /></label>
                <label><VscDebugStackframeDot size="20" /></label>
            </div>


            <div class="blog">Our <strong>Blog</strong></div>

            <div class="whole">
                <img src={b41} class="ho1" />

                <span class="ho11">Lorem Ipsum is simply dummy text of<br />the printing and typesetting<br />_______________________<br /><span class="month">13 March 2020</span>
                    <br /><span class="stext">Contrary to popular belief,Lorem Ipsum is not simply random text<br />it has roots in a piece of classical Latin literature from</span></span>
                <div class="column">
                    <img src={b2} class="ho2" /><span class="ho22">There are many variations of <br />passages of Lorem Ipsum<br />______________________<br /><br /><span class="month1">13 March 2020</span></span>
                    <img src={b11} class="ho3" /><span class="ho33">There are many variations of <br />passages of Lorem Ipsum<br />______________________<br /><br /><span class="month1">13 March 2020</span></span>
                </div>
                <br /><br />
                <div class="column" />
                <img src={b21} class="ho4" /><span class="ho44">There are many variations of <br />passages of Lorem Ipsum<br />______________________<br /><br /><span class="month1">13 March 2020</span></span>
                <img src={b31} class="ho5" /><span class="ho55">There are many variations of <br />passages of Lorem Ipsum<br />______________________<br /><br /><span class="month1">13 March 2020</span></span>
                <div />
                <br />
                <br />
                <div class="nav-b">
                    <div >
                        <center><span class="textsize">Everything is about to change</span>
                            <h4 class="senten">Loren Ipsum dolr sit amet ,consectetur adipisicing elit,sed do elusmod tempor incicidunt ut labore et dolore<br />
                                magna aliqua.Ut enim and veniam,quis nostrud exercitation ullamco laboris.
                                <br /></h4><br />
                            <input type="text" size="60" placeholder='Email Address' class="input"></input>
                            &nbsp;&nbsp;
                            <button type="button" class="btn btn-primary">Subscribe</button>
                        </center>
                    </div>
                </div>
            </div>

            <div class="estate">

                <h1 class="wp"><span class="restate">wp</span><span class="slash">/</span>Real Estate</h1>
                <br /><br />
                <br /><br />
                <br /><br />
                <div class="bottom-nav">
                    <a href="#home" className='top'>HOME</a>
                    <a href="#about" className='top'>ABOUT</a>
                    <a href="#agents" className='top'>AGENTS</a>
                    <a href="#properties" className='top'>PROPERTIES</a>
                    <a href="#blog" className='top'>BLOG</a>
                    <a href="#contact" className='top'>CONTACT</a>
                </div>
            </div>


            <div class="frow">
                <div class="row">
                    <label class="h5">ABOUT</label><br />
                    <label>ABOUT STUDIO</label>
                    <label>JOBS</label>
                    <label>TEAM</label>
                    <label>SECURITY</label></div>
            </div>
            <div class="srow">
                <div class="row">
                    <label class="h5">INFORMATION</label><br />
                    <label>CUSTOMER SERVICE</label><br />
                    <label>LEGAL INFORMATION</label><br />
                    <label>SUPPORT</label><br />
                    <label>FAQ</label>
                </div>

            </div>

            <div class="trow">
                <table>
                    <tr><h5 class="ms">RECENT NEWS</h5></tr>
                    <tr>
                        <td><img src={nrmal} class="nrmal" /></td>
                        <td><h6 class="ltext">Proin eros nisl,omare sed <br />vehicula sit,feugiat<br /><strong>Aug | 2017</strong></h6></td>
                    </tr>
                    <tr>
                        <td><img src={think} class="think" /></td>
                        <td><h6 class="ltext">Morbi placerat accumamsan <br />nunc,luctus lacinia nisi<br /><strong>Aug | 2017</strong></h6></td>
                    </tr>
                </table>
            </div>

            <div class="fifrow">
                <div class="row">
                    <strong><label class="h5">GET IN TOUCH</label></strong><br /><br />
                    <label><VscDebugStackframeDot />Sanfrancisco,CA<br />125,California STP 2 Building</label><br /><br /><br />
                    <label><VscDebugStackframeDot />www.studiotheme.com</label><br /><br />
                    <label><VscDebugStackframeDot />
                        +123 5675 8934
                    </label>

                </div>

            </div>
            <div class="lnav">
                <TiSocialDribbbleCircular size="36" class="ic1" />
                <RiFacebookCircleLine size="33" class="ic2" />
                <TiSocialTwitterCircular size="33" class="ic3" />
                <AiFillInstagram size="30" class="ic4" /><span class="final"> PRIVACY POLICY  &nbsp;| &nbsp; TERMS & CONDITIONS</span>
            </div>

        </div>
    )
}
export default Design