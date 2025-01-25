'use client';
import ImageUpload from '../common/ImageUpload';
import { useActionState, useState } from 'react';
import { SaveFromData } from '../../../app/(dashboard)/fund-raising/create-campaign/submitAction';
import { set } from 'lodash';




const FundRaisingForm = () => {

    const [fieldValue, setFieldValue] = useState();
    const [formState, formAction, isPending] = useActionState(SaveFromData, {});

    return (
        <>
            <form action={formAction} className="submit-an-event"  >

                {formState?.message ? (
                    <div className="alert alert-success">
                        {formState.message}
                    </div>
                ) : null}

                {formState?.errors ? (
                    <div className="alert alert-danger">
                        {JSON.stringify(formState.errors)}
                    </div>
                ) : null}
                <div className="input-group in-1-col pb-2">
                    <label>
                        Title<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <input type="text" placeholder="Enter Event Title" name="title" />
                    {formState.errors?.title && (
                        <span className='errorText'>{formState.errors.title}</span>
                    )}
                </div>

                <div className="input-group in-3-col pb-4">
                    <label>
                        Type<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <select className="form-select" name="type" >
                        <option value="">Select Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    {formState.errors?.title && (
                        <span className='errorText'>{formState.errors.type}</span>
                    )}
                </div>

                <div className="input-group in-3-col pb-4">
                    <label>
                        Category<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <select className="form-select" name="category">
                        <option value="">Select Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    {formState.errors?.title && (
                        <span className='errorText'>{formState.errors.category}</span>
                    )}
                </div>

                {/* Fund Raising Goal Field */}
                <div className="input-group in-3-col pb-4">
                    <label>
                        Fund Raising Goal<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <input type="text" placeholder="Enter Goals" name="FundRaisingGoal" />
                    {formState.errors?.FundRaisingGoal && (
                        <span className='errorText'>{formState.errors.FundRaisingGoal}</span>
                    )}
                </div>


                <div className="input-group in-3-col mb-2 bg-gray">
                    <label>
                        Country Where Funds Will Go<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <select className="form-select" name="country">
                        <option value="">Select Country</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    {formState.errors?.country && (
                        <span className='errorText'>{formState.errors.country}</span>
                    )}
                </div>

                {/* State Field */}
                <div className="input-group in-3-col mb-2">
                    <label>
                        State<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <select className="form-select" name="state">
                        <option value="">Select State</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    {formState.errors?.state && (
                        <span className='errorText'>{formState.errors.state}</span>
                    )}
                </div>

                <div className="input-group in-3-col mb-2">
                    <label>
                        City<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <select className="form-select" name="city">
                        <option value="">Select City</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    {formState.errors?.city && (
                        <span className='errorText'>{formState.errors.city}</span>
                    )}
                </div>

                <div className="input-group in-3-col">
                    <label> Postal Code<span style={{ color: "#ef1d26" }}>*</span> </label>
                    <input type="text" placeholder="Enter Postal Code" name="zip_code" />
                    {formState.errors?.postal_code && (
                        <span className='errorText'>{formState.errors.postal_code}</span>
                    )}
                </div>

                <div className="input-group in-3-col">
                    <label>
                        Launch Date<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <input type="date" name="launch_date" />
                    {formState.errors?.launch_date && (
                        <span className='errorText'>{formState.errors.launch_date}</span>
                    )}
                </div>

                <div className="input-group in-3-col">
                    <label>
                        Your Phone Number<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <input type="number" placeholder="Enter Phone number" name="phone_number" />
                    {formState.errors?.phone_number && (
                        <span className='errorText'>{formState.errors.phone_number}</span>
                    )}
                </div>

                <div className="input-group in-3-col">
                    <label>
                        Who is this Fund Raising For?<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <select className="form-select">
                        <option value="">Some One Else</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>


                <div className="input-group in-3-col">
                    <label>
                        Type The Beneficiary’s Full Name<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <input type="text" placeholder="First Name" name="beneficiary_name" />
                    {formState.errors?.beneficiary_name && (
                        <span className='errorText'>{formState.errors.beneficiary_name}</span>
                    )}
                </div>

                {/* <div className="input-group in-3-col">
                    <label>-<span style={{ color: "#ef1d26" }}>*</span></label>
                    <input type="text" placeholder="Last Name" />
                </div> */}


                <div className="input-group in-1-col desc">
                    <label>
                        Description<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <textarea name="description"></textarea>
                </div>
                <div className="in-1-col img-label">
                    <label> Fund Raising Poster<span style={{ color: "#ef1d26" }}>*</span>              </label>
                    <ImageUpload
                        name="poster"
                        setFieldValue={setFieldValue}
                        multiple={false}
                    />
                    {formState.errors?.poster && (
                        <span className='errorText'>{formState.errors.poster}</span>
                    )}

                </div>


                <div className="in-1-col img-label">
                    <label>
                        Album Photos<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <ImageUpload
                        name="photos"
                        setFieldValue={setFieldValue}
                        multiple={true} />
                    {formState.errors?.photos && (
                        <span className='errorText'>{formState.errors.photos}</span>
                    )}
                </div>

                <div className="main-btn">
                    <button type="button" className="bg-gray">
                        SAVE AS DRAFT
                    </button>
                    <button type="button">
                        PREVIEW
                    </button>
                    <button className="prim" type="submit" disabled={isPending}>
                        {isPending ? <span>Submit...</span> : <span>Submit</span>}
                    </button>
                </div>
            </form>
        </>
    )
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%', // Responsive width
    maxHeight: 400, // Max height for overflow
    maxWidth: 500, // Max width for larger screens
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto', // ya 'scroll'
};
export default FundRaisingForm