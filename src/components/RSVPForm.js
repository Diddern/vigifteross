import React, { useState } from 'react';
import axios from 'axios';

const RSVPForm = () => {
    const [formData, setFormData] = useState({
        navn: '',
        kommer: 'true', // 'true' for 'Ja, vi kommer' and 'false' for 'Nei, vi kommer ikke'
        følge: '',
        matpreferanser: '',
        email: '',

    });
    const [errors, setErrors] = useState({});
    const [hasError, setHasError] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // State to track submit status

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.navn.trim()) {
            errors.navn = 'Navn er påkrevd';
        }
        if(!formData.email.trim()) {
            errors.email = "E-post er påkrevd"
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handleSubmit = (e) => {
        const isValid = validateForm();
        if (isValid) {
            onSubmit(e);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('submitting');

        try {
            const personalAccessToken = process.env.REACT_APP_AIRTABLE_TOKEN;
            const baseId = process.env.REACT_APP_AIRTABLE_BASE_ID;

            if (!personalAccessToken || !baseId) {
                console.error('Error: Missing environment variables. Please make sure AIRTABLE_TOKEN and AIRTABLE_BASE_ID are set.');
                process.exit(1);
            }
            const table = 'tblsjJ8NrR5dMPLam';
            const apiUrl = `https://api.airtable.com/v0/${baseId}/${table}`;
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${personalAccessToken}`,
            };

            const kommerValue = formData.kommer === 'true';

            // Map form field names to Airtable field names
            const mappedFormData = {
                'Navn': formData.navn,
                'Navn på følge': formData.følge,
                'Kommer': kommerValue,
                'Matpreferanser': formData.matpreferanser,
                'Epost': formData.email
            };

            const response = await axios.post(apiUrl, { fields: mappedFormData }, { headers });


            if (response.status === 200 || response.status === 201) {
                setSubmitStatus('success');
                console.log('Takk for at du meldte fra! Vi gleder oss masse ❤️');
            } else {
                // Handle non-successful response
                console.error('Feil ved innsending:', response.statusText);
                setSubmitStatus('error');
            }

        } catch (error) {
            // Handle error
            console.error('Feil ved innsending:', error);
            setHasError(true);
            setSubmitStatus('error');
        }
    };

    const submitButtonText = submitStatus === 'success' ? 'Takk, vi gleder oss ❤️' : 'Send inn';
    let submitButtonStatus = submitStatus === 'submitting' || submitStatus === 'success'

    return (
        <div id="rsvpFrom" className="container mt-5">
            <h3>RSVP</h3>
            <p>Gi oss beskjed om du kommer</p>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                {hasError && <div>Oh no! Noe gikk galt ved innsending, vår beste IT-utvikler er på saken.</div>}

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="navn">Navn:</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.navn ? 'is-invalid' : ''}`}
                                            name="navn"
                                            value={formData.navn}
                                            onChange={handleChange}
                                        />
                                        {errors.name && (
                                            <small className="invalid-feedback">{errors.navn}</small>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="følge">Navn på følge:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="følge"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Kan du/dere komme?</label>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className={`form-check-input ${errors.kommer ? 'is-invalid' : ''}`}
                                                name="kommer"
                                                checked={formData.kommer === 'true'}
                                                onChange={(e) => handleChange({
                                                    target: {
                                                        name: 'kommer',
                                                        value: e.target.checked.toString()
                                                    }
                                                })}
                                            />
                                            <label className="form-check-label" htmlFor="kommer">Ja 🤩🎉🤩</label>
                                        </div>
                                        {errors.kommer && (
                                            <small className="invalid-feedback">{errors.kommer}</small>
                                        )}
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="dietaryPreferences">Matpreferanser</label>
                                        <textarea
                                            className="form-control"
                                            name="matpreferanser"
                                            value={formData.matpreferanser}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">E-postadresse</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button type="submit" disabled={submitButtonStatus} className="btn btn-primary">{submitButtonText}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RSVPForm;
