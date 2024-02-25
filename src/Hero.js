import React from 'react'
import Shoe from './shoe_image.png'
import Amazon from './amazon.png'
import FlipKart from './flipkart.png'
import logo from './brand_logo.png'
export const Hero = () => {
    const display = () => {
        const menuElements = document.getElementsByClassName('menuNew');

  // Loop through each element with the 'menuNew' class and toggle its display style
  for (let i = 0; i < menuElements.length; i++) {
    if (menuElements[i].style.display === "block") {
      menuElements[i].style.display = "none";
    } else {
      menuElements[i].style.display = "block";
    }
  }
    }
    return (
        <div>
            {/* fluid container */}
            <div className='max-w-[1100px] mx-auto font-Poppins mx_large'>
                {/* navigation */}
                <div>
                    {/* child nav */}
                    <div className='text-black font-semibold text-[20px] flex justify-between mt-7 items-center'>
                        {/* left */}
                        <div>
                            {/* img */}
                            <div><img src={logo}></img></div>
                        </div>
                        {/* right */}
                        <div>
                            {/* parent */}
                            <div className='items_nav flex space-x-12'>
                                {/* div 1 */}
                                <div className='transition duration-[0.9s] cursor-pointer hover:text-red-600 hover:transition hover:duration-[0.4s]'>Menu</div>
                                {/* div 2 */}
                                <div className='transition duration-[0.9s] cursor-pointer hover:text-red-600 hover:transition hover:duration-[0.4s]'>Location</div>
                                {/* div 3 */}
                                <div className='transition duration-[0.9s] cursor-pointer hover:text-red-600 hover:transition hover:duration-[0.4s]'>Contact</div>
                                {/* div 4 */}
                                <div className='transition duration-[0.9s] cursor-pointer hover:text-red-600 hover:transition hover:duration-[0.4s]'>About</div>
                            </div>
                        </div>
                        <div className='flex space-x-8'>
                            {/* b1 */}
                            <div>
                                <button className='log_in hover:bg-[#ffff] transition duration-[0.9s] cursor-pointer hover:text-red-600 hover:transition hover:duration-[0.4s] rounded-md bg-[#D01C28] px-3 py-1 text-center text-[white]'>Login</button>
                            </div>
                              {/* Hamburger */}
            <div id="menuToggle" onClick={display}>
                                {/* <!--
      A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it.
      --> */}
                                <input type="checkbox" />

                                {/* <!--
      Some spans to act as a hamburger.
      
      They are acting like a real hamburger,
      not that McDonalds stuff.
      --> */}
                                <span></span>
                                <span></span>
                                <span></span>

                                {/* <!--
      Too bad the menu has to be inside of the button
      but hey, it's pure CSS magic.
      --> */}
                                <ul id="menu">
                                    <a href="#"><li>Home</li></a>
                                    <a href="#"><li>About</li></a>
                                    <a href="#"><li>Info</li></a>
                                    <a href="#"><li>Contact</li></a>
                                    <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                                </ul>
                            </div>
                            <div className='menuNew bg-[#041123] custom-shadow space-y-5 p-6 rounded absolute top-16 right-11 hidden'>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Menu</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Contact</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Location</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>About</div>
                            </div>
                    
                    </div>
                        </div>
                    </div>
                    <div>
                     
                </div>
                {/* Grid Section */}
                <div className='grid_whole grid_gap grid grid-cols-2 mt-24'>
                    {/* left */}
                    <div className='col-span-1'>
                        {/* left parent */}
                        <div className='space-y-8'>
                            {/* big text */}
                            <div className='grid_bText text-[98px] font-[800] text-black leading-[102px]'>YOUR FEET
                                DESERVE
                                THE BEST</div>
                            {/* small text */}
                            <div className='sm_text text-[16px] font-[600] text-[#5A5959] leading-[24px]'>YOUR FEET DESERVE THE BEST AND WE’RE 
                                HERE TO<br></br> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE<br></br> 
                                THE BEST AND WE’RE HERE TO 
                                HELP YOU WITH OUR<br></br> SHOES.
                                </div>
                        {/* buttons */}
                        <div className='flex_btn color_btn flex'>
                            {/* b1 */}
                            <div>
                                <button className='hover:bg-[#ffff] transition duration-[0.9s] cursor-pointer hover:text-red-600 hover:transition hover:duration-[0.4s] rounded-md bg-[#D01C28] px-4 py-1 text-[24px] font-[600] text-[white]'>Shop Now</button>
                            </div>
                            {/* b2 */}
                            <div>
                                <button className='button2 ml-[25px] hover:bg-[#D01C28] hover:text-white transition duration-[0.9s] cursor-pointer hover:transition hover:duration-[0.4s] rounded-md px-4 text-center py-1 border-solid border-[1px] border-[#5A5959] text-[24px] font-[600] text-[#5A5959]'>Category</button>
                            </div>
                        </div>
                        {/* text + icon */}
                        <div>
                             {/* sub text */}
                        <div className='font-[400] text-[16px] text-[#5A5959]'>Also Available On</div>
                            {/* icons */}
                        <div className='flex_btn flex items-center text-center mt-2 space-x-4'>
                                {/* img 1 */}
                                <div><img src={FlipKart} className='text-center cursor-pointer'></img></div>
                                {/* img 2 */}
                                <div><img src={Amazon} className='text-center cursor-pointer'></img></div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    {/* right */}
                    <div>
                        {/* left parent */}
                        <div className='mt-14'>
                            {/* img only */}
                            <div className='shoe_img'><img src={Shoe}></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
