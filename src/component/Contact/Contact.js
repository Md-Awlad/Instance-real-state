import React from 'react';

const Contact = () => {
    return (
        <div class="container py-3 min-vh-100 d-flex flex-column">
    <div class="card shadow rounded-3 my-auto">
        <div class="card-header p-3 h4">
            Contact Us
        </div>
        <div class="card-body p-4">
            <form class="row">
                <div class="form-group col-lg-4">
                    <label class="form-control-label" for="form-group-input">Name</label>
                    <input type="text" class="form-control" id="form-group-input" name="name"/>
                </div>
                <div class="form-group col-lg-4">
                    <label class="form-control-label" for="form-group-input">Email</label>
                    <input type="text" class="form-control" id="form-group-input" name="email"/>
                </div>
                <div class="form-group col-lg-4">
                    <label class="form-control-label" for="form-group-input">Purpose of Request</label>
                    <select size="0" class="form-control" name="reason">
                        <option>Appoinment</option>
                        <option>Service</option>
                        <option>Report</option>
                    </select>
                </div>
                <div class="form-group col-lg-12">
                    <label class="form-control-label" for="form-group-input">Notes</label>
                    <textarea class="form-control" id="form-group-input" name="notes" rows="6"></textarea>
                </div>
                <div class="form-group col-lg-12">
                    <button class="button-top float-end mt-2" for="form-group-input">Send</button>
                </div>
            </form>
        </div>
    </div>
</div>
    );
};

export default Contact;