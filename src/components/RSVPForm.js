import React, { useState } from 'react';
import axios from 'axios';

const RSVPForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        attending: '', // 'true' for 'Ja, vi kommer' and 'false' for 'Nei, vi kommer ikke'
        companionName: '',
        dietaryPreferences: '',
        additionalField: '',
    });
    const [errors, setErrors] = useState({});
    const [hasError, setHasError] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Navn is required';
        }
        if (formData.attending !== 'true' && formData.attending !== 'false') {
            errors.attending = 'Vi kommer field is required';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            onSubmit();
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            // Replace with your actual Airtable details
            const personalAccessToken = 'YOUR_AIRTABLE_PERSONAL_ACCESS_TOKEN';
            const baseId = 'YOUR_AIRTABLE_BASE_ID';
            const table = 'RSVP';

            const apiUrl = `https://api.airtable.com/v0/${baseId}/${table}`;
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${personalAccessToken}`,
            };

            const response = await axios.post(apiUrl, { fields: formData }, { headers });

            if (response.status === 200 || response.status === 201) {
                // Handle success or redirect to a thank you page
                console.log('RSVP submitted successfully!');
            } else {
                // Handle non-successful response
                console.error('Error submitting RSVP:', response.statusText);
            }
        } catch (error) {
            // Handle error
            console.error('Error submitting RSVP:', error);
            setHasError(true);
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <div>
                            {hasError && <div>Something went wrong with the RSVPForm.</div>}

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Navn</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && (
                                        <small className="invalid-feedback">{errors.name}</small>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="companionName">Navn på følge</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="companionName"
                                        onChange={(e) => handleChange('companionName', e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Vi kommer</label>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className={`form-check-input ${errors.attending ? 'is-invalid' : ''}`}
                                            name="attending"
                                            value="true"
                                            checked={formData.attending === 'true'}
                                            onChange={handleRadioChange}
                                        />
                                        <label className="form-check-label" htmlFor="attending">
                                            Ja, vi kommer
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className={`form-check-input ${errors.attending ? 'is-invalid' : ''}`}
                                            name="attending"
                                            value="false"
                                            checked={formData.attending === 'false'}
                                            onChange={handleRadioChange}
                                        />
                                        <label className="form-check-label" htmlFor="notAttending">
                                            Nei, vi kommer ikke
                                        </label>
                                    </div>
                                    {errors.attending && (
                                        <small className="invalid-feedback">{errors.attending}</small>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="dietaryPreferences">Matpreferanser</label>
                                    <textarea
                                        className="form-control"
                                        name="dietaryPreferences"
                                        value={formData.dietaryPreferences}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Submit RSVP
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RSVPForm;
