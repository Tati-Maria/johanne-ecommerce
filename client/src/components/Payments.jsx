import Layout from '../layout/Layout';
import {BsInstagram, BsSnapchat} from "react-icons/bs";
import {AiOutlineFacebook} from "react-icons/ai";
import {FaCcVisa,FaCcMastercard,FaCcStripe,FaCcPaypal,FaCcApplePay} from "react-icons/fa"



const Payments = () => {
    return (
        <section>
        <Layout>
            <div className='flex flex-col items-center justify-evenly md:flex-row gap-4 md:gap-0'>
                {/*Left */}
                <div className='flex items-center gap-6'>
                    <div className='bg-blue-500 p-1.5 text-white rounded-full'>
                      <AiOutlineFacebook size={25}  />
                    </div>
                    <div className='bg-pink-500 p-1.5 text-white rounded-full'>
                        <BsInstagram size={25}/>
                    </div>
                    <div className='bg-yellow-300 p-1.5 text-white rounded-full'>
                        <BsSnapchat size={25}/>
                    </div>
                </div>
                {/*Right */}
                <div className='flex items-center justify-around gap-6'>
                    <div>
                        <FaCcApplePay size={25} />
                    </div>
                    <div className='text-red-600'>
                        <FaCcMastercard size={25} />
                    </div>
                    <div className='text-blue-700'>
                        <FaCcPaypal size={25} />
                    </div>
                    <div className='text-purple-700'>
                        <FaCcStripe size={25} />
                    </div>
                    <div className='text-blue-800'>
                        <FaCcVisa size={25} />
                    </div>
                </div>
            </div>
        </Layout>
    </section>
    )
}

export default Payments;