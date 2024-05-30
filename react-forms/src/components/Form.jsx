import React, { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country : "",
        street: "",
        city: "",
        state: "",
        pincode: "",
        comments: false,
        candidates: false,
        offers: false,
        pushNotifications: ""
    });

    const changeHandler = (event) => {
        const {name , type , checked, value} = event.target;
        setFormData((prevData) => {
            return{
                ...prevData , 
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
    }



    return (
        <form onSubmit={submitHandler} className='flex flex-col items-start border-2 rounded-md px-4 w-[50vw] gap-1'>

            <div className='flex flex-col gap-1 w-[100%]'>
                <label htmlFor="firstName" className='font-semibold'>First Name</label>
                <input onChange={changeHandler} value={formData.firstName} className='border-slate-400 border-2 rounded-lg'
                    placeholder=' Yugam' type="text" name="firstName" id="firstName" />
            </div>

            <div className='flex flex-col gap-1 w-[100%]'>
                <label htmlFor="lastName" className='font-semibold'>Last Name</label>
                <input onChange={changeHandler} value={formData.lastName} className='border-slate-400 border-2 rounded-lg'
                    placeholder=' Verma' type="text" name="lastName" id="lastName" />
            </div>

            <div className='flex flex-col gap-1 w-[100%]'>
                <label htmlFor="email" className='font-semibold'>Email Address</label>
                <input onChange={changeHandler} value={formData.email} className='border-slate-400 border-2 rounded-lg'
                    placeholder=' yugam@gmail.com' type="email" name="email" id="email" />
            </div>

            <div className='flex flex-col gap-1 w-[100%]'>
                <label htmlFor="country" className='font-semibold'>Country</label>
                <select onChange={changeHandler} value={formData.country} className='border-slate-400 border-2 rounded-lg'
                    name="country" id="country">
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                </select>
            </div>

            <div className='flex flex-col gap-1 w-[100%]'>
                <label htmlFor="street" className='font-semibold'>Street Address</label>
                <input onChange={changeHandler} value={formData.street} className='border-slate-400 border-2 rounded-lg'
                    placeholder=' #50,Sec.39' type="text" name="street" id="street" />
            </div>

            <div className='flex flex-col gap-1 w-[100%]'>
                <label htmlFor="city" className='font-semibold'>City</label>
                <input onChange={changeHandler} value={formData.city} className='border-slate-400 border-2 rounded-lg'
                    placeholder=' Ludhiana' type="text" name="city" id="city" />
            </div>

            <div className='flex flex-col gap-1 w-[100%]'>
                <label htmlFor="state" className='font-semibold'>State / Province</label>
                <input onChange={changeHandler} value={formData.state} className='border-slate-400 border-2 rounded-lg'
                    placeholder=' Punjab' type="text" name="state" id="state" />
            </div>

            <div className='flex flex-col gap-1 w-[100%]'>
                <label htmlFor="pincode" className='font-semibold'  >ZIP / Postal Code</label>
                <input onChange={changeHandler} value={formData.pincode} className='border-slate-400 border-2 rounded-lg'
                    placeholder=' 141010' min='111111' max='999999' type="number" name="pincode" id="pincode" />
            </div>

            <div className='flex flex-col gap-1 w-[100%]'>
                <p className='font-bold'>By Email</p>

                <div className='flex flex-row gap-2'>
                    <input onChange={changeHandler} checked={formData.comments} type="checkbox" value="" id="comments" name="comments" />
                    <div className='flex flex-col gap'>
                        <label className='font-normal' htmlFor="comments">Comments</label>
                        <p className='font-thin text-sm'>Get Nofied when someone posts a comment on a posting</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2'>
                    <input onChange={changeHandler} type="checkbox" checked={formData.candidates} id="candidates" name="candidates" />
                    <div className='flex flex-col'>
                        <label className='font-normal' htmlFor="candidates">Candidates</label>
                        <p className='font-thin text-sm'>Get Nofied when a candidate applies for a job.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2'>
                    <input onChange={changeHandler} type="checkbox" checked={formData.offers} id="offers" name="offers" />
                    <div className='flex flex-col'>
                        <label className='font-normal' htmlFor="offers">Offers</label>
                        <p className='font-thin text-sm'>Get Nofied when a candidate accepts or rejects an offer</p>
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-1 w-[100%]'>
                <h1 className='text-xl font-bold'>Push Notificatons</h1>
                <p className='ml-2 text-normal font-light'>These are delivered via sms to your mobile phone</p>

                <div className='flex flex-row gap-2'>
                    <input onChange={changeHandler} value="Everything" type="radio" id="everything" name="pushNotifications" />
                    <label htmlFor="everything">Everything</label>
                </div>

                <div className='flex flex-row gap-2'>
                    <input onChange={changeHandler} value="Same as Email" type="radio" id="sameEmail" name="pushNotifications" />
                    <label htmlFor="sameEmail">Same as Email</label>
                </div>

                <div className='flex flex-row gap-2'>
                    <input onChange={changeHandler} value="No Notifications" type="radio" id="noNotifications" name="pushNotifications" />
                    <label htmlFor="noNotifications">No Push Notifications</label>
                </div>
            </div>


            <button className='bg-blue-600 text-white font-normal hover:bg-blue-400 w-[10%] rounded-lg'>
                Save
            </button>

        </form>
    )
}

export default Form
