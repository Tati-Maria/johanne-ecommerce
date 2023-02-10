import React from 'react'
import { FaFlagUsa } from 'react-icons/fa';
import Layout from '../layout/Layout';

const Footer = () => {
  return (
    <section className='bg-[#eee]'>
        <Layout>
            <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-3 md:py-4'>
                <div className='space-y-4'>
                    <h3 className='uppercase text-sm font-semibold text-slate-600'>Help & Information</h3>
                    <ul className='text-sm space-y-1 text-gray-500'>
                        <li>Help</li>
                        <li>Track order</li>
                        <li>Delivery & returns</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h3 className='uppercase text-sm font-semibold text-slate-600'>About Johanne</h3>
                    <ul className='text-sm space-y-1 text-gray-500'>
                        <li>About us</li>
                        <li>Careers at Johanne</li>
                        <li>Corporate responsability</li>
                        <li>Investors' site</li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h3 className='uppercase text-sm font-semibold text-slate-600'>More from Johanne</h3>
                    <ul className='text-sm space-y-1 text-gray-500'>
                        <li>Mobile and Johanne apps</li>
                        <li>Johanne Marketplace</li>
                        <li>Gift vouchers</li>
                        <li>Black Friday</li>
                        <li>Johanne x Chloè+</li>
                    </ul>
                </div>
            </div>
        </Layout>
        <div className='bg-gray-300'>
            <Layout>
            <div className='flex items-center justify-between text-xs '>
                <span className='block uppercase'>&copy; 2023 Johanne</span>
                <ul className='flex items-center'>
                    <li className='border-r border-gray-500 px-2'>Johanne details</li>
                    <li className='border-r border-gray-500 px-2'>Privacy & Cookies</li>
                    <li className='border-r border-gray-500 px-2'>Ts&Cs</li>
                    <li className='hidden sm:block px-2'>Accessibility</li>
                </ul>
            </div>
            </Layout>
        </div>
    </section>
  )
}

export default Footer;