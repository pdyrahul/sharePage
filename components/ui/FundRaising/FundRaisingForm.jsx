'use client';
import ImageUpload from '../common/ImageUpload';
import { useActionState, useState } from 'react';
import { SaveFromData } from '../../../app/(dashboard)/fund-raising/create-campaign/submitAction';
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
const FundRaisingForm = () => {

    const [fieldValue, setFieldValue] = useState({});
    const [message, formAction, isPending] = useActionState(SaveFromData, null);
    return (
        <>
            <form className="submit-an-event"  >

                <div className="input-group in-1-col">
                    <label>
                        Title<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <input type="text" placeholder="Enter Event Title" name="title" />
                </div>

                <div className="input-group in-3-col">
                    <label>
                        Type<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <select className="form-select" name="type" >
                        <option value="">Select Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>


                <div className="input-group in-3-col">
                    <label>
                        Category<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <select className="form-select" name="category">
                        <option value="">Select Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                {/* Fund Raising Goal Field */}
                <div className="input-group in-3-col">
                    <label>
                        Fund Raising Goal<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <input type="text" placeholder="Enter Goals" name="FundRaisingGoal" />
                </div>

                {/* Country Field */}
                <div className="input-group in-3-col">
                    <label>
                        Country Where Funds Will Go<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <select className="form-select" name="country">
                        <option value="">Select Country</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                {/* State Field */}
                <div className="input-group in-3-col">
                    <label>
                        State<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <select className="form-select" name="state">
                        <option value="">Select State</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="input-group in-3-col">
                    <label>
                        City<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <select className="form-select" name="city">
                        <option value="">Select City</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="input-group in-3-col">
                    <label>  Postal Code<span style={{ color: "#ef1d26" }}>*</span> </label>
                    <input type="text" placeholder="Enter Postal Code" name="zip_code" />
                </div>

                <div className="input-group in-3-col">
                    <label>
                        Launch Date<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <input type="date" name="launch_date" />
                </div>

                <div className="input-group in-3-col">
                    <label>
                        Your Phone Number<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <input type="number" placeholder="Enter Phone number" name="phone_number" />
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
                </div>


                <div className="in-1-col img-label">
                    <label>
                        Album Photos<span style={{ color: "#ef1d26" }}>*</span>
                    </label>
                    <ImageUpload
                        name="photos"
                        setFieldValue={setFieldValue}
                        multiple={true} />
                </div>

                <div className="main-btn">
                    <button type="button" className="bg-gray">
                        SAVE AS DRAFT
                    </button>
                    <button type="button">
                        PREVIEW
                    </button>
                    <button className="prim" type="submit" formAction={formAction}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default FundRaisingForm