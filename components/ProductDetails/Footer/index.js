import React from 'react'
import { MdEmail, MdStars } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaTwitter, FaCcMastercard, FaMaxcdn } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { GiReceiveMoney } from "react-icons/gi";
import { RiVisaLine } from "react-icons/ri";
import { TbBrandAirbnb, TbBrandAngular, TbBrandAmongUs, TbBrandAws } from "react-icons/tb";
const Footer = () => {
  return (

    <div class="bg-gray-800" style={{ backgroundColor: '#535357' }}>

      <footer className='footer-top-strip px-5' style={{ backgroundColor: '#313131' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-2 px-5 py-4">
              <img className='w-full h-auto md:w-36 md:h-8' src="https://techinporto.com/archive/2017/img/Jumia_Group_Logo_white.png" alt="" />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6 px-5 py-4">
              <h6 className='text-white font-bold'>New to Jumia?</h6>
              <p className='text-white'>
                Subscribe to our newsletter to get updates on our latest offers!
              </p>
              <div className='flex flex-col md:flex-row items-center'>
                <div className="relative mb-4 md:mb-0">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <MdEmail className='text-gray-400 h-6 w-6' />
                  </span>
                  <input type="text" className="form-input py-3 pl-10 border-2 border-gray-200 rounded-sm" placeholder="Enter E-mail Address" aria-label="Enter E-mail Address" />
                </div>
                <button type="button" className="btn font-semibold text-white px-4 py-3 md:ml-4 md:border-0">Male</button>
                <button type="button" className="btn font-semibold text-white px-4 py-3 md:border-0">Female</button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-4 px-5 py-4">
              <div className="flex items-center">
                <div className="star-box flex items-center justify-center">
                  <MdStars className='m-1 text-white w-8 h-8' />
                </div>
                <div className="ml-2">
                  <h6 className='text-white font-bold'>New to Jumia?</h6>
                  <p className='text-white'>
                    Get access to exclusive offers!
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-center md:justify-start space-x-4">
                <img className='w-30 h-8' src="https://www.pikpng.com/pngl/b/144-1445686_app-store-available-on-apple-google-store-logo.png" alt="" />
                <img className='w-30 h-8' src="https://play.google.com/intl/en_us/badges/images/books/en-play-badge-border.png?hl=es-419" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer class="container mx-auto px-5 py-4" style={{ backgroundColor: '#535357' }}>
        <div class="flex flex-wrap gap-4">
          <div class="w-full lg:w-1/6 md:w-1/2" style={{ padding: 10, paddingRight: 10, paddingLeft: 70 }}>
            <h2 class="text-white font-heading text-base mb-2">NEED HELP?</h2>
            <ul class="list-unstyled text-white text-xs">
              <li class="mb-1">
                <a href="#" class="hover:underline">Chat with us</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Help Center</a>
              </li>
              <li class="mb-1">
                <a href="/contact" class="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-1/6 md:w-1/2" style={{ padding: 10, paddingRight: 10 }}>
            <h2 class="text-white font-heading text-base mb-2">USEFUL LINKS</h2>
            <ul class="list-unstyled text-white text-xs">
              <li class="mb-1">
                <a href="#" class="hover:underline">Service Center</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">How to shop on Jumia?</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Delivery options and timelines</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">How to return a product on Jumia?</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Corporate and bulk purchases</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Report a Product</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Ship your package anywhere in Egypt</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Dispute Resolution Policy</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Returns & Refund Timeline</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Return Policy</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-1/6 md:w-1/2" style={{ padding: 10, paddingRight: 10 }}>
            <h2 class="text-white font-heading text-base mb-2">ABOUT JUMIA</h2>
            <ul class="list-unstyled text-white text-xs">
              <li class="mb-1">
                <a href="/about" class="hover:underline">About us</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Jumia careers</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Jumia Express</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Terms and Conditions</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Privacy Notice</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Jumia Store Credit Terms & Conditions</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Jumia Payment Information Guidelines</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Cookie Notice</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Jumia Global</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Official Stores</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Flash Sales</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-1/6 md:w-1/2" style={{ padding: 10, paddingRight: 10 }}>
            <h2 class="text-white font-heading text-base mb-2">NEED HELP?</h2>
            <ul class="list-unstyled text-white text-xs">
              <li class="mb-1">
                <a href="/about" class="hover:underline">Sell on Jumia</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Vendor hub</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Become a Sales Consultant</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Become a Logistics Service Partner</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Join the Jumia DA Academy</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Join the Jumia KOL Program</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-1/6 md:w-1/2" style={{ padding: 10, paddingRight: 10 }}>
            <h2 class="text-white font-heading text-base mb-2">NEED HELP?</h2>
            <ul class="list-unstyled text-white text-xs">
              <li class="mb-1">
                <a href="/about" class="hover:underline">Sell on Jumia</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Vendor hub</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Become a Sales Consultant</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Become a Logistics Service Partner</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Join the Jumia DA Academy</a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">Join the Jumia KOL Program</a>
              </li>
            </ul>
          </div>


        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 py-2 border-b border-gray-300">
          <div class="p-5 md:pb-4">
            <h4 class="text-white mb-1 md:ml-5">JOIN US ON</h4>
            <div class="flex flex-row md:pl-5 py-2 mb-2">
              <a href="#" class="text-white text-2xl mr-2">
                <i class="text-xl social-icons text-white"><FaFacebookF /></i>
              </a>
              <a href="#" class="text-white text-2xl mx-2">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#" class="text-white text-2xl mx-2">
                <i class="text-xl social-icons text-white"><TiSocialInstagram /></i>
              </a>
              <a href="#" class="text-white text-2xl mx-2">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div class="p-5 md:pb-4">
            <h4 class="text-white mb-1 md:ml-5">PAYMENT METHODS & DELIVERY PARTNERS</h4>
            <div class="flex flex-row md:pl-5 py-2 mb-2">
              <a href="#" class="text-white text-2xl mr-3">
                <i class="text-xl social-icons text-white"><GiReceiveMoney /></i>
              </a>
              <a href="#" class="text-white text-2xl mx-3">
                <i class="fab fa-cc-mastercard"></i>
              </a>
              <a href="#" class="text-white text-2xl mx-3">
                <i class="text-xl social-icons text-white"><RiVisaLine /></i>
              </a>
              <a href="#" class="text-white text-2xl mx-3">
                <i class="text-xl social-icons text-white"><TbBrandAirbnb /></i>
              </a>
              <a href="#" class="text-white text-2xl mx-3">
                <i class="fab fa-maxcdn"></i>
              </a>
              <a href="#" class="text-white text-2xl mx-3">
                <i class="text-xl social-icons text-white"><TbBrandAmongUs /></i>
              </a>
              <a href="#" class="text-white text-2xl mx-3">
                <i class="text-xl social-icons text-white"><TbBrandAngular /></i>
              </a>
              <a href="#" class="text-white text-2xl mx-3">
                <i class="text-xl social-icons text-white"><TbBrandAws /></i>
              </a>
            </div>
          </div>
        </div>


      </footer>
      <footer class="bg-gray-700 text-white text-center py-4" style={{ backgroundColor: '#535357' }}>
        <p class="mb-0">
          &copy; {new Date().getFullYear()} Powered Jumia
        </p>
      </footer>
    </div>

  )
}

export default Footer