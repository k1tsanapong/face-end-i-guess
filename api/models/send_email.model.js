const send_email_to_patient = async (data) =>
{
    console.log('now model');

    let results = data.email.split(",");

    console.log(results);

    return JSON.stringify({ status: 200, error: null, response: results });
}

module.exports =
{
    send_email_to_patient
}
