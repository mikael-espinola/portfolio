import emailjs from 'emailjs-com'

type prop = {
  name: string, email: string, whatsapp: string, message: string
}

const sendEmail = ({name, email, whatsapp, message}: prop) => {
    const publicKey = 'vZ6T_502_9DOlU0F-'
    const serviceId = 'service_be0zt9n'
    const templateId = 'template_8psxwan'
    const templateParams = {
      name: name,
      email: email,
      whatsapp: whatsapp,
      message: message,
  };


    emailjs
    .send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("Email sent successfully!", response);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

export default sendEmail