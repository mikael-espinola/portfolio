import emailjs from 'emailjs-com'

type prop = {
  name: string, email: string, whatsapp: string, message: string
}

const sendEmail = ({name, email, whatsapp, message}: prop) => {
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_EMAIL_KEY
    const serviceId =  process.env.NEXT_PUBLIC_SERVICE_EMAIL_ID
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_EMAIL_ID
    const templateParams = {
      name: name,
      email: email,
      whatsapp: whatsapp,
      message: message,
  };

  if(publicKey && serviceId && templateId){
    
    emailjs
    .send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("Email sent successfully!", response);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
  }
}

export default sendEmail