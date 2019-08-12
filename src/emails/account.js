const sgMail = require('@sendgrid/mail')

 
sgMail.setApiKey(process.env.SEND_GRID_API)

const sendWelcomeEmail = (email, name)  => {

sgMail.send({
    to : 'shubhamsawlani2006@gmail.com',
    from : 'shubhamsawlani2006@gmail.com',
    subject : 'Welcome baba',
    text : 'Ho gaya frandsss'
})

}


const sendGoodByeEmail = (email, name)  => {

    sgMail.send({
        to : 'shubhamsawlani2006@gmail.com',
        from : 'shubhamsawlani2006@gmail.com',
        subject : 'Bhag be chutiye',
        text : 'bhak sale'
    })
    
    }


module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}
