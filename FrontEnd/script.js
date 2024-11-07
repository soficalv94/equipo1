document.getElementById('fraud-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const payment_type = parseInt(document.getElementById('payment_type').value);
    let AA = 0, AB = 0, AC = 0, AD = 0, AE = 0;
    const employment_status= parseInt(document.getElementById('employment_status').value);
    let CA = 0, CB = 0, CC = 0, CD = 0, CE = 0, CF = 0, CG = 0;
    const housing_status= parseInt(document.getElementById('housing_status').value);
    let BA = 0, BB = 0, BC = 0, BD = 0, BE = 0, BF = 0, BG = 0;
    const source=document.getElementById('source').value;
    let INTERNET = 0, TELEAPP = 0;
    const device_os= document.getElementById('device_os').value;
    let linux = 0, macintosh = 0, other = 0, windows = 0, x11 = 0;

    const updatePaymentFlags = (payment_type) => {
        AA= 0;
        AB= 0;
        AC= 0;
        AD= 0;
        AE= 0;
    
        switch (payment_type) {
        case 1:
            AA = 1;
            break;
        case 2:
            AB = 1;
            break;
        case 3:
            AC = 1;
            break;
        case 4:
            AD = 1;
            break;
        case 5:
            AE = 1;
            break;
        default:
            console.warn('Tipo de pago inválido');
        };
    };

    const updateEmploymentFlags = (employment_status) => {
        CA=0;
        CB=0;
        CC=0;
        CD=0;
        CE=0;
        CF=0;
        CG=0;
    
        switch (employment_status) {
        case 1:
            CA = 1;
            break;
        case 2:
            CB = 1;
            break;
        case 3:
            CC = 1;
            break;
        case 4:
            CD = 1;
            break;
        case 5:
            CE = 1;
            break;
        case 6:
            CF = 1;
            break;
        case 7:
            CG = 1;
            break;
        default:
            console.warn('Tipo de pago inválido');
        };
    };

    const updateHousingFlags = (housing_status) => {
        BA=0;
        BB=0;
        BC=0;
        BD=0;
        BE=0;
        BF=0;
        BG=0;
    
        switch (housing_status) {
        case 1:
            BA = 1;
            break;
        case 2:
            BB = 1;
            break;
        case 3:
            BC = 1;
            break;
        case 4:
            BD = 1;
            break;
        case 5:
            BE = 1;
            break;
        case 6:
            BF = 1;
            break;
        case 7:
            BG = 1;
            break;
        default:
            console.warn('Tipo de pago inválido');
        };
    };

    const updateSourceFlags = (source) => {
        INTERNET=0;
        TELEAPP=0;
    
        switch (Number(source)) {
        case 1:
            INTERNET = 1;
            break;
        case 2:
            TELEAPP = 1;
            break;
        default:
            console.warn('Tipo de pago inválido');
        };
    };

    const updateDeviceFlags = (device_os) => {
        linux=0;
        macintosh=0;
        other=0;
        windows=0;
        x11=0;

        switch (Number(device_os)) {
        case 1:
            linux = 1;
            break;
        case 2:
            macintosh = 1;
            break;
        case 3:
            other = 1;
            break;
        case 4:
            windows = 1;
            break;
        case 5:
            x11 = 1;
            break;
        default:
            console.warn('Sistema operativo no reconocido');
        };
    };

    updatePaymentFlags(payment_type);
    updateEmploymentFlags(employment_status);
    updateHousingFlags(housing_status);
    updateSourceFlags(source);
    updateDeviceFlags(device_os);

    const data = {
        income: parseFloat(document.getElementById('income').value),
        name_email_similarity: parseFloat(document.getElementById('name_email_similarity').value),
        prev_address_months_count: parseInt(document.getElementById('prev_address_months_count').value),
        current_address_months_count: parseInt(document.getElementById('current_address_months_count').value),
        customer_age: parseInt(document.getElementById('customer_age').value),
        days_since_request: parseInt(document.getElementById('days_since_request').value),
        intended_balcon_amount: parseInt(document.getElementById('intended_balcon_amount').value),
        zip_count_4w: parseInt(document.getElementById('zip_count_4w').value),
        velocity_6h: parseInt(document.getElementById('velocity_6h').value),
        velocity_24h: parseInt(document.getElementById('velocity_24h').value),
        velocity_4w: parseInt(document.getElementById('velocity_4w').value),
        bank_branch_count_8w: parseInt(document.getElementById('bank_branch_count_8w').value),
        date_of_birth_distinct_emails_4w: parseInt(document.getElementById('date_of_birth_distinct_emails_4w').value),
        credit_risk_score: parseInt(document.getElementById('credit_risk_score').value),
        email_is_free: document.getElementById('email_is_free').value === 'true',
        phone_home_valid: document.getElementById('phone_home_valid').value === 'true',
        phone_mobile_valid: document.getElementById('phone_mobile_valid').value === 'true',
        bank_months_count: parseInt(document.getElementById('bank_months_count').value),
        has_other_cards: document.getElementById('has_other_cards').value === 'true',
        proposed_credit_limit: parseInt(document.getElementById('proposed_credit_limit').value),
        foreign_request: document.getElementById('foreign_request').value === 'true',
        session_length_in_minutes: parseInt(document.getElementById('session_length_in_minutes').value),
        keep_alive_session: document.getElementById('keep_alive_session').value === 'true',
        device_distinct_emails_8w: parseInt(document.getElementById('device_distinct_emails_8w').value),
        month: parseInt(document.getElementById('month').value),
        payment_type_AA: AA,
        payment_type_AB: AB,
        payment_type_AC: AC,
        payment_type_AD: AD,
        payment_type_AE: AE,
        employment_status_CA:CA,
        employment_status_CB:CB,
        employment_status_CC:CC,
        employment_status_CD:CD,
        employment_status_CE:CE,
        employment_status_CF:CF,
        employment_status_CG:CG,
        housing_status_BA:1,
        housing_status_BB:0,
        housing_status_BC:0,
        housing_status_BD:0,
        housing_status_BE:0,
        housing_status_BF:0,
        housing_status_BG:0,
        source_INTERNET:1,
        source_TELEAPP:0,
        device_os_linux:1,
        device_os_macintosh:0,
        device_os_other:0,
        device_os_windows:0,
        device_os_x11:0,
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
        document.getElementById('result').innerText = result.fraudulent ? 'Fraudulenta 👎' : 'Legítima 👍';
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
    document.getElementById('source').value  = Math.floor(Math.random() * 2) + 1;
    document.getElementById('session_length_in_minutes').value = Math.floor(Math.random() * 108) - 1;
    document.getElementById('device_os').value  = Math.floor(Math.random() * 5) + 1;
    document.getElementById('keep_alive_session').value = Math.random() < 0.5 ? 'yes' : 'no';
    document.getElementById('device_distinct_emails_8w').value = Math.floor(Math.random() * 4);
    document.getElementById('month').value = Math.floor(Math.random() * 8);
});