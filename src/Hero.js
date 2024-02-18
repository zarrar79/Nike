import React from 'react'
import Shoe from './shoe_image.png'
import Amazon from './amazon.png'
import FlipKart from './flipkart.png'
import logo from './brand_logo.png'
export const Hero = () => {
    return (
        <div>
            {/* fluid container */}
            <div className='max-w-[1100px] mx-auto font-Poppins'>
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
                            <div className='flex space-x-12'>
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
                                <button className='rounded-md bg-[#D01C28] px-3 py-1 text-center text-[white]'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Grid Section */}
                <div className='grid grid-cols-2 mt-24'>
                    {/* left */}
                    <div className='col-span-1'>
                        {/* left parent */}
                        <div className='space-y-8'>
                            {/* big text */}
                            <div className='text-[98px] font-[800] text-black leading-[102px]'>YOUR FEET
                                DESERVE
                                THE BEST</div>
                            {/* small text */}
                            <div className='text-[16px] font-[600] text-[#5A5959] leading-[24px]'>YOUR FEET DESERVE THE BEST AND WE’RE 
                                HERE TO<br></br> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE<br></br> 
                                THE BEST AND WE’RE HERE TO 
                                HELP YOU WITH OUR<br></br> SHOES.
                                </div>
                        {/* buttons */}
                        <div className='flex space-x-8'>
                            {/* b1 */}
                            <div>
                                <button className='rounded-md bg-[#D01C28] px-4 py-1 text-[24px] font-[600] text-[white]'>Shop Now</button>
                            </div>
                            {/* b2 */}
                            <div>
                                <button className='rounded-md px-4 text-center py-1 border-solid border-[1px] border-[#5A5959] text-[24px] font-[600] text-[#5A5959]'>Category</button>
                            </div>
                        </div>
                        {/* text + icon */}
                        <div>
                             {/* sub text */}
                        <div className='font-[400] text-[16px] text-[#5A5959]'>Also Available On</div>
                            {/* icons */}
                        <div className='flex items-center text-center mt-2 space-x-4'>
                                {/* img 1 */}
                                <div><img src={FlipKart} className='text-center'></img></div>
                                {/* img 2 */}
                                <div><img src={Amazon} className='text-center'></img></div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    {/* right */}
                    <div>
                        {/* left parent */}
                        <div className='mt-14'>
                            {/* img only */}
                            <div><img src={Shoe}></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
