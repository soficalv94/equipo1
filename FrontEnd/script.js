document.getElementById('fraud-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {
        income: parseFloat(document.getElementById('income').value),
        name_email_similarity: parseFloat(document.getElementById('name_email_similarity').value),
        prev_address_months_count: parseInt(document.getElementById('prev_address_months_count').value),
        current_address_months_count: parseInt(document.getElementById('current_address_months_count').value),
        customer_age: parseInt(document.getElementById('customer_age').value),
        days_since_request: parseInt(document.getElementById('days_since_request').value),
        intended_balcon_amount: parseInt(document.getElementById('intended_balcon_amount').value),
        payment_type: parseInt(document.getElementById('payment_type').value),
        zip_count_4w: parseInt(document.getElementById('zip_count_4w').value),
        velocity_6h: parseInt(document.getElementById('velocity_6h').value),
        velocity_24h: parseInt(document.getElementById('velocity_24h').value),
        velocity_4w: parseInt(document.getElementById('velocity_4w').value),
        bank_branch_count_8w: parseInt(document.getElementById('bank_branch_count_8w').value),
        date_of_birth_distinct_emails_4w: parseInt(document.getElementById('date_of_birth_distinct_emails_4w').value),
        employment_status: parseInt(document.getElementById('employment_status').value),
        credit_risk_score: parseInt(document.getElementById('credit_risk_score').value),
        email_is_free: document.getElementById('email_is_free').value,
        housing_status: parseInt(document.getElementById('housing_status').value),
        phone_home_valid: document.getElementById('phone_home_valid').value,
        phone_mobile_valid: document.getElementById('phone_mobile_valid').value,
        bank_months_count: parseInt(document.getElementById('bank_months_count').value),
        has_other_cards: document.getElementById('has_other_cards').value,
        proposed_credit_limit: parseInt(document.getElementById('proposed_credit_limit').value),
        foreign_request: document.getElementById('foreign_request').value,
        source: document.getElementById('source').value,
        session_length_in_minutes: parseInt(document.getElementById('session_length_in_minutes').value),
        device_os: document.getElementById('device_os').value,
        keep_alive_session: document.getElementById('keep_alive_session').value,
        device_distinct_emails_8w: parseInt(document.getElementById('device_distinct_emails_8w').value),
        device_fraud_count: parseInt(document.getElementById('device_fraud_count').value),
        month: parseInt(document.getElementById('month').value)
    };

    // ---------> ACA VA LA LLAMADA A LA API <---------
    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('result').innerText = result.fraud_bool ? 'Fraudulenta 👎' : 'Legítima 👍';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Error en la predicción 😭';
    });
});

document.getElementById('fill-random').addEventListener('click', function() {
    document.getElementById('income').value = (Math.random()).toFixed(2);
    document.getElementById('name_email_similarity').value = (Math.random()).toFixed(2);
    document.getElementById('prev_address_months_count').value = Math.floor(Math.random() * 381) - 1;
    document.getElementById('current_address_months_count').value = Math.floor(Math.random() * 407) - 1;
    document.getElementById('customer_age').value = Math.floor(Math.random() * 5) * 10 + 20;
    document.getElementById('days_since_request').value = Math.floor(Math.random() * 79);
    document.getElementById('intended_balcon_amount').value = Math.floor(Math.random() * 109) - 1;
    document.getElementById('payment_type').value = Math.floor(Math.random() * 5) + 1;
    document.getElementById('zip_count_4w').value = Math.floor(Math.random() * 5767) + 1;
    document.getElementById('velocity_6h').value = Math.floor(Math.random() * 100);
    document.getElementById('velocity_24h').value = Math.floor(Math.random() * 100);
    document.getElementById('velocity_4w').value = Math.floor(Math.random() * 100);
    document.getElementById('bank_branch_count_8w').value = Math.floor(Math.random() * 2522);
    document.getElementById('date_of_birth_distinct_emails_4w').value = Math.floor(Math.random() * 43);
    document.getElementById('employment_status').value = Math.floor(Math.random() * 7) + 1;
    document.getElementById('credit_risk_score').value = Math.floor(Math.random() * 564) - 176;
    document.getElementById('email_is_free').value = Math.random() < 0.5 ? 'yes' : 'no';
    document.getElementById('housing_status').value = Math.floor(Math.random() * 7) + 1;
    document.getElementById('phone_home_valid').value = Math.random() < 0.5 ? 'yes' : 'no';
    document.getElementById('phone_mobile_valid').value = Math.random() < 0.5 ? 'yes' : 'no';
    document.getElementById('bank_months_count').value = Math.floor(Math.random() * 32) - 1;
    document.getElementById('has_other_cards').value = Math.random() < 0.5 ? 'yes' : 'no';
    document.getElementById('proposed_credit_limit').value = Math.floor(Math.random() * 1801) + 200;
    document.getElementById('foreign_request').value = Math.random() < 0.5 ? 'yes' : 'no';
    document.getElementById('source').value = Math.random() < 0.5 ? 'internet' : 'app';
    document.getElementById('session_length_in_minutes').value = Math.floor(Math.random() * 108) - 1;
    document.getElementById('device_os').value = ['Windows', 'Macintox', 'Linux', 'X11', 'Otro'][Math.floor(Math.random() * 5)];
    document.getElementById('keep_alive_session').value = Math.random() < 0.5 ? 'yes' : 'no';
    document.getElementById('device_distinct_emails_8w').value = Math.floor(Math.random() * 4);
    document.getElementById('device_fraud_count').value = Math.floor(Math.random() * 2);
    document.getElementById('month').value = Math.floor(Math.random() * 8);
});
